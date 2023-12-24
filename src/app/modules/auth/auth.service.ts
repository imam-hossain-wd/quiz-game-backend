import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../config';
import { Secret } from 'jsonwebtoken';
import { ILoginUser, ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';

const createUser = async (data: User): Promise<User> => {

  const isUserExist = await prisma.user.findFirst({
    where: {
      email:data.email,
    },
  });

  if (isUserExist) {
    throw new ApiError(httpStatus.FOUND, 'User is already exist');
  }
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const loginUser = async (data: ILoginUser): Promise<ILoginUserResponse>=> {
  const { email, password } = data;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

;
  if(!isUserExist){
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (isUserExist && isUserExist?.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const id = isUserExist?.id;
  const role = isUserExist?.role;

  const accessToken = jwtHelpers.createToken(
    { id, role },
    config.jwt_secret as Secret,
    config.jwt_expire_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { id, role },
    config.jwt_refresh_secret as Secret,
    config.jwt_refresh_expire_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};


const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {

  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt_refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }

  console.log(verifiedToken, 'verified token');

  const { id, role} = verifiedToken;


  const isUserExist = await prisma.user.findFirst({
    where: {
      id
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const newAccessToken = jwtHelpers.createToken(
    {
     id,
    role,
    },
    config.jwt_secret as Secret,
    config.jwt_expire_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const authService = {
  createUser,
  loginUser,
  refreshToken
};
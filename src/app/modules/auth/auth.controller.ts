import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { authService } from './auth.service';
import config from '../../config';
import {IRefreshTokenResponse } from './auth.interface';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await authService.createUser(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user create successfully',
    data: result,
  });
});
const loginUser: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await authService.loginUser(data);

  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User signin successfully!',
    token: others.accessToken
  })
});

const refreshToken:RequestHandler = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = await authService.refreshToken(refreshToken);

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);
  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'get refresh token successfully !',
    data: result,
  });
});


export const authController = {
  createUser,
  loginUser,
  refreshToken
};
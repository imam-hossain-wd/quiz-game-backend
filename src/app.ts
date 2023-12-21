/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import ApiError from './errors/ApiError';
import { jwtHelpers } from './helpers/jwtHelpers';
import config from './app/config';
import { Secret } from 'jsonwebtoken';
import prisma from './shared/prisma';
import sendResponse from './shared/sendResponse';


const app: Application = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router)
app.use(globalErrorHandler)


app.use('/api/v1/profile',async (req: Request, res: Response, next: NextFunction) => {
try{  

  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  const user = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const result = await prisma.user.findUnique({
    where:{
      id:user.id
    }
  })
  const { ...allData}= result ;
  const {id, ...otherData}= allData

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Profile data retrived successfully',
    data: otherData,
  });
}
catch(error){
  next(error)
}
});


app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'welcome to our book catalog server',
  });
  next();
});

export default app;

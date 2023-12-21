import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { userService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
  const result = await userService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user retrived successfully',
    data: result,
  });
});
const getSingleUser: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.getSingleUser(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single user retrived successfully',
    data: result,
  });
});
const updateUser: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const result = await userService.updateUser(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user updated successfully',
    data: result,
  });
});
const deleteUser: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.deleteUser(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user delete successfully',
    data: result,
  });
});

export const userController = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
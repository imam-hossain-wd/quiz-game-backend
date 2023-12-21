import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validationRequest";
import { AuthValidation } from "./auth.validation";


const router = Router();

router.post('/signup',
validateRequest(AuthValidation.createUserZodSchema),
authController.createUser);

router.post('/login',
validateRequest(AuthValidation.loginUserZodSchema),
authController.loginUser)

router.post(
    '/refresh-token',
    validateRequest(AuthValidation.refreshTokenZodSchema),
    authController.refreshToken
  );
  

export const authRoutes = router;
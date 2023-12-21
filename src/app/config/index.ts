import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt_secret:process.env.JWT_SECRET,
  jwt_expire_in:process.env.JWT_EXPIRES_IN,
  jwt_refresh_secret:process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expire_in:process.env.JWT_REFRESH_EXPIRES_IN,
};
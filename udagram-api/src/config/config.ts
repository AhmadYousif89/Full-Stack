import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `udacity`,
  password: `123`,
  database: `postgres`,
  port: 5432,
  host: `127.0.0.1`,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: `JWT_SECRET`,
  },
};

/* eslint-disable @typescript-eslint/camelcase */
import * as dotenv from "dotenv";
dotenv.config();
// configuration to connect with aws db
export const config = {
  username: `udacity`,
  password: "123",
  database: "udagram",
  port: 5432,
  host: "localhost",
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: "http://localhost:8080/",
  jwt: {
    secret: "123",
  },
};

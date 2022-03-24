import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `postgres`,
  password: `udacity123`,
  database: `postgres`,
  port: 5432,
  host: `udacity.c2sd9ek0wmus.us-east-1.rds.amazonaws.com`,
  dialect: "postgres",
  // aws_region: process.env.AWS_REGION,
  aws_region: "us-east-1",
  // aws_profile: process.env.AWS_PROFILE,
  aws_profile: "default",
  // aws_media_bucket: process.env.AWS_BUCKET,
  aws_media_bucket: "http://x1-x2-x3.s3-website-us-east-1.amazonaws.com/",
  // url: process.env.URL,
  url: `http://udagram-api.eba-sfwnzsxm.us-east-1.elasticbeanstalk.com/`,
  jwt: {
    secret: `JWT_SECRET`,
  },
};

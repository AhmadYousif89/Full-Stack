- Follow this steps in order to deploy the application on AWS:

  1. first navigate to the application backend folder if you are in the root directory using this command `cd udagram-api`
  2. create an elastic-beanstalk application by running `eb init` this will initiate an eb config.yml file in the backend directory and it will ask you for basic configuration
  3. create application environment by running `eb create <env-name>`
  4. now we can deploy our code by running `eb deploy` and if that didn't work then we might have to explictly use the environment name by running `eb use <application-name>` or `eb deploy <env-name>`

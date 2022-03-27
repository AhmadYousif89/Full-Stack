- Follow this steps in order to deploy the application on AWS:

  - first navigate to the application backend folder if you are in the root directory using this command `cd udagram-api`
  
  - create an elastic-beanstalk application by running `eb init` this will initiate an `.elasticbeanstalk` folder `config.yml` file in the backend directory and it will ask you for basic configuration for your AWS IAM account
  
  - create application environment by running `eb create <env-name>`
  
  - now we can deploy our code by running `eb deploy` and if that didn't work then we might have to explictly use the environment name by running `eb use <application-name>` or `eb deploy <env-name>`

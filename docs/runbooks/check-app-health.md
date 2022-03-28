- Follow this steps in order to check the health of elastic beanstalk application on AWS:

  - connect the EB CLI to the required environment by running `eb use <application-name>`

  - check the health of the environment by running `eb health` this will bring up a table with different information about our server

  - in case the EB health status is not indicating a "OK" status, you can run `eb logs` and this will print out the logs related to the app env in your terminal for further analysis

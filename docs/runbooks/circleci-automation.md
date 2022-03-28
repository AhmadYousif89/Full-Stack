- Follow this steps in order to use CircleCi as a CI/CD pipeline for auto deployment:

  - in our main root project directory we need to create a new folder named `.circleci` and inside it we create `config.yml` file, this the file which will handle our deployment process through circleci

  - now we need to upload our code to a remote repo like `GitHub` for example, you can check out this helpful [link](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github) to do that

  - then we need to register for free account on [circleci website](https://circleci.com/signup/) so that we can enable the automation process by circleci servers

  - now we navigate to the Projects tap inside the circleci UI to make a new pipeline using our project from the github repo, there you can find a button say's `Set Up Project` , now we choose our project and branch name and start deploy process

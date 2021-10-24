# Pipeline Process

The pipeline was build on CircleCI. 
The pipeline process is started with every change in the specified git branch.

The pipeline orbs are install/setup before the main deployment process for the application.
The orbs for Node.js, AWS CLI and Elastic Beanstalk CLI are used.

## Steps in the pipeline
The Pipeline has the following steps after setup:
1. The front-end and back-end dependencies are installed.
2. The front-end and back-end applications are built.
3. The front-end is deployed to a pre-setup AWS S3 bucket using AWS CLI
4. The back-end is deployed to AWS Elastic Beanstalk environment with the Elastic Beanstalk CLI.

After the completion of these steps the appliation is available for users in production
For a diagram of the whole pipeline process have a look at the diagram included called 'pipeline-flow'.


## Environment variables
The required environment variables for the front-end application were added to the circleci environment to be added to the application during the build stage.
# Deploy a Full-stack Applicaiton Project

[![<amexaCree>](https://circleci.com/gh/amexaCree/pipeline-hello-world-udacity/tree/my-deploy.svg?style=svg)](https://circleci.com/gh/amexaCree/pipeline-hello-world-udacity/?branch=my-deploy)

In this project a contact applications frontend and backend is deployed unto AWS services by means of a pipeline built on the CircleCI.com infrastructure.

The final deployed front-end application can be visited here:
http://contactsudacity.s3-website-us-east-1.amazonaws.com/

# Application features

## Front-End Application
The frontend application is built with ReactJs and features a user interface where a list of contacts details are displayed. The user can also add more contacts. The contacts name and email are displayed.

### Deployment Details
The front-end application is hosted on an AWS S3 bucket.

## Back-End Application
The api server application (backend) is a Node.js Express server application and consists of all the endpoint routes needed for indexing, creating and removing contacts. An authorization token in the header in needed to access the endpoints.

### Deployment Details
The back-end application run on ASW Elastic Beanstalk.

### Database Server
The api server interfaces with a postgreSQL database setup on AWS RDS


## CircleCI Pipeline
The project was setup to be deployed automatically on circleci. It involves first an install step, then a build step for both the front-end and back-end applications then finally the front-end and back-end applications are deployed to their respective AWS services for production.

# Further Documentation
The following files are included for further documentation in the 'docs' folder

1. Pipeline process
2. Infrastructure
3. App dependencies
4. Diagrams

Screenshots are provided in a root level folder called 'screenshots'. 

## Author

👤 **Amy Turnah**

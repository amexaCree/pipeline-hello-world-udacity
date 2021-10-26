
# npm script: 
#  chmod +x ./bin/deploy.sh && ./bin/deploy.sh

# old script:
# eb use test5 --region us-east-1

# set environment variables for elastic beanstalk from circleci environemnt variables
eb setenv POSTGRES_DB=$POSTGRES_DB POSTGRES_HOST=$POSTGRES_HOST POSTGRES_PASSWORD=$POSTGRES_PASSWORD POSTGRES_USERNAME=$POSTGRES_USERNAME

# uses .elasticbeanstalk/config.yml file for settings
eb deploy

# check status of application
eb status
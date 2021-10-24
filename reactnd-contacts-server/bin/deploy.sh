
# npm script: chmod +x ./bin/deploy.sh

# eb use test5 --region us-east-1

# uses .elasticbeanstalk/config.yml file for settings
eb deploy test5

# check status of application
eb status
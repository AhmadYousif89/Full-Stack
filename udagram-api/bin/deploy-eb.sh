aws s3api create-bucket --bucket udagram-bknd
aws s3 cp www/deploy-bknd.zip s3://udagram-bknd/deploy-bknd.zip
aws elasticbeanstalk create-application-version --application-name udagram --version-label 12345 --source-bundle S3Bucket="udagram-bknd",S3Key="deploy-bknd.zip"
aws elasticbeanstalk update-environment --application-name udagram --environment-name udagram-env-1 --version-label 12345
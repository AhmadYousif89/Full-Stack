aws s3api create-bucket --bucket udagram-ftnd
aws s3 cp ./www s3://udagram-ftnd/ --recursive --acl public-read 
aws s3 website s3://udagram-ftnd/ --index-document index.html
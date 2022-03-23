aws s3api create-bucket --bucket x1-x2-x3
aws s3 cp --recursive --acl public-read ./www s3://x1-x2-x3/
aws s3 website s3://x1-x2-x3/ --index-document index.html
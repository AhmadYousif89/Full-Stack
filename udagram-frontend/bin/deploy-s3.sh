aws s3api create-bucket --bucket udagram-ftnd
aws s3 cp --recursive --acl public-read ./www s3://udagram-ftnd/
aws s3 website s3://udagram-ftnd/ --index-document index.html
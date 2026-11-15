# AWS Cloud Storage Starter
A student-level infrastructure-as-code portfolio project. The CloudFormation template is available to deploy; no live deployment is claimed by this portfolio.

## What it creates
One S3 bucket with an AWS-generated unique name, SSE-S3 encryption (AES256), versioning, ACLs disabled and all four S3 Block Public Access settings enabled. Retain policies preserve the bucket if the stack is removed or the resource is replaced. No public hosting or IAM users/keys are created.

## Deploy in your own AWS account
Install the AWS CLI, configure an authorised identity and choose your region. AWS usage charges can apply, including storage of retained versions.

```sh
aws cloudformation deploy --template-file template.json --stack-name student-cloud-storage --region ap-southeast-1
aws cloudformation describe-stacks --stack-name student-cloud-storage --query 'Stacks[0].Outputs' --region ap-southeast-1
```

The identity needs permissions to manage the stack and its S3 bucket. Replace YOUR_BUCKET below with the output, not a literal placeholder.

## Verify
```sh
aws s3api get-public-access-block --bucket YOUR_BUCKET
aws s3api get-bucket-encryption --bucket YOUR_BUCKET
aws s3api get-bucket-versioning --bucket YOUR_BUCKET
```
Upload a small text file using `aws s3 cp example.txt s3://YOUR_BUCKET/`, then upload a changed copy with the same name. Use `aws s3api list-object-versions --bucket YOUR_BUCKET` to inspect versions. The AWS console can also show each setting and version.

## Cleanup
Deleting the CloudFormation stack retains the bucket by design. If the data is disposable, delete all object versions and delete markers, then remove the bucket through S3. Retained data continues to use storage.

## Learning goals
Object storage, versioning, private access, encryption, reproducible infrastructure and the difference between a template and a verified deployment. EC2, RDS and CloudWatch are explained as possible extensions, not resources provisioned by this template.

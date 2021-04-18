provider "aws" {
    region = "eu-west-1"
    shared_credentials_file = "~/.aws/credentials"
}

module "vpc" {
    source = "./VPC"
}

module "ec2" {
    source = "./EC2"
    subnet_id = module.vpc.public_subnet_id
}

# module "rds" {
#     source = "./RDS"
#     database_password = var.database_password
#     # subnet_id = module.vpc.private_subnet_id
# }
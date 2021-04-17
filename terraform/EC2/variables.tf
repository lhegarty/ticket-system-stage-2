variable "instance_type" {
    description = "Instance type for EC2 machine"
    type = string
    default = "t2.large"
}

variable "ami" {
    description = "Ubuntu 20.04 AMI ID"
    type = string
    default = "ami-08bac620dc84221eb"
}

 variable "subnet_id" {
    type = string
 }
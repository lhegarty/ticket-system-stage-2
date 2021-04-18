variable "vpc_cidr_block" {
    description = "IPv4 CIDR for VPC"
    type = string
    default = "10.0.0.0/16"
}

variable "vpc_name" {
    description = "Name of VPC"
    type = string
    default = "ticket-system-vpc"
}
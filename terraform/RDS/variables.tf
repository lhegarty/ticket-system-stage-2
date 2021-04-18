variable "username" {
    description = "database username"
    type = string
    default = "root"
}

variable "database_password" {
    description = "database password"
    type = string
    sensitive = true
}

#  variable "subnet_id" {
#     type = string
#  }
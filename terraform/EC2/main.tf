resource "aws_instance" "ec2_jenkins_server" {
  ami = var.ami
  instance_type = var.instance_type
  subnet_id = var.subnet_id
  tags = {
      "Name" = "ec2_jenkins_server"
      Project = "Ticket"
  }
}
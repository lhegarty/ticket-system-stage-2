resource "aws_instance" "ec2_jenkins_server" {
  ami = var.ami
  instance_type = var.instance_type
  tags = {
      "Name" = "ec2_jenkins_server"
      "Project" = "Ticket"
  }
}
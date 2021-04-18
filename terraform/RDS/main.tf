#look into name parameter for database to set default database on creation
resource "aws_db_instance" "default" {
  allocated_storage    = 10
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t3.micro"
  name                 = "ticket"
  username             = var.username
  password             = var.database_password
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
#   subnet_id = var.subnet_id

  tags = {
    Name = "TicketDatabase"
    Project = "Ticket"
  }
}
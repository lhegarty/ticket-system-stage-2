resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr_block

  tags = {
      "Name" = var.vpc_name
      "Project" = "Ticket"
  }
}

resource "aws_subnet" "private" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.2.0/24"

  tags = {
    Name = "private-subnet"
    Project = "Ticket"

  }
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name = "public-subnet"
    Project = "Ticket"
  }
}
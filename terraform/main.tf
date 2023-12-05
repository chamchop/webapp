provider "aws" {
    profile = "chamchop"
    region = "eu-west-2"
}

resource "aws_s3_bucket" "s3bucket" {
    bucket = "${var.name_prefix}-s3.bucket"
}
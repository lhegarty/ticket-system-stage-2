#!/bin/bash

echo $1 $2 $3
kubectl apply -f <(cat $3 | sed "s/db_hostname/$1/" | sed "s/db_password/$2/")
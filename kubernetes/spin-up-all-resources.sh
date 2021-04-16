#!/bin/bash

# create pods
for FILE in *-pod.yaml;
    do
        kubectl apply -f $FILE;
    done

# create ClusterIP services
for FILE in *-clusterip.yaml;
    do
        kubectl apply -f $FILE;
    done

# create LoadBalancer services
for FILE in *-load-balancer.yaml;
    do
        kubectl apply -f $FILE;
    done
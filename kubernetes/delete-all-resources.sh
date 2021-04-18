#!/bin/bash

# delete secrets
for FILE in *-secret.yaml;
    do
        kubectl delete -f $FILE;
    done

# delete pods
for FILE in *-pod.yaml;
    do
        kubectl delete -f $FILE;
    done

# delete ClusterIP services
for FILE in *-clusterip.yaml;
    do
        kubectl delete -f $FILE;
    done

# delete LoadBalancer services
for FILE in *-load-balancer.yaml;
    do
        kubectl delete -f $FILE;
    done
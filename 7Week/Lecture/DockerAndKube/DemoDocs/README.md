# Kubernetes

This demo will host a spring boot application that exposes /hello and /shutdown in order to demonstrate how kubernetes orchestrates containers.

## Minikube

This demo will use minikube to create a single node kubernetes cluster on a virtual machine. IMPORTANT: minikube requires a linux machine with at least 2 cpus. This means that the free tier EC2 is not capable of running minikube for this demo. Additionally, the virtualization driver is the none driver, which runs the machine directly on the host. This means you need to have conntrack installed.

### Setup

The following are dependencies for this demo. Make sure you have installed them:

- git
- Java 8
- Maven
- docker
- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

Note that to avoid having to run docker commands with `sudo`, create a docker group and add your user to it to avoid needing to do this:
```bash
sudo groupadd docker # create the group
sudo usermod -a -G docker $USER # add your user to it
sudo service docker restart # restart the docker daemon
```

or you can run the `install.sh` and it will set up all of the dependencies for you

Once minikube is installed, it can be started with `minikube start --vm-driver=none`. 

## Build Project

In the DockerService/ directory, run `mvn package` to create the DockerService.jar file

## Create Image

In the kubernetes-service/ directory, run `docker build -t dockerservice .`

Now, if needed, you can push the image to your dockerhub account.
```bash
docker login
docker tag image_hash dockerhubusername/dockerservice:latest
docker push dockerhubusername/dockerservice:latest
```

## Create Deployment

Create a kubernetes deployment in a yaml file. `kubernetes-service-deployment.yaml` is already set up for this, but it can be modified as needed.
It creates a deployment called `kubernetes-service-deployment` with a spec of 2 replicas of the `kubernetes-service` image, of which, it is pulling from the `abatson` dockerHub account.
Additionally, kubernetes needs to know when the containers are available, and it will send a GET request to the container to just `/`, however,
Spring boot will not send a 200 response code, so we instead configure the health check to be sent to actuator.

## Get things running

Apply the deployment with `kubectl apply -f kubernetes-service-deployment.yaml`

You can check that it is working with `kubectl get deployments`

Once the containers are up and running, we can expose the containers externally with `kubectl expose deployment kubernetes-service-deployment --name=docker-service --type=NodePort`

Note: We use NodePort since we are using Minikube, and we will actually expose the containers externally through a minikube service. If we were not using minikube, we would likely use LoadBalancer as the type

you can now access the service through your ec2's external ip address plus the port listed on the right when you run `kubectl get service kubernetes-service`

A better way to access your server follows

enable ingress with `minikube addons enable ingress`. this will allow us to make an ingress object that can redirect traffic from external addresses to our different services using path matching.

make ingress using ingress.yaml and command `minikube apply -f ingress.yaml`. Verify the yaml points to the same name of the service you made during the expose command.

## Crash the service

We can use `kubectl get deployments` to see that the kubernetes-service-deployment has 2/2 containers

If we use the url provided from minikube to send a request to /shutdown, we can use ` watch kubectl get deployments` and watch as some of the containers are brought down and then spun back up.

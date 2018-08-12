---
title: Using Docker to Containerize the Website
date: 2018-06-09T16:43:00-05:00
dateFormat: DD MMMM YYYY
description:
  A post describing  the technical aspects of migrating our server to a fully containerized setup
categories: [engineering, website]
tags: [devops, docker, docker-compose, website]
layout: blog-post
author:
  firstName: Austin
  lastName: Varela

metaInfo:
  title: Using Docker to Containerize the Website
---

After the recent initiative to rewrite our official website, it also seemed logical to revamp the underlying infrastructure of our website. The website is now completely containerized as a result, thanks to the lovely docker and docker-compose tools. Now, the website and various aspects of the server itself should be more resilient and much easier to manage. So, what does containerization mean? What is docker? Why did we go through this effort? So let's go over some background.

### What are containers?

You can think of a container as effectively being a lightweight virtual machine (VM). However, there are some very important differences internally.

A virtual machine emulates an entire system, down to the kernel and hardware interface level. This means that every system call gets passed into a virtual kernel which passes calls onto emulated hardware which passes calls into a VM interface which finally passes the call to the 'real' kernel and hardware.  That sounds like quite a bit of overhead, doesn't it? Well, it gets worse! The VM will also contain the full software suite of the operating system it uses like the complete operating system and user-targeted utilities. VMs can very easily end up being a few gigabytes in size. All this makes it unreasonable to use VMs in most production environments.

However, containers cut out a lot of the overhead involved in emulating an environment. This is because its just an operating system virtualization layer, it does not emulate an entire system! Basically, this means that containers share a kernel with the host's operating system. And, since containers are primarily designed for microservices, most container images are specially tailored to cut out all excessive cruft. Additionally, the most popular platform for working with containers is Docker ([https://www.docker.com](https://www.docker.com)). It provides an easy way to build and run containers in addition to its massive ecosystem of pre-built containers.

### Why containerize?

There are a couple of motivations for containerization, in general. These are:

- Guaranteed cross-platform compatibility both for development and usage (since you are only targetting a single platform, within your container, you don't need to worry about platform-related incompatibility issues)
- Streamlined installation (in docker, installing and running a container is as simple as `docker run group/image`)
- Total isolation (unless explicitly defined, containers share nothing with their host machine. Meaning a program can do just about anything it wants without affecting the actual computer it's running on and there is no need to worry about dealing with dependencies/complicated configurations)
- Robust deployments (docker has many tools available to it for container orchestration, making complicated service management extremely simple)
- Easier cross-platform development (you can build your application and deploy it across a wide variety of containers to test for potential platform incompatibilities without the need of multiple OS installations or computers)

Here's a very poignant example of the power of docker: in order to run the new Discord4J server infrastructure, you basically just need to run `docker-compose up`. This one command will: build the main website, launch nginx to deploy the website, startup a Postgres instance, spin up a JIRA and Confluence instance, and start our Jenkins CI. All in a matter of seconds! Now, you could probably manage this with a fairly complex bash script, but the more amazing part is that this can be easily done on _any _machine. Anyone with the credentials to access our private Docker image repository can install and run our entire server backend with this one command, no manual configuration needed!

What's even more amazing is the **orchestration **aspect of this setup. Deployments of microservice-like infrastructure like ours can be done with a few tools like: [kubernetes](https://kubernetes.io), [docker swarm](https://docs.docker.com/engine/swarm/), and [docker-compose](https://docs.docker.com/compose/). Such tools are production-grade software used in many online backends around the web. Kubernetes and docker swarm are particularly popular for deploying and orchestrating containers across multiple computing clusters, while docker-compose is designed for container orchestration in a single node environment (which is why we are using it).

As demonstrated by that earlier, dead simple command to deploy our infrastructure, docker-compose is very powerful. Not only does it manage the simple installation and running of our containers, but it is also used to manage container-to-container interoperability and lifecycles. As a result, our deployed containers can share volumes of data with ease, have their ports exposed to the world, have automated error recovery, and we can have rolling updates. Automated error recovery and rolling updates are strengths specific to using docker in an environment like docker-compose. We are able to (on a per-container basis) define when containers should restart, meaning that if our Jenkins instance crashes for some reason, it will automatically be redeployed with minimal downtime and without affecting any of the other currently running parts of the website (like the user-facing site, our JIRA instance, etc). Additionally, we can hot-swap running images, allowing for rolling updates to only lead to minimal downtime during required maintenance periods.

To simplify updates even more (making the server essentially run itself, with very little manual interaction required), I have built a few scripts which are able to detect container updates via a webhook and automatically redeploy the site near-instantly. These scripts are located in the [flask-webhook](https://github.com/Discord4J/Dockerfiles/blob/master/flask-webhook/) module of our docker meta-repo. Essentially, a locally bound daemon runs on the host machine, along with a custom webhook container. This container listens for updates from a docker webhook, and once received will signal the daemon process to update outdated containers, one-by-one. Even updating the webhook container itself, if needed.

A bonus motivation for the dockerization of our server is that its ease of deployment makes us less bound to a particular cloud hosting service. This is relevant as the current site is hosted on the Google Cloud Platform (GCP). However, we have had quite a few problems with GCP (not trying to condemn the service altogether though). There was at least one instance where our GCP instance crashed, not our software, but the actual instance. On top of that, it was down for over 24 hours without any warning by Google (some digging reveals that it appears to be related to a routine maintenance that occurred at the data center).  Overall, relatively minor, but we were still charged for instance usage during this time! GCP representatives refused to reimburse me for the wasted credits. Additionally, GCP itself is not very competitively priced, there are many cheaper services which offer better hardware per dollar. So we are planning to pick up and leave GCP in favor of a cheaper and more powerful service and having our entire infrastructure containerized makes it trivial to commit to the move and do so with minimal effort.

### Conclusion

So yeah, containerization with Docker is very powerful and I highly recommend everyone at least takes some time to learn a little bit about it. All of our Docker-related stuff (except our actual data) is available here: [https://github.com/Discord4J/Dockerfiles](https://github.com/Discord4J/Dockerfiles). Just note that it makes uses of Docker hub's private repository feature, meaning that you'll need to rebuild the images locally and replace the `austinv11/discord4j:xxx` image coordinates in the docker-compose.yml file to point to your images if you wanna run a local copy of our server.

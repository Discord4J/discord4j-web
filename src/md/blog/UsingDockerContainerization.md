---
title: Using Docker to Containerize the Website
date: 2018-06-09T16:43:00-05:00
dateFormat: DD MMMM YYYY
description: A post describing  the technical aspects of migrating our server to a fully containerized setup
categories: [engineering, website]
tags: [devops, docker, docker-compose, website]
layout: blog-post
author:
  firstName: Austin
  lastName: Varela
extra:
  editor:
    firstName: Kevin
    lastName: Xiao

metaInfo:
  title: Discord4J - Using Docker to Containerize the Website
---

After the recent initiative to rewrite our official website, it also seemed logical to revamp the underlying infrastructure of our website. The website is now completely containerized thanks to the lovely [Docker](https://www.docker.com/why-docker) and [Docker Compose](https://docs.docker.com/compose/) tools. As a result, the website and various aspects of the server itself should be more resilient and much easier to manage. Now, if you are wondering what containerization means, what Docker actually is, and why we bothered to go through this effort, keep on reading!

### What are containers?

You can think of a container as effectively being a lightweight virtual machine (VM). However, there are some very important differences internally.

A VM emulates an entire system, down to the kernel and hardware interface level. This means that every system call gets passed into a virtual kernel, which passes calls onto emulated hardware, which passes calls into a VM interface, which finally passes the call to the 'real' kernel and hardware. That sounds like quite a bit of overhead, doesn't it? Well, it gets worse! The VM also contains the full software suite of the operating system it uses (including the operating system itself), as well as user-targeted utilities. Resultantly, VMs can very easily end up being a few gigabytes in size. All of this makes it unreasonable to use VMs in most production environments.

However, containers cut out a lot of the overhead involved in emulating an environment. This is because its just an operating system virtualization layer, it does not emulate an entire system! Basically, this means that containers share a kernel with the host's operating system. And, since containers are primarily designed for microservices, most container images are specially tailored to cut out all excessive cruft. Additionally, the most popular platform for working with containers is Docker ([https://www.docker.com](https://www.docker.com)). It provides an easy way to build and run containers in addition to its massive ecosystem of pre-built containers.

### Why containerize?

In general, there are a couple of motivations for containerization. These are:

- Guaranteed cross-platform compatibility for both development and usage (since you are only targetting a single platform, within your container, you don't need to worry about platform-related incompatibility issues)
- Easier cross-platform development (you can build your application and deploy it across a wide variety of containers to test for potential platform incompatibilities without the need of multiple OS installations or computers)
- Streamlined installation (in Docker, installing and running a container is as simple as `docker run group/image`)
- Total isolation (unless explicitly defined, containers share nothing with their host machine. Meaning a program can do just about anything it wants without affecting the actual computer it's running on and there is no need to worry about dealing with dependencies/complicated configurations)
- Robust deployments (Docker has many tools available to it for container orchestration, making complicated service management extremely simple)

Here's a very poignant example of the power of Docker: in order to run the new Discord4J server infrastructure, we basically just need to run `docker-compose up`. This one command will: build the main website, launch NGINX to serve the website, startup a PostgreSQL instance, spin up a JIRA and Confluence instance, and enable our continuous integration (CI) pipeline. All in a matter of seconds! Now, anyone could probably manage this with a fairly complex bash script, but the amazing part is that this can be easily done on _any_ machine. Anyone with the credentials to access our private Docker image repository can install and run our entire server backend with this one command, no manual configuration needed!

What's even more amazing is the **orchestration** aspect of this setup. Deployments of microservice-like infrastructures like ours can be done with a few tools like: [Kubernetes](https://kubernetes.io), [Docker Swarm](https://docs.docker.com/engine/swarm/), and [Docker Compose](https://docs.docker.com/compose/). Such tools are production-grade software used in many online backends around the web. Kubernetes and Docker Swarm are particularly popular for deploying and orchestrating containers across multiple computing clusters, while Docker Compose is designed for container orchestration in a single node environment (which is why we are using it).

As demonstrated by that earlier, dead simple command to deploy our infrastructure, Docker Compose is very powerful. Not only does it manage the simple installation and running of our containers, but it is also used to manage container-to-container interoperability and lifecycles. As a result, our deployed containers can share volumes of data with ease, have their ports exposed to the world, have automated error recovery, and we can have rolling updates. Automated error recovery and rolling updates are strengths specific to using Docker in an environment like Docker Compose. We are able to, on a per-container basis, define when containers should restart, meaning that if our CI instance crashes for some reason, it will automatically be redeployed with minimal downtime and without affecting any of the other currently running parts of the website (like the user-facing site, our JIRA instance, etc.). Additionally, we can hot-swap running images, allowing for rolling updates to only lead to minimal downtime during required maintenance periods.

To simplify updates even more (making the server essentially run itself, with very little manual interaction required), we have built a few scripts which are able to detect container updates via a webhook and automatically redeploy the site near-instantly. These scripts are located in the [flask-webhook](https://github.com/Discord4J/Dockerfiles/blob/master/flask-webhook/) module of our docker meta-repo. Essentially, a locally bound daemon runs on the host machine, along with a custom webhook container. This container listens for updates from a Docker webhook, and once received will signal the daemon process to update outdated containers, one-by-one. Even updating the webhook container itself, if needed.

Another motivation for the dockerization of our server is that its ease of deployment makes us less bound to a particular cloud hosting service. This is relevant as the old website was hosted on the Google Cloud Platform (GCP). However, we have had quite a few problems with GCP. There was at least one instance where our GCP instance crashed (not our software, but the actual instance). On top of that, it was down for over 24 hours without any warning by Google (some digging reveals that it appears to be related to a routine maintenance that occurred at the data center). Overall, relatively minor, but we were still charged for instance usage during this time! GCP representatives refused to reimburse us for the wasted credits. Additionally, GCP itself is not very competitively priced, there are many cheaper services which offer better hardware per dollar. Thus, we are planning to leave GCP in favor of a cheaper and more powerful service, and having our entire infrastructure containerized makes it trivial to do so.

### Conclusion

Containerization with Docker is very powerful and we highly recommend everyone to at the very least understand what it does and how it serves its purpose in the real world. All of our Docker-related stuff (except our actual data) is available here: [https://github.com/Discord4J/Dockerfiles](https://github.com/Discord4J/Dockerfiles). Just note that it makes uses of Docker hub's private repository feature, meaning that the images need to be rebuilt locally, with the image coordinates replaced from `austinv11/discord4j:xxx` to something else in the `docker-compose.yml` file, should anyone wish to run a local copy of our server.

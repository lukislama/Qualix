# Overview

This application is a web-based project that uses Java, [Vaadin](https://vaadin.com/), and Spring Boot as the main technologies.
It also uses Python, matplotlib, and pandas for data analysis and visualization.
It is designed to run on Docker containers, which can be deployed locally or on any major cloud provider. It's purpose is to provide missing functionality to
the [LAMP platform](https://docs.lamp.digital/).

The main purpose of this project is to make the life of a person using the LAMP platform to conduct a study easier. Using
this application the study staff can:

- See the participants of a study and their contact information
- Quickly check the data quality of collected data 
- Receive email notifications regarding the data quality
- Generate graphs using collected data

# Building and deployment
## Requirements

Apart from Docker, this project requires the following packages:

 - Maven
 - JDK 17

To install Docker you can use the official [Docker installation guide](https://docs.docker.com/engine/install/).
You can install the packages using your preferred package manager, such as apt, yum, brew, etc.
For example, on Ubuntu, you can run the following commands:

```bash
sudo apt update
sudo apt install maven openjdk-17-jdk
```

## Installation

Once you have the prerequisites ready, you can use the [build_and_run.sh](build_and_run.sh) script that is included in the root folder of this repository.
This script will perform the following tasks:

 - Build the application service from the custom Dockerfile that is included in the root folder of this repository.
The Dockerfile specifies how to create the image, which will contain the Java application, the Python scripts, and the necessary dependencies.
 - Build the database service from the postgres:16.1 image, which is a pre-built image that contains the PostgreSQL database server.
 - Run the application and the database containers, exposing port 8080 to the host machine and linking them with the environment variables. 
 - Launch the application on the container, which will be accessible from your browser at http://localhost:8080.

To run the script, open a terminal window and navigate to the root folder of this repository. Then, execute the following command:

```bash
sudo ./build_and_run.sh
```
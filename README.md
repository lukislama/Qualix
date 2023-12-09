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

Before building and deploying LAMPView, you may want to change some basic settings, such as the login information or
which port to expose.

LAMPView offers two users by default, a basic user *user* and an administrative user *admin*.
The difference is that the administrative user can access the Settings view and the List view containing information
about participants in a given LAMP study. To change the login information from this basic settings you can modify the
[SecurityConfig.java](src/main/java/com/example/application/security/SecurityConfig.java) file.

To change the exposed port, you can modify the [Docker compose](docker-compose.yml) file. If you want LAMPView to be
accessible via the port 5500 for example, you would modify the "ports" section of the Docker compose file like so:

```yaml
ports:
  - "5500:8080"
```

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

# Initial setup
## Connecting to a LAMP server

In order for LAMPView to communicate with a LAMP platform server, you need to enter the credentials for your LAMP server.
You can do this before building and deploying LAMPView by filling in the prepared fields in the
[application.properties](src/main/resources/application.properties) file or after building and deploying in the Settings
tab of the application. If you choose to modify the application properties file, be sure to also set
*lampview.server-set=true* like so:

```properties
lampview.lamp-server-address=YOUR LAMP SERVER ADDRESS
lampview.lamp-access-key=YOUR LAMP ACCESS KEY
lampview.lamp-secret-key=YOUR LAMP SECRET KEY
lampview.lamp-study-id=YOUR LAMP STUDY ID

lampview.server-set=true
```

## Setting up email notifications

LAMPView can send you daily email notifications regarding the quality of gathered data from the previous day. In order to
use this feature you need to use a Google account with 2FA enabled and generate a new *App password*. Instructions on how
to create a Google app password can be found [here](https://support.google.com/accounts/answer/185833?hl=en&sjid=3303992743476717718-EU)
Do NOT use your Google account password. LAMPView will not access any information on your Google account, it will only
use it to send notification emails. Still, it is recommended to create a new Google account if you wish to use this feature.

Same as with the LAMP server credentials, you can enter your Google account information in the
[application.properties](src/main/resources/application.properties) file or in the Settings tab. If you choose to modify
the application properties file, be sure to also set *lampview.email-set=true* like so:

```properties
lampview.google-email-address=YOUR GOOGLE EMAIL ADDRESS
lampview.google-app-password=YOUR GENERATED GOOGLE APP PASSWORD - DO NOT USE YOUR GOOGLE ACCOUNT PASSWORD
lampview.recipient-email-address=EMAIL ADDRESS THAT WILL RECEIVE NOTIFICATIONS

lampview.email-set=true
```





















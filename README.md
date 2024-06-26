# Overview

Qualix is a web-based project that uses Java, [Vaadin](https://vaadin.com/), and Spring Boot as the main technologies.
It also uses Python, matplotlib, and pandas for data analysis and visualization.
It is designed to run on Docker containers, which can be deployed locally or on any major cloud provider. Its purpose is to provide missing functionality to
the [LAMP platform](https://docs.lamp.digital/).

The main purpose of this project is to make the life of a person using the LAMP platform to conduct a study easier. Using
this application the study staff can:

- See the participants of a study and their contact information
- Quickly check the data quality of collected data 
- Receive email notifications regarding the data quality
- Generate graphs using collected data

# Building and deployment

Before building and deploying Qualix, you may want to change some basic settings, such as the login information or
which port to expose.

Qualix offers two users by default, a basic user *user* and an administrative user *admin*. The passwords are the same
as the usernames.
The difference is that the administrative user can access the Settings view and the List view containing information
about participants in a given LAMP study. To change the login information from this basic setting you can modify the
[SecurityConfig.java](src/main/java/com/example/application/security/SecurityConfig.java) file.

To change the exposed port, you can modify the [Docker compose](docker-compose.yml) file. If you want Qualix to be
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

 - Build the application service from the custom [Dockerfile](Dockerfile) that is included in the root folder of this repository.
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

In order for Qualix to communicate with a LAMP server, you need to enter the credentials for your LAMP server.
You can do this before building and deploying Qualix by filling in the prepared fields in the
[application.properties](src/main/resources/application.properties) file, or after building and deploying in the Settings
tab of the application. If you choose to modify the application properties file, be sure to also set
*Qualix.server-set=true* like so:

```properties
Qualix.lamp-server-address=YOUR LAMP SERVER ADDRESS
Qualix.lamp-access-key=YOUR LAMP ACCESS KEY
Qualix.lamp-secret-key=YOUR LAMP SECRET KEY
Qualix.lamp-study-id=YOUR LAMP STUDY ID

Qualix.server-set=true
```

## Setting up email notifications

Qualix can send you daily email notifications regarding the quality of gathered data from the previous day. In order to
use this feature you need to use a Google account with 2FA enabled and generate a new *App password*. Instructions on how
to create a Google app password can be found [here](https://support.google.com/accounts/answer/185833?hl=en&sjid=3303992743476717718-EU).
Do NOT use your Google account password. Qualix will not access any information on your Google account, it will only
use it to send notification emails. Still, it is recommended to create a new Google account if you wish to use this feature.

Same as with the LAMP server credentials, you can enter your Google account information in the
[application.properties](src/main/resources/application.properties) file or in the Settings tab. If you choose to modify
the application properties file, be sure to also set *Qualix.email-set=true* like so:

```properties
Qualix.google-email-address=YOUR GOOGLE EMAIL ADDRESS
Qualix.google-app-password=YOUR GENERATED GOOGLE APP PASSWORD - DO NOT USE YOUR GOOGLE ACCOUNT PASSWORD
Qualix.recipient-email-address=EMAIL ADDRESS THAT WILL RECEIVE NOTIFICATIONS

Qualix.email-set=true
```

# Using Qualix

Here you will find a step-by-step tutorial on how to use Qualix and how to set it up using the GUI part of the application.

After deploying Qualix and connecting to it, you will see a login screen. ![Login screen](screenshots/Qualix%20-%20Login%20screen.png)
Login with an account that has administrative privileges, and you will be greeted with an empty Dashboard view.
![Empty Dashboard view](screenshots/Qualix%20-%20Empty%20Dashboard%20View.png)
Dashboard view is the main view of the application, which will show you information about the quality of collected data
at a glance. 

To navigate Qualix, you can use the menu on the left side of the screen. To log out of Qualix, use the *Log-out* button
on the upper right hand side of the screen. 

Now navigate to the List view by clicking on *List* in the view menu.
![Empty List view](screenshots/Qualix%20-%20Empty%20List%20view.png)
List view is only accessible to an account with administrative access. On this view, personal information about your participants
can be stored. Now click on *Settings*, and we will set up connection to your LAMP server and Google account for sending
notification emails.
![Empty Settings view](screenshots/Qualix%20-%20Empty%20Settings%20view.png)
Settings view can be used to set up connection to your LAMP server, Google account, and for creating a data cache.
The data cache works by downloading data from all participants in a given study from your LAMP server over the last week.
After creating the data cache, Qualix is set up to automatically download the latest data from the previous day,
and to delete data older than 7 days, so that a data buffer of 7 days is always kept. This happens automatically every night.
Note that this will not delete data from your LAMP server, only from the local data cache of Qualix. This data cache
is then used for fast data processing and visualization inside Qualix.

Now we will set the LAMP server settings. Fill in the required information and click on *Save* button under *LAMP server
settings*. Qualix will then try to connect to your LAMP server and if it succeeds, display the following message.
![Settings view - LAMP set](screenshots/Qualix%20-%20Settings%20view%20-%20LAMP%20set.png)
If you wish to test the connection to your LAMP server in the future, you can use the *Test connection* button. Now we
will set up your Google email settings. You can click on the *question mark* button to learn more about Google app passwords.
After filling in your information, click on *Save* under *Google email settings*. Qualix will now try to send a notification
email to the recipient address. If it succeeds, you will receive a notification email that looks like so:

```text
Your email has been set to receive notifications from the Qualix application.
If you think this is a mistake, please contact the study administrators at YOUR GOOGLE EMAIL ADDRESS.
```

And Qualix will display the following message:
![Settings view - email set](screenshots/Qualix%20-%20Settings%20view%20-%20Email%20set.png)
If you have set up your LAMP server settings and successfully connected to it, you can now create the data cache. This
process can take up to multiple hours, if you have a high number of study participants (a few dozen). After clicking *Create
cache*, the process will begin, and you will see a moving progress bar:
![Settings view - building data cache](screenshots/Qualix%20-%20Settings%20view%20-%20building%20data%20cache.png)
The data cache creation process runs on a background thread, so you can get out of the Settings view or even log out of
Qualix and the data cache will still be created in the background. After the data cache is created, you will see a
green line in the progress bar:
![Settings view - data cache built](screenshots/Qualix%20-%20Settings%20view%20-%20data%20cache%20built.png)
All functions of Qualix are now ready to be used. Navigate back to the List view and you will see a table like this:
![List view - before info change](screenshots/Qualix%20-%20List%20view%20-%20before%20info%20change.png)
As you can see, all participants of your study have been loaded in. Since LAMP doesn't store personal information about its
study participants, placeholder information has been generated for each study participant. If you wish to store personal
information of your participants in Qualix, you can do so by changing the placeholder information. Click on a participant
that you want to modify and a new menu will pop up:
![List view - changing info](screenshots/Qualix%20-%20List%20view%20-%20changing%20info.png)
Here you can change the name, email, phone number and study status of a given participant, or delete the participant's
information altogether. After making your changes, click on *Save*. After that, the new information will be saved:
![List view - after info change](screenshots/Qualix%20-%20List%20view%20-%20after%20info%20change.png)
Now navigate to the main Dashboard view.
![Dashboard view - before data check](screenshots/Qualix%20-%20Dashoard%20view%20-%20before%20data%20check.png)
This is what the Dashboard view will look like after first setting up the application. Qualix has downloaded the
participants' ids from your LAMP server and is now checking the data quality from the previous day. After the check is
finished, the Dashboard will look something like this:
![Dashboard view - after data check](screenshots/Qualix%20-%20Dashboard%20view%20-%20after%20data%20check.png)
Qualix is set up to give you information about the participants' data quality at a glance using the "semaphore" system:

- 🟢 -> Latest data arrived in the last 2 hours
- 🟡 -> Latest data arrived in the last 12 hours
- 🔴 -> Latest data arrived more than 12 hours ago
- ⚫ -> no data at all

Try clicking on some participant. A new table will pop up like this:
![Dashboard view - more info](screenshots/Qualix%20-%20Dashboard%20view%20-%20more%20info.png)
This table will show you the history of the data quality for a selected participant. Now let's focus on the last view -
Visualizations:
![Empty Visualizations view](screenshots/Qualix%20-%20Empty%20Visualizations%20view.png)
This view utilizes the data cache function of Qualix to instantly visualize data for a selected participant. If you
pick one of the provided visualization lengths, Qualix will use its cache function to generate a visualization instantly.
If you choose the *Custom* function, Qualix will download the necessary data from the LAMP server, then process them and
then visualize them. This can take some time. It is therefore recommended to choose one of the provided visualization lengths.

Let's visualize data quality from the last day for some participant. Select the *Data_quality* option from the
*Visualization type* menu, a patient you wish to visualize, select *1 day* as the visualization length and click on
*Visualize*:
![Visualizations - data quality visualization](screenshots/Qualix%20-%20Visualizations%20view%20-%20data%20quality%20visualization.png)
You can now scroll the page down to see the full graph:
![Visualizations - full data quality visualization](screenshots/Qualix%20-%20Visualizations%20-%20full%20data%20quality%20visualization.png)
Since the generated graph is inserted as a simple image, you can download it by right-clicking and saving the image.
Let's check another type of visualization. Select *Accelerometer* from the *Visualization type* menu and click on
*Visualize* again. A new graph will be generated below the original one.
![Visualizations - full accelerometer visualization](screenshots/Qualix%20-%20Visualizations%20view%20-%20full%20accelerometer%20visualization.png)
Now let's check the *Custom* visualization length setting. After clicking it a new date time pickers will appear.
Here you will be able to select a custom start and end of the visualization:
![Visualizations - custom date](screenshots/Qualix%20-%20Visualizations%20view%20-%20custom%20vis%20setting%20-%20date.png)
![Visualizations - custom time](screenshots/Qualix%20-%20Visualizations%20view%20-%20custom%20vis%20setting%20-%20time.png)



















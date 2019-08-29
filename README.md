# envolution-client

Envolution is a platform that connects environmental organizations with volunteers striving to make an impact on climate change. 
Based on their geolocation, this PWA matches volunteers with projects that reflect their specific ecological interests. 

## Screenshots
<p align="center">
    <img src="https://i.imgur.com/9ZmaQDt.png" width="600px" />
</p>

## Getting started

This is the front-end repository. The back-end can be found at : https://github.com/jonas-wedemeyer/envolution-server

### Installation

1. Begin by forking this repository, and cloning to your computer. 

 ```bash
   git clone https://github.com/jonas-wedemeyer/envolution-client
 ```
   
2.  Install the necessary dependencies. Navigate to the `client` folder and run:


   ```bash
    npm i
  ```

### To start

To start the frontend, still in the `client` folder, run:

   ```bash
    npm start
  ```
  
This will build the React app, and open it in the browser.

### To access the app

You are able to sign-in as a new user. 

If you'd like to access the application with a pre-generated user profile, after seeding the database (please refer to the back-end repository), enter on the Sign-up page:

  Email: jonas@wedemeyer.com
  Password: qwerty

You will then access the "Submit Profile" page, when you can enter a firstname and lastname of your choosing. The picture is optional.

## Tech Stack

* React Redux
* Hooks
* Styled Components
* JWT
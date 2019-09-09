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
3. Set the environment variables in the `example.env` file and remove the prefix `example` to use it as your `.env` file for development. In order to add the necessary Cloudinary values, create a account at the following [site](https://cloudinary.com/users/register/free). Afterwards follow the steps to create an unsigned upload preset from this [site](https://cloudinary.com/documentation/upload_images#upload_presets). For the Google API key follow this [guide](https://developers.google.com/maps/documentation/javascript/get-api-key).

  ```bash
  REACT_APP_SERVER_BASE_URL=
  REACT_APP_CLOUDINARY_NAME=
  REACT_APP_CLOUDINARY_UPLOAD_PRESET=
  REACT_APP_GOOGLE_API_KEY=
  ```

### To start

To start the frontend, still in the `client` folder, run:

   ```bash
    npm start
  ```
  
This will build the React app, and open it in the browser.

### To access the app

You are able to sign-up as a new user. You will then access the "Submit Profile" page, where you can enter a first and last name of your choosing. The picture is optional.

If you'd like to access the application with a pre-generated user profile, after seeding the database (please refer to the back-end repository), enter on the Sign-in page:

Email: jonas@wedemeyer.com
Password: qwerty

## Tech Stack

* React
* Redux
* Hooks
* Styled Components
* JWT

## Developers 
​
* Coralie Daccord - [GitHub](https://github.com/Coralie19) -[LinkedIn](https://www.linkedin.com/in/coralie-daccord)
* Alexa Schaeffer Quintero - [GitHub](https://github.com/miquintero) - [LinkedIn](https://www.linkedin.com/in/alexa-schaeffer-quintero)
* Jonas Wedemeyer - [GitHub](https://github.com/jonas-wedemeyer) - [LinkedIn](https://www.linkedin.com/in/jonas-wedemeyer)
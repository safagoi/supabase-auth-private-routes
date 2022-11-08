# React & Supabase app with protected routes :lock:

A simple and minimal [ReactJS](https://reactjs.org/") aplication starter template builded from scratch with [Parcel](https://parceljs.org/recipes/react/).
Using [Supabase Auth](https://supabase.com/docs/guides/auth) the app provide a system to protect private routes that can not be accessed without the apropiate session credentials.

## App template features :pencil:
    - Custom AuthProvider and PrivateRoute component
    - Login & SignUp page components which use Supabase functionalities
    - A protected Dashboard page component
    - React router functionalities
    - Parcel to run the local development server and build the aplication
    - SASS stylesheet language configured to use global variables, mixins and nested rules
    
 ## Running the development server :computer: 
 1. Clone the repo to your local machine.
2.  Install the dependencies with `npm install` .
 3. Configure your supabase API keys like enviroment variables in a **.env** file in the root of the project.
 4. Run the development server with `npm start` .

## Build the project :hammer:
You can build the parcel minified project using the script `npm build` and then upload to your server.


# Best-Friend App, your BFF when it comes to travelling

"npm i" then "npm start" to start your app, assuming you have all the API keys in the .env file.
Search locations and it will show Restaurants, Attractions and Hotels near you. 
Make sure you allow Geolocation so that your Friend can be with you wherever you go and you can also filter.
If you want to click the map cards on Google map, click it around the left-center of the image and it will scroll to the side details of that place with links to trip advisor and their website.By default Geolocation will be your devices location, but you can also search other places.

## Sorry to those who do not have the links, as this app has request allowance for external apis, only those who have links will be able to test the app out.

You can clone it and put in your own api keys
https://rapidapi.com/ 
link for Travel Advisor Api and also, Open Weather Api
You have to activate google apis from https://console.cloud.google.com/
and activate "Places Api" and "Maps Javascript Api" and also
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=%REACT_APP_GOOGLE_MAP_API_KEY%"></script> in your index.html file, 
which gives you all the places. Create .env files with REACT_APP_GOOGLE_MAP_API_KEY="your api key here"
REACT_APP_RAPID_TRAVEL_API_KEY="your api key here"
REACT_APP_RAPIDAPI_WEATHER_API_KEY="your api key here
can be in quotes or not, using create-react-app, when creating .env files, you need to start it off with "REACT_APP_" as the start of it so the CRA will pick up the environmental variables
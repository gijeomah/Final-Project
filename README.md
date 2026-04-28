# Final-Project
#Create  my own Weather Dashboard (Objective)
#This Dashboard would collect the date the current location
#The category: Sunny, Windy, rainy - Hourly and Daily/Weekly desgin 
#Have Details: such as humidity and UV index
#Have life index: Pollen, Golf, Running (calculate)
#Input box to query certain locations
#Pin locations 
# Dashboard Parts
#Step 1: Get the API and figure out postions
    ~The API being used: *Here:https://www.weatherapi.com/my/*  or *Here: https://api.weather.gov/*
    ~From the current weather I need to get temp_f, icon, wind_mph, humidity, feelslike_f
    ~From future Forcast I need to get the date,(daily: maxtem_f,mintemp_f,daily_chance_of_rain, daily_chance_of_snow (*for 3 days*))
    ~For Hourly I will get the same thing and include time. 
    ~ async function getData(){
        try{
            const response = await fetch ("htpp....api url{API key??}")
            if (!response.ok){
                throw new Error({response.status});
            }
            const data = await response.json();
            console.log(data);
        }
        catch (error){
            console.error(error)
        }
    }
    getData();
#Step 2: build html
    ~an <p>tag for locations which will be a empty list for rn
    ~ and hourly <p> tag and daily tag as well + and img place holder to embedded and icon. 
    ~Underneath daily/future forcast abrv tags for the 3 of the days displayed + Do the samething for time 
#Step 3: build js
    ~create a seprate index.html with <script> embedded inside that has an <h> tag and input box and submit button with an event listner so the user can click submit this button link to another html pg (the actual weather info which will load the data) *get the input.value from DOM and assign to var* 
    ~create a function get_loaction(input.value){loops through the keys in the dictionary e.g for (let key in data){if (loacate == data[key]){console.log(key,data[key]) & location = data[key] *userobj somehow* }} }
    ~figure out how to loop through currents objs too 

    ~have a class that stores the location time, the current temp and condtion text and icon as properties??? and append them to the web browser?? 
# Requirments
A class, function, loop/if statment, Dom creation, Event listners

# MY RANDO Ideas
    ~An event listner for button which update a locations lst with doc.createlement list. 
    ~Add flights??? API to get weather and flights?? (REJECTED)
    ~create an element list in js tr for locations to store.




-----------------------------------------------------REDACTED---------------------------------------------

#Create  my own multuplayer Draw.io game (Objective)
#Player 1 will get a random generated string: and Draw it out (*Prob need to hide the string in player1/html or css)
#Player 2 will see the drawn out image (Real time) and type in the input of image that they see
#Turns will switch (Somehow....)
#If correct they will have correct sound (state for questions) + If incorrect the state will be false (buzz sound will play) + Pnts will increase by 2
#Which ever user gets to 10 pnts first wins (Winner state will be set to true and image will display with the Players ID + That both players will see.)
# Game Parts 
#Step 1: Set up the html
    ~An input box for both users with an id
    ~An textbox in the DOM to display the player 
    ~An text box that keep track of pnts (Which will be updated from a number and changed to a string)
    ~create and audio element(have an function to run the audio later)
    ~Download audio file
#Step 2:  Figure our how real time communication works + HTML Canvas

#Step 3: Test the string is correct or not (updtate ponits of continue of it doesn't match make this a function that checks the point for example function pnt_calc(question(*input.value*)){
    if question . is correct (loop through the topics and check if it is correct ~ Theres a better way to this but idk rn)
    if it is correct: call the correct state,  if it is false: call the incorrect state

    #figure out how to add classes in a min
})
# MY RANDO Ideas
    ~make a correct incorect awnser class checker thingy + and make the property  
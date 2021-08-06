# UK Air Quality Monitor & Forecast

## About
Air quality is something that affects all of us, every day, regardless of where we live. This web app is built and designed to deliver air quality forecasts from the Transport for London API in an easy to read manner to keep citizens informed. Additionally, it is designed to be enjoyable to view, to keep users coming back and keeping their respitory health and safety in mind.

## Why Air Quality?
As an Australian who has lived through Black Saturday and the disastrous bushfires in 2020, I am well aware of the impacts air quality can have on respitory health, and did my best to distribute resources to my fellow Aussies at the time. While this is something close to my heart, I also wanted to build something for the team at Engage Squared that was substantially different to what they had seen in previous renditions of projects using the Transport for London API. I felt that out of all the ideas I brainstormed for this project, creating an Air Quality Monitor achieved several things:
- It was an idea that was useful to as many people as possible. Even if Londoners don't drive or catch public transport, they are still affected by air quality in their area.
- It's a project that I suspect hasn't been submitted before as a result of this challenge, and I can appreciate that it might be tiring viewing the same map-based projects again and again.
- It was the most flexible project for displaying my creativity and my knowledge of visual communications, both of which I know are valuable assets in my developer skillset.

The TL;DR is - I really hope you find this project genuinely enjoyable!

## Tech Stack
The Air Quality Monitor is created using React (initialised with the create-react-app command). Not only is this the language used at Enagage Squared, but I wanted to show that I can neatly organise my code according to purpose using React components.
Also, everyone loves JavaScript.

The application uses Air Quality forecast data from the Transport For London API, which specifically pulls the current forecast (updated hourly) from http://londonair.org.uk/forecast . The api call grabs both the current day's air quality as well as a forecast for the following day, so Londoners can stay prepared.

## Running the Project Locally
Nothing super fancy here that you need to run the app on your machine - just a copy of this repo and a stable(ish) internet connection! 

If you need instant gratification, you can just view the live version here: TO DO

1. Clone a copy of this repository to your machine
2. Navigate to the london-air-quality folder
3. Run ```yarn install``` - gotta have those dependencies 
4. When you're done installing, run ```yarn start```

Voila!

If you run into any trouble, please feel free to contact me at theosaurus13@gmail.com


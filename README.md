# UK Air Quality Monitor & Forecast

## Table of Contents
  * [About](#about)
  * [Why Air Quality?](#why-air-quality-)
  * [Tech Stack](#tech-stack)
  * [Initial Goals](#initial-goals)
  * [Difficulties and Compromises](#difficulties-and-compromises)
    + [Difficulty: HTML Entities](#difficulty--html-entities)
    + [Difficulty: Keeping It DRY](#difficulty--keeping-it-dry)
    + [Compromise: Background Images](#compromise--background-images)
  * [Running the Project Locally](#running-the-project-locally)
  * [Some Final Thoughts & Thanks](#some-final-thoughts---thanks)

## About
Air quality is something that affects all of us, every day, regardless of where we live. This web app is built and designed to deliver air quality forecasts from the Transport for London API in an easy to read manner to keep citizens informed. Additionally, it is designed to be enjoyable to view, to keep users coming back and keeping their respitory health and safety in mind.

## Why Air Quality?
As an Australian who has lived through Black Saturday and the disastrous bushfires in 2020, I am well aware of the impacts air quality can have on respitory health, and did my best to distribute resources to my fellow Aussies at the time. While this is something close to my heart, I also wanted to build something for the team at Engage Squared that was substantially different to what they had seen in previous renditions of projects using the Transport for London API. I felt that out of all the ideas I brainstormed for this project, creating an Air Quality Monitor achieved several things:
- It was an idea that was useful to as many people as possible. Even if Londoners don't drive or catch public transport, they are still affected by air quality in their area. Additionally, it provides weather information, which also applies to pretty much everyone.
- It's a project that I suspect hasn't been submitted before as a result of this challenge, and I can appreciate that it might be tiring viewing the same map-based projects again and again.
- It was the most flexible project for displaying my creativity and my knowledge of visual communications, both of which I know are valuable assets in my developer skillset.

The TL;DR is - I really hope you find this project genuinely enjoyable!

## Tech Stack
The Air Quality Monitor is created using React (initialised with the create-react-app command). Not only is this the language used at Enagage Squared, but I wanted to show that I can neatly organise my code according to purpose using React components.
I do want to emphasise that I feel my React knowledge is still relatively weak compared to my knowledge in other areas. Particularly, I am still struggling a little with props/state and lifecycle methods. This will be discussed further under "Compromises".

The application uses Air Quality forecast data from the Transport For London API, which specifically pulls the current forecast (updated hourly) from http://londonair.org.uk/forecast . The api call grabs both the current day's air quality as well as a forecast for the following day, so Londoners can stay prepared.

This app is set up to deploy my main branch in the git repository to [Netlify](https://www.netlify.com/), and the live version of the app can be found [here](https://london-air-monitor.netlify.app/).

All of the images used in the styling of this project are royalty-free, sourced from [Unsplash](https://unsplash.com/).

Special shoutout to Sam Herbet's [SVG Loaders](http://samherbert.net/svg-loaders/) and the [React Package Adaptation](https://github.com/ajwann/svg-loaders-react) by github user [ajwann](https://github.com/ajwann).

## Initial Goals
My initial goal for this project was to create something similar to Android's [Froggy Weather App](https://play.google.com/store/apps/details?id=jp.miyavi.androiod.gnws&hl=en_AU&gl=US), using data pulled from the API to conditionally render different items on screen.
- I had planned on using my artistic talents to draw my own set of froggies and conditionally render a different one, depending on the weather, eg if it was raining, the froggy would be holding an umbrella.
- Realising this was way too ambitious, I decided instead I would like to render a different background photo depending on the weather. I kind of did get this working, but eventually had to come to terms with the fact that I don't know enough about State and Lifecycle in React to implement this effectively. Given time to learn, I would still like to go back and make this happen. I may even add froggies in future!
- I did manage to get both the current and future forecasts pulled correctly, however! I was pretty stoked that I managed this despite doubting my abilities initially.

## Difficulties and Compromises
Like in all of my projects, I knew this would come with unique challenges, especially since I had not used this API before and they all tend to have their own quirks. I took these challenges as a learning opportunity and have documented the outcomes below:

### Difficulty: HTML Entities
HTML entities have been the bane of my existence since I made my [Ruby Terminal Trivia App](https://github.com/Theosaurus-Rex/trivia-app) shortly after I started learning to code. However, solving the issues here took a different approach.
- When I initially pulled the weather data to my client, I noticed that there were encoded HTML entities in the mix. Not to worry, there's a package for that! I ended up using the 'html-entities' package, which offers a very nifty decode method.
- Once decoded, I realised some of the decoded entities had returned inline break tags. This obviously isn't something I want rendered as text to the screen. I considered using the 'replace' method to remove them entirely, but the formatting didn't quite look right when I did this. So, I had to find a way to render them as actual break tags. I will admit, I did try to use 'dangerouslySetInnerHTML', which didn't work - but I also figured it probably wasn't a great idea to potentially enable XXS vulnerabilities. After much searching, I came across a package called 'react-string-replace', created by one of the devs at facebook for just such an instance. Implementing this led to my beautifully laid-out data!

### Difficulty: Keeping It DRY
I just want to acknowledge my shortcomings here because I want to be 100% transparent - I am not please with the DRY-ness of this code. It is veritably soggy. This is due in part to my trouble with states and props. I do realise this is a weakness for me as a developer and, regardless of the outcome of this application, I will be working hard post-graduation to go back over these concepts until I am confident using them. 

### Compromise: Background Images
Once again, the conditional rendering idea was thwarted by my lack of knowledge. However, I felt as though a simpler solution was better than none, so I have created a pure CSS slideshow of background images to keep it interesting. I would absolutely love to revisit this in future to implement some cool conditional weather backgrounds!

## Running the Project Locally
Nothing super fancy here that you need to run the app on your machine - just a copy of [this repo](https://github.com/Theosaurus-Rex/london-air-quality) and a stable(ish) internet connection! 

If you need instant gratification, you can just view the live version [HERE](https://london-air-monitor.netlify.app/)

1. Clone a copy of this repository to your machine
2. Navigate to the london-air-quality folder
3. Run ```yarn install``` - gotta have those dependencies 
4. When you're done installing, run ```yarn start```

Voila!

If you run into any trouble, please feel free to contact me at theosaurus13@gmail.com

## Some Final Thoughts & Thanks

First of all - thank you for taking the time to interview me and go through this technical project! I genuinely do appreciate how wonderful everyone at Engage Squared has been so far :)

I know that this little web app isn't anything super impressive, but I hope that it has showcased my ability to throw together an MVP in a short timeframe, as well as showcasing some of my technical and design skills.

Please know that no matter the outcome, I'm super grateful for your time!

![Thank you image](https://media3.giphy.com/media/3xLID1ruJQ0VnLk8wB/giphy.gif?cid=6c09b952z3laoj1nb5xgiy55bzo64fl2vd8a2hey7ejt2wqw&rid=giphy.gif&ct=s)


import React, {useState} from "react";
import Project from "../Project";
import weatherBuddy from '../../assets/images/weather-buddy-full.png';
import moneyTrack from '../../assets/images/money-track.jpg';
import runBuddy from '../../assets/images/run-buddy.png';
import noteTaker from '../../assets/images/note-taker.png';
import dinnerGuru from '../../assets/images/dinner-guru.png';
import passwordApp from '../../assets/images/password-app.png';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Run Buddy',
      link: 'https://riley-foust18.github.io/run-buddy/index.html',
      githubLink: 'https://github.com/riley-foust18/run-buddy', 
      description: 'HTML, CSS',
      image: runBuddy 
    },
    {
      name: 'Weather Buddy',
      link: 'https://riley-foust18.github.io/WeatherBuddy/',
      githubLink: 'https://github.com/riley-foust18/WeatherBuddy', 
      description: 'Portraits of people in my life' ,
      image: weatherBuddy
    },
    {
      name: 'MoneyTrack',
      link: 'https://money-track-rf.herokuapp.com/',
      githubLink: 'https://github.com/riley-foust18/MoneyTrack', 
      description: 'Delicious delicacies' ,
      image: moneyTrack
    },
    {
      name: 'Note Taker',
      link: 'https://shrouded-cliffs-50884.herokuapp.com/',
      githubLink: 'https://github.com/riley-foust18/note-taker', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' ,
      image: noteTaker
    },
    {
      name: 'Dinner Guru',
      link: 'https://detrasmental.github.io/the-dinner-guru/',
      githubLink: 'https://github.com/detrasmental/the-dinner-guru', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' ,
      image: dinnerGuru
    },
    {
      name: 'Password App',
      link: 'https://riley-foust18.github.io/PasswordApp/',
      githubLink: 'https://github.com/riley-foust18/PasswordApp', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' ,
      image: passwordApp
    }
  ]);

  return (
    <div className="portfolio">
      <h2 className="mx-2">Portfolio</h2>
      <Project
        projects={projects}
      ></Project>
    </div>
  );
}

export default Portfolio;
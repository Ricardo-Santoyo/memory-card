import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

let cardsArray = [
  {name:"apple", src:"1f34e.png"}, {name:"grapes", src:"1f347.png"}, {name:"mango", src:"1f96d.png"}, {name:"banana", src:"1f34c.png"}, {name:"melon", src:"1f348.png"},
  {name:"watermelon", src:"1f349.png"}, {name:"orange", src:"1f34a.png"}, {name:"lemon", src:"1f34b.png"}, {name:"pineapple", src:"1f34d.png"},
  {name:"pear", src:"1f350.png"}, {name:"peach", src:"1f351.png"}, {name:"cherries", src:"1f352.png"}, {name:"strawberry", src:"1f353.png"},
  {name:"blueberries", src:"1fad0.png"}, {name:"kiwi", src:"1f95d.png"}, {name:"tomato", src:"1f345.png"}, {name:"olive", src:"1fad2.png"},
  {name:"coconut", src:"1f965.png"}, {name:"avocado", src:"1f951.png"}, {name:"eggplant", src:"1f346.png"}, {name:"potato", src:"1f954.png"},
  {name:"carrot", src:"1f955.png"}, {name:"corn", src:"1f33d.png"}, {name:"hot pepper", src:"1f336.png"}, {name:"bell pepper", src:"1fad1.png"},
  {name:"lettuce", src:"1f96c.png"}, {name:"broccoli", src:"1f966.png"}, {name:"garlic", src:"1f9c4.png"}, {name:"onion", src:"1f9c5.png"},
  {name:"cucumber", src:"1f952.png"}, {name:"peanut", src:"1f95c.png"}, {name:"chestnut", src:"1f330.png"}
];

const link = 'https://twemoji.maxcdn.com/v/latest/72x72/';

let checkArray = [];

function App() {
  const [cards, setCards] = useState(cardsArray.slice(0, 5));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function updateScoreboard() {
    setScore(score + 1);

    if (highScore <= score) {
      setHighScore(score + 1);
    };
  };

  function changeCards() {
    cardsArray.sort(() => 0.5 - Math.random());
    setCards(cardsArray.slice(0, 5));
  };

  function handleLogic(e) {
    let cardName = e.target.textContent;
    if (checkArray.includes(cardName)) {
      setScore(0);
      checkArray = [];
    } else {
      changeCards();
      updateScoreboard(cardName);
      checkArray.push(cardName);
    }
  };

  return (
    <div className="App">
      <Header score={score} highscore={highScore}/>
      <div id="cardContainer">
        <Card name={cards[0].name} src={link + cards[0].src} onClick={handleLogic} />
        <Card name={cards[1].name} src={link + cards[1].src} onClick={handleLogic} />
        <Card name={cards[2].name} src={link + cards[2].src} onClick={handleLogic} />
        <Card name={cards[3].name} src={link + cards[3].src} onClick={handleLogic} />
        <Card name={cards[4].name} src={link + cards[4].src} onClick={handleLogic} />
      </div>
    </div>
  );
}

export default App;

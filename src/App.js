import React from "react"
import './App.css';
import Data from "./Data"
import Card from "./Card"
import trending from "./trending"
import latest from "./Latest"

function createCard1(Data){
  return (
    <>
      <Card 
      img = {Data.img}
      link = {Data.link}
      name = {Data.name}
      type = {Data.type}
      alt = {Data.alt}
      summ = {Data.summ}
      />
    </>
  )
}
function createCard(trending){
  return(
    <>
      <Card
       img = {trending.img}
      link = {trending.link}
      name = {trending.name}
      type = {trending.type}
      alt = {trending.alt}
      summ = {trending.summ} 
      />
    </>
  )
}
function createCard2(latest){
  return(
    <>
      <Card
       img = {latest.img}
      link = {latest.link}
      name = {latest.name}
      type = {latest.type}
      alt = {latest.alt}
      summ = {latest.summ} 
      />
    </>
  )
}

function App() {
  let styles = {
    color : 'white'
  }
  return (
    <>
      <h3 style = {styles}>Trending Shows and Movies- :</h3>
      {trending.map(createCard)}
      <br />
      <h3 style = {styles}>Continue watching for User - :</h3>
      {Data.map(createCard1)}     
      <br />
      <h3 style = {styles}>Latest Releases - :</h3>  
      {latest.map(createCard2)}
    </>
  );
}
export default App;

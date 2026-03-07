import React, { useState, useMemo } from "react"
import './App.css';
import Data from "./Data"
import Card from "./Card"
import SearchBar from "./SearchBar"
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
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");

  const filterBySearch = (items) => {
    let filtered = items;
    if (genreFilter !== "All") {
      filtered = filtered.filter((item) =>
        (item.type || "").toLowerCase().includes(genreFilter.toLowerCase())
      );
    }
    if (!searchQuery.trim()) return filtered;
    const q = searchQuery.toLowerCase();
    return filtered.filter((item) =>
      (item.name || "").toLowerCase().includes(q) ||
      (item.summ || "").toLowerCase().includes(q)
    );
  };

  const filteredTrending = useMemo(() => filterBySearch(trending), [searchQuery, genreFilter]);
  const filteredData = useMemo(() => filterBySearch(Data), [searchQuery, genreFilter]);
  const filteredLatest = useMemo(() => filterBySearch(latest), [searchQuery, genreFilter]);

  let styles = {
    color : 'white'
  }
  return (
    <>
      <SearchBar onSearch={setSearchQuery} onGenreChange={setGenreFilter} placeholder="Search shows and movies..." />
      <h3 style = {styles}>Trending Shows and Movies- :</h3>
      {filteredTrending.map(createCard)}
      <br />
      <h3 style = {styles}>Continue watching for User - :</h3>
      {filteredData.map(createCard1)}     
      <br />
      <h3 style = {styles}>Latest Releases - :</h3>  
      {filteredLatest.map(createCard2)}
    </>
  );
}
export default App;

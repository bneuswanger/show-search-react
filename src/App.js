import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ShowDisplay from './components/ShowDisplay';
import CastDisplay from './components/CastDisplay';
import Card from './components/Card';
import axios from 'axios';

function App() {
  const [searchedFor, setSearchedFor] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const [showResults, setShowResults] = useState([]);
  const [showsLoaded, setShowsLoaded] = useState(false);
  const [chosenShow, setChosenShow] = useState('');

  const [castResults, setCastResults] = useState([]);
  const [castLoaded, setCastLoaded] = useState(false);

  const displayShowsHandler = async (queryTerm) => {
    const cleanQueryTerm = queryTerm.trim();
    setSearchedFor(cleanQueryTerm);
    setCastLoaded(false);
    setIsSearching(true);
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${cleanQueryTerm}`);
    setIsSearching(false);
    setShowResults(res.data);
    setShowsLoaded(true);
  };

  const chosenShowHandler = async (chosenShowData) => {
    setChosenShow(chosenShowData.name);
    setIsSearching(true);
    setShowsLoaded(false);
    const res = await axios.get(`https://api.tvmaze.com/shows/${chosenShowData.id}/cast`);
    setCastResults(res.data);
    setCastLoaded(true);
    setIsSearching(false);
  };

  const backToShows = () => {
    setCastLoaded(false);
    setShowsLoaded(true);
  };

  return (
    <Fragment>
      <Card>
        <Header />
        <SearchForm onShowSearched={displayShowsHandler} />
      </Card>
      {isSearching && <Card>Loading...</Card>}
      {showsLoaded && <ShowDisplay onShowChosen={chosenShowHandler} searchedFor={searchedFor} showsLoaded={showsLoaded} shows={showResults} />}
      {castLoaded && <CastDisplay onHandleBack={backToShows} shows={showResults} show={chosenShow} cast={castResults} />}
    </Fragment>
  );
}

export default App;

//Todo:
// Loading spinner (logic is set up, just need a nice modal or something
// Mobile media query

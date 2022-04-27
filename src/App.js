import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import axios from 'axios';

function App() {
  const [showResults, setShowResults] = useState([]);

  const displayShowsHandler = (queryTerm) => {
    console.log(queryTerm);
  };

  // await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`).then((res) => {
  //   // console.log(res.data);
  //   setShowResults(res.data);
  // });

  return (
    <Fragment>
      <Header />
      <SearchForm onShowSearched={displayShowsHandler} />
    </Fragment>
  );
}

export default App;

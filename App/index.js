import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from 'src/components/Header';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import More from 'src/components/More';

import './style.scss';

const App = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('Bienvenue, veuillez faire une recherche');
  const [page, setPage] = useState(1);
  const [messageIsVisible, setMessageIsVisible] = useState(true);

  const baseURL = 'https://api.github.com';

  useEffect(() => {
    setMessageIsVisible(true);
    const timeoutId = setTimeout(() => {
      setMessageIsVisible(false);
    }, 3000);

    const commentNettoyerMontimeout = () => {
      clearTimeout(timeoutId);
    };
    return commentNettoyerMontimeout;
  }, [message]);

  const doSearch = () => {
    setIsLoading(true);
    setMessage('Veuillez patienter');
    setQuery(search);
    setPage(1);
    axios.get('/search/repositories?', {
      baseURL,
      params: {
        q: search,
        sort: 'stars',
        order: 'desc',
        page: 1,
        per_page: 12,
      },
    })
      .then((response) => {
        setSearch('');
        setRepos(response.data.items);
        setMessage(`La recherche "${search}" a donné ${response.data.total_count} résultats`);
      })
      .catch((error) => {
        console.error('error', error);
        setMessage('Une erreur s\'est produite, veuillez recommencer');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    setIsLoading(true);
    axios.get('/search/repositories?', {
      baseURL,
      params: {
        q: query,
        sort: 'stars',
        order: 'desc',
        page: newPage,
        per_page: 12,
      },
    })
      .then((response) => {
        setRepos([
          ...repos,
          ...response.data.items,
        ]);
      })
      .catch((error) => {
        console.error('error', error);
        setMessage('Une erreur s\'est produite, veuillez recommencer');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="app">
      <Header
        value={search}
        changeValue={setSearch}
        doSearch={doSearch}
        isLoading={isLoading}
      />
      {messageIsVisible && <Message content={message} />}
      <ReposResults listOfRepos={repos} />
      {repos.length > 0 && <More loadMore={loadMore} loading={isLoading} />}
    </div>
  );
};

export default App;

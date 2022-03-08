import { useEffect, useState } from 'react';
import './RepositoryList.css';

import useFetchRepositories from 'hooks/useFetchRepositories';
import { LOCAL_STORAGE_ITEM } from 'utils/constant';

import RepositoryCard from 'components/RepositoryCard';

const RepositoryList = () => {
  const [starredRepositories, setStarredRepos] = useState(() => {
    const starredReposFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_ITEM);
    return JSON.parse(starredReposFromLocalStorage) || [];
  });
  const [language, setLanguage] = useState('');
  const {repositories, fetchingState} = useFetchRepositories(language);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(starredRepositories));
  }, [starredRepositories]);

  const handleStarredRepository = (item) => {
    const starredReposFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_ITEM);
    const parseReposInLocalStorage = JSON.parse(starredReposFromLocalStorage) || [];
    const updateStarredRepos = parseReposInLocalStorage.find(localStorageItem => localStorageItem.id === item.id) 
      ? parseReposInLocalStorage.filter(repo => repo.id !== item.id) 
      : parseReposInLocalStorage.concat(item);
    setStarredRepos(updateStarredRepos);
  };

  const renderButtonText = (item) => 
    starredRepositories.find(localStorageItem => localStorageItem.id === item.id) 
      ? 'Starred' 
      : 'Star';
  
  const handleChange = (value) => setLanguage(value);

  if(fetchingState === 'pending') {
    return null;
  };

  return (
    <>
      <h1 className='heading-text'>Discover Trending Repositories on Github</h1>
      <div className='repository-list'>
        <RepositoryCard 
          repositories={repositories} 
          starredRepositories={starredRepositories} 
          handleStarredRepository={handleStarredRepository} 
          renderButtonText={renderButtonText} 
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default RepositoryList;

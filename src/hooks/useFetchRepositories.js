import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { getUrl } from 'utils/getUrl';

const useFetchRepositories = (language) => {
  const [repositoriesState, setRepositories] = useState({
    repositories: [],
    fetchingState: 'pending'
  });

  const fetchRepos = useCallback(async() => {
    try {
      const repoData = await axios.get(getUrl(language));
      setRepositories((prevState) => ({
        ...prevState,
        repositories: repoData.data.items,
        fetchingState: 'success'
      }))  
    } catch (error) {
      setRepositories(prevState => ({
        ...prevState,
        fetchingState: 'failed'
      }))
    }
  }, [language])

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return {
    ...repositoriesState,
  };
};

export default useFetchRepositories;

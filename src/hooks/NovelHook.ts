import { useContext, useEffect, useState } from 'react';
import { NovelContext, NovelUpdateContext } from '../context/NovelContext';
import { actions, State } from '../reducer/NovelReducer';

export const useNovelFetch = (): [State, () => void] => {
  const novel = useContext(NovelContext);
  const dispatch = useContext(NovelUpdateContext);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

  useEffect(() => {
    const fetchData = async () => {
      if (!dispatch) return;
      dispatch(actions.startFetchNovelAction());
      fetch('/novels')
        .then((res) => res.json())
        .then((data) => dispatch(actions.successFetchNovelAction(data)))
        .catch((error) => dispatch(actions.failFetchNovelAction(error)));
    };

    fetchData();
  }, [refetchIndex]);

  return [novel, refetch];
};

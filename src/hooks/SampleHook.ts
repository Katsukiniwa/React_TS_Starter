import { useContext, useEffect, useState } from 'react';
import { SampleContext, SampleUpdateContext } from '../context/SampleContext';
import { actions, State } from '../reducer/SampleReducer';

export const useSampleFetch = (): [State, () => void] => {
  const sample = useContext(SampleContext);
  const dispatch = useContext(SampleUpdateContext);
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

  return [sample, refetch];
};

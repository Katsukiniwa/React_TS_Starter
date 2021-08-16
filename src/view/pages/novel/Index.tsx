import React from 'react';
import { useSampleFetch } from '../../../hooks/SampleHook';
import { SampleCard } from '../../components/novel/SampleCard';

export const NovelIndexPage = () => {
  const [novel, refetch] = useSampleFetch();

  return (
    <div className="App">
      <h3>{novel?.isLoading ? 'Loading...' : '一覧画面'}</h3>
      <button onClick={() => refetch()} type="button">random fetch</button>

      <p>{novel?.isError ? novel?.isError : null}</p>
      {novel?.novels != null && (
        <div>
          {novel.novels.map((n) => <SampleCard novelProps={n} key={n.id} />)}
        </div>
      )}
    </div>
  );
};

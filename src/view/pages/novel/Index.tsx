import React from 'react';
import { useNovelFetch } from '../../../hooks/NovelHook';
import { NovelCard } from '../../components/novel/NovelCard';

export const NovelIndexPage = () => {
  const [novel, refetch] = useNovelFetch();

  return (
    <div className="App">
      <h3>{novel?.isLoading ? 'Loading...' : '一覧画面'}</h3>
      <button onClick={() => refetch()} type="button">random fetch</button>

      <p>{novel?.isError ? novel?.isError : null}</p>
      {novel?.novels != null && (
        <div>
          {novel.novels.map((n) => <NovelCard novelProps={n} key={n.id} />)}
        </div>
      )}
    </div>
  );
};

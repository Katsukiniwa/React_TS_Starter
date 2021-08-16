interface NovelProps {
  id: string;
  title: string;
}

const START_FETCH_NOVEL = 'START_FETCH_NOVEL' as const;
const SUCCESS_FETCH_NOVEL = 'SUCCESS_FETCH_NOVEL' as const;
const FAIL_FETCH_NOVEL = 'FAIL_FETCH_NOVEL' as const;

const startFetchNovelAction = () => ({ type: START_FETCH_NOVEL });

const successFetchNovelAction = (n: NovelProps[]) => ({ type: SUCCESS_FETCH_NOVEL, payload: n });

const failFetchNovelAction = (error: string) => ({ type: FAIL_FETCH_NOVEL, payload: error });

export const actions = {
  startFetchNovelAction,
  successFetchNovelAction,
  failFetchNovelAction,
};

export type ActionType =
  | ReturnType<typeof startFetchNovelAction>
  | ReturnType<typeof successFetchNovelAction>
  | ReturnType<typeof failFetchNovelAction>

export type State =
  | undefined
  | { isLoading: true; novels: null, isError: null }
  | { isLoading: false; novels: NovelProps[] | null, isError: null }
  | { isLoading: false; novels: null, isError: Error }

export const initialState: State = { isLoading: true, novels: null, isError: null };

export const getNovelsReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'START_FETCH_NOVEL':
      return {
        ...state,
        isLoading: true,
        novels: null,
        isError: null,
      };
    case 'SUCCESS_FETCH_NOVEL':
      return {
        ...state,
        isLoading: false,
        novels: action.payload,
        isError: null,
      };
    case 'FAIL_FETCH_NOVEL':
      return {
        ...state,
        isLoading: false,
        novels: null,
        isError: new Error(action.payload),
      };
    default:
      return state;
  }
};

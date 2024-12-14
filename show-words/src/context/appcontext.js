import { createContext, useContext, useReducer } from 'react';

const initialState = {
    shuffle: false,
    title: null,
    firstIdx: 0,
    lastIdx: null,
    take: null,
    wordsFirst: true,
    words: [],
    loopMode: 'fileNotSent'
};

function appContextReducer(state, action){
    switch (action.type) {
        case 'toggleShuffle': {
          return {
            ...state, 
            shuffle: !state.shuffle
          };
        }
        case 'toggleWordsFirst': {
            return {
              ...state, 
              datesFirst: !state.wordsFirst
            };
          }
          case 'setTitle': {
            return {
              ...state, 
              title: action.payload
            };
          }
          case 'setWords': {
            return {
              ...state, 
              words: [...action.payload]
            };
          }
          case 'setTake': {
            return {
              ...state, 
              take: action.payload
            };
          }
          case 'setLastIdx': {
            return {
              ...state, 
              lastIdx: action.payload
            };
          }
          case 'setLoopMode': {
            return {
              ...state, 
              loopMode: action.payload
            };
          }
          case 'prepare': {
            return {
              ...state, 
              loopMode: 'started',
              title: action.payload.title,
              take: action.payload.take,
              wordsFirst: action.payload.wordsFirst,
              shuffle: action.payload.shuffle,
              words: action.payload.words
            };
          }
          case 'reset': {
            return {   
            shuffle: false,
            title: null,
            firstIdx: 0,
            lastIdx: null,
            take: null,
            wordsFirst: true,
            words: [],
            loopMode: 'fileNotSent'
            };
          }
        
        
        default: {
          throw Error('Unknown action: ' + action.type);
        }
      }
    }
    

    const AppContext = createContext(null);
    
    const AppDispatchContext = createContext(null);
    
    export function AppProvider({ children }) {
        const [state, dispatch] = useReducer(appContextReducer, initialState);
      
        return (
          <AppContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
              {children}
            </AppDispatchContext.Provider>
          </AppContext.Provider>
        );
      }
    
      export function useApp() {
        return useContext(AppContext);
      }
      
      export function useAppDispatch() {
        return useContext(AppDispatchContext);
      }
    
      export function useAppWithDispatch(){
        return [useContext(AppContext), useContext(AppDispatchContext) ];
      }
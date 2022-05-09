import { createContext, useReducer } from 'react';
import toggleReducer from './toggleReducer';

const initialState = {
    isToggled: false,
};

export const ToggleContext = createContext(initialState);

const ToggleContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toggleReducer, initialState);

    return (
        <ToggleContext.Provider
            value={{
                isToggled: state.isToggled,
                dispatch,
            }}
        >
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleContextProvider;

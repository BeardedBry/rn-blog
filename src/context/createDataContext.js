import React, { useReducer } from 'react';


// re-usable function to automate the proccess of creating a context.

export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <Context.Provider value={{state, dispatch}}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };

};
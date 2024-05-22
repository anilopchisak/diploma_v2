import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css'
import App from './App';
import UserStore from "./store/UserStore";
import IngrStore from "./store/IngrStore";
import AnalysisStore from "./store/AnalysisStore";


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        ingr: new IngrStore(),
        analysis: new AnalysisStore(),
    }}>
        <App />
    </Context.Provider>
);

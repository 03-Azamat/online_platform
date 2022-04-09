import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import  { Provider } from "react-redux";
import {store} from "./redux/store/store";
import './style/index.scss';
import Main from "./Main";


ReactDOM.render(
    <BrowserRouter>
            <Provider store={store}>
                <Main/>
            </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



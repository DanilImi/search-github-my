import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redusers/index1';
import DataRoutes from './DataRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<DataRoutes />
	</Provider>
);

reportWebVitals();

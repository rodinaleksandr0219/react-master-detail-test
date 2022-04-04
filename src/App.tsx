import React from 'react';
import { Provider } from 'mobx-react';
import MasterDetailView from './MasterDetailView';
import Store from './store';

import './App.css';
const store = new Store();

function App() {
   return (
      <Provider store={store}> 
         <MasterDetailView store={store} />
      </Provider>
   );
}

export default App;

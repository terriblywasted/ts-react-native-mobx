import React from 'react';
import {Provider} from 'mobx-react';
import createStore from './store/index';
import routes from './routes';

const App = () => {
  return (
    <Provider store={createStore()}>
      {routes}
    </Provider>
  );
};

export default App;
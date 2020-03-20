import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import AddBabyForm from '../AddBabyForm';
import Baby from '../Baby';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Baby/>
    <AddBabyForm onSubmit={() => alert('Adios!')} />
  </Provider>
);


export default App;
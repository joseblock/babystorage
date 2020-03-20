import uuid, { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

const Eventform = ({ onSubmit }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  return (
    <Fragment>
      <input
        type="text"
        placeholder="Evento"
        value={value1}
        onChange={e => changeValue1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Notas"
        value={value2}
        onChange={e => changeValue2(e.target.value)}
      />
      <button type="submit" onClick={
        () => onSubmit(value1, value2)
      }>
        {'Agregar Evento'}
      </button>
    </Fragment>
  );
} 


export default connect(
  undefined,
  dispatch => ({
    onSubmit(value1, value2) {
      console.log({
        type: 'Baby',
        payload: {
          event: value1,
          notes: value2,
          date: new Date(),
        },
      });
      
    },
  }),
)(Eventform);

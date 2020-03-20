import range from 'lodash/range';
import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import Baby from '../Baby';


const Babys = ({ number }) => (
  <div className="babys">
    {
      number === 0 ? (
        <h1>
          {'No hay bebés :('}
        </h1>
      ) : (
        range(number).map(
          index => (
            <Baby
              key={index}
              index={index}
            />
          ),
        )
      )
    }
  </div>
);


export default connect(
  state => ({
    number: selectors.getBabys(state).length,
  }),
)(Babys);
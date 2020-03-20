import React from 'react';
import './styles.css';
import Event from '../Event';

const Baby = ({
    isSelected = false,
  }) => (
    <div
      className={
        `
          baby-wrapper
          ${isSelected ? 'baby--selected' : ''}
       `
      }
      
    >
      <div className="baby">
        {
          <Event
          />
        }
      </div>
    </div>
  );
  export default Baby;
import React from 'react';

import './styles.css';


const Event = ({
  event,
  notes,
  date,
}) => (
  <div className="event">
      <p>`${event}`</p>
      <div className="notes">
          <p>`${notes}`</p>
      </div>
      <div className="date">
          <p>`${date}`</p>
      </div>
  </div>
);


export default Event;
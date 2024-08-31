import React from 'react'
import Day from './Day';

function Week({ week }) {
	return (
    <div className="flex-1 grid grid-cols-7 grid-rows-1">
      {week.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Week
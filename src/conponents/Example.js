import React from 'react';
import ExampleChild from "./ExampleChild";

const myFunc = () => {
  const words = ["Lay down all thought", "Surrender to the void", "It is shining", "It is shining"]
  return words.map((str, index) => (
    <React.Fragment key={index}>
      {str} <br />
    </React.Fragment>
  ));
};
const Example = () => {
  return (
    <>
      <p>Turn off your mind,<br />relax And float down stream</p>
      <ExampleChild
        str={"It is not dying"}
        myFunc={myFunc}
        num={1966}
      />
    </>
  );
};

export default Example;


// Turn off your mind, relax And float down stream
// It is not dying
// It is not dying

// Lay down all thought
// Surrender to the void
// It is shining
// It is shining

// That you may see
// The meaning of within
// It is being
// It is being

// That love is all
// And love is everyone
// It is knowing
// It is knowing

// That ignorance and hate
// May mourn the dead
// It is believing
// It is believing

// But listen to the
// Color of your dreams
// It is not living
// It is not living

// Or play the game
// Existence to the end
// Of the beginning
// Of the beginning

// Of the beginning
// Of the beginning
// Of the beginning
// Of the beginning
// Of the beginning

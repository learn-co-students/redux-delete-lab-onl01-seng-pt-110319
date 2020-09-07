import React from 'react';

const Band = (props) => {

    return(
      <div>
        Band Component
        <li>{props.name}</li>
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </div>
    );



}

export default Band;

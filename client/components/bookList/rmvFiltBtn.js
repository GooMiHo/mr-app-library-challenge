import React from 'react';

const RmvFiltBtn = (props) => {
  const handleRmvFilter = props.handleRmvFilter;
  return (

    <button onClick={() => handleRmvFilter(props.topic, props.option)} type="button">
      x
    </button>
  )
}

export default RmvFiltBtn;

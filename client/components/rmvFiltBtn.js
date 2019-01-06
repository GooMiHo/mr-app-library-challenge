import React from 'react';

const RmvFiltBtn = (props) => {
  const handleRmvFilter = props.handleRmvFilter;
  return (

    //working here put arguments in handleRmvFilter
    <button onClick={() => handleRmvFilter(props.topic, props.option)} type="button">
      x
    </button>
  )
}

export default RmvFiltBtn;

import React from 'react';

const RmvFiltBtn = (props) => {
  const handleRmvFilter = props.handleRmvFilter;
  return (

    <button className="rmv-btn" onClick={() => handleRmvFilter(props.topic, props.option)} type="button">{`\u2715`}</button>
  )
}

export default RmvFiltBtn;

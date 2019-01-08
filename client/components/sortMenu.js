import React from 'react';

const SortMenu = ({ handleAddSort }) => {
  return (
    <div>
      <button type="button" onClick={() => handleAddSort('Publication data (older - newer)')}>sort</button>
    </div>
  );
};

export default SortMenu;

import React from 'react';

const SortMenu = ({ handleAddSort }) => {
  return (
    <div>
      <button type="button" onClick={() => handleAddSort('Publication data (older - newer)')}>Publication data (older - newer)</button>
      <button type="button" onClick={() => handleAddSort('Publication data (newer - older)')}>Publication data (newer - older)</button>
    </div>
  );
};

export default SortMenu;

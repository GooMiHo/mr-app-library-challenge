import React from 'react';
import RmvFiltBtn from './rmvFiltBtn';

export default function FilterList({filterTopics, handleRmvFilter}) {
  const topics = Object.keys(filterTopics);
  return (
    topics.map(topic => {
      return filterTopics[topic].map(option => {
        return (
          <div className="filter-word" key={option}>
            <p>{option}</p><RmvFiltBtn handleRmvFilter={handleRmvFilter} topic={topic} option={option} />
          </div>
        );
      });
    })
  );
}

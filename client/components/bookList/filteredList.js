import React from 'react';
import RmvFiltBtn from './rmvFiltBtn';

export default function FilteredList({filterTopics, handleRmvFilter}) {
  const topics = Object.keys(filterTopics);
  return (
    topics.map(topic => {
      return filterTopics[topic].map(option => {
        return (
          <div key={option}>
            <p>{option}</p><RmvFiltBtn handleRmvFilter={handleRmvFilter} topic={topic} option={option} />
          </div>
        );
      });
    })
  );
}

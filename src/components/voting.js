import React, { useState } from 'react';
import '../App.css';

const App = () => {
  const [smilies, setSmilies] = useState([
    { id: 1, name: '🕷️', count: 0 },
    { id: 2, name: '🪳', count: 0 },
    { id: 3, name: '🪰', count: 0 },
  ]);

  const [showResults, setResults] = useState(false);

  const getVote = (id) => {
    setSmilies(prevSmileys => {
      return prevSmileys.map(smile => {
        if (smile.id === id) {
          return { ...smile, count: smile.count + 1 };
        }
        return smile;
      });
    });
  };

  const getResults = () => {
    setResults(true);
  };

  const winningSmile = smilies.reduce((prev, current) => {
    return prev.count > current.count ? prev : current;
  });

  return (
    <div className="container">
      <h1>Voting for the best one smile</h1>
      <ul className="smile-list">
        {smilies.map(smile => (
          <li key={smile.id} className="smile-item">
            <span className="smile">{smile.name}</span>
            <span className="vote-count">{smile.count}</span>
            <button onClick={() => getVote(smile.id)} className="vote-button">
              Vote
            </button>
          </li>
        ))}
      </ul>
      <button onClick={getResults} className="results-button">
        Results
      </button>
      {showResults && (
        <div className="results">
          <h2>Winner:</h2>
          <p className="winning-smile">{winningSmile.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;

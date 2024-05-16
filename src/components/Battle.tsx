import React, { useState } from 'react';

const Battle: React.FC<{ rightPokemon: any, leftPokemon: any, rightMove: any, leftMove: any }> = ({ rightPokemon, leftPokemon, rightMove, leftMove }) => {
  const [result, setResult] = useState<string>('');

  const handleBattle = () => {
    const rightMovePower = rightMove?.power || 0;
    const leftMovePower = leftMove?.power || 0;

    if (rightMovePower > leftMovePower) {
        setResult(`${rightPokemon.name} lands a decisive blow with ${rightMove.name}, knocking out ${leftPokemon.name}!`);
      } else if (rightMovePower < leftMovePower) {
        setResult(`${leftPokemon.name} lands a decisive blow with ${leftMove.name}, knocking out ${rightPokemon.name}!`);
      } else {
        setResult("It's a tie!");
      }
  };

  return (
    <div className="battle-container">
      <h2 className="battle-heading">Battle Log</h2>
      <div className="battle-log">
        <p>{result}</p>
      </div>
      <button className="battle-button" onClick={handleBattle}>Start Battle!</button>
    </div>
  );
};

export default Battle;

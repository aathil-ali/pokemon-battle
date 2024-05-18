import React, { useState } from 'react';

const Battle: React.FC<{ rightPokemon: any, leftPokemon: any, rightMove: any, leftMove: any }> = ({ rightPokemon, leftPokemon, rightMove, leftMove }) => {
  const [result, setResult] = useState<string>('');

  const handleBattle = () => {
    const rightMovePower = rightMove?.power || 0;
    const leftMovePower = leftMove?.power || 0;

    if (rightMovePower === leftMovePower) {
        setResult("It's a tie!");
        return;
      }

      const winner = rightMovePower > leftMovePower ? rightPokemon : leftPokemon;
      const loser = rightMovePower > leftMovePower ? leftPokemon : rightPokemon;
      const winningMove = rightMovePower > leftMovePower ? rightMove : leftMove;
  
      setResult(`${winner.name} lands a decisive blow with ${winningMove.name}, knocking out ${loser.name}!`);
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

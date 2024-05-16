import React, { useMemo } from 'react';
import { useGetRandomPokemon, useRandomMovesForPokemon } from './lib/queries/queriesAndMutations';
import PokemonCard from './components/PokemonCard';
import Battle from './components/Battle';
import { getRandomNumber } from './lib/utils';


const App: React.FC = () => {
  const rightPokemonId = useMemo(() => getRandomNumber(1, 151), []);
  const leftPokemonId = useMemo(() => getRandomNumber(1, 151), []);

  const { data: rightPokemon } = useGetRandomPokemon(rightPokemonId);
  const { data: leftPokemon } = useGetRandomPokemon(leftPokemonId);

  const { data: rightMove } = useRandomMovesForPokemon(rightPokemon);
  const { data: leftMove } = useRandomMovesForPokemon(leftPokemon);


  return (
    <div className="App">
    <h1 className="app-title">Pokemon Battle</h1>
    <div className="battle-container">

      {rightPokemon && rightMove && (
        <PokemonCard pokemon={rightPokemon} move={rightMove} className="pokemon-card pokemon-right" />
      )}

      {leftPokemon && leftMove && (
        <PokemonCard pokemon={leftPokemon} move={leftMove} className="pokemon-card pokemon-left" />
      )}

      {rightPokemon && leftPokemon && rightMove && leftMove && (
        <Battle
          rightPokemon={rightPokemon}
          leftPokemon={leftPokemon}
          rightMove={rightMove}
          leftMove={leftMove}
        />
      )}
    </div>
  </div>
  );
};

export default App;


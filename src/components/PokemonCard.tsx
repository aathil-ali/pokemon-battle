import { Move, Pokemon } from "../interfaces/Pokemon";
import { getRandomColor } from "../lib/utils";

interface Props {
    pokemon: Pokemon; // Data for the Pokemon
    className?: string; // Optional class for styling (left or right)
    move: Move
}

const PokemonCard: React.FC<Props> = ({ pokemon, className, move }) => {
    // Access Pokemon data using optional chaining
    const { name, front_sprite } = pokemon || {};
  
    return (
        <div className={`pokemon-card ${className || ''}`}> {/* Apply className if provided */}
            <div className='pokemon-content'>
                <p className="pokemon-name">{name}</p>  
                <div>
                    <p>
                        Attack : <span className="attack-name">{move?.name}</span>
                    </p>
                </div>
                <div>
                    <p>
                        Power :{" "}
                        <span
                            className="power-sticker"
                            style={{ backgroundColor: getRandomColor() }}
                        >
                            {move?.power || 0}
                        </span>
                    </p>
                </div>
            </div>
            <div className='pokemon-image'>
                <img src={front_sprite} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;
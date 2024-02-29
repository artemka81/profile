import { PokemonCard } from './PokemonCard';
import { PokemonItem } from './PokemonItem';
import { Container } from './pokemon.styled';


const Pokemon = () => {
	return (

		<Container>
			<header className='pokemon-header'>Header</header>
			<div className='pokemon-main'>
				<div className='pokemon-list'>
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />
					<PokemonItem />




				</div>
				<div className='pokemon-card'>
					<PokemonCard />
				</div>
			</div>
			<footer className='pokemon-footer'>
				<div className="btn-group">
					<button>Previous</button>
					<button>Next</button>
				</div>
			</footer>
		</Container>

	)
}


export default Pokemon;

import { useEffect } from 'react';
import { useUrl } from '../../pages/ComponentPage';
import { PokemonCard } from './PokemonCard';
import { PokemonItem } from './PokemonItem';
import { Container } from './pokemon.styled';
import axios from 'axios';

const Pokemon = () => {
	const { url } = useUrl(); // Получение url из контекста







	console.log('Component Pokemon loaded');

	console.log("url", url)


	const pokeFun = async () => {

		const res = await axios.get(url);
		console.log("res", res)

	}


	useEffect(() => {
		pokeFun();
	}, [url])

	return (

		<Container>
			<header className='pokemon-header'>Header</header>
			<div className='pokemon-main'>
				<div className='pokemon-list'>
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
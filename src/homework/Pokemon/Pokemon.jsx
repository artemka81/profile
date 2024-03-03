
import { useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { PokemonItem } from './PokemonItem';
import { Container } from './pokemon.styled';
import axios from 'axios';

const Pokemon = () => {
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
	const [pokeDate, setPokeDate] = useState([]);
	const [loading, setLoading] = useState(true);
	const [nextUrl, setNextUrl] = useState();
	const [prevUrl, setPrevUrl] = useState();
	const [pokeInfo, setPokeInfo] = useState();

	const pokeFun = async () => {
		setLoading(true);
		const res = await axios.get(url);
		// console.log("res", res.data)
		setNextUrl(res.data.next);
		setPrevUrl(res.data.previous);
		getPokemon(res.data.results);
		setLoading(false);

	}

	const getPokemon = async (res) => {
		const newPokemonData = await Promise.all(res.map(async (item) => {
			const result = await axios.get(item.url);
			return result.data;
		}));
		setPokeDate(prevState => [...prevState, ...newPokemonData]);
	}


	useEffect(() => {
		pokeFun();
	}, [url])

	// useEffect(() => {
	// 	console.log("pokeDate2", pokeDate);
	// }, [pokeDate]);

	return (

		<Container>
			<header className='pokemon-header'>Header</header>
			<div className='pokemon-main'>
				<div className='pokemon-list'>
					<PokemonItem
						pokemon={pokeDate}
						loading={loading}
						infoPokemon={poke => setPokeInfo(poke)}
					/>

				</div>
				<div className='pokemon-card'>
					<PokemonCard data={pokeInfo} />
				</div>
			</div>
			<footer className='pokemon-footer'>
				<div className="btn-group">
					{prevUrl &&
						<button
							onClick={() => {
								setPokeDate([])
								setUrl(prevUrl)
							}}
						>
							Previous
						</button>}

					{nextUrl && <button
						onClick={() => {
							setPokeDate([])
							setUrl(nextUrl)
						}}
					>
						Next
					</button>}
				</div>
			</footer>
		</Container>

	)
}


export default Pokemon;
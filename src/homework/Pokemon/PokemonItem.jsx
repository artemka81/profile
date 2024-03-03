import styled from 'styled-components'

const StyledPokemonItem = styled.div`
display: flex;
	flex-direction: column;
	justify-content:start;
	align-items: center;
	width: 280px;
	height: 140px;
	padding: 1rem;
	background-color: #ffffff;
	border-radius: 6px;
	border: 2px solid #E0F2FE;
	cursor: pointer;
	box-sizing: border-box;
	h5{
		padding: 0;
		margin: 0;
	}
`


export const PokemonItem = ({ pokemon, loading, infoPokemon }) => {
	// console.log("pokemon", pokemon);

	return (
		<>
			{
				loading ? <h1>Loading...</h1> :
					pokemon.map((item) => {
						return (
							<StyledPokemonItem
								key={item.id}
								onClick={() => infoPokemon(item)}
							>
								<h5>{item.name}</h5>

								<img src={item.sprites.front_default} alt="" />
							</StyledPokemonItem >
						)
					})
			}
		</>
	)
}
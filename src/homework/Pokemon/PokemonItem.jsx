import styled from 'styled-components'

const StyledPokemonItem = styled.div`
display: flex;
	flex-direction: column;
	justify-content:start;
	align-items: center;
	width: 280px;
	height: 140px;
	background-color: #ffffff;
	border-radius: 6px;
	border: 2px solid #E0F2FE;
	cursor: pointer;
	box-sizing: border-box;
`


export const PokemonItem = () => {
	return (
		<StyledPokemonItem>
			<h4>PokemonItem</h4>
		</StyledPokemonItem>
	)
}
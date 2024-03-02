import styled from 'styled-components';

const StylePokemonCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 2rem;
	max-width: 420px;
	background-color: #ffffff;
  border-radius: 6px;
 	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
	h2{
		text-transform: uppercase;
		letter-spacing: .4px;
	}
	.abilities{
		background-color:#E0F2FE;
		font-size:12px;
		line-height:1;
		padding: 0 8px;
		border-radius: 6px;
		margin-bottom: 16px;
	}
	.stats{
		width: 100%;
		display: flex;
		flex-direction: column;
		p{
			margin: 0;
			padding: 8px 0;
			line-height: 1.4;
		}
		p:nth-child(2n + 1){
			background-color: #E0F2FE;
		}
	}
`

export const PokemonCard = () => {

	return (
		<StylePokemonCard>
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="" srcSet="" />
			<h2>Charmander</h2>
			<div className="abilities">
				<p>blaze</p>
			</div>
			<div className="stats">
				<p>hp:39</p>
				<p>attack:52</p>
				<p>defense:42</p>
				<p>special-attack:60</p>
				<p>speed:65</p>
				<p>weight:85</p>
			</div>
		</StylePokemonCard>
	)
}
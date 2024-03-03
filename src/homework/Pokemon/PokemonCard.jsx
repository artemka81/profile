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
		margin-bottom: 0;
	}
	img{

		height: 200px;
		width: 100%;
	}
	.abilities{
		width: 100%;
		display: flex;
		justify-content: center;
		gap:.5rem;
		margin-bottom: 1rem;
		.abiliti{
			background-color:#E0F2FE;
			font-size:14px;
			text-align: center;
			line-height:1;
			padding: 8px;
			border-radius: 6px;
			margin-bottom: 16px;
		}
	}
	.stats{
		width: 100%;
		display: flex;
		flex-direction: column;
		p{
			margin: 0;
			padding: 8px;
			line-height: 1.4;
		}
		p:nth-child(2n + 1){
			background-color: #E0F2FE;
		}
	}
`

export const PokemonCard = ({ data }) => {
	// console.log("PokemonCard", data)
	return (
		<>
			{
				(!data) ? "Choose a Pokemon" :
					(
						<StylePokemonCard>
							<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" srcSet="" />
							<h2>{data.name}</h2>

							<div className="abilities">
								{
									data.abilities.map(({ ability }, index) => {
										return (<p className='abiliti' key={index}>{ability.name}</p>)
									})
								}
							</div>

							<div className="stats">
								{

									data.stats.map((info, index) => {
										return (
											<p key={index}>{info.stat.name}:{info.base_stat}</p>
										)
									})
								}
							</div>
						</StylePokemonCard>
					)
			}

		</>
	)
}
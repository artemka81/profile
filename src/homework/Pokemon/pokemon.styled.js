import styled from 'styled-components';


export const Container = styled.div`
	width: 100%;
	position: relative;
	display: grid;
  grid-template-rows: auto 1fr auto;
	background-color: #E7ECF2;

	.pokemon-header, .pokemon-footer {
  padding: 2rem;
  background-color: #E0F2FE;
	}
	.pokemon-main{
		display: grid;
		grid-template-columns: 60% 40%;

		.pokemon-list{
			background-color: #ffffff;
			display: grid;
			height:calc(100vh - 20rem);
			align-content: flex-start;
			grid-template-columns: repeat(auto-fit, minmax(230px, 0.5fr));
			gap: 1.8rem;
			overflow-y: auto;
			overflow-x: hidden;
		}

		.pokemon-card{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.pokemon-list, .pokemon-card{
			padding: 1rem;
		}
	}
	.btn-group button{
		margin-right:1rem;
		border:0;
		outline: 0;
		width: 120px;
		padding: 16px 0;
		font-size: 16px;
		background-color: #666666;
		color: #ffffff;
	}
	.pokemon-footer {
		width:100%;
		position: absolute;
		bottom: -3rem;
		left: 0;
	}
`
import styled from "styled-components";
import { Recipe } from './Recipe';



const Wrapper = styled.div`
		width: 100%;
		height:calc(100vh - 13rem);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #E7ECF2;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:start;
	width: 460px;
	height: 680px;
	padding: 1rem;
	background-color: #ffffff;
	border-radius: 6px;
	box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
	overflow-y: scroll;

`



export const RecipeReview = ({ recipes }) => {



	return (
		<Wrapper>
			<Container>

				{recipes.map(recipe => (
					<div
						key={recipe.id}
					>
						<Recipe date={recipe} />
					</div>
				))}
			</Container>
		</Wrapper>
	)

}
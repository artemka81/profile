import styled from "styled-components";
import { Container, Title } from './Recipe.styled';


const Button = styled.button`
	/* font-size: inherit; */
	font-size: 18px;
	padding: 0;
  border: none;
  color: inherit;
  background: #ffffff;
  cursor: pointer;
	border-radius: 8px;
	padding: 2px 4px;
	margin: 8px 4px 4px 8px;

`
const EmojiButton = ({ onClick, emoji, count }) => {
	return (
		<Button onClick={onClick}>
			{emoji} {count}
		</Button>
	)
}


export const Recipe = ({ date }) => {
	const { image, name } = date;
	return (
		<>
			<Container $background={image}>
				<div>
					<EmojiButton count={3} emoji="😋" />
					<EmojiButton count={1} emoji="😐" />
					<EmojiButton count={1} emoji="🤮" />
				</div>
				<Title>{name}</Title>
			</Container>
		</>
	)
}
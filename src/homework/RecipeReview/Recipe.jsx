import styled from "styled-components";
import { Container, Title } from './Recipe.styled';
import { useState, useEffect } from 'react';


const Button = styled.button`
	font-size: 18px;
	border: none;
  color: inherit;
	outline: 0 !important;
  background: #ffffff;
  cursor: pointer;
	border-radius: 8px;
	padding: 2px 4px;
	margin: 8px 4px 4px 8px;
	border:2px solid #ffffff;
	&:hover{
		border:2px solid rgba(0,0,0,0.8);
		transition: border 0.3s ease;
	}
`
const EmojiContainer = styled.div`
	position: absolute;
  top: 0;
  left: 0;
	z-index: 2;
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
	const [good, setGood] = useState(0);
	const [bad, setBad] = useState(0);
	const [neutral, setNeutral] = useState(0);
	let total = good + bad + neutral;

	// Обновляем значения состояния
	const updateStateCount = (count) => {
		switch (count) {
			case "good":
				setGood(state => state + 1);
				break;
			case "bad":
				setBad(state => state + 1);
				break;
			case "neutral":
				setNeutral(state => state + 1);
				break;
			default:
				console.log("Элемент не найден!");
				break;
		}
	}



	return (
		<>
			<Container $background={image}>
				<EmojiContainer>
					<EmojiButton onClick={() => updateStateCount("good")} count={good} emoji="😋" />
					<EmojiButton onClick={() => updateStateCount("bad")} count={bad} emoji="😐" />
					<EmojiButton onClick={() => updateStateCount("neutral")} count={neutral} emoji="🤮" />
				</EmojiContainer>
				<Title>
					<h3>{name}</h3>
					<p>Всего отзывов: {total}</p>

				</Title>

			</Container>
		</>
	)
}
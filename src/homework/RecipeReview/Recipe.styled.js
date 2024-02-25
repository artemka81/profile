import styled from "styled-components";

export const Title = styled.h3`
	line-height:1;
	font-size:18px;
	color: #ffffff;
	position: absolute;
	bottom: -60px;
	left: 0%;
	padding: 0 0 0 24px;
`

export const Container = styled.div`
	position:relative;
	background-image: url(${props => props.$background});
	background-size: cover;
	background-position: center;
	width:100%;
	height: 200px;
	border-radius: 8px;
	margin-bottom: 20px;
	cursor: pointer;
	overflow: hidden;

	&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0) 40%, #000000 100%);
	opacity: 0;
	transition: opacity 0.3s ease;
	}
	&:hover::before{
		opacity: 1;
	}
	&:hover ${Title} {
		bottom: 0;
		z-index: 1;
		transition: bottom 0.3s ease;
	}
`

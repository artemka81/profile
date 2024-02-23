import styled from "styled-components";
import { device, size } from './device';



// Container
export const Container = styled.div`
		width: 100%;
		min-height: 100vh;
		display: grid;
		grid-template-columns: 20rem 1fr;
	/* @media ${device.mobile} {
		max-width: ${size.mobile};
	}
	@media ${device.tablet} {
		max-width: ${size.tablet};
	}
	@media ${device.laptop} {
		max-width: ${size.laptop};
	}
	@media ${device.desktop} {
		max-width: ${size.desktop};
	} */
`


export const FlexCenter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
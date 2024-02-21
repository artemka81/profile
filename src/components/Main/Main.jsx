import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainWrapper = styled.div`
	color: #212121;
	padding: 2.5rem;
`


const Main = () => {

	return (
		<MainWrapper>
			<Outlet />
		</MainWrapper>
	)
}

export default Main;
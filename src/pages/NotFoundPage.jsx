import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { Container, FlexCenter } from '../components/styled';
import { Link } from 'react-router-dom';







const NotFoundPage = () => {
	return (
		<>
			<Container>
				<Sidebar title="Sidebar">
					<Navbar />
				</Sidebar>
				<Main title="Main">
					<FlexCenter>
						<h2>404 Error. Page not found.</h2>
						<Link className='link' to="/">Вернуться на главную</Link>
					</FlexCenter>
				</Main>
			</Container>
		</>
	)
}

export default NotFoundPage;
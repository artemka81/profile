import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	a{
		display: block;
		padding: 0.75rem 2.5rem;
		color: #212121;
		transition: background-color 0.5s;
	}
	.active, a:hover {
		background-color: #ffffff;
	}
`


const Navbar = ({ components }) => {

	return (
		<Nav>
			{components.map((link) => (
				<Link
					key={link.id}
					to={`/components/${link.path}`}>
					{link.name}
				</Link>
			))}
		</Nav>
	)
}

export default Navbar;
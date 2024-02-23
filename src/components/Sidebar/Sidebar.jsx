import styled from 'styled-components';


const SidebarWrapper = styled.div`
	background-color: #E7ECF2;
	color: #212121;
	h1{
		padding: 2.5rem;

	}
`


const Sidebar = ({ title, children }) => {

	return (
		<SidebarWrapper>
			<h1>{title}</h1>
			{children}
		</SidebarWrapper>

	)
}

export default Sidebar;
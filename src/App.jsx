import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Container } from './components/styled';
import componentsMap from './componentMap';

function App() {

  // console.log(window.location)

  return (
    <Container>
      <Sidebar title="Sidebar">
        <Navbar components={componentsMap} />
      </Sidebar>
      <Main />
    </Container>
  )
}

export default App

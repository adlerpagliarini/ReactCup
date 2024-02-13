import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameList } from './modules/components/games/GameList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './modules/components/navigations/NavBar';
import { Container } from 'reactstrap';
import LayoutRuleBox from './modules/components/layouts/LayoutRuleBox';
import { GameCup } from './modules/components/gamecup/GameCup';
import GlobalModal from './modules/components/errors/GlobalModal';

function App() {
  
  
  return (
    <div className="App">
      <GlobalModal />
      <Router>
        <AppNavbar />
        <Container>
          <LayoutRuleBox props={{ title: "Aposte no seu jogo preferido e confira o resultado!" }} />
          <Routes>            
            <Route path="/" element={<GameList />} />
            <Route path="/gamecup/:idGameCup" element={<GameCup />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

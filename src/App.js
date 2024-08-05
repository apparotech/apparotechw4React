//import logo from './logo.svg';
//import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPages';
import './assets/css/styles.css'
import './assets/css/fromstyle.css'
import ProjectPage from './pages/ProjectPage';
//import { element } from 'prop-types';
import TeamPage from './pages/TeamPage';
import { DiscussProjectPage } from './pages/DiscussProjectPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
  <>
  <Routes>
  <Route exact path="/" element={<LandingPage/>}/>
  <Route path="/project" element={<ProjectPage/>}/>
  <Route exact path="/project/:id" element={<ProjectDetailPage/>}/>
  <Route  exact path='/team' element={<TeamPage/>}/>
  <Route exact path='/discuss-project' element={<DiscussProjectPage/>}/>
  <Route path='**' element={<NotFoundPage/>}/>
  </Routes>
  </>
  );
}

export default App;


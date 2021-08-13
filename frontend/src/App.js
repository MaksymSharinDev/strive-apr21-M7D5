import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Homepage from './views/Homepage/Homepage';
import Player from './components/Player/Player';
import Sidebar from './components/Sidebar/Sidebar';
import AlbumPage from './views/AlbumPage/AlbumPage';
import ArtistPage from './views/ArtistPage/ArtistPage';
import { useState } from 'react';
function App() {
const [playing, setPlaying] = useState({})
  const handlePlaying = (track) => {
    setPlaying(track)
  }
  return (
    <Router>
      <Route exact path='/' component={Homepage}/>
      <Route path='/' render={()=> <Player song={{title: playing?.title, artist: playing?.artist?.name, demo: playing?.preview, cover: playing?.cover }}/>} />
      <Route path='/' component={Sidebar} />
      <Route exact path="/album/:id" render={(props)=> <AlbumPage {...props} passSong={handlePlaying}/>} />
      <Route exact path='/artist/:id' component={ArtistPage} />
    </Router>
  );
}

export default App;

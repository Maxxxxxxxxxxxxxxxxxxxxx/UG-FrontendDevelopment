import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Page from "./components/Page";
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  return (
    <Routes>
      <Route path="/images" element={ <Page /> }/>
      <Route path="/desc" />
      <Route path="/" />
    </Routes>
  )
}

export default App

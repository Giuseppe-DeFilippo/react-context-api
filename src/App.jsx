import './App.css'
import GlobalContext from './contexts/GlobalContext'
import HomePageComponent from './components/HomePageComponent'
import ChiSiamoComponent from './components/ChiSiamoComponent'
import PostComponent from './components/PostComponent'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import DefaultLayoutComponent from './components/DefaultLayoutComponent'
import FormComponents from './components/FormComponents'
import CardListComponent from './components/CardListComponents'
import SingleCardComponent from './components/SingleCardComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

  const [articoli, setArticoli] = useState([]);

  // Chiamata API per ottenere gli articoli
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/post")
      .then((response) => {
        setArticoli(response.data.post);
        console.log(response.data.post);
        // Imposta gli articoli nello stato
      })
      .catch((error) => {
        console.error("Errore durante il caricamento dei post:", error);
      });
  }, []);
  // const { count } = useContext(CountContext);

  return (


    <GlobalContext.Provider value={{ articoli: articoli }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayoutComponent />}>
            <Route index element={<HomePageComponent />} />
            <Route path="/chi-siamo" element={<ChiSiamoComponent />} />
            <Route path="/post" element={<PostComponent />} />
            <Route path="/crea-post" element={<FormComponents />} />
            <Route path="/post/:postID" element={<SingleCardComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>

  )
}

export default App

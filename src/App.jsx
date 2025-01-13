import './App.css'
import { GlobalContext } from './contexts/GlobalContext'
import HomePageComponent from './components/HomePageComponent'
import ChiSiamoComponent from './components/ChiSiamoComponent'
import PostComponent from './components/PostComponent'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import DefaultLayoutComponent from './components/DefaultLayoutComponent'
import FormComponents from './components/FormComponents'
import CardListComponent from './components/CardListComponents'
import SingleCardComponent from './components/SingleCardComponent'


function App() {



  return (


    <GlobalContext.Provider value={{ count: 1 }}>
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

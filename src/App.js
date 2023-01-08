
import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
 const App=() =>{
 
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
  
    return (
    <div>
     <BrowserRouter>
     <NavBar/>
     <LoadingBar
     height={3}
        color='#f11946'
        progress={progress}
       
      />
     <Routes>
        <Route path= "/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={5} country="in" category="general"/>}/>
        <Route path= "/business" element={<News setProgress= {setProgress} apiKey={apiKey}  key="business" pageSize={5} country="in" category="business"/>}/>
        <Route path= "/entertainment" element={<News setProgress= {setProgress} apiKey={apiKey}   key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
        <Route path= "/general" element={<News setProgress= {setProgress} apiKey={apiKey}  key="general" pageSize={5} country="in" category="general"/>}/>
        <Route path= "/sports" element={<News setProgress={setProgress} apiKey={apiKey}   key="sports" pageSize={5} country="in" category="sports"/>}/>
        <Route path= "/technology" element={<News setProgress= {setProgress} apiKey={apiKey}   key="technology" pageSize={5} country="in" category="technology"/>}/>
        <Route path= "/health" element={<News setProgress= {setProgress} apiKey={apiKey}  key="health" pageSize={5} country="in" category="health"/>}/>
       
        
        <Route/>
       </Routes>
       </BrowserRouter>
       <Footer/>
     </div>
    )
  }
  export default App;
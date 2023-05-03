 
import Header from './Components/Header';
import './scss/app.scss'  
import Home from './pages/Home';
import Card from './pages/Card';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

import React, { useState } from 'react'; 
   

export  const  searchFunctions = React.createContext(null);
function App() {  
   
  const [searchValue, changeSearchValue] = useState(''); 
  
document.title = 'React Pizza';

  return (
   
    <searchFunctions.Provider value={{searchValue, changeSearchValue}} >
     
    <div className="App">
    <div className="wrapper"> 
 
      <Header /> 
      <div className="content">
        <div className="container">
 
          <Routes>
            <Route path='/' element={<Home  />} /> 
            <Route path='/card' element={<Card/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
        </div>   
      </div>  

    </div>
    
    </searchFunctions.Provider>

  ); 
}
 

export default App;

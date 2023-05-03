import React, { useCallback, useContext, useState } from 'react';
import s from './Search.module.scss';
import simg from '../../searcimg.svg';
import {searchFunctions} from '../../App'; 
import debounce from 'lodash.debounce';
 




 
 



 export   const  Search = () => {
  const [testSValue, changeValueTest] = useState('');
  const {searchValue, changeSearchValue} = useContext(searchFunctions); 
  const inputRef = React.useRef();
  const changeSearchValues =  React.useCallback(
    debounce((str) => { 
 
      changeSearchValue(str);
    }, 1000)
    , []
  )
  
  const changeValle = (evt)=> {  

    changeValueTest(evt.target.value)
    changeSearchValues(testSValue);
  }
  



 
  const onClickClose =(evt)=>   { 
    inputRef.current.focus();

    changeSearchValue(''); 
  
  }

  
  return ( 
    <div className={s.root}>
      

       <img src={simg} alt="" className={s.searchimg} />
       <input onChange={(evt)=>{changeValle(evt)}} value={testSValue}  type="text" ref={inputRef} className={s.inputText} name="" id="" placeholder='Поиск...'  />
       {searchValue!=''? <svg className={s.closeIcon}  onClick={()=>{onClickClose()}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg>: ''}
      
      
    </div>
  )
}


 
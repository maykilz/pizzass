import React from 'react'
import PizzaBlock from '../Components/PizzaBlock';
import { useEffect, useState } from 'react';
 
import Sort from '../Components/Sort';
import Categories from '../Components/Categories';
import {skeletonElements, arraySortesServer} from '../Components/constants';
import { useDispatch, useSelector } from 'react-redux'; 
import {setCategoryValue} from '../redux/slices/filterSlice'
import {searchFunctions} from '../App';

import  axios from 'axios';


const Home =() =>  {  
const [pizzasBlocksJsonParse, setPizzasBlock] = useState([]);
const [isLoading, isLoadingChange] = useState(true);
const [categoryValueSort, setCategoryValueSort] =  useState('');
const {searchValue} =  React.useContext(searchFunctions);
const categoryNameSort = useSelector((state)=>state.filter.categoryValueSort);
const dispatch  = useDispatch();  
const  setCategoryNameSort = (id)=> {
 dispatch(setCategoryValue(id)); 
} 
 
 
 let allLink;  
 
  useEffect(()=>{ 
    
    isLoadingChange(true);
    allLink += '' +  (categoryValueSort ? '?sortBy=' + arraySortesServer[categoryValueSort] : '')
  + (searchValue ? (categoryValueSort ? '&' : '?') + 'title=' + searchValue : '')
  + (categoryNameSort ? ((categoryValueSort || searchValue) ? '&' : '?') + 'category=' + categoryNameSort : '');
  allLink = allLink.replace('undefined', ''); 

  axios.get('https://64257abd9e0a30d92b333901.mockapi.io/pizzas' + allLink).then((rsp)=> {
     setTimeout(()=>{ 
     setPizzasBlock(rsp.data);
     isLoadingChange(false);}, 200);
    window.scrollTo(0, 0); 
  }

  );
},[categoryValueSort, categoryNameSort,searchValue ]);
 

   
  const pizzaJsonElements = pizzasBlocksJsonParse.map((ElementPizza) => {
    return (  
      <PizzaBlock  pizzaImage={ElementPizza.imageUrl} pizzaName = {ElementPizza.title} pizzaPrice={ElementPizza.price} sizesPizza={ElementPizza.sizes} typesPizza={ElementPizza.types} />
    );
  }); 

  return ( 
   <>   
  <div className='content__top'>
    <Categories setCategory={setCategoryNameSort}/>        
   <Sort SCategorySort={setCategoryValueSort}/>  
 </div>
   <h2 className="content__title">Все пиццы</h2>
   <div className="content__items"> 
   {isLoading ? (skeletonElements): (pizzaJsonElements)}
   </div></>
  )
}


export default Home; 
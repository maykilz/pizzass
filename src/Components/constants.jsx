import React from 'react';
import { Skeleton } from '../Components/Skeleton';
 

export  let skeletonElements =[...new Array(6)].map((element, index) => {
    return <Skeleton key={index}/>
  })
export  const arraySortesServer = ['categ' , 'price', 'title' ]
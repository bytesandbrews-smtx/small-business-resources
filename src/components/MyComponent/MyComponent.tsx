import React, { FC } from 'react';


interface MyComponentProps {}

export default function MyComponent(props:any){
  console.log(props.dataList);
  return(
    <>
     <h1>Am I loading? {String(props.booleanValue)}</h1>
     <h2>Here's my list: {props.data.toString()}</h2> 
    </>
  )
};



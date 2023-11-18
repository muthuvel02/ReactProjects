import React from 'react'
import Person from './Person';


 export type Person=
{
  id:number;
  name:string;
  age:number;

}
type Props=
{
  peoples:Person[]; //if we are passing an array of objects we should this...

}

const List = ({peoples}: Props ) => {
  return (
   <>
    {peoples.map((peoples) =>{
      return<Person  key={peoples.id} {...peoples}/>
    }
    )}
   </>
  )
}

export default List                
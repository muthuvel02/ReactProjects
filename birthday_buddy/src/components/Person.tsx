import React from 'react'


export type Props=
{
    name : string,
    age : number,
}

const Person = ({name,age}: Props) => {
    return(
        <>
        <h2> {name} </h2>
        <h3> age : { age }</h3>
        </>
    )
}
export  default Person;
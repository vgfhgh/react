import React, { Component } from 'react';

const Person = ({country , name, age}) => {
  

        //초기 데이터
        //const {country , name, age} = props // 부모로부터 전달되는 값
        
        //HTML 템플릿
        return(
            <>
                <h1>{country}</h1>
                <h3>{name}</h3>
                <h4>{age}</h4>
            </>
        )
    
}

export default Person;
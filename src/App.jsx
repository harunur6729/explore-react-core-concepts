import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './component/card'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Book from './Book';
import BookStore from './BookStore';


function App() {
  const actors = ['shakib', 'shoriful Raj' , 'jasim' , 'Rubel', 'salman sah'];

  const books =[
    {id:1, name: 'Physics', price:44},
    {id:2, name:'chemistry', price:58},
    {id:3, name:'Biology', price:38},
    {id:4, name:'Mathematics' , price:28}
  ]

  const singers =[
    {id:1, name: 'Dr. Mahfuzur Rahman', age:68},
    {id:2, name:'Eva Rahman', age:58},
    {id:3, name:'Shuvro Dev', age:38},
    {id:4, name:'Pritom' , age:28}
  ]

  return (
    <>
    <h1>Vite + React</h1>

    <BookStore books={books}/>

{
  singers.map(singer=><Singer singer={singer} />)
}

    <Actor name= 'Bapparaj'/>

    {
      actors.map(actor =><Actor name={actor} />)
    }
    
        {/* <Todo task=" Learn react " 
      isDone ={true}/>

      <Todo task=" Explore Core concepts "
       isDone={false}/>

      <Todo task="Try Jsx" 
      isDone={true}/> */}
      {/* <Device name='Laptop' price='33'/>
      <Device name='Mobile' price='13'/>
      <Device name='monitor' price='55'/>
      <Person/>
      <Student grade=" 7 " score=" 3.55 "/>
      <Student grade=" 8 " score=" 5.00 "/>
      <Student/> */}
    </>
  )
}

function Device(props){//akhane amra props ar poriborte destructuring use kora jabe
  return(
    <div>
      <h3>This device is:{props.name}</h3>
      <p>Price is :{props.price}</p>
    </div>
  )
}

// const {grade, score} ={grade: '7', score: '99'};//akhane props ar poriborte destructuring use kora hoeche
function Student({grade=0, score=0}){
  return(
    <div className='student'>
      <h3>This is a student</h3>
      <p>grade:{grade}</p>
      <p>score:{score}</p>
    </div>
  )
}

export default App

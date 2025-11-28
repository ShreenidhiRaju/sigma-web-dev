import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [jd,setjd] = useState([])
  const fetchdata=async()=>{
    let a=await fetch("https://jsonplaceholder.typicode.com/posts")
    setjd(await a.json())
  }

  useEffect(() => {
    fetchdata()
  }, [])
  

  return (
    <>
    {jd.map(j=>{
      return <Card key={j.id} jsoda={j}/>
    })}
    </>
  )
}

export default App

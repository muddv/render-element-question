import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

function NewElement() {
  return (
    <div>New Element</div>
  )
}

const Home: NextPage = () => {
  let arr = [<NewElement key="0"></NewElement>]
  
  const [n, setN] = useState(2)
  
  const [container, setContainer] = useState(arr)
  
  function handleClick() {
    setN(n + 1)
    console.log(n)
    updateArray()
    addNewElement()
  }
  
  function addNewElement() {
    console.log("addNewElement")
    setContainer(arr)
  }
  
  function updateArray() {
    console.log("updateArray")
    for (let i = 1; i < n; i++) {
      arr[i] = <NewElement key={i}></NewElement>
      console.log(arr)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Add New Element</button>
      {container}
    </div>
  )
}

export default Home

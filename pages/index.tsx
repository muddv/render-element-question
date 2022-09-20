import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

function NewElement() {
  return (
    <div>New Element</div>
  )
}

const Home: NextPage = () => {
  function addNewElement() {
    console.log("Add new element")
  }
  return (
    <div className={styles.container}>
      <button onClick={addNewElement}>Add New Element</button>
      <NewElement></NewElement>
    </div>
  )
}

export default Home

import { useState } from 'react'
import styles from '../styles/Random_cats.module.scss'

const RandomCats = ({ }) => {
  const [catUrl, setCatUrl] = useState("");

  async function getCat() {
    const res = await fetch('https://aws.random.cat/meow')
    const resJson = await res.json();
    setCatUrl(resJson.file)
  }

  return (
    <>
      <h1>Funny cats page</h1>
      <button className={styles.btn} onClick={getCat}>Get New Funny Cat!</button>
      <img className={styles.img} src={catUrl}></img>
    </>
  )
}


export default RandomCats

// const getCatOldStyle = () => {
//   fetch('https://aws.random.cat/meow')
//     .then(res => res.json())
//     .then(res => setCatUrl(res.file))
// }

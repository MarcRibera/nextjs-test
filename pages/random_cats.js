import { useState, useEffect } from 'react'
import styles from '../styles/Random_cats.module.scss'

const RandomCats = ({ }) => {
  const [catUrl, setCatUrl] = useState("");
  useEffect(() => {
    getCat();
    // with empty array as second arg -> useEffect only runs
    // after the initial render
 }, []);


  async function getCat() {
    const res = await fetch('https://aws.random.cat/meow')
    const data = await res.json();
    setCatUrl(data.file)
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

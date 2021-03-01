import { useContext } from 'react';
import AppContext from '../components/AppContext';
import styles from '../styles/Settings.module.scss'

export default function Form() {
  const { changePageTitle } = useContext(AppContext);
  const registerUser = async event => {
    event.preventDefault();
    changePageTitle(event.target.name.value);
  }

  return (
    <>
    <h4>In this section you can change the project title</h4>
    <form className={styles.form} onSubmit={registerUser}>
      <input
        name="name"
        placeholder="Write new title"
        type="text"
        required />
      <button className={styles.btn} type="submit">Change it!</button>
    </form>
    </>
  )
}

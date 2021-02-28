import { useState, useContext } from 'react';
import AppContext from '../components/AppContext';
import styles from '../styles/Login.module.scss';

const Form = () => {
  const { signIn } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const authenticate = e => {
    const validUser =  {name:'mike', password:'adminadmin'};
    e.preventDefault();
    if (username === validUser.name && password === validUser.password) {
      signIn(username);
    }else if (username === '' || password === '') {
      setMessage('Please enter your username and password');
    } else {
      setMessage('The username or password is wrong.');
    }
  };

  return (
    <div className={styles.sign_in}>
      <h1 className={styles.title}>Login to Next.js Test</h1>
      <form className="sign-in">
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        {message != '' && <div className={styles.message}>{message}</div>}
        <button className={styles.btn} onClick={e => authenticate(e)}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;

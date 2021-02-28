import { useContext } from 'react';
import AppContext from '../components/AppContext';
import Nav from './Nav';
import Header from './Header'
import styles from '../styles/Layout.module.scss';

const layout = ({ children }) => {
  const { user, pageTitle } = useContext(AppContext);
  return (
    <div>
      {user && <Nav />}
      {user && <Header pageTitle={pageTitle} />}
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout

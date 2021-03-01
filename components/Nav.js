import { useContext } from 'react';
import AppContext from '../components/AppContext';
import Link from '../components/ActiveLink';
import navStyles from '../styles/Nav.module.scss';

const Nav = ({ children }) => {
  const { user, signOut } = useContext(AppContext);
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link activeClassName={navStyles.selected} href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link activeClassName={navStyles.selected} href="/dashboard">
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link activeClassName={navStyles.selected} href="/users">
            <span> Users </span>
          </Link>
        </li>
        <li>
          <Link activeClassName={navStyles.selected} href="/random_cats">
            <span> Random Cats </span>
          </Link>
        </li>
        <li>
          <Link activeClassName={navStyles.selected} href="/settings">
            <span >Settings</span>
          </Link>
        </li>
      </ul>
      <div className={navStyles.user_section}>
        <p>{user}</p>
        <button className="btn" onClick={signOut}>
          Sign Out
        </button>
      </div>
  </nav>

  )
}

export default Nav

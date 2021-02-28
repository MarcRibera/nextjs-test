import { useContext } from 'react';
import AppContext from '../components/AppContext';

export default function Form() {
  const { changePageTitle } = useContext(AppContext);
  const registerUser = async event => {
    event.preventDefault()
    changePageTitle(event.target.name.value)
  }

  return (
    <>
    <h4>In this section you can change the title project</h4>
    <form onSubmit={registerUser}>
      <input
        className="input"
        name="name"
        placeholder="Write new title"
        type="text"
        required />
      <button className="btn" type="submit">Change it!</button>
    </form>

    <style jsx>
      {`
        form {
          display: flex;
          align-items: center;
          margin-top: 24px;
        }
        .input {
          font-size: 18px;
          line-height: 1.8;
          padding: 8px 16px;
          display: block;
          width: 100%;
          min-width: 260px;
          background: #f3f3f3;
          border: 1px solid #eee;
        }
        .btn {
          padding: 16px;
          margin-left: 24px;
          border: none;
          width: 70%;
          background-color: teal;
          font-size: 16px;
          color: white;
          cursor: pointer;
        }
      `}
    </style>
    </>
  )
}

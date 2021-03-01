const users = ( { users } ) => {
  return (
    <div>
      <h1> Data Fetching (getStaticProps) </h1>
      <p>If you export an async function called getStaticProps from a page, <br />
       Next.js will pre-render this page at build time using the props returned
       by getStaticProps.</p>
      <ol>
        {users.map(({ id, name, email }) => (
          <li key={id}> {name} - {email}</li>
        ))}
      </ol>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return {
    props: {
      users,
    },
  }
}

export default users

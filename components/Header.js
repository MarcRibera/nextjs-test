import PropTypes from 'prop-types'

const Header = ({ pageTitle }) => {
  return (
    <div className="header-wrap">
      <h1 className="title">{pageTitle}</h1>
      <p>Testing Next.js</p>
      <style jsx>
        {`
          .header-wrap {
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid lightgray;
            padding-bottom: 24px;
          }
          .title {
            color: deeppink;
            font-size: 3em;
            margin-bottom: 0px;
          }
          p {
            font-style: italic;
            margin-top: 24px;
          }
        `}
      </style>
    </div>
  )
}

Header.defaultProps = {
  pageTitle:'Next.js Test Project'
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Header

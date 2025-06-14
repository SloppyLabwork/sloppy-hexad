const getNewGameLink = () => window.location.href.replace(/\?.*/, '')

function Footer() {
  return (
    <>
      <div>
        <span className="text-black-50">v{process.env.REACT_APP_VERSION}</span>{' '}
        -{' '}
        <a href={getNewGameLink()} className="link-primary">
          Start new game
        </a>
      </div>
      <div className="footer-wrapper flex-grow-1 d-flex">
        <ul className="footer col d-flex flex-column flex-md-row justify-content-around">
          <li>
            <a
              href="https://www.thefinalswindle.com/"
              className="link-info"
              target="_blank"
              rel="noreferrer"
            >
              The Final Swindle
            </a>
            <span className="text-black-50 ps-1 pe-1">&times;</span>
            <a
              href="https://sloppylabwork.com/"
              className="link-info"
              target="_blank"
              rel="noreferrer"
            >
              Sloppy Labwork
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer

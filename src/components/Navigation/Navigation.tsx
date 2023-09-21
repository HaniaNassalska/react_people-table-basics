export const Navigation = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="#/">
          Home
        </a>

        <a
          className="navbar-item has-background-grey-lighter"
          href="#/people"
        >
          People
        </a>
      </div>
    </div>
  </nav>
)
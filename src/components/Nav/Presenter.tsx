import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

export default class Presenter extends React.Component {
	render() {
		return (
			<nav className="nav">
        <ul className="nav__links">
          <li className="nav__link">
            <a className="link nav__anchor" href="/">Home</a>
          </li>
          <li className="nav__link">
            <a className="link nav__anchor" href="/">Brand</a>
          </li>
          <li className="nav__link">
            <a className="link nav__anchor" href="/">Tour</a>
          </li>
          <li className="nav__link">
            <a className="link nav__anchor" href="/">Contact</a>
          </li>
          <li className="nav__link">
            <a className="link nav__anchor" href="/">
              More <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="nav__dropdown">
              <li><a className="dropdown-link nav__dropdown-link" href="/">Merchandise</a></li>
              <li><a className="dropdown-link nav__dropdown-link" href="/">Merchandise</a></li>
              <li><a className="dropdown-link nav__dropdown-link" href="/">Merchandise</a></li>
            </ul>
          </li>
        </ul>
        <div className="flex-center nav__right">
          <a className="nav__search" href="/"><FontAwesomeIcon icon={faSearch} /></a>
        </div>
      </nav>
		)
	}
}

import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

interface PresenterProps {

}

export default class Presenter extends React.Component<PresenterProps> {
	componentDidMount() {
	}

	render() {
		return (
			<nav className="nav">
        <ul className="nav__links">
          <li className="nav__link">
            <a className="nav__anchor" href="/">Home</a>
          </li>
          <li className="nav__link">
            <a className="nav__anchor" href="/">Brand</a>
          </li>
          <li className="nav__link">
            <a className="nav__anchor" href="/">Tour</a>
          </li>
          <li className="nav__link">
            <a className="nav__anchor" href="/">Contact</a>
          </li>
          <li className="nav__link">
            <a className="nav__anchor">More <FontAwesomeIcon icon={faCaretDown} /></a>
            <ul className="nav__dropdown">
              <li><a href="/">Merchandise</a></li>
              <li><a href="/">Merchandise</a></li>
              <li><a href="/">Merchandise</a></li>
            </ul>
          </li>
        </ul>
        <div className="nav__right">
          <a href="/"><FontAwesomeIcon icon={faSearch} /></a>
        </div>
      </nav>
		)
	}
}

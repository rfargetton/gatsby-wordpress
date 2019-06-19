import React from "react"
import PropTypes from 'prop-types'
import {Link} from "gatsby"

const Header = ({title}) => (

    <header id='main-header'>
        <div id="header-container" className="inner_container">
            <Link className='brand' to="/">{title}</Link>
            <nav>
                <ul>
                    <li><Link to="/contact/">Contact</Link></li>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/myfiles/">My Files</Link></li>
                    <li><Link to="/blog/">Blog</Link></li>
                </ul>

            </nav>
        </div>
    </header>          

)

export default Header
Header.propTypes = {
    title : PropTypes.string
}

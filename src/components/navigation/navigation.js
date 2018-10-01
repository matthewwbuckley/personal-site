import React, { Component } from 'react'
import Link from 'gatsby-link'

class Navigation extends Component {
  constructor(props){
    super(props);

  }
  
  render(){
    return (
      <div className="nav">
        <ul>
          <Link to="/">
            <li>
              <p>
                About
              </p>
              {/* <img src="/images/self-sm.png" /> */}
            </li>
          </Link>
          <Link to="/cv">
            <li>
              <p>
                CV
              </p>
              {/* <img src="/images/chamber-sm.png" /> */}
            </li>
          </Link>
          <Link to="/projects">
            <li>
              <p>
                Projects
              </p>
              {/* <img src="/images/pool.png" /> */}
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Navigation;

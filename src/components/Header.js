import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.span`
  font-size: 1.5rem;
  font-family: 'Chelsea Market', cursive;
`;

const Header = ({ tittle }) => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-4">
        <a href="#!" className="brand-logo"><Text>{tittle}</Text></a>
      </div>
    </nav>
  )
}

Header.propTypes = {
  tittle: PropTypes.string.isRequired
}

export default Header

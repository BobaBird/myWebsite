import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import Toggle from '../Utilities/toggle';
import NavMenu from './nav-menu';

// import NavMenu from './nav-menu';

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 100vw;
  overflow: hidden;
  // padding: 1.45rem 0rem 1.45rem;
  background: inherit;
  marginBottom: 1.45rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  h1 {
    font-weight: 500;
    font-size: 2.25rem;
    a {
      text-decoration: none;
      color: #1f2023;
      text-shadow: 0.5px 0.5px 1px #636363, -0.25px -0.25px 2px #636363;
      padding-left: 20px;
    }
  }
  p {
    color: #4d4d4d;
  }
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: inline-block;
      // margin-left: 1em;
      margin-right: 20px;
      font-size: 1.3rem;
      padding-top: 12px;
    }
  }
  a {
    color: #FF7C00;
    text-decoration: none;
    &:hover {
      transition: all 230ms ease;
    }
  }
`;

const HeaderContainer = styled.div`
  
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 95vw;
  padding: 1.45rem 1.0875rem;

  // @media (min-width: 1082px) {
  //   h1 {
  //     padding-left: 1.25rem;
  //   }
    
  // }

  @media  (max-width: 1486px) {
    display: block;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  min-width: 70vw;
  text-decoration: none;

  @media (max-width: 1565px) {
    max-width: 60vw;
  }
  @media  (max-width: 1486px) {
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
`;

const NavContainer = styled.div`
  // z-index: 3;
  // max-width: 50vw;
  // margin: 0;
  ul {
    display: flex;
    justify-content: space-between;
    li {

    }
  }
  a {
    &:hover {
      transition: all 230ms ease;
      border-bottom: 3px solid cornflowerblue;
    }
   
  }
  

  // @media (max-width: 1565px) {
  //   ul {
  //     visibility: hidden;
  //   }
  // }
`;

const activeLinkStyle = {
  borderBottom: '1px solid cornflowerblue',
  fontWeight: 490,
}


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoContainer>
        <h1>
          <Link
            to="/"
            style={{
              color: '#1f2023',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </LogoContainer>


      <NavContainer>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>About</Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>Contact</Link>
          </li>
          <li>
            <Link to="/portfolio/" activeStyle={activeLinkStyle}>Portfolio</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;

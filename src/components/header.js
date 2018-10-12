import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import Toggle from '../Utilities/toggle';
import NavMenu from './nav-menu';
import Portal from './portal';

const HeaderWrapper = styled.div`
  position: relative;
  display: inline-flex;
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
      padding-left: 40px;
    }
  }
  p {
    color: #4d4d4d;
  }

  ul {
    display: inline-flex;
    // margin-right: 20px;
    li {
      list-style: none;
      margin-right: 20px;
      padding-top: 12px;
      font-size: 1.3rem;
    }
  }
  a {
    color: #FF7C00;
    text-decoration: none;
    &:hover {
      transition: all 230ms ease;

    }
  }
  .active {

  }

  @media (max-width: 1050px) {
    margin: 0;
    width: 100%;
    background: #323944;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 95vw;
  padding: 1.45rem 1.0875rem;

  @media (max-width: 1565px) and (min-width: 1051px) {
    margin: 0;  
    width: 100vw;
  }
`;

const LogoContainer = styled.div`
  width: 70vw;
  text-decoration: none;

  @media (max-width: 1565px) {
    width: 70vw;
  }

  @media (max-width: 1565px) and (min-width: 1051px) {
    margin: 0;  
    max-width: 50vw;
  }
`;

const NavContainer = styled.div`
  z-index: 3;
  max-width: 30vw;
  margin: 0;
  a {
    &:hover {
      transition: all 230ms ease;
      border-bottom: 5px solid cornflowerblue;
    }
  }
  .active {
    border-bottom: 5px solid cornflowerblue;
  }

  @media (max-width: 1050px) {
    ul {
      visibility: hidden;
    }
  }
  @media (max-width: 1565px) and (min-width: 1051px) {
    ul {
      margin-right: 
    }
  }
`;

const MobileNavWrapper = styled.div`
  margin-left: 900px;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: inherit;
    color: cornflowerblue;
    border: none;
    outline: none;
    margin-right: 80px;

  }
  svg {
    height: 3rem;
    width: 3rem;
  }

  @media (max-width: 574px) {
    button {
      margin-left: 200px;
    }
  }

  @media (max-width: 1050px) {
    margin: 0px;

    button {
      z-index: 1;
    }  
    svg {
      visibility: visible;
    }
  }
`;


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


      <MobileNavWrapper>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}><FiMenu /></button>
                <Portal>
                  {on && <NavMenu on={on} toggle={toggle}/>  }
                </Portal>
              </> 

            )}
          </Toggle>
        </MobileNavWrapper>


      <NavContainer>


        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio/">Portfolio</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  </HeaderWrapper>
        // <MobileNavWrapper>
        //   <Toggle>
        //     {({ on, toggle }) => (
        //       <div>
        //         <button onClick={toggle}>Show</button>
        //         {on && <NavMenu on={on} />}
        //       </div> 

        //     )}
        //   </Toggle>
        // </MobileNavWrapper>
);

export default Header;

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi';
import Toggle from '../Utilities/toggle';
import NavMenu from './nav-menu';

import Header from './header'
import Footer from './footer'
import './layout.css'

const MobileNavWrapper = styled.div`
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 20px;
  z-index: 99;


  button {
    background: inherit;
    color: cornflowerblue;
    border: none;
    outline: none;
    margin-right: 80px;
    height: 0;
    width: 0;
    

  }
  svg {
    visibility: hidden;
    height: 3rem;
    width: 3rem;

  }

  @media (max-width: 1565px) {
    margin: 0;

    button {
      z-index: 1;
    }  
    svg {
      z-index: 10;
      margin: 0;
      visibility: visible;
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'Leo Torres', content: 'Web Developer' },
            { name: 'keywords', content: 'Blogs, Websites, E-commerce' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MobileNavWrapper>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}><FiMenu /></button>
                {on && <NavMenu on={on} />}
              </> 

            )}
          </Toggle>
        </MobileNavWrapper>
        <div
          style={{
            position: 'relative',
            margin: '0 auto',
            // maxWidth: 960,
            // padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            minHeight: '100vh',
            fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { Component } from 'react'
import Portal from '../portal'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'gatsby'


export default class NavMenu extends Component {
  render() {
      const { children, toggle, on } = this.props
    return (
      <Portal>
        {on && 
        <MobileNavWrapper>
            <div>{children}</div> 
        </MobileNavWrapper>
        }
      </Portal>
    )
  }
}

const MobileNavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 55%;
    background: #323944;
    // border-radius: 5px;
    box-shadow: 2px 2px  black;
    z-index: 10;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ul {
        font-size: 1.5rem;  
        list-style: none;
        li {
            padding: 20px 0;
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
`

const NavContainer = styled.div`
    position: relative;
    padding: 15px;
`
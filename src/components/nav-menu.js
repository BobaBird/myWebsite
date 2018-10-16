import React, { Component } from 'react';
import { Spring, Transition } from 'react-spring';
import styled from 'styled-components';
// import { Link } from 'gatsby';

import { Portal } from '../Utilities'

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: right;
    text-align: center;
    // top: 4rem;
    top: 80px;
    left: 0;
    width: 100%;
    padding: 20px;
    background: #323944;
    // border-radius: 5px;
    margin-top: 20px;
    box-shadow: 0px 10px 8px rgba(20, 20, 20, 0.6);
    z-index: 99;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ul {
        font-size: 1.5rem;  
        list-style: none;
        li {
            padding: 20px 0;
            // width: 30vw;
            a {
                text-decoration: none;
                color: #fff;
                letter-spacing: 0.08rem;
                text-transform: uppercase;
            }
        }
    }


    @media (max-width: 574px)
      ul {
        li {
          letter-spacing: none;
          padding: 20px;
          width: 65vw;
        }
      }
    }
`;

export default class NavMenu extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (

      <Portal>
        <Transition from={{ y: -20, opacity: 0 }} enter={{ y: 20, opacity: 1 }} leave={{ y: -20, opacity: 0 }}>  
          {on && ( styles => (
            <Wrapper style={{ transform: `translate3d( 0, ${styles.y}px, 0 )`, ...styles }}>
                <div>{children}</div>
              </Wrapper>
          ))}
        </Transition>    
      </Portal>

    );
  }
}



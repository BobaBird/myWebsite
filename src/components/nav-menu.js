import React, { Component } from 'react';
import styled from 'styled-components';
// import Portal from '../Utilities/portal';


const MobileNavWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 55%;
    background: #323944;
    // border-radius: 5px;
    margin-top: 20px;
    box-shadow: 0px 10px 8px rgba(20, 20, 20, 0.6);
    z-index: 10;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ul {
        font-size: 1.5rem;  
        list-style: none;
        li {
            padding: 20px 0;
            width: 30vw;
            a {
                text-decoration: none;
                color: #fff;
                letter-spacing: 0.08rem;
                text-transform: uppercase;
            }
        }
    }

    @media (max-width: 574px) {
      ul {
        li {
          padding: 20px;
          width: 65vw;
        }
      }
    }
`;

export default class NavMenu extends Component {
  render() {
    const { children, on } = this.props;
    return (
      <div>
        {on
        && (
        <MobileNavWrapper>
          <div>{children}</div>
        </MobileNavWrapper>
        )
        }
      </div>
    );
  }
}

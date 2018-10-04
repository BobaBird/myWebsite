import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { FiTwitter, FiFacebook } from 'react-icons/fi'

const SectionContainer = styled.div`

text-align: center;
justify-content: space-around;
ul {
    margin: 0;
    align-items: center;
    li {
        display: inline-flex;
        margin-right: 20px;
        
        svg {
            height: 1.3em;
            width: 1.3em;
            font-weigth: lighter;
        }

        #twitter {
            stroke: #00aced;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: #00aced !important;
            }
        }
        #facebook {
            stroke: #3b5998;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: #3b5998 !important;
            }
        }
        #linkedin {
            fill: #6a6a6a;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: #0077B5 !important;
            }
        }
        #mail {
            fill: #6a6a6a;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: orange !important;
            }
        } 
    }
}
`
const Titles = styled.h1`
    font-size: 2rem;
    text-align: center;
`



const Footer = () => (
  <div
    style={{
        paddingTop: '150px',
        minHeight: '380px',
        color: '#6a6a6a',
        backgroundColor: 'rgba(20, 20, 20, 1)',
        bottom: '0',
    }}
  >
    <SectionContainer>
            <Titles>Social Media</Titles>
            <ul>
                <li>
                    <a href="https://twitter.com/oso_grizz" target="_blank" rel="noopener noreferrer"><FiTwitter id="twitter" /></a> 
                </li>
                <li>
                    <a href=""><FiFacebook id="facebook" /></a> 
                </li>
                <li>
                    <a href="/contact/"><FaEnvelope id="mail" /></a> 
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/leohtorres/" target="_blank" rel="noopener noreferrer"><FaLinkedin id="linkedin" /></a> 
                </li>
            </ul>
    </SectionContainer>
  </div>
)

export default Footer

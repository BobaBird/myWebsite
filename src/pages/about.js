import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  max-width: 960px;
  min-height: 90vh;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  color: #fff;
  p {
    font-size: 1.8rem;
    line-height: 2.9rem;
    font-weight: 300;
  }
  h2 {
    
  }
  a {
    color: #fff;
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
  }
`

const About = () => (
  <Layout>
    <Container>
    <h1>About</h1>
    <p>
      Hi, my name is Leo Torres. I enjoy making the internet one website at a time. I'm a one
      man team that can provide you with a professional, great looking website to showcase
      your Blog, Business or whatever it is you want to share.
    </p>
    <p >
      <Link to="/portfolio/"> Take a look at some of my work.</Link>
    </p> 
    <p>
      <Link to="/contact/"> Or, let's get started now.</Link>
    </p>
    </Container>
  </Layout>
)

export default About

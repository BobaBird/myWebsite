import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Container = styled.div`
  position: relative;
  text-align: center;
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

    a {
      text-align: left !important;
    }
  }
  h1 {
    font-size: 4.25rem;
    font-weight: 300;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
  }

  @media (max-width: 475px) {
    h1 {
      padding-top: 0;
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.9rem;
    }
  }
`
const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
`

const About = ({ data }) => (
  <Wrapper>
    <Img
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '122.82vh',
        // height: '140vh',
        filter: 'brightness(70%)',
        overflowY: 'hidden',
        zIndex: '-10',
      }}
      fluid={data.background.fluid} alt="Bears in the mist." 
      />   
  <Layout>
    <Container>
    <title>About</title>
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
  </Wrapper> 
)

export default About

export const query = graphql`
  query aboutPage {
    background: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
			fluid(maxWidth: 1240) {
      ...GatsbyImageSharpFluid
      }
    }
  }
`
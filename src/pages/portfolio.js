import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
}


const Container = styled.div`
    text-align: center;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
    margin-top: 1.45rem;
    margin-bottom: 200px;
    max-width: 960px;
    min-height: 80vh;
    color: #4d4d4d;

    h1 {
      font-size: 3.25rem;
      font-weight: 300;
    }
    p {

    }
    a {
    color: #4d4d4d;
    text-decoration: none;
      &:hover {
        color: #898989;
        border-bottom: 2px solid;
      }
    }
    @media (max-width: 475px) {
      display: block;
    }

`
const CardContainer = styled.div`
  display: flex;;
  justify-content: space-around;
  // padding: 1.45rem 1.0875rem 1.45rem;

  @media (max-width: 475px) {
    display: block;
    padding: 0;
  }
  @media (min-width: 476px) and (max-width: 1315px) {
    display: block;
    padding: 0;
  }
`;
const Card = styled.div`
  position: relative;
  margin: 20px;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  min-width: 400px;
  box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.15), 0 17px 17px 0 rgba(0, 0, 0, 0.15);

  h1 {
    position: relative;
    margin-top: 0;
    z-index: 12;
    // visibility: hidden;
    padding: 0.8rem;
    &:hover {
      // visibility: visible;
    }
  }

  p {
    position: relative;
    z-index: 99;
    padding: 0.8rem;
    font-size: 18px;
    color: #fff;
  }

  @media (max-width: 475px) {
    margin: 40px auto;
    min-width: 80vw;

    p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 476px) and (max-width: 1315px) {
    display: block;
    padding: 0;
    margin: 40px auto;
    width: 50vw;
  }
  `

const Wrapper = styled.div`
  background: #323944 !important;

  @media  (max-width: 475px) {
    max-width: 100vw;
    padding: 0.025rem;
    overflow: hidden;
  }
`

const Portfolio = ({ data }) => (
  <Wrapper>
    <Layout>
        <Container>

            <h1>Portfolio</h1>
            <p>Please have a look at some examples of my work.</p>

            <CardContainer>
                <Card>
                    <a href="https://somaticwellness-coach.com/" target="_blank" rel="noopener noreferrer">
                    <Img
                        style={{height: '100%'}}
                        fluid={data.somatic.fluid} 
                    />
                    </a>
                </Card>

                <Card>
                    <Img
                    
                    fluid={data.card.fluid} 
                    />
                </Card>

                <Card>
                    <Img
                    
                    fluid={data.card.fluid} 
                    />
                </Card>
            </CardContainer>

            <CardContainer>
            <Card>
                <Img
                
                fluid={data.card.fluid} 
                />
            </Card>

            <Card>
                <Img
                
                fluid={data.card.fluid} 
                />
            </Card>

            <Card>
                <Img
                
                fluid={data.card.fluid} 
                />
            </Card>
            </CardContainer>

            <Link to="/">Go back to the homepage</Link>

        </Container>
    </Layout>
  </Wrapper> 
)

export default Portfolio

export const query = graphql`
  query PortfolioQuery {
    card: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
			fluid(maxWidth: 1240) {
      ...GatsbyImageSharpFluid
      }
    }
    somatic: imageSharp(fluid: {originalName: {eq: "somatic.png" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }
  }
`
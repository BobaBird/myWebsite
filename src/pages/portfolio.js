import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'


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
`
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.45rem 1.0875rem 1.45rem;

  @media only screen and (maxWidth: 425px) {
    display: inline-block;
    justify-content: space-around;

  }
  @media only screen and (min-width: 425px) {
    padding: 0 !important;
  }
`

const Wrapper = styled.div`
  background: #323944 !important;
`

const Portfolio = () => (
    <Wrapper>
  <Layout>
    <Container>

        <h1>Portfolio</h1>
        <p>Please have a look at some examples of my work.</p>

        <CardContainer>
            <div>
                <a href="https://somaticwellness-coach.com/" target="_blank" rel="noopener noreferrer">
                {/* <Img
                    style={{height: '100%'}}
                    fluid={data.somatic.fluid} 
                /> */}
                </a>
            </div>

            <div>
                {/* <Img
                
                fluid={data.card.fluid} 
                /> */}
            </div>

            <div>
                {/* <Img
                
                fluid={data.card.fluid} 
                /> */}
            </div>
        </CardContainer>

        <CardContainer>
        <div>
            {/* <Img
            
            fluid={data.card.fluid} 
            /> */}
        </div>

        <div>
            {/* <Img
            
            fluid={data.card.fluid} 
            /> */}
        </div>

        <div>
            {/* <Img
            
            fluid={data.card.fluid} 
            /> */}
        </div>
        </CardContainer>

        <Link to="/">Go back to the homepage</Link>

    </Container>
  </Layout>
  </Wrapper> 
)

export default Portfolio
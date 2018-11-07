import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Container = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  margin-top: 1.45rem;
  max-width: 960px;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  color: #fff;
  h1 {
    font-size: 3.25rem;
    font-weight: 300;
  }
  h2 {
    font-weight: 300;
  }
  p {
    color: #fff;
  }
  a {
    color: #fff; 
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
  }
`;

const Wrapper = styled.div`

`;

const IndexPage = ({ data }) => (
  <Wrapper>
    <Img
      style={{
        position: 'fixed',
        // backgroundAttachment: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        // height: '122.82vh',
        height: '140vh',
        filter: 'brightness(80%)',
        overflow: 'hidden',
        zIndex: '-10',
      }}
      fluid={data.background.fluid}
      alt="Bears in the mist."
    />
    <Layout>
      <Container>
        <h1>Leo Torres | Web Developer</h1>
        <h2>Websites, Blogs, E-Commerce</h2>
        <p>Custom sites for what you need.</p>
      </Container>
    </Layout>
  </Wrapper>
);

export default IndexPage;

export const query = graphql`
  query siteImageQuery {
    background: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
			fluid(maxWidth: 1240) {
      ...GatsbyImageSharpFluid
      }
    }
  }
`;

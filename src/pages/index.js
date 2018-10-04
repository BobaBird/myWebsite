import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  margin-top: 1.45rem;
  max-width: 960px;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  color: #fff;
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
`

const IndexPage = () => (
  <Layout>
    <Container>
          <h1>Leo Torres | Web Developer</h1>
          <h2 >Websites, Blogs, E-Commerce</h2>
          <p >Custom sites for what you need.</p>
    </Container>
  </Layout>
)

export default IndexPage

import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  position: relative;
  z-index: 2;
  padding: 0px 1.0875rem 1.45rem;
  margin-top: 1.45rem;
  max-width: 960px;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  color: #fff;
  // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
  // Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Container>
  </Layout>
)

export default IndexPage

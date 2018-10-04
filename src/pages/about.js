import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>
      Hi, my name is Leo Torres. I enjoy making the internet one website at a time. I'm a one
      man team that can provide you with a professional, great looking website to showcase
      your Blog, Business or whatever it is you want to share.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About

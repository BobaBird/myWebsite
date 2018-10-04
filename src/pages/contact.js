import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <div className="">
        <h1>Contact</h1>
        <p>Want to get started; still have questions? Drop me a line.</p>
        <p></p>

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: </label>   
              <input type="text" name="name" required />
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" required /></label>
          </p>
          
          <p >
            <label style={{display: 'block', marginLeft: '225px', padding: '20px 0'}} >Message </label>
            <textarea name="message" cols="50" rows="8" required ></textarea>
            
          </p>
          <p>
            <button className="contactBtn "  type="submit"><span>Send</span></button>
          </p>
        </form>

        <Link to="/">Go back to the homepage</Link>
      </div>
  </Layout>
)

export default Contact
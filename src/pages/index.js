import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layouts/layout'

const IndexPage = () => (
  <Layout>
    <div className="sub-main">
      <div className="header">
        <div className="header-container-text">
          <h1>Matthew Buckley</h1>
          <h3>Self Taught Full Stack Web Developer with a Scientific Background</h3>
          <p>Learning the MERN stack; Mongo, Express, React and Node, along with associated technologies.</p>
        </div>
        <div className="image-container">
          <img src="./images/self-greendots-trans.png" alt=""/>
        </div>
      </div>
      <div className="content">
        <h3>About</h3>
        <p>
          I am a self taught Website Developer with a science background. I am looking for opportunities to learn and solve problems.
        </p>
        <p>
          I am learning web development with a focus on the React framework and connected technologies. 
          I have explored game development, and have a game published on Android. 
          I have a PhD in Chemistry where I investigated Ionic Liquid evaporation under Ultra-High Vacuum conditions.
        </p>
        <h3>Personal</h3>
        <p>
          I was born at 1 AM on the 10th of January in 1989 during a yelling match between my mother and a thunderstorm. 
          On being born I made the concious decision to stop breathing followed by 	the unconcious decision to start again. 
          I was moved to a small box to help me live, which I found to be a very good arrangement and have maintained to this day.
        </p>
        <p>
          I am quiet, patient, and happily boring. I have an interest in games, science, politics, and technology. 
          I am exploring internet-based development because I think that everyone would get along if they started
          communicating openly with each other. 
        </p>
        <br/>
        <h3>Contact</h3>
        <p>
          Please feel free to contact at: <strong>matthewwbuckley@gmail.com</strong>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/layout'

const BlogPage = ({data}) => (
  <Layout>
  <div className="sub-main">
    <div className="header">
      <div className="header-container-text">
        <h1>Projects</h1>
      </div>
    </div>
    <div className="content">
      <div className="project-grid">
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id} className="project-post">
            <Link to={post.node.frontmatter.path}>
              <div className="image-container">
                <img src={post.node.frontmatter.image} alt="" />
              </div>
            </Link>
            <div className="project-header">
              <Link to={post.node.frontmatter.path}>
                <div className="project-text">
                  <h3>
                    {post.node.frontmatter.title}
                  </h3>
                  <p>
                    {post.node.frontmatter.description}
                  </p> 
                  <small>
                    {post.node.frontmatter.info}
                  </small>
                </div>
              </Link>
            </div>      
          </div>
        ))}
      </div>
    </div>
  </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            info
            image
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage

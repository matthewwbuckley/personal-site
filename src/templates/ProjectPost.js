import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/layout'

export default function Template({data}) {
  const post = data.markdownRemark;
  console.log(data, data.markdownRemark, post)
  return (
    <Layout>
      <div className="sub-main">
        <div className="content">
          <div className="header">
            <h1>{post.frontmatter.title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html:post.html }} />
        </div>
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path }}){
      html
      frontmatter {
        path
        title
      }
    }
  }
`

import React from "react"

import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout/layout.component';
import Article from '../components/article/article.component';
import Project from '../components/project/project.component';
import ThumbnailArticle from '../components/article/thumbnail-article.component'
import Advertisment from '../components/advertisment/advertisment.component'
import Art from '../components/art/art.component'
import Subscribe from '../components/subscribe/subscribe.component'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="home-page-grid-container">
        <ThumbnailArticle />
        <ThumbnailArticle />
        <ThumbnailArticle />
      </div>
      <hr />
      <div className="home-page-grid-container">
        <div><Project /></div>
        <div>
          <Article />
          <Article />
        </div>
        <div>
          <Advertisment />
          <div className="art-container">
            <Art />
            <Art />
          </div>
          <Subscribe />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 2) {
    nodes {
      excerpt
      frontmatter {
        title
        slug
        readTime
        category
        date(formatString: "MMM, Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`

export default IndexPage;

import React from "react"

import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout/layout.component';
import Project from '../components/project/project.component';
import ThumbnailArticle from '../components/article/thumbnail-article.component'
import Advertisement from '../components/advertisement/advertisement.component'
import Subscribe from '../components/subscribe/subscribe.component'
import HomeArticleSection from '../components/home-article-section/home-article-section.component'
import HomeArtSection from '../components/home-art-section/home-art-section.component'

import CustomButton from '../components/custom-button/custom-button.component'

import robotSVG from '../assets/robot.svg'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="home-page-grid-container post-header">
        <ThumbnailArticle />
        <ThumbnailArticle />
        <ThumbnailArticle />
      </div>
      <hr />
      <div className="home-page-grid-container">
        <div><Project /></div>
        <div>
          <HomeArticleSection />
          <hr />
          <div className="find-more-container">
            <img src={robotSVG} />
            <CustomButton>Find More</CustomButton>
          </div>
        </div>
        <div>
          <Advertisement />
          <HomeArtSection />
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

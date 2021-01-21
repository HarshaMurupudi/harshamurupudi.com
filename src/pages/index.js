import React from "react"
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  console.log(data);
  return <div>Hello world!</div>
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

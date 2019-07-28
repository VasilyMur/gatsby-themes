import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function Seo({frontmatter, lang, meta}) {
  const { title, description, canonical } = frontmatter;
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        console.log('DATA >>>', data)
        const metaDescription =
          description || data.site.siteMetadata.description

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: `${title} | ${data.site.siteMetadata.title}`,
              },
              { 
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:title`,
                content: `${title} | ${data.site.siteMetadata.title}`,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `yandex-verification`,
                content: `dab98d5d02a811f6`,
              },
              {
                name: `google-site-verification`,
                content: `cxTKesRq2HkD0vaPKHISvrIKHQacdaMoAKFKut1TQKk`,
              },
            ]
              .concat(meta)}
          >
          <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}/${canonical ? `${canonical}/` : ''}`} />
          </Helmet> 
        )
      }}
    />
  )
}


Seo.defaultProps = {
  lang: `ru`,
  meta: [],
}

Seo.propTypes = {
  frontmatter: PropTypes.object,
  lang: PropTypes.string,
  meta: PropTypes.array,
}

 
export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

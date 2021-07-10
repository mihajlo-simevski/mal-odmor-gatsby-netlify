import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import Header from './header'
// import Navbar from './navbar';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              id
              name
              link
              imageUrl
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={'title'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        </Helmet>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
            maxWidth: "2048px", 
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
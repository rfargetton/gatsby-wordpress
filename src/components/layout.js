import React from 'react'
import Header from './header.js'
import Helmet from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'

const Layout = ({children, data, pageTitle}) => (
    <StaticQuery 
        query = {query}
        render = {({site:{siteMetadata:{title, description}}}) => {

            return (
                <div>
                    <Helmet 
                        defaultTitle = {title} 
                        titleTemplate = {title + ' | %s'} 
                    >
                        <meta name='description' content={description} />
                    </Helmet>            
                    <Header title={title} />
                    <main className='main_container'>
                      {children}
                    </main>
                    <footer className="inner_container">
                        <p>Coded by Romaric Fargetton</p>
                    </footer>
                </div>                
            )

        }}
           
    />

)

export default Layout 
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

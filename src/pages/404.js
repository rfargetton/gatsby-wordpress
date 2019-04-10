import React from "react"
import Helmet from 'react-helmet'
import Layout from "../components/layout"

const pageTitle = 'Oops...'

export default class myFiles extends React.Component {

    render(){
        return (
            <Layout>
                <Helmet title={pageTitle} />
                <main className="container">
                    <h1>{pageTitle}</h1>
                    <hr></hr>
                    <p>There's nothing here</p>
 
                </main>
            </Layout>
        )
    }
}


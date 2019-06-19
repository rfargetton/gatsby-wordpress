import React from "react"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import PageHead from '../components/page-head';

export default class myFiles extends React.Component {

    render(){
        return (
            <Layout>
              <Helmet title='404' />
              <PageHead pageTitle={'Oops! There\'s nothing there'} />
          </Layout>
        )
    }
}


import React from 'react';
import Layout from '../components/layout';
import PageHead from '../components/page-head';

class Home extends React.Component {

    render(){
        return (
            <Layout>
              <PageHead pageTitle='Welcome to my Gatsby Wordpress Blog !' />
            </Layout>
        )
    }
}

export default Home

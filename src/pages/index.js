import React from "react"
import Layout from "../components/layout"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title : "Home"
        };
    }

    render(){
        return (
            <Layout>
                <main className="container">

                    <h1>{this.state.title}</h1>
 
                </main>
            </Layout>
        )
    }
}

export default Home

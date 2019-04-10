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
        console.log(this.props.data);
        return (
            <Layout>
                <main className="container">

                    <h1>{this.state.title}</h1>
                    <hr></hr>
 
                </main>
            </Layout>
        )
    }
}

export default Home

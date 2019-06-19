import React from "react";
import Layout from "../components/layout";

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
                <main>
                  <div className="page_head">
                    <div className="head_content">
                      <div className="container">
                        <h1 dangerouslySetInnerHTML={{__html : this.state.title }} />
                      </div>
                    </div>
                  </div> 
                </main>
            </Layout>
        )
    }
}

export default Home

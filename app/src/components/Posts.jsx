import React, { Component } from 'react'
import {
    NavLink
  } from 'react-router-dom'
class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    PaintPost(){
        let posts = this.state.posts;
        let postelms = posts.map(p => {
                return (
                    <React.Fragment key={p.id}>
                    <h2>{p.title}</h2>
                    <span>{p.body}</span>
                    </React.Fragment>
                );
        });
        return postelms;
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts' , {

        })
        .then(res => res.json())
        .then(data => {
            this.setState({posts : data});
            console.log(this.state);
            this.render();
        })
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                <NavLink to="/posts/add" className="btn btn-success">Add</NavLink>
                <hr/>
                {
                  this.PaintPost()
                }
            </div>
        )
    }
}

export default Posts
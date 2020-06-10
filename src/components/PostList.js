import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class PostList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{ 
            console.log(response);
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error);
            this.setState({errorMsg: 'Error......'})
        })
    }
    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div className='post-list'>
                PostList:
                <ul>
                {
                    
                        posts.length ?
                        posts.map(post => <li>{post.title}</li>)
                        : null
                    
                }
                {
                    errorMsg ? <div> {errorMsg} </div> : null
                }
                </ul>
            </div>
        );
    }
}

export default PostList;
import React from "react"
import { Post } from "../Components";
import "./App.css";

export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            Posts: []
        }
    }

    async fetchPosts () {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // const posts = [];

        if (data) {
            // data.forEach(async item => {
            //     const resp = await fetch(`https://jsonplaceholder.typicode.com/photos/${item.id}`);
            //     const itemData = await resp.json();

            //     item['photo'] = itemData;
            //     posts.push(item);
            // });

            this.setState({
                Posts: [...data]
            });
        }
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render () {
        return (
            <div className="container">
                <header className="page_header">
                    <h1 className="page_header_title">Blog Post</h1>
                    <p className="page_header_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora deleniti minima corrupti, enim expedita incidunt quidem cumque adipisci! Esse non, voluptatem culpa corporis laboriosam necessitatibus cum provident consequatur laborum.</p>
                </header>
                <div className="posts_list">
                    { this.state.Posts && this.state.Posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        )
    }
}
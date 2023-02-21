import React from "react"

export default class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: {}
        }
    }

    async fetchPhoto() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.post.id}`);
        const data = await response.json();

        if (data) {
            this.setState({
                image: data
            })
        }
    }
    
    componentDidMount() {
        this.fetchPhoto();
    }

    render () {
        return (
            <div className="post">
                <img src={this.state.image.thumbnailUrl} alt={this.state.image.title} />
                <div className="post_container">
                    <h4 className="post_title">{ this.props.post.title }</h4>
                    <p className="post_body">{ this.props.post.body }</p>
                </div>
            </div>
        )
    }
}
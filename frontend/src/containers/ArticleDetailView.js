import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'antd'
export default class ArticleDetail extends Component {
    state = {
        article: {}
    }

    getArticle = () => {
        const { params: { articleID } } = this.props.match;
        // const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({ article: res.data })
            })
    }

    componentDidMount() {
        this.getArticle()
    }
    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}

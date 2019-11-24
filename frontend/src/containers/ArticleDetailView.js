import React, {Component} from 'react'
import axios from 'axios'
import {Card, Button} from 'antd'
import CustomForm from "../components/Form";

export default class ArticleDetail extends Component {
    state = {
        article: {}
    }

    getArticle = () => {
        const {params: {articleID}} = this.props.match;
        // const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => {
                this.setState({article: res.data})
            })
    };

    componentDidMount() {
        this.getArticle()
    }

    handleDelete = (event) => {
        const {params: {articleID}} = this.props.match;
        // const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
        this.props.history.push('/');
        this.forceUpdate(); //better not use it
    };

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm
                    requestType={"put"}
                    articleID={this.props.match.params.articleID}
                    btnText={"Update"}
                />
                <form onSubmit={this.handleDelete}>
                    <Button type={"danger"} htmlType={"submit"}>Delete</Button>
                </form>
            </div>
        )
    }
}

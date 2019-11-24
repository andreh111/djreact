import React, {Component} from 'react'
import Articles from '../components/Article'
import axios from 'axios'
import CustomForm from "../components/Form";

export default class ArticleList extends Component {
    state = {
        articles: []
    };
    getArticles = () => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({articles: res.data})
            })
    };

    componentDidMount() {
        this.getArticles()
    }

    render() {
        return (
            <div>
                <Articles data={this.state.articles}/>
                <br/>
                <h2>Create an article</h2>
                <CustomForm
                    requestType={"post"}
                    articleID={null}
                    btnText={"Add"}
                />
            </div>
        )
    }
}

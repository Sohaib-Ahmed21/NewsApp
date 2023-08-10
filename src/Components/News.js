import React, { Component } from 'react'
import Newsitem from './Newsitem'
import './App.css'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: 1,
            loading: false,
            totalresults: 67

        }

    }
    static defaultProps = {
        category: 'general',
      };

      static propTypes = {
        category: PropTypes.string,
      };

    async componentDidMount() {
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e59a1a870f984b708a8bfc28965b8d69&page=${this.state.page}&pageSize=20`)
        let parseddata = await data.json()
        this.setState({ articles: parseddata.articles, totalresults: parseddata.totalResults, loading: false });
    }
    handle_Next = async () => {
        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e59a1a870f984b708a8bfc28965b8d69&page=${this.state.page + 1}&pageSize=20`)
        let parseddata = await data.json()
        await new Promise((resolve) => {
            this.setState({ articles: parseddata.articles, page: this.state.page + 1, loading: false }, resolve);
        });
        window.scrollTo(0, 0);
    }
    handle_Previous = async () => {
        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e59a1a870f984b708a8bfc28965b8d69&page=${this.state.page - 1}&pageSize=20`)
        let parseddata = await data.json()
        await new Promise((resolve) => {
            this.setState({ articles: parseddata.articles, page: this.state.page - 1, loading: false }, resolve);
        });
        window.scrollTo(0, 0);

    }
    capitalizeFirstLetter(str) {
        return str.replace(/^\w/, (c) => c.toUpperCase());
      }
    render() {

        return (
            <>
            <h1 className="container my-3 d-flex justify-content-center">
                News-Monkey Top {this.capitalizeFirstLetter(this.props.category)} Headlines
            </h1>
                {this.state.loading &&
                    <div className="image-container centered">
                        <Spinner />
                    </div>
                }
                {!this.state.loading &&
                    <div className="container my-3" >

                        <div className="row">
                            {this.state.articles?.map((element) => {
                                return (
                                    <div className="col-md-4 my-3" key={element.url}>
                                        <Newsitem
                                            title={element.title ? element.title : ""}
                                            description={element.description ? element.description : ""}
                                            imageurl={element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-653169?width=1280"}
                                            url={element.url}
                                            author={element.author} 
                                            date= {element.publishedAt}
                                            source={element.source}
                                            />
                                            
                                    </div>
                                );
                            })}
                        </div>
                        <div className='content d-flex justify-content-between'>
                            <button type="button" disabled={this.state.page === 1} onClick={this.handle_Previous} className="btn btn-dark">&larr; Previous</button>
                            <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalresults / 20)} onClick={this.handle_Next} className="btn btn-dark">&rarr; Next</button>
                        </div>
                    </div>}
            </>
        )
    }
}

export default News

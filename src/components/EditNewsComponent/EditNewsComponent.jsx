import React, { Component } from 'react'
import './EditNewsComponent.css'

export default class EditNewsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newsTitle: '',
            newsID: '',
            newsAuthor: '',
            newsLocation: '',
            newsType: ''
        }
    }
    newsTitleHandler = (event) => {
        this.setState({
            newsTitle : event.target.value
        })
    }

    newsIDHandler = (event) => {
        this.setState({
            newsID : event.target.value
        })
    }

    newsAuthorHandler = (event) => {
        this.setState({
            newsAuthor : event.target.value
        })
    }

    newsLocationHandler = (event) => {
        this.setState({
            newsLocation : event.target.value
        })
    }

    newsTypeHandler = (event) => {
        this.setState({
            newsType : event.target.value
        })
    }

    onSubmitHandler = (event) =>{
        event.preventDefault()

        fetch('http://localhost:3500/api/v1/news/edit',{
        method:'PATCH',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            newsTitle: this.state.newsTitle,
            newsID:this.state.newsID,
            newsAuthor: this.state.newsAuthor,
            newsLocation: this.state.newsLocation,
            newsType: this.state.newsType
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message)
            {
                alert(data.message)
            }
            else{
                alert(`The news on ${data.newsType} is updated successfully`)
                window.location.href = '/'
            }
        })
    }
  render() {
    const {newsID, newsTitle, newsAuthor, newsLocation, newsType} = this.state;
    return (
        <React.Fragment>
            <form className='form-container' onSubmit={this.onSubmitHandler}>
            <h2>Update News</h2>
            <div className='form-group'>
                <label>News ID</label>
                <input
                    type='text'
                    placeholder='Enter the news ID'
                    value={newsID}
                    onChange={this.newsIDHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>News Title</label>
                <input
                    type='text'
                    placeholder='Enter the news title'
                    value={newsTitle}
                    onChange={this.newsTitleHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>News Author</label>
                <input
                    type='text'
                    placeholder='Enter the news author'
                    value={newsAuthor}
                    onChange={this.newsAuthorHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>News Location</label>
                <input
                    type='text'
                    placeholder='Enter the news location'
                    value={newsLocation}
                    onChange={this.newsLocationHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>News Type</label>
                <input
                    type='text'
                    placeholder='Enter the news type'
                    value={newsType}
                    onChange={this.newsTypeHandler}
                    required
                />
            </div>

            <button type='submit' className='submit'>Update News</button>
            </form>
        </React.Fragment>
    )
  }
}

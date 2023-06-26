import React, { Component } from 'react'

export default class DeleteNewsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newsID:''
        }
    }
    
    newsIDHandler = (event) => {
        this.setState({
            newsID:event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        fetch('http://localhost:3500/api/v1/news/delete',{
        method:'DELETE',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            newsID:this.state.newsID
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message)
            {
                alert(data.message)
            }
            else{
                alert(`The news with ID ${data.newsID} is deleted successfully`)
                window.location.href = '/'
            }
        })
    }

  render() {
    const {newsID} = this.state
    return (
      <React.Fragment>
        <form className='form-container' onSubmit={this.onSubmitHandler}>
            <h2>Delete News</h2>
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
            
            <button type='submit' className='submit'>Delete News</button>
            </form>
      </React.Fragment>
    )
  }
}

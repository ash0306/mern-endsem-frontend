import React from 'react'
import './NewsComponent.css'

function NewsComponent({newsItem}) {
    return (
        <div className="card">
          <div className="text-container">
            <h3>{newsItem.newsTitle}</h3>
            <p className="location"><span>{newsItem.newsType}</span> - {newsItem.newsID}</p>
            <p className="status">
            Authored by : {newsItem.newsAuthor}, {newsItem.newsLocation}
            </p>
          </div>
        </div>
      )
}

export default NewsComponent
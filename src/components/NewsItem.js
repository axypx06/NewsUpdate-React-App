import React from 'react'

const NewsItem =(props)=>{
  
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card" >
        <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-3-770x433.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <span className="badge rounded-pill text-bg-info">{source}</span>
        <h5 className="card-title">{title}..</h5>
        <p className="card-text">{description}..</p>
        <p className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
</div>
      </div>
    )
  
}

export default NewsItem

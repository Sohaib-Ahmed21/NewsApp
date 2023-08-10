import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageurl, url, date, author, source } = this.props;
        return (
            // style={{ height: "22.5%", overflow: "hidden" }}
            <>
                <div className="card" >
                    <img src={imageurl} className="card-img-top" alt="..." style={{ height: "40%" }} />
                    <div className="card-body" >
                    <span style={{zIndex : 1, left: "95%"}} class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"> {source["name"]}
  </span>
                        <h5 className="card-title">{`${title.length >= 45 ? title.slice(0, 40) : title}`}{title.length < 45 ? '' : '...'}</h5>
                        <p className="card-text" > {`${description.length >= 60 ? description.slice(0, 60) : description}`}{description.length < 60 ? '' : '...'}</p>
                        <p className="card-text"> <small className="text-muted"> By {author?author:"unknown"} on {date?(new Date(date)).toGMTString():"unknown date"} </small></p>
                        <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Newsitem
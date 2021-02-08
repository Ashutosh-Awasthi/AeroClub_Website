import React, { useEffect, useState } from 'react';
import '../css/Eventhome.css';
import { Accordion, Card } from 'react-bootstrap';

export default function EventHome() {

  const [news, SetNews] = useState([])

  useEffect(() => {
    fetch('/api/news', {
      method: 'get'
    }).then(res => res.json())
      .then(data => SetNews(data))
  }, [])
  return (


    <div class="container-fluid">
      <div className="pages">
        <div className="jumbotron overlay">
          <div className="pageTitle titleBold headingc white-headingc" style={{ color: 'white' }}>
            Updates
            </div>
          {/* <div className="miniSep"></div> */}
          <div className='containernews leftText pageTextCont' style={{ background: 'transparent' }}>
          
            <div className="tickerv-wrap">
            
            <ul>
            {
            news.map(singleNews =>(
              <div style={{padding:'10px'}}>
              <li style={{fontSize:'21px'}}>{singleNews.title}<span className='float-right' style={{fontSize:'15px'}}> .. -published on{
                              new Date(singleNews.publishedAt).toLocaleDateString()
                            }</span></li>
                            </div>
            ))
            }
            </ul>
            </div>
            <p className="cent">
                        <a class="btn btn-info" href="/news" role="button" style={{margin: '10px'}}>
                            Details
                    </a></p>
          
          </div>

        </div>
      </div>
    </div>

  )
}

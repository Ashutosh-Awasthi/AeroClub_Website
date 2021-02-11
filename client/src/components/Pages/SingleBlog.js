import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import '../../css/SingleBlog.css'
import Loading from '../../Animations/Loading'
import { Container, Jumbotron } from 'react-bootstrap'
import baseURL from "../../baseURL"

function SingleBlog() {

    const { blogId } = useParams()
    const [blog, setBlog] = useState(undefined)
    const history = useHistory()

    const year = {
        1: "1st year",
        2: "2nd year",
        3: "3rd year",
        4: "final year",
    }

    useEffect(() => {
        fetch(`${baseURL}/api/blogstoUI/${blogId}`, {
            method: 'get'
        }).then(res => res.json())
            .then(data => {
                if (data.error) history.push('/404')
                else setBlog(data)
            })
    }, [])

    return (
        <div>
            <Loading time={1.5} />

            <div className=" pagesp" style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)), url(${blog?.pic})` }}>
                <div className="overlayp">
                    <div className="pageTitlep titleBoldp">
                        {blog?.title}
                        <p className="meta" ><em style={{ fontSize: '0.8rem' }}>

                            Posted by {blog?.postedBy.linkedin_url !== "https://www.linkedin.com/in/username/" ? <a href={blog?.postedBy.linkedin_url} target='_blank'>{blog?.postedBy.name}</a> : blog?.postedBy.name} {`(reg. no :- ${blog?.postedBy.registration_no == 'xxxxxxxx' ? 'NA' : blog?.postedBy.registration_no}, ${blog?.postedBy.year == -1 ? 'year - NA' : year[blog?.postedBy.year]})`} on {new Date(blog?.publishedAt).toLocaleDateString()}</em></p>
                    </div>
                </div>
            </div>
            <Jumbotron fluid style={{ background: 'white', width: '100%', margin: 'auto', paddingBottom: '1rem', paddingLeft: '2rem' }}>
                <Container >
                    <p dangerouslySetInnerHTML={{ __html: blog?.body }}></p>
                </Container>
                <hr />
            </Jumbotron>
        </div>
    )
}

export default SingleBlog

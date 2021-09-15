import React from 'react';
import {blogList} from './blogList';
import {useParams} from 'react-router-dom'

function BlogDetail() {

    const {id} = useParams()

    

    let blogData = blogList[id-1]

    console.log(Object.values(blogData.mainContent))

    return (
        <>
            <section className="blogDetail">
                <div className="container">
                    <h2 className="text-center text-success px-md-4">{blogData.title}</h2>
                    <p className="my-3 px-5 text-center fw-bold">{blogData.subTitle}</p>
                    
                        {Object.values(blogData.mainContent).map((entry) => {
                            return (
                                <>
                                <div className="row  my-5 row-reverse align-items-center">
                                    <div className={`order-last col-lg-6`}>
                                        <h6>{entry.imgTitle}</h6>
                                        <p>{entry.imgText}</p>
                                        
                                    </div>
                                    <div className="col-lg-6 order-first">
                                        <img src={entry.img} alt="" className="img-fluid" />
                                    </div>

                                </div>  
                                </>
                            )
                            
                        })}
               
                </div>    
            </section> 
        </>
    )
}

export default BlogDetail

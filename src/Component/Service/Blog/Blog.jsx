import React from 'react';
import { blogData } from './BlogData';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./Blog.css"


const Blog = () => {
  return (
    <div className='blogs__div'>
        <div className='blogs__divs' id='blog'>
            <h1>blog</h1>
            <div className='blogg__div'>
                {blogData.map((data)=> {
                    return [
                        <div className='blog__grid'>
                            <div className='blog__img'>
                                 <img src={data.img} alt='data.img'/>
                            </div>
                            <div className='blog__headers'>
                            <div className='blog__header'>
                                {data.header} <ArrowOutwardIcon style={{fontSize: "1.4rem"}}/>
                            </div>
                            <p className='blog__para'>{data.content}</p>

                            </div>
                        </div>

                    ]
                })}
            </div>

        </div>
        
    </div>
  )
}

export default Blog

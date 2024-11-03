import React from 'react';
import { blogData } from './BlogData';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./Blog.css"
import { motion } from "framer-motion";
import { fadeIn } from '../../../Variant';
const Blog = () => {
  return (
    <div className='blogs__div'>
        <motion.div className='blogs__divs' id='blog' variants={fadeIn("down", 0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.4}}> 
            <h1>blog</h1>
            <div className='blogg__div'>
                {blogData.map((data)=> {
                    return [
                        <motion.div
                        className="box"
                        whileHover={{ scale: [null, 1.06, 1.05] }}
                        transition={{ duration: 0.2 }}
                      >
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
                        </motion.div>

                    ]
                })}
            </div>

        </motion.div>
        
    </div>
  )
}

export default Blog

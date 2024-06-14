import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import articles from './article-content';
const Article = () => {
    const { name } = useParams();
    const article = articles.find((article)=> article.name=== name );
    if (!article) return <h1> Article doesnt exists</h1>
        return (
            <div className ='Article container bg-opacity-45 bg-white mx-auto px-8' >
                <h1 className ="sm:text-4xl text-2xl  pt-14 font-bold my-6 text-gray-900"> 
                {article.title}
                </h1>
                {article.content.map((paragraph,index)=>(
                    <p className='mx-auto leading-relaxed text-base mb-4'key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>
        )
}

export default  Article;
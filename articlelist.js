// this is notification page
import React from 'react'
import articles from './article-content';
import { Link } from 'react-router-dom';
const ArticleList = () => {
    return (
        <div className="container bg-opacity-45 bg-white mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <div className='ArticleList'>
            <h1 className ="sm:text-4xl text-2xl font-bold mb-4 mt-8 text-gray-900"> 
                Notification
            </h1>
            <hr className="my-4 border-2 border-blue-500" />
            <div className='container py-1 mx-auto'>
                <div className='grid grid-cols-3 gap-4'>
                    {articles.map((article,index)=>(
                        <div key={index} className='p-5 '>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg
                            overflow-hidden block bg-white '>
                                <Link to ={`/article/${article.name}`}>
                                    <img className='lg:h-48 md:h-36  w-full object-cover object-center'
                                    src={article.thumbnail} 
                                    alt='blog'
                                    />
                                </Link>
                                <div className='p-5'>
                                    <Link key={index} to ={`/article/${article.name}`}>
                                        <h3 className='text-lg font-medium text-gray-900 mb-3'>
                                            {article.title}
                                        </h3>
                                    </Link>
                                    <p  className='leading-realxed mb-3'>
                                        <p className='font-bold inline'>TIME:</p> {article.time}
                                    </p>
                                    <p className='leading-realxed mb-3'>
                                        {article.content[0].substring(0,110)}...
                                    </p>
                                    <div className='flex item-center flex-wrap'>
                                        <Link
                                            className='text-indigo-500 inline-flex items-center
                                            md:mb-2 lg:mb-0'
                                            to={`/article/${article.name}`}>
                                            Learn more 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ArticleList;
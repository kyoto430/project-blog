import React from 'react'
import Article from './article'

const Articles = ({ articles, ...rest }) => {
  return (
    <>
      {articles.length > 0 &&
        articles.map((article) => (
          <Article key={article._id} {...rest} {...article} />
        ))}
    </>
  )
}

export default Articles

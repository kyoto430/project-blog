import React from 'react'
import { useParams } from 'react-router-dom'
import ArticlePage from '../components/common/feed/articlePage'
import ArticlesList from '../components/common/feed/articlesList'

const Articles = () => {
  const params = useParams()
  const { articleId } = params
  return (
    <>{articleId ? <ArticlePage articleId={articleId} /> : <ArticlesList />}</>
  )
}

export default Articles

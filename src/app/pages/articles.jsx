import React from 'react'
import { useParams } from 'react-router-dom'
import ArticlePage from '../components/common/feed/articlePage'
import ArticlesList from '../components/common/feed/articlesList'
import EditArticlePage from '../components/common/feed/editArticlePage'

const Articles = () => {
  const params = useParams()
  const { articleId, edit } = params
  return (
    <>
      {articleId ? (
        edit ? (
          <EditArticlePage />
        ) : (
          <ArticlePage articleId={articleId} />
        )
      ) : (
        <ArticlesList />
      )}
    </>
  )
}

export default Articles

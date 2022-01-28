import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import API from '../api'
import Loader from './loader'
import TagsList from './tagsList'
import { useHistory } from 'react-router-dom'

const ArticlePage = ({ articleId }) => {
  const history = useHistory()
  const [article, setArticle] = useState()
  useEffect(() => {
    API.articles.getById(articleId).then((data) => setArticle(data))
  }, [])
  const handleBack = () => {
    history.push('/articles')
  }
  if (article) {
    return (
      <div>
        <h1>{article.title}</h1>
        <h2>{article.text}</h2>
        <TagsList tags={article.tags} />
        <button onClick={handleBack}>Все статьи</button>
      </div>
    )
  } else {
    return <Loader />
  }
}

ArticlePage.propTypes = {
  articleId: PropTypes.string.isRequired,
}

export default ArticlePage

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import API from '../../../api'
import Loader from '../loader'
import TagsList from '../../UI/tags/tagsList'
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
  const handleEdit = () => {
    history.push(history.location.pathname + '/edit')
  }
  if (article) {
    return (
      <div className="d-flex flex-column container shadow p-3 mb-5 bg-body text-white rounded">
        <div className="d-flex justify-content-between">
          <span>
            <button className="btn btn-sm btn-primary m-1" onClick={handleBack}>
              Назад <i className="bi bi-arrow-return-left"></i>
            </button>
          </span>
          <div>
            <TagsList tags={article.tags} />
          </div>
        </div>
        <div className="d-flex bd-highlight">
          <div className="p-2 flex-fill bd-highlight">
            <h1 className="text-center">{article.title}</h1>
            <p>{article.text}</p>
          </div>
          <div className="p-2 bd-highlight d-flex flex-column align-items-center">
            <img
              className="img-fluid"
              src={article.image}
              alt={article.title}
            />
            <button
              className="btn btn-sm btn-secondary m-1"
              onClick={handleEdit}
            >
              Редактировать <i className="bi bi-gear"></i>
            </button>
          </div>
        </div>
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

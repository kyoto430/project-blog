import React, { useState, useEffect } from 'react'
import API from './api'
import Articles from './components/articles'

function App() {
  const [articles, setArticles] = useState()
  useEffect(() => {
    API.articles.fetchAll().then((data) => setArticles(data))
  }, [])
  const handleDelete = (articleId) => {
    setArticles(articles.filter((article) => article._id !== articleId))
  }
  const handleToggleBookMark = (id) => {
    setArticles(
      articles.map((article) => {
        if (article._id === id) {
          article.bookmark = !article.bookmark
          return article
        }
        return article
      })
    )
    console.log(id)
  }
  return (
    <div>
      {articles && (
        <Articles
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
          articles={articles}
        />
      )}
    </div>
  )
}

export default App

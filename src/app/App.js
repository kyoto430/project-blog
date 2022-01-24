import React, { useState } from 'react'
import API from './api'
import Articles from './components/articles'

function App() {
  const [articles, setArticles] = useState(API.articles.fetchAll())
  const handleDelete = (articleId) => {
    setArticles(articles.filter((article) => article._id !== articleId))
  }
  const handleToggleBookMark = (id) => {
    setArticles(
      articles.map((article) => {
        if (article._id === id) {
          return { ...article, bookmark: !article.bookmark }
        }
        return article
      })
    )
    console.log(id)
  }
  return (
    <div>
      <Articles
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
        articles={articles}
      />
    </div>
  )
}

export default App

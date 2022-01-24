import React, { useState, useEffect } from 'react'
import Article from './article'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import API from '../api'

const Articles = ({ articles, ...rest }) => {
  const pageSize = 2
  const [currentPage, setCurrentPage] = useState(1)
  const [ligues, setLigues] = useState()
  const [selectedLigue, setSelectedLigue] = useState()

  useEffect(() => {
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedLigue])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleLiguesSelect = (item) => {
    setSelectedLigue(item)
  }
  const clearFilter = () => {
    setSelectedLigue()
  }

  const filteredArticles = selectedLigue
    ? articles.filter((article) => article.ligue === selectedLigue)
    : articles
  const count = filteredArticles.length
  const articleCrop = paginate(filteredArticles, currentPage, pageSize)

  return (
    <div className="d-flex">
      {ligues && (
        <div className="d-flex flex-column p-3">
          <GroupList
            items={ligues}
            onItemSelect={handleLiguesSelect}
            selectedItem={selectedLigue}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column p-3">
        <SearchStatus length={count} />
        {count &&
          articleCrop.map((article) => (
            <Article key={article._id} {...rest} {...article} />
          ))}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Articles

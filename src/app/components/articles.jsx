import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import API from '../api'
import ArticlesGroup from './articlesGroup'

const Articles = ({ articles, ...rest }) => {
  const pageSize = 2
  const [currentPage, setCurrentPage] = useState(1)
  const [ligues, setLigues] = useState()
  const [selectedLigue, setSelectedLigue] = useState()
  const [sortBy, setSortBy] = useState({ iter: 'title', order: 'asc' })

  useEffect(() => {
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedLigue])

  const handleSort = (item) => {
    setSortBy(item)
  }
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
    ? articles.filter(
        (article) =>
          JSON.stringify(article.ligue) === JSON.stringify(selectedLigue)
      )
    : articles
  const count = filteredArticles.length
  const sortedArticles = _.orderBy(
    filteredArticles,
    [sortBy.iter],
    [sortBy.order]
  )
  const articleCrop = paginate(sortedArticles, currentPage, pageSize)

  return (
    <div className="d-flex">
      {ligues && (
        <div className="col-2 d-flex flex-column p-3">
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
      <div className="col-10 d-flex flex-column align-items-center p-3">
        <SearchStatus length={count} />
        {count && (
          <ArticlesGroup
            articles={articleCrop}
            onSort={handleSort}
            selectedSort={sortBy}
            {...rest}
          />
        )}
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

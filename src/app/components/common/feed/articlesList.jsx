import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import Pagination from '../pagination'
import { paginate } from '../../../utils/paginate'
import GroupList from '../groupList'
import SearchStatus from '../../UI/searchStatus'
import API from '../../../api'
import ArticlesGroup from './articlesGroup'
import Loader from '../loader'

const ArticlesList = () => {
  const pageSize = 3
  const [currentPage, setCurrentPage] = useState(1)
  const [ligues, setLigues] = useState()
  const [selectedLigue, setSelectedLigue] = useState()
  const [sortBy, setSortBy] = useState({ iter: 'title', order: 'asc' })
  const [articles, setArticles] = useState()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    API.articles.fetchAll().then((data) => setArticles(data))
  }, [])

  useEffect(() => {
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedLigue, searchQuery])

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
  }
  const handleSort = (item) => {
    setSortBy(item)
  }
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleLiguesSelect = (item) => {
    if (searchQuery !== '') return setSearchQuery('')
    setSelectedLigue(item)
  }
  const handleSearchQuery = ({ target }) => {
    setSelectedLigue(undefined)
    setSearchQuery(target.value)
  }
  const clearFilter = () => {
    setSelectedLigue()
  }

  if (articles) {
    const filteredArticles = searchQuery
      ? articles.filter(
          (article) =>
            article.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
            -1
        )
      : selectedLigue
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
            <input
              className="mt-1"
              type="text"
              name="searchQuery"
              placeholder="Search..."
              onChange={handleSearchQuery}
              value={searchQuery}
            ></input>
          </div>
        )}
        <div className="col-10 d-flex flex-column align-items-center p-3">
          <SearchStatus length={count} />

          {count > 0 && (
            <ArticlesGroup
              articles={articleCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
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
  return <Loader />
}

export default ArticlesList

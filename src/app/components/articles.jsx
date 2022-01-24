import React, { useState } from 'react'
import Article from './article'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'

const Articles = ({ articles, ...rest }) => {
  const count = articles.length
  const pageSize = 1
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
    console.log(pageIndex)
  }
  const articleCrop = paginate(articles, currentPage, pageSize)
  return (
    <>
      {count > 0 &&
        articleCrop.map((article) => (
          <Article key={article._id} {...rest} {...article} />
        ))}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}

export default Articles

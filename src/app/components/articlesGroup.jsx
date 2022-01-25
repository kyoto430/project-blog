import React from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import GroupHeader from './groupHeader'

const ArticlesGroup = ({ articles, onSort, selectedSort, ...rest }) => {
  const columns = {
    title: { iter: 'title', title: 'названию' },
    ligues: { iter: 'ligue.name', title: 'лиге' },
    bookmark: { iter: 'bookmark', title: 'избранному' },
    update: { iter: 'update', title: 'обновлению' },
  }
  return (
    <>
      <GroupHeader {...{ onSort, selectedSort, columns }} />
      {articles.map((article) => (
        <Article key={article._id} {...rest} {...article} />
      ))}
    </>
  )
}

ArticlesGroup.propTypes = {
  articles: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
}

export default ArticlesGroup

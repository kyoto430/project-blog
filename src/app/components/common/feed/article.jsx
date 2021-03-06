import React from 'react'
import { Link } from 'react-router-dom'
import BookMark from '../bookmark'
import TagsList from '../../UI/tags/tagsList'
import Time from '../time'

const Article = ({
  _id,
  image,
  title,
  ligue,
  tags,
  text,
  update,
  onDelete,
  bookmark,
  onToggleBookMark,
}) => {
  return (
    <div className="card text-white bg-dark m-3 w-100">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <img
            src={image}
            className="img-fluid rounded-start"
            alt={title}
            style={{ width: '550px' }}
          />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body">
            <div className="d-flex justify-content-end align-items-center">
              <span className="badge bg-white text-dark m-1">{ligue.name}</span>
              <TagsList tags={tags} />
            </div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {text &&
                text.slice(
                  0,
                  text.length > 30 ? text.length / 10 : text.length
                ) + '...'}
            </p>
            <Time update={update} />
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/articles/${_id}`}>
                <button className="btn btn btn-primary">Открыть</button>
              </Link>
              <BookMark
                status={bookmark}
                onClick={() => onToggleBookMark(_id)}
              />
              <button className="btn btn-danger" onClick={() => onDelete(_id)}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article

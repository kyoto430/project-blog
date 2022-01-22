import React from 'react'
import BookMark from './bookmark'
import Tag from './tag'
import Time from './time'

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
    <div
      key={_id}
      className="card text-white bg-dark mb-3"
      style={{ maxWidth: '540px' }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
          <span className="badge bg-white text-dark">{ligue.name}</span>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-end">
              {tags.map((tag) => (
                <Tag key={tag._id} {...tag} />
              ))}
            </div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <Time update={update} />
            <div className="d-flex justify-content-start">
              <button className="btn btn-sm btn-primary">Open</button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(_id)}
              >
                Deleted
              </button>
              <BookMark
                status={bookmark}
                onClick={() => onToggleBookMark(_id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article

import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { validator } from '../../../utils/validator'
import API from '../../../api'
import TextField from '../form/textField'
import SelectField from '../form/selectField'
import MultiSelectField from '../form/MultiSelectField'
import CheckBoxField from '../form/checkBoxField'
import TextAreaField from '../form/textAreaField'

const EditArticlePage = () => {
  const { articleId } = useParams()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    title: '',
    text: '',
    ligue: '',
    update: '',
    tags: [],
    bookmark: false,
    image: '',
  })
  const [ligues, setLigues] = useState([])
  const [tags, setTags] = useState({})
  const [errors, setErrors] = useState({})
  const getLigueById = (name) => {
    for (const lig in ligues) {
      const ligData = ligues[lig]
      if (ligData.name === name) return ligData
    }
  }
  const getTags = (elements) => {
    const tagsArray = []
    for (const elem of elements) {
      for (const tag in tags) {
        if (elem.value === tags[tag]._id) {
          tagsArray.push(tags[tag])
        }
      }
    }
    return tagsArray
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const { ligue, tags } = data
    API.articles
      .update(articleId, {
        ...data,
        ligue: getLigueById(ligue),
        tags: getTags(tags),
      })
      .then((data) => history.push(`/articles/${data._id}`))
    console.log(data)
  }
  const transformData = (data) => {
    return data.map((tag) => ({ label: tag.name, value: tag._id }))
  }
  useEffect(() => {
    setIsLoading(true)
    API.articles.getById(articleId).then(({ ligue, tags, ...data }) =>
      setData((prevState) => ({
        ...prevState,
        ...data,
        tags: transformData(tags),
        ligue: ligue.name,
      }))
    )
    API.tags.fetchAll().then((data) => setTags(data))
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])
  useEffect(() => {
    if (data._id) setIsLoading(false)
  }, [data])

  const validatorConfig = {
    title: {
      isRequired: {
        message: 'Введите название',
      },
    },
    ligue: {
      isRequired: { message: 'Страна обязательна для заполнения' },
    },
  }
  useEffect(() => validate(), [data])
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {!isLoading && Object.keys(ligues).length > 0 ? (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Заголовок статьи"
                name="title"
                value={data.title}
                onChange={handleChange}
                error={errors.title}
              />
              <TextAreaField
                label="Полный текст статьи"
                name="text"
                value={data.text}
                onChange={handleChange}
              />
              <SelectField
                label="Выберите лигу"
                defaultOption="Выберите..."
                onChange={handleChange}
                options={ligues}
                error={errors.ligue}
                value={data.ligue}
                name="ligue"
              />
              <MultiSelectField
                defalutValue={data.tags}
                options={tags}
                onChange={handleChange}
                name="tags"
                label="Выберите теги"
              />
              <TextField
                label="Время обновления"
                name="update"
                value={data.update}
                onChange={handleChange}
              />
              <TextField
                label="URL изображения"
                name="image"
                value={data.image}
                onChange={handleChange}
              />
              <CheckBoxField
                value={data.bookmark}
                onChange={handleChange}
                name="bookmark"
              >
                Добавить в избранное
              </CheckBoxField>
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
              >
                Обновить
              </button>
            </form>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </div>
  )
}

export default EditArticlePage

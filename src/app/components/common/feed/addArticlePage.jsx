import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { validator } from '../../../utils/validator'
import API from '../../../api'
import TextField from '../form/textField'
import SelectField from '../form/selectField'
import MultiSelectField from '../form/MultiSelectField'
import CheckBoxField from '../form/checkBoxField'
import TextAreaField from '../form/textAreaField'
import Loader from '../loader'

const AddArticlePage = () => {
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

  useEffect(() => {
    API.tags.fetchAll().then((data) => setTags(data))
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])

  const validatorConfig = {
    title: {
      isRequired: { message: 'Заголовок обязателен для заполнения' },
    },
    text: {
      isRequired: { message: 'Текст обязателен для заполнения' },
    },
    ligue: {
      isRequired: { message: 'Страна обязательна для заполнения' },
    },
    update: {
      isRequired: { message: 'Время обновления обязательно для заполнения' },
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const { ligue, tags } = data
    API.articles
      .add({ ...data, ligue: getLigueById(ligue), tags: getTags(tags) })
      .then((data) => history.push(`/articles`))
    console.log(data)
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

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
                error={errors.text}
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
                error={errors.update}
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
                Добавить
              </button>
            </form>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  )
}

export default AddArticlePage

import { liguesObject as ligues } from './ligues.api'

const tags = {
  new: { _id: '67rdca188', name: 'Новое', color: 'success' },
  gossip: { _id: '67rdca200', name: 'Слухи', color: 'info' },
}

const articles = [
  {
    _id: '67rdca1815',
    title: 'Manchester United 2022',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    ligue: ligues.england,
    tags: [tags.new, tags.gossip],
    update: 120,
    image: 'https://picsum.photos/300',
    bookmark: false,
  },
  {
    _id: '67rdca1816',
    title: 'Real Madrid 2022',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    ligue: ligues.spain,
    tags: [tags.new, tags.gossip],
    update: 1,
    image: 'https://picsum.photos/300',
    bookmark: false,
  },
  {
    _id: '67rdca1817',
    title: 'Chelsea 2022',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    ligue: ligues.england,
    tags: [tags.new],
    update: 45,
    image: 'https://picsum.photos/300',
    bookmark: false,
  },
]

if (!localStorage.getItem('articles')) {
  localStorage.setItem('articles', JSON.stringify(articles))
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('articles')))
    }, 2000)
  })
const update = (id, data) =>
  new Promise((resolve) => {
    const articles = JSON.parse(localStorage.getItem('articles'))
    const articleIndex = articles.findIndex((u) => u._id === id)
    articles[articleIndex] = { ...articles[articleIndex], ...data }
    localStorage.setItem('articles', JSON.stringify(articles))
    resolve(articles[articleIndex])
  })

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem('articles')).find(
          (article) => article._id === id
        )
      )
    }, 1000)
  })
export default {
  fetchAll,
  getById,
  update,
}

// const fetchAll = () =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(articles)
//     }, 2000)
//   })

// const getById = (id) =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(articles.find((article) => article._id === id))
//     }, 1000)
//   })

// export default {
//   fetchAll,
//   getById,
// }

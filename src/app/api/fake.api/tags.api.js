const tags = {
  new: { _id: '67rdca188', name: 'Новое', color: 'success' },
  gossip: { _id: '67rdca200', name: 'Слухи', color: 'info' },
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tags)
    }, 2000)
  })

export default {
  fetchAll,
}

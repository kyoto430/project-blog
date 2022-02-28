const tags = {
  new: { _id: '67rdca188', name: 'Новое', color: 'success' },
  gossip: { _id: '67rdca200', name: 'Слухи', color: 'info' },
  stats:{ _id: '67rdca201', name: 'Статистика', color: 'info' },
  transfer:{ _id: '67rdca202', name: 'Трансферы', color: 'info' },
  history:{ _id: '67rdca203', name: 'Истории', color: 'yellow' }
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

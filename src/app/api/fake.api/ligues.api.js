export const ligues = {
  england: { _id: '67rdca18', name: 'Англия' },
  spain: { _id: '67rdca20', name: 'Испания' },
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(ligues)
    }, 2000)
  })

export default {
  fetchAll,
}

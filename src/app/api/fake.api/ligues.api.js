export const liguesObject = {
  england: { _id: '67rdca18', name: 'Англия' },
  spain: { _id: '67rdca20', name: 'Испания' },
  germany: { _id: '67rdca21', name: 'Германия' },
  italy: { _id: '67rdca22', name: 'Италия' },
  france: { _id: '67rdca23', name: 'Франция' },
  russia: { _id: '67rdca24', name: 'Россия' },
  portugese: { _id: '67rdca25', name: 'Португалия' },
  europe: { _id: '67rdca26', name: 'Европа' }
}

export const ligues = [
 { _id: '67rdca18', name: 'Англия' },
 { _id: '67rdca20', name: 'Испания' },
 { _id: '67rdca21', name: 'Германия' },
 { _id: '67rdca22', name: 'Италия' },
 { _id: '67rdca23', name: 'Франция' },
 { _id: '67rdca24', name: 'Россия' },
 { _id: '67rdca25', name: 'Португалия' },
 { _id: '67rdca26', name: 'Европа' }
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(liguesObject)
    }, 2000)
  })

export default {
  fetchAll,
}

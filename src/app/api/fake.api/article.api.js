const ligues = {
  england: { _id: '67rdca18', name: 'Англия' },
  spain: { _id: '67rdca20', name: 'Испания' },
}

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
    image: 'https://picsum.photos/200',
  },
  {
    _id: '67rdca1816',
    title: 'Real Madrid 2022',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    ligue: ligues.spain,
    tags: [tags.new, tags.gossip],
    update: 1,
    image: 'https://picsum.photos/200',
  },
]

export function fetchAll() {
  return articles
}

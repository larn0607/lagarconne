const categoriesData = [
  {
    display: 'new arrivals',
    path: '/collections/new-arrivals',
  },
  {
    display: 'clothing',
    path: '/collections/clothing',
    subCate: [
      {
        subDisplay: 'tops',
        subPath: '/collections/tops',
      },
      {
        subDisplay: 'pants',
        subPath: '/collections/pants',
      },
      {
        subDisplay: 'dresses',
        subPath: '/collections/dresses',
      },
      {
        subDisplay: 'jackets',
        subPath: '/collections/jackets',
      },
      {
        subDisplay: 'trench coats',
        subPath: '/collections/trench-coats',
      },
    ]
  },
  {
    display: 'handbags',
    path: '/collections/handbags',
    subCate: [
      {
        subDisplay: 'leather',
        subPath: '/collections/leather'
      },
      {
        subDisplay: 'fabric',
        subPath: '/collections/fabric'
      }
    ],
  },
  {
    display: 'jewelry',
    path: '/collections/jewelry',
    subCate: [
      {
        subDisplay: 'rings',
        subPath: '/collections/rings'
      },
      {
        subDisplay: 'necklaces',
        subPath: '/collections/necklaces'
      },
      {
        subDisplay: 'bracelets',
        subPath: '/collections/bracelets'
      },
    ],
  },
  {
    display: 'shoes',
    path: '/collections/shoes',
    subCate: [
      {
        subDisplay: 'boots',
        subPath: '/collections/boots'
      },
      {
        subDisplay: 'loafers',
        subPath: '/collections/loafers'
      },
      {
        subDisplay: 'sandals',
        subPath: '/collections/sandals'
      },
    ],
  },
  {
    display: 'accessories',
    path: '/collections/accessories'
  },
  {
    display: 'sale',
    path: '/collections/sale'
  }
]

export default categoriesData
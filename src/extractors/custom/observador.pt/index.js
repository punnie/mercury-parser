export const ObservadorPtExtractor = {
  domain: 'observador.pt',

  supportedDomains: [
    'www.observador.pt'
  ],

  title: {
    selectors: [
      ['meta[name="og:title"]', 'value'],
    ],
  },

  author: {
    selectors: [
      ['meta[name="author"]', 'value'],
    ],
  },

  date_published: {
    selectors: [
      ['meta[name="date"]', 'value'],
    ],

    timezone: 'Europe/Lisbon',
  },

  dek: {
    selectors: [
      'div.article-head-content-headline > p'
    ],
  },

  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', 'value'],
    ],
  },

  content: {
    selectors: [
      ['div.article-body-content']
    ],

    transforms: {},

    clean: [
      'script.ad',
      'div.obs-ad-container',
      'div.piano_endofarticle'
    ]
  },
}

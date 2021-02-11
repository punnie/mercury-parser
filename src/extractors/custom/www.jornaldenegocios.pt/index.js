export const WwwJornaldenegociosPtExtractor = {
  domain: 'www.jornaldenegocios.pt',

  title: {
    selectors: ['h1.article_title'],
  },

  author: {
    selectors: ['.info_autor > a > strong'],
  },

  date_published: {
    selectors: [[['meta[name="article:published_time"]', 'value']]],
  },

  dek: {
    selectors: ['p.lead'],
  },

  lead_image_url: {
    selectors: [['link[rel="image_src"]', 'href']],
  },

  content: {
    selectors: ['div.texto.paywall'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['div.BTFInContent'],
  },
};

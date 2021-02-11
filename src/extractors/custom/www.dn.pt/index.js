export const WwwDnPtExtractor = {
  domain: 'www.dn.pt',

  supportedDomains: ['dn.pt'],

  title: {
    selectors: ['h1.t-af1-head-title'],
  },

  author: {
    selectors: [['meta[name="Author"]', 'value']],
  },

  date_published: {
    selectors: [['meta[name="article:published_time"]', 'value']],
  },

  dek: {
    selectors: ['.t-af1-head-desc > p'],
  },

  lead_image_url: {
    selectors: [['link[rel="image_src"]', 'href']],
  },

  content: {
    selectors: ['.t-af1-c1-body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['aside', 'div.mrec-status', 'div.resize'],
  },
};

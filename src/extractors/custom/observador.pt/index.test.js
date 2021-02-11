import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('ObservadorPtExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://observador.pt/2021/02/07/covid-19-lagarde-confiante-na-recuperacao-economica-europeia-em-2021/';
      const html =
        fs.readFileSync('./fixtures/observador.pt/1612702868220.html');
      result =
        Mercury.parse(url, { html, fallback: false });
    });

    it('is selected properly', () => {
      // This test should be passing by default.
      // It sanity checks that the correct parser
      // is being selected for URLs from this domain
      const extractor = getExtractor(url);
      assert.equal(extractor.domain, URL.parse(url).hostname)
    })

      it('returns the title', async () => {
    // To pass this test, fill out the title selector
    // in ./src/extractors/custom/observador.pt/index.js.
    const { title } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(title, `Lagarde confiante na recuperação económica europeia em 2021`)
  });

it('returns the author', async () => {
    // To pass this test, fill out the author selector
    // in ./src/extractors/custom/observador.pt/index.js.
    const { author } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(author, `Agência Lusa`)
  });

it('returns the date_published', async () => {
    // To pass this test, fill out the date_published selector
    // in ./src/extractors/custom/observador.pt/index.js.
    const { date_published } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(date_published, `2021-02-07T11:35:33.000Z`)
  });

it('returns the dek', async () => {
    // To pass this test, fill out the dek selector
    // in ./src/extractors/custom/observador.pt/index.js.
    const { dek } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(dek, 'A presidente do Banco Central Europeu precisa, no entanto, que Europa só recuperará ao nível anterior à crise provocada pela Covid-19 em meados de 2022.')
  });

it('returns the lead_image_url', async () => {
    // To pass this test, fill out the lead_image_url selector
    // in ./src/extractors/custom/observador.pt/index.js.
    const { lead_image_url } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(lead_image_url, `https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1965%3A1105%3Anowe%3A35%3A0%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2021%2F02%2F07111336%2F30488537.jpg`)
  });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/observador.pt/index.js.
      // You may also want to make use of the clean and transform
      // options.
      const { content } = await result;

      const $ = cheerio.load(content || '');

      const first13 = excerptContent($('*').first().text(), 13)

      // Update these values with the expected values from
      // the article.
      assert.equal(first13, 'A presidente do Banco Central Europeu (BCE), Christine Lagarde, mostrou-se este domingo confiante');
    });
  });
});

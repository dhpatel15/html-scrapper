const rp = require('request-promise');
const cheerio = require('cheerio');


rp('https://news.ycombinator.com')
  .then(( html) => {
    let $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      let a = $(this).prev();
      console.log(a.text());
    })
  })
  .catch(console.error.bind(console))
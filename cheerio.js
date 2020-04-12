const request = require('request');
const cheerio = require('cheerio');

request('https://twitter.com/realdonaldtrump', (err, response, body)=>{
	if (!err && response.statusCode == 200){
		const $ = cheerio.load(body)

		$('p.TweetTextSize').each((index, item)=>{
			console.log(item.children[0].data);
			console.log('---------');

		})
	}
})
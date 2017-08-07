const {posts} = require('../posts')
const max = 10 // max returned posts

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Philipp Wruck</title>
    <subtitle>Articles</subtitle>
    <link href="https://quiez.io/atom" rel="self"/>
    <link href="https://quiez.io/"/>
    <updated>${posts[0].date}</updated>
    <id>https://quiez.io/</id>
    <author>
      <name>Philipp Wruck</name>
      <email>alpine@quiez.io</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://quiez.io/${post.date.match(/\d{4}/)[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`
      }, '')}
  </feed>
`

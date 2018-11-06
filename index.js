const sitemap = require('sitemap');
const fs = require('fs');

 var sm = sitemap.buildSitemapIndex({
    urls: ['http://example.com/sitemap1.xml','http://example.com/sitemap.xml']
 });

 fs.writeFileSync("./sitemapindex.xml", sm.toString());
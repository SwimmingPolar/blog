// Next.js sitemap generation example
// https://github.com/vercel/next.js/tree/canary/examples/with-sitemap
// Change the WEBSITE_URL to your own domain in .env.local
const fsImport = import('fs')
const globbyImport = import('globby')

function addPage(page) {
  // Set default locale
  const defaultLocale = 'ko'

  // Parse the path
  const relativePath = page
    .replace('pages', '')
    .replace('.js', '')
    .replace('.mdx', '')

  // Parsr relative path and get path and locale separately
  const [path, localeToken] = relativePath.split('.').filter(Boolean)

  // Handle index path
  let route = path === '/index' ? '' : path

  // Remove default locale from path
  const locale = localeToken === defaultLocale ? '' : '/' + localeToken

  // Construct full path with locale
  route = process.env.WEBSITE_URL + locale + route

  return `  <url>
    <loc>${route}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
  const { writeFileSync } = await fsImport
  const { globby } = await globbyImport

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api'
  ])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

  writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()

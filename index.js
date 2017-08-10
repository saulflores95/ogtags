import Head from 'next/head'

const OgTags = (title, description, img) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={img} />
      <meta property='og:image:width' content='640' />
      <meta property='og:image:height' content='442' />
    </Head>
  </div>
)

export default OgTags

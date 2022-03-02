import Head from "next/head"

function Meta({title}) {
  return (
    <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='description' content='Lightning Footware' />
    <meta charSet='utf-8' />
    <link rel='icon' href='/favicon.ico' />
    <title>{title}</title>
    </Head>
  )
}

export default Meta
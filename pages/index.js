import Head from 'next/head'
import Image from 'next/image'



export default function Index() {
  return (
    <>
      <Head>
        <title>Skelee-Mini-web01</title>
        <meta name="Description" content="skelee-mini-web" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
       <div className='flex flex-col items-center-justify-center w-screen h-screen overflow-hidden'>
       	  <img src='/rarestudios-site-bg-new.png' className='w-screen h-screen fixed top-0 -z-10'/>
       </div> 
    </>
  )
}

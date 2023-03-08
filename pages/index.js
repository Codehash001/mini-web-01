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
       	  <img src='/rarestudios-site-bg-new.png' className='w-screen h-auto fixed top-0 -z-10'/>
       	  <div className='flex flex-row justify-between items-center px-16 py-6 text-white'>
       	  	<div className='flex flex-col items-start font-Kanit'>
       	  		<h1 className='text-3xl font-semibold uppercase'>rare studios new york</h1>
       	  		<h1 className='text-lg font-medium uppercase'>A web3 company</h1>
       	  	</div>
       	  	
       	  	<div>
       	  		<h1>Twitter</h1>
       	  	</div>
       	  </div>
       </div> 
    </>
  )
}

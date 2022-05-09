import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import SlidingPanel from '../components/SlidingPanel'
import TopBar, { Data } from '../components/TopBar'

interface Props{
  titleLogo: string,
  data: Data[],
  slidingPanelData: {url: string}[]
}

const Home = ({titleLogo, data, slidingPanelData}: Props) => {
  return (
    <div className="">
      <Head>
        <title>
          Online Shopping Site for Mobiles, Electronics, Furniture, Grocery,
          Lifestyle, Books &amp; More. Best Offers!
        </title>
        <link rel="icon" href={titleLogo} />
      </Head>

      <main className="">
        <Header />
        <TopBar data={data}/>
        <SlidingPanel slidingPanelData={slidingPanelData}/>
      </main>

      <footer className=""></footer>
    </div>
  )
}

export async function getStaticProps() {
  const data = [
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', title:"Grocery"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', title:"Top Offers"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100', title:"Mobiles"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', title:"Fashion"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100', title:"Electronics"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', title:"Travel"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', title:"Home"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', title:"Appliances"},
    {url: 'https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', title:"Toys"},
  ]
  const slidingPanelData = [
    {url:"https://rukminim2.flixcart.com/flap/844/140/image/c6210552f63f357a.jpeg?q=50"},
    {url: "https://rukminim2.flixcart.com/flap/50/50/image/3d6e8d6a34ae7bf5.png?q=50"},
    {url: "https://rukminim2.flixcart.com/flap/50/50/image/46bb69d96a7c9ece.jpg?q=500"},

  ]
  return {
    props: {
      titleLogo: 'https://static-assets-web.flixcart.com/www/promos/new/20150528-140547-favicon-retina.ico',
      data: data,
      slidingPanelData: slidingPanelData,
    },
  }
}


export default Home

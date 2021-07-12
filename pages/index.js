import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Napp | Home </title>
        <meta name="description" content="Take a napp!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Homepage</h2>
      </main>
      
    </div>
  )
}

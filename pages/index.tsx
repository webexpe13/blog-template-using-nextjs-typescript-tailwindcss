import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href='/js'>
            <a className={styles.card}>
              <h2>JS &rarr;</h2>
            </a>
          </Link>

          <Link href='/html-css-js'>
            <a className={styles.card}>
              <h2>HTML CSS JS &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home

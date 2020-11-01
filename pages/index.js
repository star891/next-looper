/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  return (
    <div className="container">
      <Head>
        <title>Next Looper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Next.Looper</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Games
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Games" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          {' '}
          <a href="https://nextjs.org">Next.Looper!</a>
        </h1>

        <div className={styles.grid}>
          <a href="/docs" className={styles.card}>
            <h3>Pick A Game</h3>
            <p>
              Start using Looper?
            </p>
          </a>

          <a href="/docs" className={styles.card}>
            <h3>Documentation</h3>
            <p>
              Learn how to use Looper?
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Last Used Games</h3>
            <p>NFL_20201026_CHI@LAR</p>
            <p>NFL_20201025_DAL@WAS</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Recently Added Games</h3>
            <p>NFL_20201026_CHI@LAR</p>
            <p>NFL_20201025_DAL@WAS</p>
          </a>

        </div>
      </main>

      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data &&
        data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ))
      }

      <footer className={styles.footer}>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">CBS Interactive</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.cbssports.com" target="_blank" rel="noreferrer">CBSSports.com</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">How to Use Looper?</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

import Head from 'next/head';

import styles from '../styles/Layout.module.css';
import Header from './Header';

export default function Layout({ title, children, description, keywords }) {
    return (
        <div>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            <div className={styles.container}>

                {children}
            </div>

        </div>
    )
};


Layout.defaultProps = {
    title: 'Events & Workshops',
    description: 'Welcome to Events & Workshops. This page offers featured events & workshops around different cities.Stay entertained all the time!',
    keywords: 'events, workshops, online booking, reviews'
}
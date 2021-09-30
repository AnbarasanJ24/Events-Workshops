import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';

export default function Layout({ title, children, description, keywords }) {
    const router = useRouter();
    return (
        <div>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>

                {children}
            </div>
            <Footer />
        </div>
    )
};

Layout.defaultProps = {
    title: 'Events & Workshops',
    description: 'Welcome to Events & Workshops. This page offers featured events & workshops around different cities.Stay entertained all the time!',
    keywords: 'events, workshops, online booking, reviews'
}
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";


import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div>
            <Layout>
                <section className={styles.error}>
                    <h1>404</h1>
                    <p>Sorry Page Not Found</p>
                    <Link href="/">Take back to home</Link>
                </section>
            </Layout>
        </div>
    )
}

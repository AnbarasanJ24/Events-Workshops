import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; {new Date().getFullYear()} Created with Love &#9829; from India</p>
            <div>
                <Link href="/">About Us</Link>
                {/* <Link href="/"> <a >Policy</a></Link>
                <Link href="/"> <a >Terms & condition</a></Link> */}
            </div>
        </footer>
    )
}

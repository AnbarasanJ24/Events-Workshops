import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/"><a>Events & Workshops</a></Link>
            </div>

            <nav>
                <ul>
                    <li><Link href="/events"><a >Events</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}

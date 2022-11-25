import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Link href="/users">
                    <h2>Go to Users Page &rarr;</h2>
                </Link>
            </main>
        </div>
    );
}
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to PAGE C</h1>
        <>
          <h1></h1>
          <h2>
            <Link href="/">Go to Page A </Link>
          </h2>
        </>
        <>
          <h1></h1>
          <h2>
            <a href="/nopage">Go to non existing Page </a>
          </h2>
        </>
        <>
          <h1></h1>
          <h2>
            <a href="/pageD">Go to non Link Page </a>
          </h2>
        </>
        <>
          <h1></h1>
          <h2>
            <a href="https://www.google.com">Go to Google </a>
          </h2>
        </>
      </main>
    </div>
  );
}

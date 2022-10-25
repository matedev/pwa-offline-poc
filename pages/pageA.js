import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to PAGE A</h1>

        <>
          <h1></h1>
          <h2>
            <Link href="/posts/first-post">Go to first posts </Link>
          </h2>
        </>
        <>
          <h1></h1>
          <h2>
            <Link href="/">Go to HOME </Link>
          </h2>
        </>
        <>
          <h1></h1>
          <h2>
            <Link href="/pageB">Go to Page B </Link>
          </h2>
        </>
      </main>
    </div>
  );
}

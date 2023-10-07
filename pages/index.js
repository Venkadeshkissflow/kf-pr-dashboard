import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      Dashboard
      <Link href="/dashboard/reviewers-list">Reviewers list</Link>
    </div>
  );
}

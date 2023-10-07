
import Link from "next/link";
import styles from "../styles/Home.module.css";
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className={styles.container}>
      Dashboard
      <Link href="/dashboard/reviewerslist">Reviewers list</Link>
    </div>
  );
}

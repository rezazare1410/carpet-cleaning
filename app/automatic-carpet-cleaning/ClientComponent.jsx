"use client";

import Link from "next/link";
import styles from "./CardGrid.module.css";

export default function ClientComponent() {
  return (
    <section className={styles.grid}>
      <Link href="/handmade-wool-carpet-wash" className={styles.card}>
        <h3>شستشوی فرش دستبافت کرک و پشم</h3>
      </Link>
      <Link href="/handmade-silk-carpet-wash" className={styles.card}>
        <h3>شستشوی فرش دستبافت گل ابریشم</h3>
      </Link>
      <Link href="/handmade-full-silk-carpet-wash" className={styles.card}>
        <h3>شستشوی فرش دستبافت ابریشم</h3>
      </Link>
      <Link href="/machine-carpet-wash" className={styles.card}>
        <h3>شستشوی فرش ماشینی</h3>
      </Link>
    </section>
  );
}

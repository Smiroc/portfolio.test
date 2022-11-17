import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/projets" className={styles.txt_navbar}>Projets</Link>

      <Link href="/cv" className={styles.txt_navbar}> Curriculum Vitae </Link>

      <Link href="/" className={styles.txt_navbar}> Accueil </Link>

      <Link href="/competences" className={styles.txt_navbar}> Compétences </Link>

      <Link href="/stages" className={styles.txt_navbar}> Stage </Link>
    </nav>
  );
}

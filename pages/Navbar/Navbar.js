import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const projects = "projets";
const cv = "cv";
const accueil = "/";
const competences = "competences";
const stage = "stage";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={projects}>
        <a>Projets</a>
      </Link>

      <Link href={cv}>
        <a>Curriculum Vitae</a>
      </Link>

      <Link href={accueil}>
        <a>Accueil</a>
      </Link>

      <Link href={competences}>
        <a>Compétences</a>
      </Link>

      <Link href={stage}>
        <a>Stage</a>
      </Link>
    </nav>
  );
}

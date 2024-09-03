import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <body>

        <h2>CSS Layout Float</h2>
        <p>In this example</p>
        <p>Resize</p>

        <header>
          <h2>Cities</h2>
        </header>

        <section>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Time Periods</a></li>
            </ul>
          </nav>
          
          <article>
            <h1>London</h1>
            <p>London </p>
            <p>Standing.</p>
          </article>
        </section>

        <footer>
          <p>Footer</p>
        </footer>

      </body>
    </main>
  );
}

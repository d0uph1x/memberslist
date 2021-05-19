import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum optio,
         eaque rerum! Provident similique accusantium nemo autem. Veritati</p>
         <p className={styles.text}> molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum,
         numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>
         <Link href='/members'>
            <a className={styles.btn}>See Members list</a>
         </Link>
    </div>
  )
}

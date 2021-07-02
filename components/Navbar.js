import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    return (
			<>
				<div className={styles.grid}>
					<div className={styles.logo}>
						<Link href='#home'>Logo</Link>
					</div>
					<span
						className={`${styles.menu_icon} material-icons`}
						onClick={() => setMenuIcon(!menuIcon)}
						data-aos-delay='2800'
						data-aos='zoom-in-up'
					>
						{!menuIcon ? "menu" : "close"}
					</span>
					<div
						className={!menuIcon ? styles.links : styles.mobile_links}
						onClick={() => setMenuIcon(!menuIcon)}
					>
						<div
							data-aos-delay='2950'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#home'>HOME</Link>
						</div>
						<div
							data-aos-delay='2850'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#about'>ABOUT</Link>
						</div>
						<div
							data-aos-delay='2750'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#projects'>PROJECTS</Link>
						</div>
						<div
							data-aos-delay='2650'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#home'>BLOG</Link>
						</div>
						<div
							data-aos-delay='2500'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#contact'>CONTACT</Link>
						</div>
					</div>
				</div>
			</>
		);
}

export default Navbar

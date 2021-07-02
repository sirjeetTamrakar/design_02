import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import Navbar from './Navbar'
import { numbers } from './Data'

const Hero = () => {
	return (
		<div className={styles.main}>
			<Navbar />
			<div className={styles.image}>
				<Image
					src='/15.jpg'
					className={styles.img}
					height={1080}
					width={1920}
					alt='Picture'
					priority
				/>
			</div>
			<div className={styles.content}>
				<p>MADEIRA, PORTUGAL</p>
				<b>
					Design Together.
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Together.
				</b>
				<small>
					Like travel photography, travel writing is also about capturing a
					sense of place as well through words and descriptions.
				</small>
				<button>Explore Now</button>
			</div>
			<div className={styles.center}>
				<div className={styles.number}>
					{numbers.map(number => (
						<div className={styles.item} key={number.id}>
							<b>{number.number}</b>
							<small>{number.name}</small>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hero

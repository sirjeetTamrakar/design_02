import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import Navbar from './Navbar'
import CountUp from "react-countup";
import Link from 'next/link';
import { numbers } from './Data'

const Hero = () => {
	return (
		<div id='home' className={styles.main}>
			<Navbar />
			<div className={styles.image}>
				<Image
					src='/15.jpg'
					className={styles.img}
					layout='fill'
					objectFit='cover'
					alt='Picture'
					priority
				/>
			</div>
			<div className={styles.content}>
				<p data-aos-delay='1500' data-aos='faded-down'>
					MADEIRA, PORTUGAL
				</p>
				<b data-aos-delay='1000' data-aos='zoom-in-down'>
					<div data-aos-delay='2500' data-aos='zoom-in-right'>
						Design Together.
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Together.
				</b>
				<small data-aos-delay='3000' data-aos='flip-up'>
					Like travel photography, travel writing is also about capturing a
					sense of place as well through words and descriptions.
				</small>
				<Link href='#projects'>
					<button data-aos-delay='3000' data-aos='zoom-out-up'>
						Explore Now
					</button>
				</Link>
			</div>
			<div className={styles.center}>
				<div
					className={styles.number}
				>
					{numbers.map(number => (
						<div className={styles.item} key={number.id}>
							<b>
								<CountUp delay={1} duration={3} end={number.number}>
									{number.number}
								</CountUp>
								{number.back}
							</b>
							<small>{number.name}</small>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hero

import React from 'react'
import { courses } from './Data'
import Image from 'next/image'
import styles from '../styles/Cards.module.css'


const Cards = () => {
    return (
			<div id='course' className={styles.head}>
				<small>TRENDING STYLES</small>
				<h3>For Your Space</h3>
				
				<div >
					{courses.map(
						({id, imageURL, date, title, description, delay}) => (
							<div data-aos-delay={delay} data-aos='zoom-in-up' className={styles.grid} key={id} >
								<div className={styles.image}>
									<Image
										src={imageURL}
										className={styles.img}
										layout='fill'
										alt='Hello'
									/>
								</div>
								<div className={styles.content}>
									<p>{date}</p>
									<h3>{title}</h3>
										<small>{description}</small>
									</div>
							</div>
						)
					)}
				</div>
			</div>
		);
}

export default Cards

import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image';

const Footer = () => {
	return (
		<div className={styles.main}>
			<div className={styles.image}>
				<Image
					src='/16.jpg'
					className={styles.img}
					layout='fill'
					objectFit='cover'
					alt='Picture'
					priority
				/>
			</div>
			<div className={styles.absolute}>
				<small>PARTNERS</small>
				<h3>Proud Cooperations</h3>
			</div>
			<div className={styles.center}>
				<div className={styles.number}>
					<i
						data-aos-delay='500'
						data-aos='zoom-in-down'
						className='devicon-devicon-plain-wordmark'
					></i>
					<i
						data-aos-delay='800'
						data-aos='zoom-in-up'
						className='devicon-confluence-original-wordmark'
					></i>
					<i
						data-aos-delay='1100'
						data-aos='zoom-in-down'
						className='devicon-docker-plain-wordmark'
					></i>
					<i
						data-aos-delay='1400'
						data-aos='zoom-in-up'
						className='devicon-redhat-plain-wordmark'
					></i>
				</div>
			</div>
			<div id='contact' className={styles.back}>
				<div className={styles.width}>
					<small>CONTACT</small>
					<h3>Get More Details</h3>
					<div className={styles.flex}>
						<div className={styles.content}>
							<div
								data-aos-delay='500'
								data-aos='zoom-in-left'
								className={styles.items}
							>
								<span className={`material-icons ${styles.icon}`}>phone</span>
								<div className={styles.item}>
									<small>PHONE</small>
									<b>+981-236-5109</b>
								</div>
							</div>
							<div
								data-aos-delay='700'
								data-aos='zoom-in-left'
								className={styles.items}
							>
								<span className={`material-icons ${styles.icon1}`}>mail</span>
								<div className={styles.item}>
									<small>EMAIL</small>
									<b>design_02@gmail.com</b>
								</div>
							</div>
							<div
								data-aos-delay='900'
								data-aos='zoom-in-left'
								className={styles.items}
							>
								<span className={`material-icons ${styles.icon2}`}>room</span>
								<div className={styles.item}>
									<small>ADDRESS</small>
									<b>1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA</b>
								</div>
							</div>
						</div>
						<div className={styles.contact}>
							<div className={styles.input1}>
								<input type='text' placeholder='Name' />
								<input type='text' placeholder='Phone' />
							</div>
							<input type='email' placeholder='Email' />
							<textarea type='text' rows='5' placeholder='Message(optional)' />
							<button>SEND</button>
						</div>
					</div>
				</div>
			</div>

			<div id='about' className={styles.f}>
				<div className={styles.footer}>
					<div data-aos-delay='1400' data-aos='zoom-in-up'>
						<h3>LOGO</h3>
						<small>
							On the sunny and panoramic hill behind the center of Verbania
							Intra. Great location, great views & garden.
							<br />
							Marvelous rains.
						</small>
					</div>
					<div data-aos-delay='1600' data-aos='zoom-in-down'>
						<h3>GET IN TOUCH</h3>
						<small>
							032-448-251-402
							<br />
							design_02@gmail.com
							<br />
							1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA
						</small>
					</div>
				</div>
				<div className={styles.footer1}>
					<div>
						<h5
							data-aos='zoom-in-left'
							data-aos-offset='30'
						>
							&copy; 2021 LOGO. ALL RIGHTS RESERVED
						</h5>
					</div>
					<div>
						<i
							data-aos-delay='1400'
							data-aos='flip-up'
							className='devicon-facebook-plain'
						></i>
						<i
							data-aos-delay='1800'
							data-aos='flip-down'
							className='devicon-google-plain'
						></i>
						<i
							data-aos-delay='2200'
							data-aos='flip-up'
							className='devicon-linkedin-plain'
						></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer

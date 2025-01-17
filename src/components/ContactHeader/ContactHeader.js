import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
	return (
		<div className={styles.contact_section}>
			<h1 className={styles.header}>CONTACT US</h1>
			<p className={styles.description}>
				LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
				WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
				REACH OUT TO US THROUGH THE CONTACT FORM ON THIS PAGE, OR BY PHONE,
				EMAIL, OR SOCIAL MEDIA.
			</p>
		</div>
	);
};

export default ContactHeader;

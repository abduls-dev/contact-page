import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [text, setText] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		// Optional: You can handle the form submission here (e.g., send data to an API)
		console.log("Form submitted:", { name, email, text });

		// Update state with input values
		setName(event.target.name.value);
		setEmail(event.target.email.value);
		setText(event.target.text.value);

		// Reset the form fields
		event.target.reset();
	};

	return (
		<section className={styles.container}>
			<div className={styles.contact_form}>
				<div className={styles.top_btn}>
					<Button
						text="VIA SUPPORT CHAT"
						icon={<MdMessage fontSize="24px" />}
					/>
					<Button
						text="VIA CALL"
						icon={<FaPhoneAlt fontSize="24px" />}
					/>
				</div>
				<Button
					isOutline={true}
					text="VIA EMAIL FORM"
					icon={<HiMail fontSize="24px" />}
				/>

				<form onSubmit={onSubmit}>
					<div className={styles.form_control}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							required
						/>
					</div>
					<div className={styles.form_control}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							required
						/>
					</div>
					<div className={styles.form_control}>
						<label htmlFor="text">Message</label>
						<textarea
							name="text"
							rows="8"
							required
						/>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "end",
						}}
					>
						<Button text="SUBMIT BUTTON" />
					</div>
				</form>
			</div>
			<div className={styles.contact_image}>
				<img
					src={process.env.PUBLIC_URL + "/images/contact.svg"}
					alt="Contact illustration"
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = process.env.PUBLIC_URL + "/images/placeholder.svg"; // Fallback image
					}}
				/>
			</div>
		</section>
	);
};

export default ContactForm;

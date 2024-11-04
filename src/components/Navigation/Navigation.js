import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<nav className={`${styles.navigation} container`}>
			<div className="logo">
				<img
					src={`${process.env.PUBLIC_URL}/images/logo.png`} // Use process.env to reference the image in the public folder
					alt="Do Some Coding Logo"
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.png`; // Fallback image
					}}
				/>
			</div>

			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navigation;

/*============SHOW MENU============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");
/*SHOW MENU*/
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*MENU HIDDEN*/
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}
/*============REMOVE MENU============*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	// when we click each nav-bar we remove the show menu
	navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*============== HOME TYPED JS ========== */
const typedHome = new typeed("#home-typed", {
	String: ["Web Developer", "Freelancer", "Designer"],
	typeSpeed: 80,
	backSpeed: 40,
	backDelay: 2000,
	loop: true,
	cursurCharater: "_",
});
/*============== ADD SHADOW TO THE HEADER ========== */
const shadowHeader = () => {
	const header = document.getElementById("header");
	this.scrollY >= 50
		? header.classList.add("shadowHeader")
		: header.classList.remove("shadowHeader");
};
window.addEventListener("scroll", shadowHeader);

/*============== CONTACT EMAIL JS ========== */
const contactForm = document.getElementById("contact-form"),
	contactmessage = document.getElementById("contact-message");
const sendEmail = (e) => {
	e.prventDefault();
	/* ServiceID - TemplateID - #form - PublicKey */
    
};
contactForm.addEventListener("submit", sendEmail);

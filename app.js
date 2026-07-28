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
	emailjs.sendForm("", "template_ut6ut0n", "P-3zOm6duwbZU33Ti").then(
		() => {
			contactmessage.textContent = "Message sent successfully";

			setTimeout(() => {
				contactmessage.textContent = "";
			}, 5000);

			contactForm.reset();
		},
		() => {
			// Error message
			contactmessage.textContent = "Message NOT sent (Serbice error)";
		},
	);
};
contactForm.addEventListener("submit", sendEmail);

/*============== Show Scroll UP ========== */
const scrollUp = () => {
	const scrollUp = document.getElementById("scroll-up");
	this.scrollY >= 350
		? scrollUp.classList.add("show-scroll")
		: scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*============== Scroll Sectoin Action Link========== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id"),
			sectionClass = document.querySelector(
				".nav-menu a[href*='+ sectionId +']",
			);

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionClass.classList.add("active-link");
		} else {
			sectionClass.classList.remove("active-link");
		}
	});
};

window.addEventListener("scroll", scrollActive);

/*============== Scroll reveai animation ========== */

const sr = scrollReveal({
	original: "Top",
	distance: "60px",
	duration: 2000,
	// reset: true,
});
sr.reveal(".home-content, .resume-content:nth-child(1), .footer-container");
sr.reveal(".home-data, .resume-content:nth-child(2)", {
	delay: 300,
	origin: "bottom",
});
sr.reveal(".about-content, .contact-content", { origin: "bottom" });
sr.reveal(".about-img, .contact-form", { delay: 300 });
sr.reveal(".ptoject-card", { interval: 100 });

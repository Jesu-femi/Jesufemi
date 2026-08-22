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
const typedHome = new Typed("#home-typed", {
	strings: ["Front-end Developer", "Freelancer", "Web Designer"],
	typeSpeed: 80,
	backSpeed: 40,
	backDelay: 2000,
	loop: true,
	cursorChar: "_",
});
/*============== ADD SHADOW TO THE HEADER ========== */
const shadowHeader = () => {
	const header = document.getElementById("header");
	window.scrollY >= 50
		? header.classList.add("shadowHeader")
		: header.classList.remove("shadowHeader");
};
window.addEventListener("scroll", shadowHeader);

/*============== CONTACT EMAIL JS ========== */
const contactForm = document.getElementById("contact-form"),
	contactMessage = document.getElementById("contact-message");

if (contactForm) {
	const sendEmail = (e) => {
		e.preventDefault();

		const submitBtn = contactForm.querySelector("button[type='submit']");
		const originalBtnText = submitBtn.textContent;
		submitBtn.disabled = true;
		submitBtn.textContent = "Sending...";
		contactMessage.textContent = "";

		/* serviceID - templateID - form reference */
		/* Public key is set once globally via emailjs.init() in index.html */
		emailjs.sendForm("YOUR_SERVICE_ID", "template_ut6ut0n", contactForm).then(
			() => {
				contactMessage.textContent = "Message sent successfully";
				contactForm.reset();

				setTimeout(() => {
					contactMessage.textContent = "";
				}, 5000);
			},
			(error) => {
				// Error message
				console.error("EmailJS error:", error);
				contactMessage.textContent = "Message NOT sent (service error). Please try again or email me directly.";
			},
		).finally(() => {
			submitBtn.disabled = false;
			submitBtn.textContent = originalBtnText;
		});
	};
	contactForm.addEventListener("submit", sendEmail);
}

/*============== Show Scroll UP ========== */
const scrollUpBtn = document.getElementById("scroll-up");
const toggleScrollUp = () => {
	window.scrollY >= 350
		? scrollUpBtn.classList.add("show-scroll")
		: scrollUpBtn.classList.remove("show-scroll");
};
window.addEventListener("scroll", toggleScrollUp);

/*============== Scroll Section Action Link ========== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id"),
			sectionClass = document.querySelector(
				`.nav-menu a[href*="${sectionId}"]`,
			);

		if (!sectionClass) return;

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionClass.classList.add("active-link");
		} else {
			sectionClass.classList.remove("active-link");
		}
	});
};

window.addEventListener("scroll", scrollActive);

/*============== Scroll reveal animation ========== */

const sr = ScrollReveal({
	origin: "top",
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
sr.reveal(".project-card", { interval: 100 });
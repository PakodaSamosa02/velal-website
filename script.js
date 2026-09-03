/* =========================================================
   WANKU'S KART — V2
   INTERACTIONS & ANIMATION
   ========================================================= */


/* =========================================================
   COFFEE INTRO
   ========================================================= */

const intro = document.getElementById("coffee-intro");
const mainSite = document.getElementById("main-site");
const statusText = document.getElementById("status-text");

const messages = [
    "warming up",
    "grinding beans",
    "brewing",
    "almost there..."
];

let messageIndex = 0;

const messageTimer = setInterval(() => {

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = messages.length - 1;
        clearInterval(messageTimer);
    }

    if (statusText) {
        statusText.textContent = messages[messageIndex];
    }

}, 900);


/*
    Let the coffee animation breathe,
    then reveal the website.
*/

setTimeout(() => {

    if (intro) {
        intro.classList.add("leave");
    }

    if (mainSite) {
        mainSite.classList.add("visible");
    }

    document.body.style.overflow = "auto";

}, 4800);



/* =========================================================
   SCROLL REVEALS
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".journey-heading, " +
    ".journey-content, " +
    ".notebook-scrap, " +
    ".lab-intro, " +
    ".experiment-card, " +
    ".lab-note, " +
    ".journal-heading, " +
    ".journal-card, " +
    ".dream-content, " +
    ".dream-sketch"
);


revealElements.forEach((element) => {

    element.classList.add("scroll-reveal");

});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================================
   MOUSE PARALLAX
   ========================================================= */

const hero = document.querySelector(".hero-v2");

const heroRingOne = document.querySelector(".ring-one");
const heroRingTwo = document.querySelector(".ring-two");
const heroNote = document.querySelector(".hero-note");
const heroBackground = document.querySelector(".hero-background-word");


if (hero && window.innerWidth > 800) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const mouseX =
            (event.clientX - rect.left) / rect.width - 0.5;

        const mouseY =
            (event.clientY - rect.top) / rect.height - 0.5;


        if (heroRingOne) {

            heroRingOne.style.transform =
                `translate(${mouseX * 18}px, ${mouseY * 18}px) rotate(12deg)`;

        }


        if (heroRingTwo) {

            heroRingTwo.style.transform =
                `translate(${mouseX * -25}px, ${mouseY * -25}px) rotate(-8deg)`;

        }


        if (heroNote) {

            heroNote.style.transform =
                `translate(${mouseX * -12}px, ${mouseY * -12}px) rotate(5deg)`;

        }


        if (heroBackground) {

            heroBackground.style.transform =
                `translate(${mouseX * -15}px, ${mouseY * -15}px) rotate(-4deg)`;

        }

    });

}



/* =========================================================
   COFFEE RING — LITTLE MOVEMENT
   ========================================================= */

const rings = document.querySelectorAll(".coffee-ring");


rings.forEach((ring, index) => {

    let direction = index % 2 === 0 ? 1 : -1;

    let rotation = 0;


    setInterval(() => {

        rotation += 0.03 * direction;

        ring.style.marginTop =
            `${Math.sin(rotation) * 3}px`;

    }, 50);

});



/* =========================================================
   JOURNAL CARD TILT
   ========================================================= */

const journalCards =
    document.querySelectorAll(".journal-card");


journalCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 800) {
            return;
        }


        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX = rect.width / 2;
        const centerY = rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;


        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        if (card.classList.contains("tilted")) {

            card.style.transform =
                "rotate(3deg) translateY(15px)";

        } else {

            card.style.transform =
                "rotate(0deg) translateY(0)";

        }

    });

});



/* =========================================================
   EXPERIMENT CARD
   ========================================================= */

const experimentCard =
    document.querySelector(".experiment-card");


if (experimentCard) {

    experimentCard.addEventListener("mouseenter", () => {

        const result =
            experimentCard.querySelector(
                ".experiment-result p"
            );


        if (result) {

            result.textContent =
                "Interesting. Definitely worth another try.";

        }

    });


    experimentCard.addEventListener("mouseleave", () => {

        const result =
            experimentCard.querySelector(
                ".experiment-result p"
            );


        if (result) {

            result.textContent =
                "TBD. Probably delicious.";

        }

    });

}



/* =========================================================
   SCROLL-BASED COFFEE COUNTER
   ========================================================= */

const sectionNumbers =
    document.querySelectorAll(".section-number");


window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY;

    sectionNumbers.forEach((number) => {

        const section =
            number.closest("section");


        if (!section) {
            return;
        }


        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        const progress =
            (scrollPosition - sectionTop) /
            sectionHeight;


        if (
            progress >= 0 &&
            progress <= 1
        ) {

            number.style.transform =
                `translateY(${progress * 30}px)`;

        }

    });

});



/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".site-nav a, .site-logo"
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");


        if (
            !targetId ||
            !targetId.startsWith("#")
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =========================================================
   LITTLE EASTER EGG
   ========================================================= */

let logoClicks = 0;

const logo =
    document.querySelector(".site-logo");


if (logo) {

    logo.addEventListener("click", (event) => {

        /*
            Only count repeated clicks when already
            at the top of the page.
        */

        if (window.scrollY > 150) {
            return;
        }


        logoClicks++;


        if (logoClicks >= 5) {

            event.preventDefault();


            document.body.classList.add(
                "coffee-chaos"
            );


            setTimeout(() => {

                document.body.classList.remove(
                    "coffee-chaos"
                );

            }, 1600);


            logoClicks = 0;

        }

    });

}



/* =========================================================
   RESPECT REDUCED MOTION
   ========================================================= */

if (
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    document.documentElement.style.scrollBehavior =
        "auto";

}

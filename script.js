document.addEventListener("DOMContentLoaded", () => {
    let popup = document.getElementById("popup-overlay");
    let continueBtn = document.getElementById("btn");
    let audio = document.getElementById("background-audio");
    let clickSound = document.getElementById("click-sound");

    continueBtn.addEventListener("click", () => {
        clickSound.play();
        popup.style.display = "none";

        setTimeout(() => {
            audio.play().catch(error => console.log("Playback failed:", error));
        }, 200);
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            clickSound.play();
            popup.style.display = "none";

            setTimeout(() => {
                audio.play().catch(error => console.log("Playback failed:", error));
            }, 200);
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray("section");

    gsap.to(".slider", {
        x: () => `-${(sections.length - 1) * window.innerWidth * 0.9}px`,
        ease: "none",
        scrollTrigger: {
            trigger: ".slider",
            start: "top top",
            end: () => `+=${window.innerWidth * 0.9 * (sections.length - 1)}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            snap: {
                snapTo: 1 / (sections.length - 1),
                delay: 0.1,
                duration: { min: 0.2, max: 1 },
                ease: "power1.inOut"
            }
        }
    });
});

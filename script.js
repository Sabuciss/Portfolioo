document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(
    ".section, .contact, footer, .skill-card, .project, .education-item"
);

const revealItem = (item) => {
    item.classList.add("is-visible");
};

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            revealItem(entry.target);
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px"
    });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach(revealItem);
}

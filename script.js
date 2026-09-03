document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(
    ".section, .contact, footer, .skill-card, .project, .education-item"
);
const projectImages = document.querySelectorAll(".project-image");

const setItemVisibility = (item, isVisible) => {
    item.classList.toggle("is-visible", isVisible);
};

const setProjectImageVisibility = (image, isVisible) => {
    image.classList.toggle("in-view", isVisible);
};

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.target.classList.contains("project-image")) {
                setProjectImageVisibility(entry.target, entry.isIntersecting);
            } else {
                setItemVisibility(entry.target, entry.isIntersecting);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px"
    });

    revealItems.forEach((item) => revealObserver.observe(item));

    projectImages.forEach((image) => revealObserver.observe(image));
} else {
    revealItems.forEach((item) => setItemVisibility(item, true));
    projectImages.forEach((image) => setProjectImageVisibility(image, true));
}

projectImages.forEach((image) => {
    image.setAttribute("tabindex", "0");
});

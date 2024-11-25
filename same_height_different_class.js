window.addEventListener("load", setSameHeights);
window.addEventListener("resize", setSameHeights);

function setSameHeights() {
    const minWidth = 769; // Minimum width to apply the effect

    if (window.innerWidth >= minWidth) {
        // Apply same height logic to each group separately
        setEqualHeight(".same-height-container-menu");
        setEqualHeight(".post-title h3");
    } else {
        // Reset heights for smaller screens
        resetHeight(".same-height-container-menu");
        resetHeight(".event-title h3");
    }
}

function setEqualHeight(selector) {
    const elements = document.querySelectorAll(selector);
    let maxHeight = 0;

    // Reset heights to auto to recalculate properly
    elements.forEach(element => (element.style.height = "auto"));

    // Find the tallest element in the group
    elements.forEach(element => {
        const elementHeight = element.offsetHeight;
        if (elementHeight > maxHeight) {
            maxHeight = elementHeight;
        }
    });

    // Apply the tallest height to all elements in the group
    elements.forEach(element => (element.style.height = maxHeight + "px"));
}

function resetHeight(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => (element.style.height = "auto"));
}

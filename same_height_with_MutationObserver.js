<script>
window.addEventListener("load", () => {
    const minWidth = 769;
    const divsSelector = ".job-info-wrapper";

    function setSameHeight() {
        const divs = document.querySelectorAll(divsSelector);

        if (window.innerWidth >= minWidth) {
            let maxHeight = 0;

            // Reset height to auto to recalculate properly on resize
            divs.forEach(div => div.style.height = "auto");

            // Find the maximum height of the divs
            divs.forEach(div => {
                const divHeight = div.offsetHeight;
                if (divHeight > maxHeight) {
                    maxHeight = divHeight;
                }
            });

            // Apply the max height to all divs
            divs.forEach(div => div.style.height = maxHeight + "px");
        } else {
            // Reset height if below min-width
            divs.forEach(div => div.style.height = "auto");
        }
    }

    // Run the function initially on load and resize
    setSameHeight();
    window.addEventListener("resize", setSameHeight);

    // Use MutationObserver to detect when new elements are added
    const observer = new MutationObserver(() => setSameHeight());
    observer.observe(document.body, { childList: true, subtree: true });
});
</script>

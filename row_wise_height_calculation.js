<script>
window.addEventListener("load", () => {
    const minWidth = 769;
    const postSelector = ".post-item";   // <-- your post card wrapper
    const titleSelector = ".post-title"; // your existing title class

    function setSameHeight() {
        const posts = Array.from(document.querySelectorAll(postSelector));

        if (!posts.length) return;

        // Reset all title heights first
        posts.forEach(post => {
            const title = post.querySelector(titleSelector);
            if (title) title.style.height = "auto";
        });

        // Below breakpoint: no equalizing
        if (window.innerWidth < minWidth) return;

        // Group posts by row using their top position
        const rows = {};

        posts.forEach(post => {
            const rect = post.getBoundingClientRect();
            const top = Math.round(rect.top); // normalize float values

            if (!rows[top]) {
                rows[top] = [];
            }
            rows[top].push(post);
        });

        // For each row, find max title height and apply it to that row only
        Object.values(rows).forEach(rowPosts => {
            let maxHeight = 0;

            // 1) measure
            rowPosts.forEach(post => {
                const title = post.querySelector(titleSelector);
                if (!title) return;
                const h = title.offsetHeight;
                if (h > maxHeight) maxHeight = h;
            });

            // 2) apply
            rowPosts.forEach(post => {
                const title = post.querySelector(titleSelector);
                if (!title) return;
                title.style.height = maxHeight + "px";
            });
        });
    }

    setSameHeight();
    window.addEventListener("resize", setSameHeight);

    const observer = new MutationObserver(() => setSameHeight());
    observer.observe(document.body, { childList: true, subtree: true });
});
</script>

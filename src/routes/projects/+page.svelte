<script>
import { onMount } from 'svelte';

onMount(() => {
    const block = document.querySelector("section.gallery1");
    if (!block) return;

    // Click-to-navigate on gallery items
    function getUrlFromAlt(altRaw) {
        const alt = (altRaw || "").trim();
        if (!alt) return "";
        if (alt.toUpperCase().startsWith("LINK:")) return alt.slice(5).trim();
        if (alt.startsWith("http://") || alt.startsWith("https://") || alt.endsWith(".html") || alt.startsWith("/")) return alt;
        return "";
    }

    block.querySelectorAll(".mbr-gallery-item").forEach(item => {
        const img = item.querySelector("img");
        if (!img) return;
        const url = getUrlFromAlt(img.getAttribute("alt"));
        if (!url) return;
        item.style.cursor = "pointer";
        item.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            window.location.href = url;
        }, true);
    });

    // Filter click handling
    const filterUl = block.querySelector(".mbr-gallery-filter ul");
    if (filterUl) {
        filterUl.querySelectorAll("li").forEach(li => {
            li.addEventListener("click", e => {
                e.preventDefault();
                filterUl.querySelectorAll("li").forEach(l => l.classList.remove("active"));
                li.classList.add("active");
                const tag = li.querySelector("a").textContent.trim();
                block.querySelectorAll(".mbr-gallery-item").forEach(item => {
                    const tags = (item.getAttribute("data-tags") || "").split(",").map(t => t.trim());
                    if (li.classList.contains("mbr-gallery-filter-all") || tags.includes(tag)) {
                        item.classList.remove("mbr-gallery-item__hided");
                    } else {
                        item.classList.add("mbr-gallery-item__hided");
                    }
                });
                // Re-layout masonry
                const row = block.querySelector(".mbr-gallery-row");
                if (row) row.dispatchEvent(new CustomEvent("filter"));
            });
        });
    }

    // Masonry layout
    const row = block.querySelector(".mbr-gallery-row");
    if (row && typeof Masonry !== "undefined" && typeof imagesLoaded !== "undefined") {
        imagesLoaded(row).on("progress", () => {
            const msnry = new Masonry(row, {
                itemSelector: ".mbr-gallery-item:not(.mbr-gallery-item__hided)",
                percentPosition: true,
                horizontalOrder: true
            });
            row.addEventListener("filter", () => { msnry.reloadItems(); msnry.layout(); });
        });
    }
});
</script>

<svelte:head>
	<title>The Projects | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="mbr-gallery mbr-slider-carousel gallery1 cid-v93Q6hPMmR" id="gallery1-31">
    <div class="container">
        <h3 class="mbr-section-tag mbr-fonts-style display-7">the PROJECTS</h3>
        <h2 class="align-left mbr-fonts-style mbr-section-title display-2"><strong><font color="#808080">Visions &amp;</font> Executions</strong></h2>
        <h3 class="mbr-section-subtitle mbr-fonts-style display-5">a bundle of executions to showcase dedication and professionalism&nbsp;</h3>
    </div>
    <div class="container">
        <div class="col-left-gallery">
            <div class="mbr-gallery-filter container gallery-filter-active">
                <ul>
                    <li class="mbr-gallery-filter-all active"><a class="btn btn-md btn-primary-outline display-7" href="#">All</a></li>
                    <li><a class="btn btn-md btn-primary-outline display-7" href="#">Commercial</a></li>
                    <li><a class="btn btn-md btn-primary-outline display-7" href="#">Healthcare</a></li>
                    <li><a class="btn btn-md btn-primary-outline display-7" href="#">Residential</a></li>
                </ul>
            </div>
            <div class="mbr-gallery-row">
                <div class="mbr-gallery-layout-default">
                    <div><div>
                        <div class="mbr-gallery-item mbr-gallery-item--p4" data-video-url="false" data-tags="Commercial">
                            <div>
                                <img src="/assets/images/asc-chocoville-001-1920x1280-800x533.jpg" alt="LINK:/projects/chocoville" title="">
                                <span class="icon-focus"></span>
                                <span class="mbr-gallery-title mbr-fonts-style display-7">Chocoville Retail Shop</span>
                            </div>
                        </div>
                        <div class="mbr-gallery-item mbr-gallery-item--p4" data-video-url="false" data-tags="Commercial">
                            <div>
                                <img src="/assets/images/asc-olena-001-1920x1280-800x533.jpg" alt="LINK:/projects/oleana-playhouse" title="">
                                <span class="icon-focus"></span>
                                <span class="mbr-gallery-title mbr-fonts-style display-7">The Oleana Playhouse</span>
                            </div>
                        </div>
                        <div class="mbr-gallery-item mbr-gallery-item--p4" data-video-url="false" data-tags="Commercial">
                            <div>
                                <img src="/assets/images/asc-promedic-main-office-001-1920x1280-800x533.jpg" alt="LINK:/projects/promedic" title="">
                                <span class="icon-focus"></span>
                                <span class="mbr-gallery-title mbr-fonts-style display-7">Art Specialized Construction</span>
                            </div>
                        </div>
                        <div class="mbr-gallery-item mbr-gallery-item--p4" data-video-url="false" data-tags="Healthcare">
                            <div>
                                <img src="/assets/images/asc-website-projects-taiba-001.jpg-1920x1280-800x533.jpg" alt="LINK:/projects/taiba-hospital" title="">
                                <span class="icon-focus"></span>
                                <span class="mbr-gallery-title mbr-fonts-style display-7"><strong>TAIBA HOSPITAL</strong></span>
                            </div>
                        </div>
                        <div class="mbr-gallery-item mbr-gallery-item--p4" data-video-url="false" data-tags="Healthcare">
                            <div>
                                <img src="/assets/images/asc-testing-laboratory-012-1920x1280-800x533.jpg" alt="LINK:/projects/testing-laboratory" title="">
                                <span class="icon-focus"></span>
                                <span class="mbr-gallery-title mbr-fonts-style display-7">I AM Negative Laboratory</span>
                            </div>
                        </div>
                        <div class="mbr-gallery-item mbr-gallery-item--p4" data-video-url="false" data-tags="Residential">
                            <div>
                                <img src="/assets/images/img-20250626-wa0020-1-1600x900-768x512.jpeg" alt="LINK:/projects/al-wafrah" title="">
                                <span class="icon-focus"></span>
                                <span class="mbr-gallery-title mbr-fonts-style display-7">Al Wafrah Summer House</span>
                            </div>
                        </div>
                    </div></div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .cta-arrow {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-size: 0.85rem;
        padding: 0.6rem 0;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        transition: border-color 0.3s ease, gap 0.3s ease;
    }
    .cta-arrow:hover {
        color: #fff;
        border-bottom-color: #fff;
        gap: 0.85rem;
    }
    .cta-arrow-icon {
        transition: transform 0.3s ease;
    }
    .cta-arrow:hover .cta-arrow-icon {
        transform: translateX(4px);
    }
</style>

<script>
    import { onMount } from 'svelte';
    onMount(() => {
        // Set data-pie after hydration so Svelte doesn't strip it
        document.querySelectorAll('.pie_progress').forEach(el => {
            const goal = +(el.getAttribute('data-goal') || 0);
            el.setAttribute('data-pie', JSON.stringify({
                percent: goal, size: 150, colorCircle: '#f1f1f1',
                stroke: 5, colorSlice: '#7eb7bf', fontSize: '1.3rem', number: false
            }));
            const p = el.querySelector('p');
            if (p) p.textContent = goal + '%';
        });
        if (typeof CircularProgressBar !== 'undefined') {
            new CircularProgressBar('pie_progress');
        }
    });
</script>

<svelte:head>
	<title>Home | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="slider03 mbr-embla cid-uJmLfb7Iop" id="slider03-0">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play-interval="5" data-draggable="true">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide slider-image item">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="/assets/images/artspecialized-project-001.jpg-1900x1200.jpg" alt="Art Specialized Construction - project 001">
                                            <p class="item-desc mbr-fonts-style display-4">.</p>
                                            <div class="title-wrapper">
                                                <div class="title-wrap">
                                                    <h4 class="item-title mbr-fonts-style display-2">Taking construction to the next level<br></h4>
                                                </div>
                                                <div class="mbr-section-btn"><a class="cta-arrow display-4" href="/projects">View Projects <span class="cta-arrow-icon">→</span></a></div>
                                            </div>
                                            <div class="name-wrapper"><div class="name-wrap"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="/assets/images/artspecialized-project-002.jpg-1900x1200.jpg" alt="Art Specialized Construction - project 002">
                                            <p class="item-desc mbr-fonts-style display-4">.</p>
                                            <div class="title-wrapper">
                                                <div class="title-wrap">
                                                    <h4 class="item-title mbr-fonts-style display-2">Setting your mind at ease by delivering top quality renovation works<br></h4>
                                                </div>
                                                <div class="mbr-section-btn"><a class="cta-arrow display-4" href="/projects">View Projects <span class="cta-arrow-icon">→</span></a></div>
                                            </div>
                                            <div class="name-wrapper"><div class="name-wrap"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="/assets/images/artspecialized-project-003.jpg-1900x1200.jpg" alt="Art Specialized Construction - project 003">
                                            <p class="item-desc mbr-fonts-style display-4">.</p>
                                            <div class="title-wrapper">
                                                <div class="title-wrap">
                                                    <h4 class="item-title mbr-fonts-style display-2">Healthcare facilities and Clinics</h4>
                                                </div>
                                                <div class="mbr-section-btn"><a class="cta-arrow display-4" href="/projects">View Projects <span class="cta-arrow-icon">→</span></a></div>
                                            </div>
                                            <div class="name-wrapper"><div class="name-wrap"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="embla__button embla__button--prev">
                        <span class="mbr-iconfont mobi-mbri-left mobi-mbri" aria-hidden="true"></span>
                        <span class="sr-only visually-hidden">Previous</span>
                    </button>
                    <button class="embla__button embla__button--next">
                        <span class="mbr-iconfont mobi-mbri-right mobi-mbri" aria-hidden="true"></span>
                        <span class="sr-only visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="article02 modelm5 cid-uJmSI6wO7C" id="article02-4">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <div class="desc-wrapper">
                        <p class="mbr-desc mbr-fonts-style display-4">
                            <strong>Why Art Specialized Construction</strong>
                        </p>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-2">At the heart of every project is a promise<br>to deliver quality, integrity, and craftsmanship that stand the test of time.&nbsp;</h2>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features2 dentalm5 cid-uJmV7WSe38" id="features2-6">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4 card">
                <div class="card-wrapper">
                    <p class="mbr-number mbr-fonts-style display-1">25+</p>
                    <h4 class="mbr-card-title mbr-fonts-style display-7">HEALTHCARE PROJECTS</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Divided into hospitals &amp; laboratories</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 card">
                <div class="card-wrapper">
                    <p class="mbr-number mbr-fonts-style display-1">15+</p>
                    <h4 class="mbr-card-title mbr-fonts-style display-7">LUXURY RESIDENCE PROJECTS</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Apartments, houses &amp; villas</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 card">
                <div class="card-wrapper">
                    <p class="mbr-number mbr-fonts-style display-1">20+</p>
                    <h4 class="mbr-card-title mbr-fonts-style display-7">COMMERCIAL PROJECTS</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Shops, offices, commercial spaces</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features2 dentalm5 cid-uShoNskWU6" id="features2-k">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4 card">
                <div class="card-wrapper">
                    <p class="mbr-number mbr-fonts-style display-1">100%</p>
                    <h4 class="mbr-card-title mbr-fonts-style display-7">SATISFIED CUSTOMERS</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Due to our quality, pricing and timing commitments</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features2 shopm5 cid-uJmV9H8G1Y" id="afeatures2-7">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-text">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-7">the pillars of the trade</h3>
                <h5 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 display-2">what we offer ?</h5>
                <div class="cards row justify-content-center">
                    <div class="card col-12 col-lg-4">
                        <div class="card-wrapper">
                            <div class="iconfont-wrapper">
                                <a href="/projects?filter=Residential"><span class="mbr-iconfont icon54-v4-wooden-house"></span></a>
                            </div>
                            <h5 class="card-title mbr-fonts-style align-center mb-0 display-4">Residential</h5>
                        </div>
                    </div>
                    <div class="card col-12 col-lg-4">
                        <div class="card-wrapper">
                            <div class="iconfont-wrapper">
                                <a href="/projects?filter=Commercial"><span class="mbr-iconfont icon54-v4-building-construction"></span></a>
                            </div>
                            <h5 class="card-title mbr-fonts-style align-center mb-0 display-4">Commercial</h5>
                        </div>
                    </div>
                    <div class="card col-12 col-lg-4">
                        <div class="card-wrapper">
                            <div class="iconfont-wrapper">
                                <a href="/projects?filter=Healthcare"><span class="mbr-iconfont imind-hospital"></span></a>
                            </div>
                            <h5 class="card-title mbr-fonts-style align-center mb-0 display-4">Healthcare,&nbsp; Clinics</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features11 cid-uJpdMpq7F3" id="features11-8">
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="wrapper col-12 col-md-7">
                    <h3 class="mbr-section-title mbr-fonts-style display-2">The Essentials</h3>
                    <h3 class="mbr-section-subtitle mbr-fonts-style display-4">Our services combine the best elements in the field of construction and renovation resulting in high-end finishing and customer satisfaction.</h3>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features3 cid-uJpfFFVQcq" id="features03-c">
    <div class="container">
        <div class="row">
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont icon54-v1-digital-design"></span>
                        </div>
                        <h5 class="card-title mbr-fonts-style display-4">Design</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont icon54-v2-truck-1"></span>
                        </div>
                        <h5 class="card-title mbr-fonts-style display-4">Demolition</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont icon54-v1-recycle-water"></span>
                        </div>
                        <h5 class="card-title mbr-fonts-style display-4">Waterproof work</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont icon54-v1-electric-plug"></span>
                        </div>
                        <h5 class="card-title mbr-fonts-style display-4">Electrical work</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont icon54-v4-corkscrew"></span>
                        </div>
                        <h5 class="card-title mbr-fonts-style display-4">Wood work</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont socicon-squarespace socicon"></span>
                        </div>
                        <h5 class="card-title mbr-fonts-style display-4">Tiles works</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont icon54-v1-water-tap"></span>
                        </div>
                        <h5 class="card-title mbr-fonts-style display-4">Plumbing</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features3 cid-uJpe1NyTio" id="features3-a">
    <div class="bg-wrapper"></div>
    <div class="container">
        <div class="content-wrapper row justify-content-center">
            <div class="image-wrapper col-12 col-md-6">
                <img src="/assets/images/artspecialized-residentialproject.jpg-1-1080x1080.jpg" alt="Art Specialized Construction - residential Project">
            </div>
            <div class="text-wrapper col-12 col-md-6">
                <h4 class="card-title mbr-fonts-style mb-3 mb-md-4 display-1">Renovations Interiors, exteriors, full makeovers</h4>
                <p class="mbr-text mbr-fonts-style mb-md-5 display-7">
                    We specialize in personalized renovations that reflect your lifestyle, needs, and budget - always delivered with the quality and professionalism you deserve.</p>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="progress-bars04 photom4_progress-bars04 circle-progress-section cid-uJprFiYe7D" id="progress-bars04-g">
    <div class="container">
        <h2 class="mbr-section-title align-center mbr-fonts-style display-2">The Portfolio</h2>
        <h3 class="mbr-section-subtitle mbr-fonts-style display-4">throughout our operations and portfolio built up, our concentration and end results hovered around the below percentages in the categories we cover, from Renovations to design and implementation or New Construction.&nbsp;</h3>
        <div class="media-container-row pt-5 mt-2">
            <div class="card p-3 align-center">
                <div class="wrap">
                    <div class="pie_progress progress1" role="progressbar" data-goal="55">
                        <p class="pie_progress__number mbr-fonts-style display-5">55%</p>
                    </div>
                </div>
                <div class="mbr-crt-title pt-3">
                    <h4 class="card-title py-2 mbr-fonts-style display-5">Renovation Work</h4>
                </div>
            </div>
            <div class="card p-3 align-center">
                <div class="wrap">
                    <div class="pie_progress progress2" role="progressbar" data-goal="20">
                        <p class="pie_progress__number mbr-fonts-style display-5">20%</p>
                    </div>
                </div>
                <div class="mbr-crt-title pt-3">
                    <h4 class="card-title py-2 mbr-fonts-style display-5">Turnkey Projects</h4>
                </div>
            </div>
            <div class="card p-3 align-center">
                <div class="wrap">
                    <div class="pie_progress progress3" role="progressbar" data-goal="25">
                        <p class="pie_progress__number mbr-fonts-style display-5">25%</p>
                    </div>
                </div>
                <div class="mbr-crt-title pt-3">
                    <h4 class="card-title py-2 mbr-fonts-style display-5">Design &amp; Execution</h4>
                </div>
            </div>
        </div>
    </div>
</section>

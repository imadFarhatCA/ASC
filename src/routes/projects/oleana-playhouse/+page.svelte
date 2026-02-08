<svelte:head>
	<title>The Oleana Children Hub | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 mbr-fullscreen" id="header1-oleana" style="background-image: url('/assets/images/asc-olena-001-1920x1280.jpg');">
    <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
    <div class="container">
        <div class="row">
            <div class="content-wrap col-12 col-md-12">
                <h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">Oleana Co for General trading</h2>
                <div class="col-12"><div class="line"></div></div>
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">the Oleana CHILDREN HUB</h1>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features9" id="afeatures9-oleana">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-text">
                <div class="lists-container">
                    <div class="card col-12 col-md-3">
                        <div class="card-wrapper col-12">
                            <div class="card-box">
                                <h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>1.</strong></h3>
                                <div class="card-content">
                                    <h4 class="card-title mbr-fonts-style display-4">SCOPE OF WORK</h4>
                                    <p class="card-text mbr-fonts-style display-7">Full Construction Execution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-3">
                        <div class="card-wrapper col-12">
                            <div class="card-box">
                                <h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>2.</strong></h3>
                                <div class="card-content">
                                    <h4 class="card-title mbr-fonts-style display-4">SECTOR</h4>
                                    <p class="card-text mbr-fonts-style display-7">Commercial / Educational / Children's Facility</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-3">
                        <div class="card-wrapper col-12">
                            <div class="card-box">
                                <h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>3.</strong></h3>
                                <div class="card-content">
                                    <h4 class="card-title mbr-fonts-style display-4">PROJECT SIZE</h4>
                                    <p class="card-text mbr-fonts-style display-7">323 Square Meters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="content2" id="content02-oleana">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-9">
                <p class="mbr-text mbr-fonts-style display-4">Executed – 2019, Constructing Spaces for Learning and Play.</p>
                <p class="mbr-text mbr-fonts-style display-4">We executed the Oleana Children Hub project in Kuwait with precision and attention to detail, delivering a dynamic environment that supports children's well-being while ensuring functional comfort for parents. Our team implemented all architectural, interior, and structural elements, including specialized play structures, multifunctional zones, and parent waiting areas, with exacting standards.</p>
                <p class="mbr-text mbr-fonts-style display-4">The finishes, color palettes, and textures were carefully executed to create a warm, secure, and engaging space. The result is a fully realized hub where playful design and high-quality construction merge seamlessly.</p>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5" id="agallery3-oleana">
    <div class="container">
        <div class="row mbr-gallery items-row justify-content-center">
            {#each ['011','010','009','004','003','002','008','007','006','005'] as n, i}
            <div class="col-12 col-md-6 col-lg-4 item gallery-image">
                <div class="item-wrapper" data-bs-toggle="modal" data-bs-target="#oleana-modal">
                    <img class="w-100" src="/assets/images/asc-olena-{n}-816x544.jpg" alt="Oleana Children Hub" data-bs-slide-to="{i}" data-bs-target="#lb-oleana">
                    <div class="img-overlay"></div>
                    <div class="icon-wrapper"><span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></div>
                </div>
            </div>
            {/each}
        </div>
        <div class="modal mbr-slider" tabindex="-1" id="oleana-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="carousel slide" id="lb-oleana" data-bs-interval="5000">
                            <div class="carousel-inner">
                                {#each ['011','010','009','004','003','002','008','007','006','005'] as n, i}
                                <div class="carousel-item {i === 0 ? 'active' : ''}">
                                    <img class="d-block w-100" src="/assets/images/asc-olena-{n}-816x544.jpg" alt="">
                                </div>
                                {/each}
                            </div>
                            <a role="button" href="#" class="close" data-bs-dismiss="modal" aria-label="Close"></a>
                            <a class="carousel-control-prev carousel-control" data-bs-slide="prev" href="#lb-oleana"><span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span></a>
                            <a class="carousel-control-next carousel-control" data-bs-slide="next" href="#lb-oleana"><span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

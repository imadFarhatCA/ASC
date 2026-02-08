<svelte:head>
	<title>Al Wafrah Summer House | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 mbr-fullscreen" id="header1-alwafrah" style="background-image: url('/assets/images/img-20250626-wa0020-1-1600x900.jpeg');">
    <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
    <div class="container">
        <div class="row">
            <div class="content-wrap col-12 col-md-12">
                <h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">Residential Project</h2>
                <div class="col-12"><div class="line"></div></div>
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">Al Wafrah Summer House</h1>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features9" id="afeatures9-alwafrah">
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
                                    <p class="card-text mbr-fonts-style display-7">Full Renovation</p>
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
                                    <p class="card-text mbr-fonts-style display-7">Residential</p>
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
                                    <p class="card-text mbr-fonts-style display-7">TBD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5" id="agallery3-alwafrah">
    <div class="container">
        <div class="row mbr-gallery items-row justify-content-center">
            {#each ['img-20250626-wa0009-1-816x458.jpg','img-20250626-wa0013-816x458.jpg','img-20250626-wa0015-816x458.jpg','img-20250626-wa0016-816x458.jpg','img-20250626-wa0031-816x612.jpg','img-20250626-wa0035-816x458.jpg','img-20250626-wa0038-816x458.jpg'] as img, i}
            <div class="col-12 col-md-6 col-lg-4 item gallery-image">
                <div class="item-wrapper" data-bs-toggle="modal" data-bs-target="#alwafrah-modal">
                    <img class="w-100" src="/assets/images/{img}" alt="Al Wafrah Summer House" data-bs-slide-to="{i}" data-bs-target="#lb-alwafrah">
                    <div class="img-overlay"></div>
                    <div class="icon-wrapper"><span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></div>
                </div>
            </div>
            {/each}
        </div>
        <div class="modal mbr-slider" tabindex="-1" id="alwafrah-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="carousel slide" id="lb-alwafrah" data-bs-interval="5000">
                            <div class="carousel-inner">
                                {#each ['img-20250626-wa0009-1-816x458.jpg','img-20250626-wa0013-816x458.jpg','img-20250626-wa0015-816x458.jpg','img-20250626-wa0016-816x458.jpg','img-20250626-wa0031-816x612.jpg','img-20250626-wa0035-816x458.jpg','img-20250626-wa0038-816x458.jpg'] as img, i}
                                <div class="carousel-item {i === 0 ? 'active' : ''}">
                                    <img class="d-block w-100" src="/assets/images/{img}" alt="">
                                </div>
                                {/each}
                            </div>
                            <a role="button" href="#" class="close" data-bs-dismiss="modal" aria-label="Close"></a>
                            <a class="carousel-control-prev carousel-control" data-bs-slide="prev" href="#lb-alwafrah"><span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span></a>
                            <a class="carousel-control-next carousel-control" data-bs-slide="next" href="#lb-alwafrah"><span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

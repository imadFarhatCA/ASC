<svelte:head>
	<title>Taiba Hospital | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 mbr-fullscreen" id="header1-taiba" style="background-image: url('/assets/images/asc-website-projects-taiba-001.jpg-1920x1280.jpg');">
    <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
    <div class="container">
        <div class="row">
            <div class="content-wrap col-12 col-md-12">
                <h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">Taiba Hospital Renovation</h2>
                <div class="col-12"><div class="line"></div></div>
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">the TAIBA hospital project</h1>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features9" id="afeatures9-taiba">
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
                                    <p class="card-text mbr-fonts-style display-7">Full renovation of all floors in two connected hospital buildings</p>
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
                                    <p class="card-text mbr-fonts-style display-7">Health Care</p>
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
                                    <p class="card-text mbr-fonts-style display-7">15,600 Square Meters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="content2" id="content02-taiba">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-9">
                <p class="mbr-text mbr-fonts-style display-4">Fast-track modernization of an active healthcare facility with zero disruption to patient care.</p>
                <p class="mbr-text mbr-fonts-style display-4">Taiba Hospital is composed of three connected buildings designed to look and operate as one. Our mission was to renovate all the floors in two of these buildings while the hospital remained fully functional and continued to receive patients daily.</p>
                <p class="mbr-text mbr-fonts-style display-4">We executed the work as a fast-track project, ensuring rapid delivery without compromising on quality or safety. Every detail was planned to minimize disruption to hospital operations, maintain a smooth flow for patients and staff, and meet strict health and cleanliness standards.</p>
                <blockquote>
                    <p class="quote mbr-fonts-style display-4">Full renovation of all floors in two active hospital buildings · Fast-track execution to reduce downtime and disruption · Careful coordination between hospital teams and construction staff · Adherence to hospital safety, hygiene, and operational requirements · Consistent delivery of high-quality finishes on tight deadlines</p>
                </blockquote>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5" id="agallery3-taiba">
    <div class="container">
        <div class="row mbr-gallery items-row justify-content-center">
            {#each [['asc-website-projects-taiba-001.jpg-816x544.jpg',0],['asc-website-projects-taiba-002.jpg-816x544.jpg',1],['asc-website-projects-taiba-003.jpg-816x544.jpg',2],['asc-website-projects-taiba-004.jpg-816x544.jpg',3],['asc-website-projects-taiba-005.jpg-816x544.jpg',4],['asc-website-projects-taiba-006.jpg-816x544.jpg',5],['asc-website-projects-taiba-007.jpg-1920x1280.jpg',6],['asc-website-projects-taiba-008.jpg-1920x1280.jpg',7],['asc-website-projects-taiba-009.jpg-1920x1280.jpg',8],['asc-website-projects-taiba-010.jpg-1920x1280.jpg',9],['asc-website-projects-taiba-011.jpg-1920x1280.jpg',10],['asc-website-projects-taiba-013.jpg-1920x1280.jpg',11]] as [img, i]}
            <div class="col-12 col-md-6 col-lg-4 item gallery-image">
                <div class="item-wrapper" data-bs-toggle="modal" data-bs-target="#taiba-modal">
                    <img class="w-100" src="/assets/images/{img}" alt="Taiba Hospital" data-bs-slide-to="{i}" data-bs-target="#lb-taiba">
                    <div class="img-overlay"></div>
                    <div class="icon-wrapper"><span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></div>
                </div>
            </div>
            {/each}
        </div>
        <div class="modal mbr-slider" tabindex="-1" id="taiba-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="carousel slide" id="lb-taiba" data-bs-interval="5000">
                            <div class="carousel-inner">
                                {#each [['asc-website-projects-taiba-001.jpg-816x544.jpg',true],['asc-website-projects-taiba-002.jpg-816x544.jpg',false],['asc-website-projects-taiba-003.jpg-816x544.jpg',false],['asc-website-projects-taiba-004.jpg-816x544.jpg',false],['asc-website-projects-taiba-005.jpg-816x544.jpg',false],['asc-website-projects-taiba-006.jpg-816x544.jpg',false],['asc-website-projects-taiba-007.jpg-1920x1280.jpg',false],['asc-website-projects-taiba-008.jpg-1920x1280.jpg',false],['asc-website-projects-taiba-009.jpg-1920x1280.jpg',false],['asc-website-projects-taiba-010.jpg-1920x1280.jpg',false],['asc-website-projects-taiba-011.jpg-1920x1280.jpg',false],['asc-website-projects-taiba-013.jpg-1920x1280.jpg',false]] as [img, active]}
                                <div class="carousel-item {active ? 'active' : ''}">
                                    <img class="d-block w-100" src="/assets/images/{img}" alt="">
                                </div>
                                {/each}
                            </div>
                            <a role="button" href="#" class="close" data-bs-dismiss="modal" aria-label="Close"></a>
                            <a class="carousel-control-prev carousel-control" data-bs-slide="prev" href="#lb-taiba"><span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span></a>
                            <a class="carousel-control-next carousel-control" data-bs-slide="next" href="#lb-taiba"><span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

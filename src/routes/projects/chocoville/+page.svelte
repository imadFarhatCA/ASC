<svelte:head>
	<title>Chocoville Retail Shop | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 cid-v1v8XxNCpa mbr-fullscreen" id="header1-chocoville" style="background-image: url('/assets/images/asc-chocoville-001-1920x1280.jpg');">
    <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
    <div class="container">
        <div class="row">
            <div class="content-wrap col-12 col-md-12">
                <h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">Vevey Sweets Co.</h2>
                <div class="col-12"><div class="line"></div></div>
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">Chocoville Fit out</h1>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features9 cid-v1v8Xy09F9" id="afeatures9-chocoville">
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
                                    <p class="card-text mbr-fonts-style display-7">TBD</p>
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
                                    <p class="card-text mbr-fonts-style display-7">Retail</p>
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

<section data-bs-version="5.1" class="content2 cid-v1v8XydUlR" id="content02-chocoville">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-9">
                <p class="mbr-text mbr-fonts-style display-4">We started the Renovation of Taiba hospital, Sabah Al Salem, Kuwait in May 2016 till December 2018 , our construction part was as follow:&nbsp;<br><br></p>
                <blockquote>
                    <p class="quote mbr-fonts-style display-4">Demolition of the existing floors, block walls and plasters, waterproofing for the wet areas, Gypsum works for the ceilings &amp; partitions, acoustical ceilings, acoustical flooring walls &amp; ceiling in some of the ENT treatment rooms, fixed panel glass, sliding glass door, glass door, fixing of all types of tiles cladding and flooring, antibacterial paint for the interior and Sigma paint for the exterior, wooden doors, wooden ceiling and wall cladding, cabinets, corean Dupont tops, stretch ceiling, LEAD for the Xrays rooms, stainless steel skirting and flower stand, fixing of art wood and signage, fixing of the linoleum flooring, all types of plumbing works, Curtain (cubicle &amp; Blind), shop drawings and as built drawings.<br></p>
                </blockquote>
                <p class="mbr-text mbr-fonts-style display-4">We managed and supervised the following contractors: concrete, electrical, firefighting &amp; fire alarm, HVAC, curtain wall &amp; alucobond cladding, normal doors and fire rated doors, elevators, woodwork, medical gases, nurse call system, CCTV, and IT.<br>The above works were executed into many phases, as the renovated floors were in a running hospital, we were executing the work with high safety and every step was monitored by the infection control department.</p>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5 cid-v1v8XylTIv" id="agallery3-chocoville">
    <div class="container">
        <div class="row mbr-gallery items-row justify-content-center">
            {#each ['008','007','006','005','004','003','002'] as n, i}
            <div class="col-12 col-md-6 col-lg-4 item gallery-image">
                <div class="item-wrapper" data-toggle="modal" data-bs-toggle="modal" data-target="#chocoville-modal" data-bs-target="#chocoville-modal">
                    <img class="w-100" src="/assets/images/asc-chocoville-{n}-816x544.jpg" alt="Art Specialized Construction - Chocoville Fit Out" data-slide-to="{i}" data-bs-slide-to="{i}" data-target="#lb-chocoville" data-bs-target="#lb-chocoville">
                    <div class="img-overlay"></div>
                    <div class="icon-wrapper"><span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></div>
                </div>
            </div>
            {/each}
        </div>
        <div class="modal mbr-slider" tabindex="-1" role="dialog" aria-hidden="true" id="chocoville-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="carousel slide" id="lb-chocoville" data-interval="5000" data-bs-interval="5000">
                            <div class="carousel-inner">
                                {#each ['008','007','006','005','004','003','002'] as n, i}
                                <div class="carousel-item {i === 0 ? 'active' : ''}">
                                    <img class="d-block w-100" src="/assets/images/asc-chocoville-{n}-816x544.jpg" alt="">
                                </div>
                                {/each}
                            </div>
                            <ol class="carousel-indicators">
                                {#each ['008','007','006','005','004','003','002'] as n, i}
                                <li data-slide-to="{i}" data-bs-slide-to="{i}" class="{i === 0 ? 'active' : ''}" data-target="#lb-chocoville" data-bs-target="#lb-chocoville"></li>
                                {/each}
                            </ol>
                            <a role="button" href="#" class="close" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"></a>
                            <a class="carousel-control-prev carousel-control" role="button" data-slide="prev" data-bs-slide="prev" href="#lb-chocoville">
                                <span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                                <span class="sr-only visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next carousel-control" role="button" data-slide="next" data-bs-slide="next" href="#lb-chocoville">
                                <span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                                <span class="sr-only visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

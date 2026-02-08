<svelte:head>
	<title>The Head Office Fit out | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 mbr-fullscreen" id="header1-promedic" style="background-image: url('/assets/images/asc-promedic-main-office-001-1920x1280.jpg');">
    <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
    <div class="container">
        <div class="row">
            <div class="content-wrap col-12 col-md-12">
                <h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">Art Specialized Construction Offices</h2>
                <div class="col-12"><div class="line"></div></div>
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">the Head Office Fit out</h1>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features9" id="afeatures9-promedic">
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
                                    <p class="card-text mbr-fonts-style display-7">Office Fit-Out / Interior Execution</p>
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
                                    <p class="card-text mbr-fonts-style display-7">Commercial / Offices</p>
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
                                    <p class="card-text mbr-fonts-style display-7">90 Square Meters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="content2" id="content02-promedic">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-9">
                <p class="mbr-text mbr-fonts-style display-4">Executed – 2019</p>
                <p class="mbr-text mbr-fonts-style display-4">Precision and Functionality in Workspaces.</p>
                <p class="mbr-text mbr-fonts-style display-4">Our execution of the ASC Offices project involved joining two office units into a single private entity, ensuring seamless integration of architectural and interior finishes. Every detail—from partitions and built-in elements to mechanical and electrical coordination—was delivered with precision to create a cohesive and professional workspace.</p>
                <p class="mbr-text mbr-fonts-style display-4">The project exemplifies our commitment to quality construction and functional design in commercial environments.</p>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5" id="agallery3-promedic">
    <div class="container">
        <div class="row mbr-gallery items-row justify-content-center">
            {#each [['003','0'],['004','1'],['005','2'],['006','3'],['007','4'],['008','5'],['002','6'],['001','7']] as [n, i]}
            <div class="col-12 col-md-6 col-lg-4 item gallery-image">
                <div class="item-wrapper" data-bs-toggle="modal" data-bs-target="#promedic-modal">
                    <img class="w-100" src="/assets/images/asc-promedic-main-office-{n}-816x544.jpg" alt="ASC Head Office" data-bs-slide-to="{i}" data-bs-target="#lb-promedic">
                    <div class="img-overlay"></div>
                    <div class="icon-wrapper"><span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></div>
                </div>
            </div>
            {/each}
        </div>
        <div class="modal mbr-slider" tabindex="-1" id="promedic-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="carousel slide" id="lb-promedic" data-bs-interval="5000">
                            <div class="carousel-inner">
                                {#each [['003',true],['004',false],['005',false],['006',false],['007',false],['008',false],['002',false],['001',false]] as [n, active]}
                                <div class="carousel-item {active ? 'active' : ''}">
                                    <img class="d-block w-100" src="/assets/images/asc-promedic-main-office-{n}-816x544.jpg" alt="">
                                </div>
                                {/each}
                            </div>
                            <a role="button" href="#" class="close" data-bs-dismiss="modal" aria-label="Close"></a>
                            <a class="carousel-control-prev carousel-control" data-bs-slide="prev" href="#lb-promedic">
                                <span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                            </a>
                            <a class="carousel-control-next carousel-control" data-bs-slide="next" href="#lb-promedic">
                                <span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

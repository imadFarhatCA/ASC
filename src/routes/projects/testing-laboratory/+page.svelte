<svelte:head>
	<title>I AM Negative Laboratory | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 mbr-fullscreen" id="header1-lab" style="background-image: url('/assets/images/asc-testing-laboratory-012-1920x1280.jpg');">
    <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
    <div class="container">
        <div class="row">
            <div class="content-wrap col-12 col-md-12">
                <h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">I AM Negative Laboratories</h2>
                <div class="col-12"><div class="line"></div></div>
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">Elaj Medical Services</h1>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features9" id="afeatures9-lab">
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
                                    <p class="card-text mbr-fonts-style display-7">Design and Build of advanced laboratory spaces</p>
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
                                    <p class="card-text mbr-fonts-style display-7">1,500 Square Meters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="content2" id="content02-lab">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-9">
                <p class="mbr-text mbr-fonts-style display-4">Design and construction of a specialized medical testing facility during the COVID-19 pandemic.</p>
                <p class="mbr-text mbr-fonts-style display-4">Executed at the height of the COVID-19 pandemic in 2020, this project demanded exceptional health and safety measures. The challenge was to design and build a state-of-the-art laboratory environment while enforcing strict protocols to prevent infection and ensure the well-being of all personnel on-site.</p>
                <p class="mbr-text mbr-fonts-style display-4">We adopted a highly controlled construction process with specialized planning, limited crew rotations, and continuous sanitization procedures. The design integrated advanced ventilation systems and lab-ready finishes to meet strict medical standards. Despite the global uncertainty and logistical challenges of the pandemic, the project was completed on time and to the highest quality expectations.</p>
                <blockquote>
                    <p class="quote mbr-fonts-style display-4">Design and Build delivery during the COVID-19 pandemic · Advanced medical laboratory with strict hygiene and safety controls · On-site infection prevention and controlled working protocols · Integration of specialized lab infrastructure and finishes · Successful on-time completion under exceptional global conditions</p>
                </blockquote>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5" id="agallery3-lab">
    <div class="container">
        <div class="row mbr-gallery items-row justify-content-center">
            {#each ['007','003','004','008','009','005','010','012','011','002','013','014'] as n, i}
            <div class="col-12 col-md-6 col-lg-4 item gallery-image">
                <div class="item-wrapper" data-bs-toggle="modal" data-bs-target="#lab-modal">
                    <img class="w-100" src="/assets/images/asc-testing-laboratory-{n}-816x544.jpg" alt="I AM Negative Laboratory" data-bs-slide-to="{i}" data-bs-target="#lb-lab">
                    <div class="img-overlay"></div>
                    <div class="icon-wrapper"><span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></div>
                </div>
            </div>
            {/each}
        </div>
        <div class="modal mbr-slider" tabindex="-1" id="lab-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="carousel slide" id="lb-lab" data-bs-interval="5000">
                            <div class="carousel-inner">
                                {#each ['007','003','004','008','009','005','010','012','011','002','013','014'] as n, i}
                                <div class="carousel-item {i === 0 ? 'active' : ''}">
                                    <img class="d-block w-100" src="/assets/images/asc-testing-laboratory-{n}-816x544.jpg" alt="">
                                </div>
                                {/each}
                            </div>
                            <a role="button" href="#" class="close" data-bs-dismiss="modal" aria-label="Close"></a>
                            <a class="carousel-control-prev carousel-control" data-bs-slide="prev" href="#lb-lab"><span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span></a>
                            <a class="carousel-control-next carousel-control" data-bs-slide="next" href="#lb-lab"><span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

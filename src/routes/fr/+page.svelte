<style>
    .cta-arrow {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 0.88rem;
        padding: 0.8rem 1.4rem 0.8rem 1.8rem;
        border-radius: 6px;
        background: #7eb7bf;
        border: none;
        transition: background 0.25s ease;
        margin-top: 0.5rem;
    }
    .cta-arrow:hover {
        color: #fff;
        background: #6aa8b0;
        text-decoration: none;
    }
    .cta-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 4px;
        background: #5a9aa3;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
    }
    .cta-badge svg {
        position: absolute;
        transition: transform 0.3s ease;
        width: 14px;
        height: 14px;
    }
    .cta-badge .arr1 {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
    .cta-badge .arr2 {
        transform: translate(calc(-50% - 20px), -50%);
        left: 50%;
        top: 50%;
    }
    .cta-arrow:hover .arr1 {
        transform: translate(calc(-50% + 20px), -50%);
    }
    .cta-arrow:hover .arr2 {
        transform: translate(-50%, -50%);
    }
</style>

<script>
    import { onMount } from 'svelte';
    onMount(() => {
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
	<title>Accueil | Art Specialized Construction</title>
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
                                            <img src="/assets/images/artspecialized-project-001.jpg-1900x1200.jpg" alt="Art Specialized Construction - projet 001">
                                            <p class="item-desc mbr-fonts-style display-4">.</p>
                                            <div class="title-wrapper">
                                                <div class="title-wrap">
                                                    <h4 class="item-title mbr-fonts-style display-2">Porter la construction à un niveau supérieur<br></h4>
                                                </div>
                                                <div class="mbr-section-btn"><a class="cta-arrow display-4" href="/fr/projects">Voir les projets <span class="cta-badge"><svg class="arr1" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><svg class="arr2" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></a></div>
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
                                            <img src="/assets/images/artspecialized-project-002.jpg-1900x1200.jpg" alt="Art Specialized Construction - projet 002">
                                            <p class="item-desc mbr-fonts-style display-4">.</p>
                                            <div class="title-wrapper">
                                                <div class="title-wrap">
                                                    <h4 class="item-title mbr-fonts-style display-2">L'esprit tranquille grâce à des travaux de rénovation de haute qualité<br></h4>
                                                </div>
                                                <div class="mbr-section-btn"><a class="cta-arrow display-4" href="/fr/projects">Voir les projets <span class="cta-badge"><svg class="arr1" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><svg class="arr2" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></a></div>
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
                                            <img src="/assets/images/artspecialized-project-003.jpg-1900x1200.jpg" alt="Art Specialized Construction - projet 003">
                                            <p class="item-desc mbr-fonts-style display-4">.</p>
                                            <div class="title-wrapper">
                                                <div class="title-wrap">
                                                    <h4 class="item-title mbr-fonts-style display-2">Établissements de santé et cliniques</h4>
                                                </div>
                                                <div class="mbr-section-btn"><a class="cta-arrow display-4" href="/fr/projects">Voir les projets <span class="cta-badge"><svg class="arr1" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><svg class="arr2" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></a></div>
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
                        <span class="sr-only visually-hidden">Précédent</span>
                    </button>
                    <button class="embla__button embla__button--next">
                        <span class="mbr-iconfont mobi-mbri-right mobi-mbri" aria-hidden="true"></span>
                        <span class="sr-only visually-hidden">Suivant</span>
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
                            <strong>Pourquoi Art Specialized Construction</strong>
                        </p>
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style display-2">Au cœur de chaque projet se trouve une promesse :<br>Offrir qualité, intégrité et savoir-faire qui résistent à l'épreuve du temps.&nbsp;</h2>
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
                    <h4 class="mbr-card-title mbr-fonts-style display-7">PROJETS DE SANTÉ</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Répartis entre hôpitaux et laboratoires</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 card">
                <div class="card-wrapper">
                    <p class="mbr-number mbr-fonts-style display-1">15+</p>
                    <h4 class="mbr-card-title mbr-fonts-style display-7">PROJETS RÉSIDENTIELS DE LUXE</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Appartements, maisons et villas</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 card">
                <div class="card-wrapper">
                    <p class="mbr-number mbr-fonts-style display-1">20+</p>
                    <h4 class="mbr-card-title mbr-fonts-style display-7">PROJETS COMMERCIAUX</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Boutiques, bureaux, espaces commerciaux</p>
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
                    <h4 class="mbr-card-title mbr-fonts-style display-7">CLIENTS SATISFAITS</h4>
                    <p class="mbr-text mbr-fonts-style display-7">Grâce à notre engagement envers la qualité, les prix et les délais</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features2 shopm5 cid-uJmV9H8G1Y" id="afeatures2-7">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-text">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-7">les piliers du métier</h3>
                <h5 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 display-2">ce que nous offrons ?</h5>
                <div class="cards row justify-content-center">
                    <div class="card col-12 col-lg-4">
                        <div class="card-wrapper">
                            <div class="iconfont-wrapper">
                                <a href="/fr/projects?filter=Résidentiel"><span class="mbr-iconfont icon54-v4-wooden-house"></span></a>
                            </div>
                            <h5 class="card-title mbr-fonts-style align-center mb-0 display-4">Résidentiel</h5>
                        </div>
                    </div>
                    <div class="card col-12 col-lg-4">
                        <div class="card-wrapper">
                            <div class="iconfont-wrapper">
                                <a href="/fr/projects?filter=Commercial"><span class="mbr-iconfont icon54-v4-building-construction"></span></a>
                            </div>
                            <h5 class="card-title mbr-fonts-style align-center mb-0 display-4">Commercial</h5>
                        </div>
                    </div>
                    <div class="card col-12 col-lg-4">
                        <div class="card-wrapper">
                            <div class="iconfont-wrapper">
                                <a href="/fr/projects?filter=Santé"><span class="mbr-iconfont imind-hospital"></span></a>
                            </div>
                            <h5 class="card-title mbr-fonts-style align-center mb-0 display-4">Santé,&nbsp; Cliniques</h5>
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
                    <h3 class="mbr-section-title mbr-fonts-style display-2">L'Essentiel</h3>
                    <h3 class="mbr-section-subtitle mbr-fonts-style display-4">Nos services combinent les meilleurs éléments de la construction et de la rénovation, aboutissant à des finitions haut de gamme et à la satisfaction du client.</h3>
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
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-digital-design"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Design</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v2-truck-1"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Démolition</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-recycle-water"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Travaux d'étanchéité</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-electric-plug"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Travaux électriques</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v4-corkscrew"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Menuiserie</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont socicon-squarespace socicon"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Carrelage</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-water-tap"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Plomberie</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-air-conditioner"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">CVC</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-fire-alarm"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Alarme incendie</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-fire-extinguisher"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Lutte contre l'incendie</h5>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-4 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="iconfont-wrapper"><span class="mbr-iconfont icon54-v1-gas-container"></span></div>
                        <h5 class="card-title mbr-fonts-style display-4">Gaz médicaux</h5>
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
                <img src="/assets/images/artspecialized-residentialproject.jpg-1-1080x1080.jpg" alt="Art Specialized Construction - Projet résidentiel">
            </div>
            <div class="text-wrapper col-12 col-md-6">
                <h4 class="card-title mbr-fonts-style mb-3 mb-md-4 display-1">Rénovations Intérieures, extérieures, transformation complète</h4>
                <p class="mbr-text mbr-fonts-style mb-md-5 display-7">
                    Nous sommes spécialisés dans des rénovations personnalisées qui reflètent votre style de vie, vos besoins et votre budget — toujours livrées avec la qualité et le professionnalisme que vous méritez.</p>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="progress-bars04 photom4_progress-bars04 circle-progress-section cid-uJprFiYe7D" id="progress-bars04-g">
    <div class="container">
        <h2 class="mbr-section-title align-center mbr-fonts-style display-2">Le Portfolio</h2>
        <h3 class="mbr-section-subtitle mbr-fonts-style display-4">Au fil de nos activités et de notre portfolio, notre concentration et nos résultats ont gravité autour des pourcentages suivants dans les catégories que nous couvrons, des rénovations au design et à l'exécution, en passant par la construction neuve.&nbsp;</h3>
        <div class="media-container-row pt-5 mt-2">
            <div class="card p-3 align-center">
                <div class="wrap">
                    <div class="pie_progress progress1" role="progressbar" data-goal="55">
                        <p class="pie_progress__number mbr-fonts-style display-5">55%</p>
                    </div>
                </div>
                <div class="mbr-crt-title pt-3">
                    <h4 class="card-title py-2 mbr-fonts-style display-5">Travaux de rénovation</h4>
                </div>
            </div>
            <div class="card p-3 align-center">
                <div class="wrap">
                    <div class="pie_progress progress2" role="progressbar" data-goal="20">
                        <p class="pie_progress__number mbr-fonts-style display-5">20%</p>
                    </div>
                </div>
                <div class="mbr-crt-title pt-3">
                    <h4 class="card-title py-2 mbr-fonts-style display-5">Projets clés en main</h4>
                </div>
            </div>
            <div class="card p-3 align-center">
                <div class="wrap">
                    <div class="pie_progress progress3" role="progressbar" data-goal="25">
                        <p class="pie_progress__number mbr-fonts-style display-5">25%</p>
                    </div>
                </div>
                <div class="mbr-crt-title pt-3">
                    <h4 class="card-title py-2 mbr-fonts-style display-5">Design &amp; Exécution</h4>
                </div>
            </div>
        </div>
    </div>
</section>

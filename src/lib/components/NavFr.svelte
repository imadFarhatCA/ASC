<style>
@media (max-width: 991px) {
    .cid-uJmLvvI4S8 .navbar-logo img {
        height: 4.9rem !important;
    }
    .cid-uJmLvvI4S8 .navbar-caption {
        font-size: 0.85em !important;
    }
}
.lang-toggle {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #e5e5e5;
    border-radius: 16px;
    padding: 3px;
    position: relative;
    min-width: 76px;
}
.lang-toggle::before {
    content: '';
    position: absolute;
    width: calc(50% - 3px);
    height: calc(100% - 6px);
    background-color: #ffffff;
    border-radius: 13px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    left: 50%;
    top: 3px;
    z-index: 0;
}
.lang-option {
    display: inline-block;
    color: #636363;
    font-size: 0.78rem;
    font-weight: 500;
    padding: 5px 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    border-radius: 13px;
    transition: color 0.3s ease;
    position: relative;
    z-index: 1;
    width: 50%;
    text-align: center;
    letter-spacing: 0.05em;
    box-sizing: border-box;
    white-space: nowrap;
}
.lang-option.active { color: #222; }
.lang-option:hover { color: #222; }
.lang-toggle-item {
    margin-left: 10px;
    display: flex;
    align-items: center;
}
@media (max-width: 991px) {
    .lang-toggle-item {
        margin-left: 0;
        justify-content: center;
        margin-top: 20px !important;
    }
    .navbar-collapse {
        padding-bottom: 80px;
    }
}
</style>

<section data-bs-version="5.1" class="menu menu2 cid-uJmLvvI4S8" id="menu2-1">
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div class="container">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <a href="/fr">
                        <img src="/assets/images/artspecialized-icon.png-96x127.png" alt="Art Specialized Construction" style="height: 4.1rem;">
                    </a>
                </span>
                <span class="navbar-caption-wrap"><a class="navbar-caption text-black text-primary display-5" href="/fr">Art Specialized Construction</a></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span><span></span><span></span><span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/fr/company">la Société</a></li>
                    <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/fr/projects">les Projets</a></li>
                    <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/fr/contact">Nous contacter</a></li>
                    <li class="nav-item lang-toggle-item">
                        <div class="lang-toggle" data-active="FR">
                            <a href="/" class="lang-option" aria-label="English">EN</a>
                            <a href="/fr" class="lang-option active" aria-label="Français">FR</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</section>

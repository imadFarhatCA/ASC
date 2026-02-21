<script>
	let { data } = $props();
	const { project } = data;
	const { slug } = project;
	const modalId = `${slug}-modal`;
	const lightboxId = `lb-${slug}`;
</script>

<svelte:head>
	<title>{project.meta.title}</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 mbr-fullscreen" id="header1-{slug}" style="background-image: url('{project.header.heroImage}');">
	<div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
	<div class="container">
		<div class="row">
			<div class="content-wrap col-12 col-md-12">
				<h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">{project.header.subtitle}</h2>
				<div class="col-12"><div class="line"></div></div>
				<h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">{project.header.title}</h1>
			</div>
		</div>
	</div>
</section>

<section data-bs-version="5.1" class="features9 {project.features.cid}" id="afeatures9-{slug}">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-text">
				<div class="lists-container">
					<div class="card col-12 col-md-3">
						<div class="card-wrapper col-12">
							<div class="card-box">
								<h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>1.</strong></h3>
								<div class="card-content">
									<h4 class="card-title mbr-fonts-style display-4">ÉTENDUE DES TRAVAUX</h4>
									<p class="card-text mbr-fonts-style display-7">{project.features.scopeOfWork}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="card col-12 col-md-3">
						<div class="card-wrapper col-12">
							<div class="card-box">
								<h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>2.</strong></h3>
								<div class="card-content">
									<h4 class="card-title mbr-fonts-style display-4">SECTEUR</h4>
									<p class="card-text mbr-fonts-style display-7">{project.features.sector}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="card col-12 col-md-3">
						<div class="card-wrapper col-12">
							<div class="card-box">
								<h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>3.</strong></h3>
								<div class="card-content">
									<h4 class="card-title mbr-fonts-style display-4">TAILLE DU PROJET</h4>
									<p class="card-text mbr-fonts-style display-7">{project.features.projectSize}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{#if project.content}
<section data-bs-version="5.1" class="content2 {project.content.cid}" id="content02-{slug}">
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 col-md-9">
				{#each project.content.paragraphs as p}
					<p class="mbr-text mbr-fonts-style display-4">{p}</p>
				{/each}
				{#if project.content.blockquote}
					<blockquote>
						<p class="quote mbr-fonts-style display-4">{project.content.blockquote}</p>
					</blockquote>
				{/if}
				{#each project.content.trailing as p}
					<p class="mbr-text mbr-fonts-style display-4">{p}</p>
				{/each}
			</div>
		</div>
	</div>
</section>
{/if}

<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5 {project.gallery.cid}" id="agallery3-{slug}">
	<div class="container">
		<div class="row mbr-gallery items-row justify-content-center">
			{#each project.gallery.images as img, i}
			<div class="col-12 col-md-6 col-lg-4 item gallery-image">
				<div class="item-wrapper" data-bs-toggle="modal" data-bs-target="#{modalId}">
					<img class="w-100" src="/assets/images/{img}" alt="{project.gallery.alt}" data-bs-slide-to="{i}" data-bs-target="#{lightboxId}">
					<div class="img-overlay"></div>
					<div class="icon-wrapper"><span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></div>
				</div>
			</div>
			{/each}
		</div>
		<div class="modal mbr-slider" tabindex="-1" id="{modalId}">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<div class="carousel slide" id="{lightboxId}" data-bs-interval="5000">
							<div class="carousel-inner">
								{#each project.gallery.images as img, i}
								<div class="carousel-item {i === 0 ? 'active' : ''}">
									<img class="d-block w-100" src="/assets/images/{img}" alt="">
								</div>
								{/each}
							</div>
							<a role="button" href="#" class="close" data-bs-dismiss="modal" aria-label="Fermer"></a>
							<a class="carousel-control-prev carousel-control" data-bs-slide="prev" href="#{lightboxId}">
								<span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
							</a>
							<a class="carousel-control-next carousel-control" data-bs-slide="next" href="#{lightboxId}">
								<span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

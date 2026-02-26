<script>
	let { data } = $props();
	const { project } = data;
	const modalId = `${project.slug}-modal`;
	const lightboxId = `lb-${project.slug}`;
</script>

<svelte:head>
	<title>{project.title} | Art Specialized Construction</title>
</svelte:head>

<section data-bs-version="5.1" class="buildm5 header1 mbr-fullscreen" id="header1-{project.slug}"
	style="background-image: url('{project.heroImage}');">
	<div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>
	<div class="container">
		<div class="row">
			<div class="content-wrap col-12 col-md-12">
				{#if project.heroSubtitle}
					<h2 class="mbr-section-subtitle mbr-fonts-style mbr-white mb-4 display-7">{project.heroSubtitle}</h2>
				{/if}
				<div class="col-12"><div class="line"></div></div>
				<h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">{project.title}</h1>
			</div>
		</div>
	</div>
</section>

<section data-bs-version="5.1" class="features9 cid-features-{project.slug}" id="features-{project.slug}">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-text">
				<div class="lists-container">
					{#if project.scopeOfWork}
					<div class="card col-12 col-md-3">
						<div class="card-wrapper col-12">
							<div class="card-box">
								<h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>1.</strong></h3>
								<div class="card-content">
									<h4 class="card-title mbr-fonts-style display-4">SCOPE OF WORK</h4>
									<p class="card-text mbr-fonts-style display-7">{project.scopeOfWork}</p>
								</div>
							</div>
						</div>
					</div>
					{/if}
					{#if project.sector}
					<div class="card col-12 col-md-3">
						<div class="card-wrapper col-12">
							<div class="card-box">
								<h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>2.</strong></h3>
								<div class="card-content">
									<h4 class="card-title mbr-fonts-style display-4">SECTOR</h4>
									<p class="card-text mbr-fonts-style display-7">{project.sector}</p>
								</div>
							</div>
						</div>
					</div>
					{/if}
					{#if project.projectSize}
					<div class="card col-12 col-md-3">
						<div class="card-wrapper col-12">
							<div class="card-box">
								<h3 class="card-number mbr-fonts-style mb-0 display-1"><strong>3.</strong></h3>
								<div class="card-content">
									<h4 class="card-title mbr-fonts-style display-4">PROJECT SIZE</h4>
									<p class="card-text mbr-fonts-style display-7">{project.projectSize}</p>
								</div>
							</div>
						</div>
					</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

{#if project.paragraphs?.length || project.blockquote || project.trailing?.length}
<section data-bs-version="5.1" class="content2 cid-content-{project.slug}" id="content-{project.slug}">
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 col-md-9">
				{#each project.paragraphs ?? [] as p}
					<p class="mbr-text mbr-fonts-style display-4">{p}</p>
				{/each}
				{#if project.blockquote}
					<blockquote>
						<p class="quote mbr-fonts-style display-4">{project.blockquote}</p>
					</blockquote>
				{/if}
				{#each project.trailing ?? [] as p}
					<p class="mbr-text mbr-fonts-style display-4">{p}</p>
				{/each}
			</div>
		</div>
	</div>
</section>
{/if}

{#if project.images?.length}
<section data-bs-version="5.1" class="gallery3 mbr-gallery shopm5 cid-gallery-{project.slug}" id="gallery-{project.slug}">
	<div class="container">
		<div class="row mbr-gallery items-row justify-content-center">
			{#each project.images as img, i}
			<div class="col-12 col-md-6 col-lg-4 item gallery-image">
				<div class="item-wrapper" data-bs-toggle="modal" data-bs-target="#{modalId}">
					<img class="w-100" src={img} alt={project.title} data-bs-slide-to="{i}" data-bs-target="#{lightboxId}">
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
								{#each project.images as img, i}
								<div class="carousel-item {i === 0 ? 'active' : ''}">
									<img class="d-block w-100" src={img} alt="">
								</div>
								{/each}
							</div>
							<a role="button" href="#" class="close" data-bs-dismiss="modal" aria-label="Close"></a>
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
{/if}

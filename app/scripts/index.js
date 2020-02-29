(function() {
	const data = {
		fullstack: {
			heading: 'Fullstack Development',
			projects: [
				{
					id: 'fountain-of-dreams',
					href: 'https://github.com/KingOfCaves/fountain-of-dreams',
					link: 'http://github//fountain-of-dreams',
					title: 'Fountain of Dreams',
					desc:
						"A mallsoft/vaporwave oriented live radio that's currently live now! An ongoing project that will continue to be added to and perfected."
				}
			]
		},
		frontend: {
			heading: 'Frontend Development',
			projects: [
				{
					id: 'albion-remastered',
					href: 'https://github.com/KingOfCaves/albion-remastered',
					link: 'http://github//albion-remastered',
					title: 'Albion Remastered',
					desc:
						"Reacreating Albion Sword's website into a React.js powered single page application. The app takes the original and applies multiple programmatic and design changes that improve the overall user experience. Uses React Router and React."
				},
				{
					id: 'the-big-brown',
					href: 'https://github.com/KingOfCaves/the-big-brown-frontend',
					link: 'http://github//the-big-brown',
					title: 'The Big Brown',
					desc:
						'Frontend for a fake restaurant website. Uses Parcel for compiling all of the scripts, scss files and html templates. Also uses PostCSS and PostHTML for utilizing autoprefixer and other related plugins.'
				},
				{
					id: 'jamila-wallace-portfolio',
					href: 'https://github.com/KingOfCaves/jamila-wallace-portfolio',
					link: 'http://github//j.-wallace-portfolio',
					title: "J. Wallace's Portfolio",
					desc:
						"A recreation of my client's design. By using my client's Adobe XD design as a base, a near 1:1 responsive reconstruction was made in HTML, CSS and JavaScript."
				},
				{
					id: 'portfolio-project',
					href: 'https://github.com/KingOfCaves/wills-portfolio-project',
					link: 'http://github//portfolio-project',
					title: 'Portfolio Project',
					desc:
						'A portfolio based on a design provided by Udacity. By using html and css you recreate the design from the ground up, adding your own touches.'
				},
				{
					id: 'memory-game',
					href: 'https://github.com/KingOfCaves/wills-memory-game',
					link: 'http://github//memory-game',
					title: 'Memory Game',
					desc:
						'A simple memory game that uses nothing but vanilla JavaScript, HTML and CSS. Made to look good on every device!'
				},
				{
					id: 'arcade-classic',
					href: 'https://github.com/KingOfCaves/wills-arcade-classic',
					link: 'http://github//arcade-classic',
					title: 'Arcade Classic',
					desc:
						'Recreation of a popular classic arcade game, Frogger. Uses canvas, ES6 classes, sprite images, and an engine provided by Udacity.'
				},
				{
					id: 'feedreader-testing',
					href: 'https://github.com/KingOfCaves/wills-feedreader-testing',
					link: 'http://github//feedreader-testing',
					title: 'Feedreader Testing',
					desc:
						"A suite built for testing the functionality of another person's feedreader application. Built using Jasmine.js."
				},
				{
					id: 'restaurant-review',
					href: 'https://github.com/KingOfCaves/wills-restaurant-review',
					link: 'http://github//restaurant-review',
					title: 'Restaurant Review App',
					desc:
						'Troubleshooting a restaurant review app by adding aria labeling for accessibility, adding necessary headers to the mapbox api and making the app compatible with all devices.'
				}
			]
		}
	};

	const $projects = document.querySelector('.main');
	let compiledHTML = '';

	for (x in data) {
		const { heading, projects } = data[x];
		let projectHTML = ''.trim();

		try {
			projects.forEach((project) => {
				projectHTML += `
				<div class="project">
					<a class="project__graphic" href="${project.href}" target="_blank" id="${project.id}">
						<p class="project__link">${project.link}</p>
					</a>
					<p class="project__title">${project.title}</p>
					<p class="project__desc">${project.desc}</p>
				</div>`.trim();
			});
		} catch (error) {
			console.log("Something wen't wrong.", error);
		}

		let typeHTML = `
		<div class="projects">
			<h2 class="heading-secondary">${heading}</h2>
			${projectHTML}
		</div>`.trim();

		compiledHTML += typeHTML;
	}

	$projects.innerHTML = compiledHTML;
})();

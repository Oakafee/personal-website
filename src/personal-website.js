window.onload = function() {
    var personalWebsite = {
    	workEntityClassName: 'personal-website__entity',
    	workListClassName: 'personal-website__section--worklist',
    	works: [
    		{
    			'title': 'Development of New Jersey\'s municipalities',
    			'worktype': 'GIS, Web',
    			'imgSrc': 'works/nj-muni.png',
    			'description': 'A visualization of property tax data for NJ by year built',
    			'href': 'https://nj-muni.s3.us-east-2.amazonaws.com/index.html',
    		},
    		{
    			'title': 'ASCAP: Member Enrollment',
    			'worktype': 'Web',
    			'imgSrc': 'works/ome.png',
    			'description': 'Tens of thousands of music creators have used this web application to become ASCAP members, and after six years, it has only changed minimally. I built the UI, to designers\' specifications, while my other front-end dev team members handled the API calls, etc. ',
    			'href': 'https://ome.ascap.com/',
    		},
    		{
    			'title': 'ASCAP: ACE Repertory Search',
    			'worktype': 'Web',
    			'imgSrc': 'works/ace.png',
    			'description': 'I also contributed substantially to this web app to explore ASCAP\'s repertory.',
    			'href': 'https://www.ascap.com/ace',
    		},
    		{
    			'title': 'Racialized Politics of Drinking Water Chemistry: The Case of Newark\'s Lead Crisis',
    			'worktype': 'GIS, Water(, Web)',
    			'imgSrc': 'works/thesis.png',
    			'description': 'Mixed-methods masters thesis on the drinking water lead crisis in Newark, NJ and the community\'s response to it.',
    			'href': 'https://www.proquest.com/docview/2829638676',
    		},
    		{
    			'title': 'Interpretation of New Jersey',
    			'worktype': 'GIS, Web',
    			'imgSrc': 'works/inj.png',
    			'description': 'An interactive map of New Jersey with articles. A longstanding passion project of mine',
    			'href': 'https://www.interpretation-of-nj.com/',
    		},
    		{
    			'title': '*Wastewater Treatment in the Passaic River watershed',
    			'worktype': 'GIS, Water',
    			'imgSrc': 'works/passaic-phosphorous.png',
    			'description': 'A grad school paper, "Enforcing Municipal Sewage Treatment Plant Effluent Quality in an Urban Watershed: New Jersey’s Passaic River", featuring some static maps.',
    			'href': 'https://nj-muni.s3.us-east-2.amazonaws.com/index.html',
    		},
    		{
    			'title': 'Lovers List',
    			'worktype': 'Web',
    			'imgSrc': 'works/loverslist.png',
    			'description': 'A creative collaboration with my dad Jon Fried, a published fiction writer. Try it, it\'s fun.',
    			'href': 'http://www.jonfried.net/lovers-list',
    		},
    		{
    			'title': 'Florida Population Density (Cartography Exercise)',
    			'worktype': 'GIS, Web',
    			'imgSrc': 'works/thematic-cart.png',
    			'description': 'Project from a cartography class in which I exactly reproduced another student\'s static map design in the form of an interactive, web-based map.',
    			'href': 'http://thematic-cart-final-project2.s3-website-us-east-1.amazonaws.com/',
    		},
    	],
    	renderWorks() {
    		let workEntity = document.getElementsByClassName(this.workEntityClassName)[0];
    		let workList = document.getElementsByClassName(this.workListClassName)[0];

    		this.works.forEach((workInfo) => {
    			let newWorkEntity = workEntity.cloneNode(true);
    			newWorkEntity.href = workInfo['href'];
    			// there has to be a better way than just 1, 2, 3
    			newWorkEntity.children[0].src = workInfo['imgSrc'];
				newWorkEntity.children[1].children[0].innerText = workInfo['worktype'];
    			newWorkEntity.children[2].innerText = workInfo['title'];
    			newWorkEntity.children[3].innerText = workInfo['description'];
	    		workList.appendChild(newWorkEntity);
    		});
    		workEntity.style.display = 'none';
		},
		flashContent(event) {
			main = document.getElementsByTagName("main")[0];
			main.classList.add(
				'animation-opacity-zero',
			);
			setTimeout(() => {
				main = document.getElementsByTagName("main")[0];
				main.classList.add('animation-opacity-transition')
			}, 100);
			setTimeout(() => {
				main = document.getElementsByTagName("main")[0];
				main.classList.remove('animation-opacity-zero')
			}, 200)
			setTimeout(() => {
				main = document.getElementsByTagName("main")[0];
				main.classList.remove('animation-opacity-transition')
			}, 600)
		}
    }
	personalWebsite.renderWorks();
	document.getElementsByTagName("nav")[0].addEventListener(
		'click',
		personalWebsite.flashContent
	);
}
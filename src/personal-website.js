window.onload = function() {
    var personalWebsite = {
    	workEntityClassName: 'personal-website__entity',
    	workListClassName: 'personal-website__section--worklist',
    	works: [
    		{
    			'title': 'ASCAP: Member Enrollment',
    			'worktype': 'Web',
    			'imgSrc': 'works/ome.png',
    			'description': 'I personally built the UI for this web application, to designers\' specifications. My other front-end dev team members handled the API calls, etc. Six years later, ASCAP still uses this app to enroll new members with few if any changes.',
    			'href': 'https://ome.ascap.com/',
    		},
    		{
    			'title': 'ASCAP: Member Access',
    			'worktype': 'Web',
    			'imgSrc': 'works/ma.png',
    			'description': 'Over the course of several years, I added many new features and performed extensive maintenance this massive app serving hundereds of thousands of ASCAP members',
    			'href': 'https://www.ascap.com/member-access',
    		},
    		{
    			'title': 'Lovers List',
    			'worktype': 'Web',
    			'imgSrc': 'works/loverslist.png',
    			'description': 'A creative collaboration with my dad Jon Fried, a published fiction writer. Try it, it\'s fun.',
    			'href': 'http://www.jonfried.net/lovers-list',
    		},
    		{
    			'title': 'Interpretation of New Jersey',
    			'worktype': 'GIS/Web',
    			'imgSrc': 'works/inj.png',
    			'description': 'An interactive map of New Jersey with articles',
    			'href': 'https://www.interpretation-of-nj.com/',
    		},
    		{
    			'title': 'Development of New Jersey\'s municipalities',
    			'worktype': 'GIS/Web',
    			'imgSrc': 'works/nj-muni.png',
    			'description': 'A visualization of property tax data for NJ by year built',
    			'href': 'https://nj-muni.s3.us-east-2.amazonaws.com/index.html',
    		},
    		{
    			'title': '*Wastewater Treatment in the Passaic River watershed',
    			'worktype': 'GIS/Water',
    			'imgSrc': 'works/nj-muni.png',
    			'description': 'A grad school paper, "Enforcing Municipal Sewage Treatment Plant Effluent Quality in an Urban Watershed: New Jersey’s Passaic River", featuring some static maps.',
    			'href': 'https://nj-muni.s3.us-east-2.amazonaws.com/index.html',
    		},
    		{
    			'title': 'Florida Population Density (Cartography Exercise)',
    			'worktype': 'GIS/Web',
    			'imgSrc': 'works/nj-muni.png',
    			'description': 'Project from a cartography class in which I reproduced another student\'s static map design in the form of an interactive, web-based map.',
    			'href': 'http://thematic-cart-final-project2.s3-website-us-east-1.amazonaws.com/',
    		},
    		{
    			'title': '*Racialized Politics of Drinking Water Chemistry: The Case of Newark\'s Lead Crisis',
    			'worktype': 'GIS/Water(/Web)',
    			'imgSrc': 'works/nj-muni.png',
    			'description': 'Mixed-methods masters thesis on the drinking water lead crisis in Newark, NJ and the community\'s response to it.',
    			'href': 'https://nj-muni.s3.us-east-2.amazonaws.com/index.html',
    		}
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
		}
    }
	personalWebsite.renderWorks();
}
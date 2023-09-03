window.onload = function() {
    var personalWebsite = {
    	workEntityClassName: 'personal-website__entity',
    	workListClassName: 'personal-website__section--worklist',
    	works: [
    		{
    			'title': 'ASCAP: Member Enrollment',
    			'worktype': 'Professional',
    			'imgSrc': 'works/ome.png',
    			'description': 'Jesse wrote all of the markup and CSS for this formidable interactive and specialized form as well as much of the functionality.',
    			'href': 'https://ome.ascap.com/',
    		},
    		{
    			'title': 'ASCAP: Member Access',
    			'worktype': 'Professional',
    			'imgSrc': 'works/ma.png',
    			'description': 'Jesse added many new features and maintained this massive Backbone app',
    			'href': 'https://www.ascap.com/member-access',
    		},
    		{
    			'title': 'Rebuilding Together: COVID Safety Training',
    			'worktype': 'Professional',
    			'imgSrc': 'works/rtnyc-covid.png',
    			'description': 'An interactive training and quiz for workers and volunteers about doing construction work during COVID.',
    			'href': 'https://rebuildnyc.org/covid',
    		},
    		{
    			'title': 'Lovers List',
    			'worktype': 'Professional',
    			'imgSrc': 'works/loverslist.png',
    			'description': 'A freelance project for a writer',
    			'href': 'http://www.jonfried.net/lovers-list',
    		},
    		{
    			'title': 'Interpretation of New Jersey',
    			'worktype': 'Creative',
    			'imgSrc': 'works/inj.png',
    			'description': 'An interactive map of New Jersey with articles',
    			'href': 'https://www.interpretation-of-nj.com/',
    		},
    		{
    			'title': 'Development of New Jersey\'s municipalities',
    			'worktype': 'Creative',
    			'imgSrc': 'works/nj-muni.png',
    			'description': 'A visualization of property tax data for NJ by year built',
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
				newWorkEntity.children[1].innerText = workInfo['worktype'];
    			newWorkEntity.children[2].innerText = workInfo['title'];
    			newWorkEntity.children[3].innerText = workInfo['description'];
	    		workList.appendChild(newWorkEntity);
    		});
    		workEntity.style.display = 'none';
		}
    }
	personalWebsite.renderWorks();
}
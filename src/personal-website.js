window.onload = function() {
    var personalWebsite = {
    	workEntityClassName: 'personal-website__entity',
    	workListClassName: 'personal-website__section--worklist',
    	works: [
    		{
    			'title': 'ASCAP: Member Enrollment',
    			'worktype': 'professional',
    			'img': '',
    			'description': 'Blah blah blah',
    			'href': 'https://ome.ascap.com/',
    		},
    		{
    			'title': 'ASCAP: Member Access',
    			'worktype': 'professional',
    			'description': 'Blah blah blah',
    			'href': 'https://www.ascap.com/member-access',
    		},
    		{
    			'title': 'Rebuilding Together: COVID Safety Training',
    			'worktype': 'professional',
    			'description': 'Blah blah blah',
    			'href': 'https://rebuildnyc.org/covid',
    		},
    		{
    			'title': 'Lovers List',
    			'worktype': 'professional',
    			'description': 'Blah blah blah',
    			'href': 'https://ome.ascap.com/',
    		},
    		{
    			'title': 'ASCAP: Member Enrollment',
    			'worktype': 'professional',
    			'description': 'Blah blah blah',
    			'href': 'https://ome.ascap.com/',
    		},
    	],
    	renderWorks() {
    		let workEntity = document.getElementsByClassName(this.workEntityClassName)[0];
    		let workList = document.getElementsByClassName(this.workListClassName)[0];
    		
    		this.works.forEach(() => {
    			let newWorkEntity = workEntity.cloneNode(true);
	    		workList.appendChild(newWorkEntity);
    		});
		}
    }
	personalWebsite.renderWorks();
}
function runPhotoAppTestSuite() {	
	var data = {
		dateadded: "1476366509",
		farm: 6,
		id: "29669287203",
		index: 2,
		isfamily: 0,
		isfriend: 0,
		isPublic: 1,
		owner: "14928294@N05",
		ownername: "Dario Manuppella",
		secret: "47bd2903ef",
		server: "5766",
		title: "Painted Ladies"

	},
	testPhoto = new Photo(),
	url = 'http://farm6.static.flickr.com/5766/29669287203_47bd2903ef_m.jpg';	

	function flickrServiceHappyTest() {
		getFlickrImages('35089435@N00', function(response) {
			if(response.stat){ 
				console.log('Flickr Service Test: ' + response.stat);
			}else
				console.log('Flickr Service Test: ' + response);
		});	
	};

	function flickrServiceErrorTest() {	
		getFlickrImages('123', function(response) {
			if(response.stat) 
				console.log('Flickr Service Test: ' + response.stat);
			else
				console.log('Flickr Service Test: ' + response);
		});
	};

	function setGetPhotoClassTest(data) {
		testPhoto.setPhotoData(data);
		var testData = testPhoto.getPhotoData();
		if(typeof testData === 'object')
			return 'Photo Class set/get method passed.'
		else 
			return 'Failure in Photo Class set/get method.'
	}

	function urlPhotoClassTest(url) {
		var imageUrl = testPhoto.constructUrl();
		if(imageUrl == url) 
			return 'Photo Class constructUrl method passed.'
		else
			return 'Failure in Photo Class constructUrl method.'
	}

	flickrServiceHappyTest();
	flickrServiceErrorTest();
	console.log(setGetPhotoClassTest(data));
	console.log(urlPhotoClassTest(url));

}
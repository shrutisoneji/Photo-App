/*
	Displying Photos and Lightbox

*/
var photoSet = [],
	lightBox = new Photo();

(function() {

	runPhotoAppTestSuite()

	getFlickrImages('35089435@N00', function(response) {

		if(response.photos && response.photos.total > 0) {
			response.photos.photo.forEach(function(photoItem, index){
				var photo, elm;
				
				photoItem.index = index;
				photoSet.push(photoItem);

				var photo = new Photo();
				photo.setPhotoData(photoItem);		
				elem = photo.constructImageElem();
				document.querySelector('.flickrImage').innerHTML += elem;

			});	
		}
		else {
			document.querySelector('.flickrImageError').innerHTML = "Error: " + response;
			document.querySelector('.flickrImageError').className += ' show';
		}
	});

})();

function showLightBox(index) {

	lightBox.setPhotoData(photoSet[index]);
	document.querySelector('.lightBox .lightBoxImage').innerHTML = lightBox.constructLightBoxElem();

	//if lightbox needs to be shown
	if(!document.querySelector('.lightBox').classList.contains('show')) {
		document.querySelector('.lightBox').className += ' show';
	}
	
	//check if prev needs to be shown
	if(index == 0) {
		document.querySelector('.prev').className += ' hide';
	}else {
		document.querySelector('.prev').className = 'move prev';
	}

	//check if next needs to be shown
	if(index == photoSet.length-1) {
		document.querySelector('.next').className += ' hide';
	}else {
		document.querySelector('.next').className = 'move next';
	}
}

function prevLightBoxImage() {
	var currentIndex = lightBox.getPhotoIndex();
	showLightBox(currentIndex-1);
}

function nextLightBoxImage() {
	var currentIndex = lightBox.getPhotoIndex();
	showLightBox(currentIndex+1);
}

function closeLightBox() {
	document.querySelector('.lightBox').className = 'lightBox';
}
/*
	Photo Class
*/

function Photo() {
	this.data = {};

	this.getPhotoData = function() {
		return this.data;
	}

	this.setPhotoData = function(data) {
		this.data = data;
	}	

	this.getPhotoIndex = function(){
		return this.data.index;
	}

	this.constructUrl = function() {
		return "http://farm" + this.data.farm + ".static.flickr.com/" + this.data.server 
				+ "/" + this.data.id + "_" + this.data.secret + "_m.jpg";
	}	

	this.constructLightBoxElem = function() {
		return '<div id="' + this.data.index + '" class="image">' +
				'<div class="lightBoxImageTitle">' + this.data.title + '</div>' +
				'<img src="' + this.constructUrl() + '"/>'
			   '</div>';
	}

	this.constructImageElem = function() {
		return '<img id="' + this.data.index + '" src="' + this.constructUrl() + '" onclick="showLightBox(this.id)"/>'
	}

}
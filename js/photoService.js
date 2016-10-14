
/*
	Service to request Flickr Images
*/

function getFlickrImages(groupId, callback) {

	var flickrApi = {
		baseUrl: 'https://api.flickr.com/services/rest/',
		method: 'flickr.groups.pools.getPhotos',
		api_key: 'de75eedcf99797b3435519722b8c9f67',
		group_id: groupId,
		format: 'json',
		per_page: 30,
		page: 1,
		media: 'photos',
		nojsoncallback: 1
	}

	var xhttp = new XMLHttpRequest();
	var url = generateFlickrUrl();

    xhttp = new XMLHttpRequest(); 
    xhttp.open( "GET", url, true );
    xhttp.responseType = 'json';
    xhttp.send( null );
    xhttp.onreadystatechange = flickrApiResponse;	



	function flickrApiResponse() {
		if(xhttp.readyState == 4) {
		    if (xhttp.status == 200) {
		    	if(xhttp.response.stat && xhttp.response.stat == "fail"){
		    		callback(xhttp.response.message);
		    	}else{
		    		callback(xhttp.response);
		    	}          
		    } else {
		    	callback("There was an error. Please try again.")
		    }			
		}
	}


	function generateFlickrUrl() {
		var uriComponents = [];

		for(var i in flickrApi) {
			if(i == "baseUrl")
				uriComponents.push(flickrApi[i] + "?");
			else
				uriComponents.push(encodeURIComponent(i) + "=" + encodeURIComponent(flickrApi[i]));
		}
		return uriComponents.join("&");	
	}

}
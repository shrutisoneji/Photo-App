# FLickr-Photo-App

I have created a simple photo app that retrieves photos from the Flickr api and displays them on a page. When the user clicks on the photo thumbnail, a lightbox with the title and ability to navigate to next or previous photo is displayed. The lightbox can be closed by click on the 'x' on the top right corner or the background. 

In this coding challenged, I have concentrated on laying out my javascript as I would for a complex app. The concerns are separated into four javascript files. 
	1. photoService.js - api service request
	2. photoData.js - gets, sets, and create methods for the current lightbox image
	3. photoDisplay.js - interacts with the html view and displays necessary data.
	4. photoTest.js - my unit tests for the app.

In photoTest.js I have done some unit test for the app. Its not full coverage of the app but just so you get the idea.

The css on the app is simple, but its does the initial functionality of a lightbox.  Further css changes would include:
	1. Css transitions should be added to make opening and closing smoother
	2. Icons for the next, previous and close buttons
	3. Styling for lightboxContent container 

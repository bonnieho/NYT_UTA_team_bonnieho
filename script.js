$(document).ready(function(){




// Global variables

var recordLimit = 0;
var startYear = 0;
var endYear = 0;
var listVals = [];
var searchValue ;  

var APIkey =  "3d5427894e224735ae411cceab0751ab"; 


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	// queryURL += '?' + $.param({'api-key:' +   APIkey });
	queryURL += '?' + $.param({'api-key' : "3d5427894e224735ae411cceab0751ab" });




// get the record limit

$("search").on("click", function(){
		searchValue = $("#searchValue");
		recordLimit = $("#recordLimit");

		startYear = $("#startYear");
		endYear = $("#endYear");


		$.ajax({
		  url: queryURL,
		  method: 'GET',
		}).done(function(res) {

			var result = res.data;

			for(var i=0; i<=recordLimit;i++)
			{
				var article = $("<div></div>");
				 article.text(result[i]);


			}


		console.log(result);
		}).fail(function(err) {
		  throw err;
		});



})











// Validate the textboxes

// if (searchTermDiv.focus = true) {


    
// }


























}); //end of document.ready
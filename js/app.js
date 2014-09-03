
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//capture the click event on a link to an image
$("#gallery a").click( function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();

    //Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

//when overlay is clicked
$overlay.click(function(){
    //Hide the overlay
    $overlay.hide();
});

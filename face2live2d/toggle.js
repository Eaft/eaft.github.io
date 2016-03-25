$(function() {
    $('#js-toggle-camera').click(function() {
        $("#user-face__video").toggle();
    });
    $('#js-toggle-face').click(function() {
        $("#user-face__canvas").toggle();
    });
});

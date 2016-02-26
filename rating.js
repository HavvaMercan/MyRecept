 $(document).ready(function () {
            // Create jqxRating.
            $("#star-rating").star-rating({ width: 350, height: 35});
            // bind to jqxRating 'change' event.
            $("#star-rating).bind('change', function (event) {
                $("#rate").html('<span>' + event.value + '</span');
            });
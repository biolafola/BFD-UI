$( document ).ready(function() {

    // Use a change event to check when a checkbox is clicked on
    $('input[name="contacts-group"]').on('change', function() {
        
        //get the current scss $theme-color apprximate
        var col = $(".fa-bell").css("background-color");
        
        // //find the thrd parent above the checkbox and give it color
        $(this).parents().eq(3).css("background-color", col);

        //disable all other checkboxes
        $('input[name="contacts-group"]').not(this).prop('checked', false);

        //find all other checkboxes and disable their color
        var sel= $("#contacts").find('input[name="contacts-group"]').not(this);
        sel.each(function(){$(this).parents().eq(3).css("background-color", 'transparent');});

        //disable this checkbox color if its false
        if ($(this).prop("checked") == false) {
            $(this).parents().eq(3).css("background-color", "transparent");
        }
    });


});


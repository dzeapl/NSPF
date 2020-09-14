/********************************header and side bar start********************************/

// side menu bar scroller start
jQuery('.scrollbar-macosx').scrollbar();
jQuery('.scrollbar-chat').scrollbar();

// side menu bar scroller close

// toggle side bar scroller start

$("#toggle_aside_bar").click(function() {
    $("aside.left").toggleClass("right");
    $("header").toggleClass("side_header_section");
    $("main").toggleClass("side_header_section");
    $(this).toggleClass('fa-times')
});
// toggle side bar scroller end

// $('select').select2()


$('.rectangle_bar li').click(function() {
    $('.rectangle_bar li').removeClass('active');
    $(this).addClass('active');
})


/********************************Datepicker Start********************************/

$('#Weekly_chat_breakup').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#user_activity_chat').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#day_wise_graph').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#agentwise_tickets').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#activity_chat').datepicker({
    uiLibrary: 'bootstrap4'
});


$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#datepicker1').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
});
var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
$('#openStartDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    showRightIcon: false,
    maxDate: function() {
        return $('#openEndDate').val();
    }
});
$('#openEndDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    showRightIcon: false,
    minDate: function() {
        return $('#openStartDate').val();
    }
});
$('#closeStartDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    maxDate: function() {
        return $('#closeEndDate').val();
    }
});
$('#closeEndDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: function() {
        return $('#closeStartDate').val();
    }
});
/********************************Datepicker End********************************/
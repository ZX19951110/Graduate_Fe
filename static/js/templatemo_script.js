$(document).ready(function() {
	$('.templatemo-sidebar-menu li.sub a').click(function () {
	  for (let i in $('.templatemo-sidebar-menu li.sub')) {
	    if ($('.templatemo-sidebar-menu li.sub').eq(i).hasClass('open')) {
        $('.templatemo-sidebar-menu li.sub').eq(i).removeClass('open')
      }
    }
		if($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open')
		}
		else {
			$(this).parent().addClass('open')
		}
	})

})

$(document).ready(function(){
	setBindings();
});

//Next Section - Arrow
function setBindings() {
	$(".home-table a, .arrow a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";
		
		$("html").animate({
			scrollTop: $("#" + sectionID).offset().top
		}, 1200)
	})
}

function clickAlert() {
	alert("Email form is currently under construction");
}

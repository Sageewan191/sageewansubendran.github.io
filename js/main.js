$(document).ready(function(){
	setBindings();
});

function setBindings() {
	$(".home-table a, .arrow a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";
		
		$("html").animate({
			scrollTop: $("#" + sectionID).offset().top
		}, 1200)
	})
}
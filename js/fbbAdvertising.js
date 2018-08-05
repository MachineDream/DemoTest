var fbbAdvertising = {
}

fbbAdvertising.changeLeft = function(){
	$(".right_arrow").css("background-color","");
	var currentOffset = $(".advertise_content")[0].scrollLeft;
	var overLen = currentOffset%120;
	var offsetRight = 0;
	if(overLen == 0){
		offsetRight = currentOffset-120;
	}else{
		offsetRight = currentOffset-overLen;
	}
	$(".advertise_content").scrollLeft(offsetRight);
	if(offsetRight == 0){
		$(".left_arrow").css("background-color","gray");
	}
}

fbbAdvertising.changeRight = function(){
	$(".left_arrow").css("background-color","");
	var contentLen = $(".advertise_content").width();
	var contentWidth = $(".advertise_content")[0].scrollWidth;
	var currentOffset = $(".advertise_content")[0].scrollLeft;
	var contentOffset = contentWidth - contentLen - currentOffset;
	var overLen = contentOffset%120;
	var offsetRight = 0;
	if(overLen == 0){
		offsetRight = currentOffset+120;
	}else{
		offsetRight = currentOffset+overLen;
	}
	$(".advertise_content").scrollLeft(offsetRight);
	if(offsetRight == contentWidth - contentLen){
		$(".right_arrow").css("background-color","gray");
	}
}

$(function(){
	$(document).on('click', '.left_arrow',fbbAdvertising.changeLeft);
	$(document).on('click', '.right_arrow',fbbAdvertising.changeRight);
})

// JavaScript Document
$(document).ready(function(){
	/* fixed_ul */
	function fixed_ul (){
        var scroll_top = $(window).scrollTop();
        var design_top = $(".design_box").offset().top
 		console.log(scroll_top +" "+ design_top);
    
        if (scroll_top >= design_top) {
           $(".design_ul").addClass("fixed_ul");
        } else {
            $(".design_ul").removeClass("fixed_ul");
        }
        
        var img_length = $(".design_box .design_img").length;
        var img_eq = img_length - 1;
 		console.log(img_length);

        for(var i=0; i <= img_eq; i++){
            var img_top = $(".design_box .design_img").eq(i).offset().top - 40;
            if(scroll_top >= img_top ) {
                $(".design_box .design_ul .design_li a").removeClass("now");
                $(".design_box .design_ul .design_li").eq(i).find("a").addClass("now");
            }
        }
    }

    $(window).on("scroll resize",fixed_ul);

});
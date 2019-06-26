// JavaScript Document

$(document).ready(function(){
	$(".drop_menu").hide();	//드롭다운메뉴 숨김처리
	
	$(".nav, .drop_menu").hover(function(){
		$(".drop_menu").stop().slideToggle("slow");	
	});
	
});
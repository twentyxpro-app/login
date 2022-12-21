$(document).ready(function(){$().UItoTop({easingType:'easeOutQuart'});$("select, textarea, input").uniform();if($(".home-slider").length&&jQuery()){$('.home-slider').owlCarousel({items:1,loop:true,autoplay:true,autoplayHoverPause:true,dots:false,nav:true,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],});}
if($(".footerNews").length&&jQuery()){$('.footerNews').cycle({fx:'scrollVert'});}
if($("#topMarquee").length&&jQuery()){$("#topMarquee").webTicker();}
if($("#newpw").length&&jQuery()){jQuery("#newpw").keyup(function(){var pwvalue=jQuery("#newpw").val();var pwstrength=getPasswordStrength(pwvalue);jQuery("#pwstrength").html("Strong");jQuery("#pwstrengthpos").css("background-color","#33CC00");if(pwstrength<75){jQuery("#pwstrength").html("Moderate");jQuery("#pwstrengthpos").css("background-color","#ff6600");}
if(pwstrength<30){jQuery("#pwstrength").html("Weak");jQuery("#pwstrengthpos").css("background-color","#cc0000");}
jQuery("#pwstrengthpos").css("width",pwstrength);jQuery("#pwstrengthneg").css("width",100-pwstrength);});}
if($(".cboxElement").length&&jQuery()){$(".cboxElement").colorbox({transition:"fade"});}
if($(".lastmembers .tips").length&&jQuery()){$(".tips").etooltip({effect:'slide',offset:[-2,10],opacity:0.7});}
if($(".egFieldTips").length&&jQuery()){$(".egFieldTips").etooltip({position:"center right",effect:'slide',offset:[-2,10],opacity:0.8});}
if($("#dataForm").length&&$(".required").length&&jQuery()){$("#dataForm").validate();}
if($("#loginForm").length&&jQuery()){$("#loginForm").validate();}
if($("ul.sf-menu").length&&jQuery()){jQuery('ul.sf-menu').supersubs({minWidth:12,maxWidth:27,extraWidth:1}).superfish({useClick:false});}
if($("#egtabs").length&&jQuery()){$("#egtabs").tabify();}
if($(".uitabs").length&&jQuery()){$(".uitabs").tabs({beforeLoad:function(event,ui){RefTab=$(".uitabs").tabs('option','active');$(".uitabs li a").eq(RefTab).prepend(spinLoading);},load:function(event,ui){RefTab=$(".uitabs").tabs('option','active');$(".uitabs li a").eq(RefTab).find(".tabSpinner").remove();$("select, textarea, input").uniform();}});}
if($("ul.accordionMenu").length&&jQuery()){$('#accordion').hoverAccordion({onClickOnly:true});}
if($("#toplogin").length&&jQuery()){jQuery(function(){jQuery('li.login').hover(function(){jQuery('#toplogin').stop(true,true).fadeIn();},function(){jQuery('#toplogin').stop(true,true).fadeOut();});});}});
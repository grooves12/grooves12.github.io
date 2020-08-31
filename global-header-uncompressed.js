jQuery.get("//nitrografixx.com/SVGICONS/images/sprites.svg?version=2", function(data) {
  var div = document.createElement("div");
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

// REMOVE MENU ITEMS
jQuery('.pageheader,.myfantasyleague_menu li a:empty').remove();
//jQuery('div.myfantasyleague_menu ul li:empty').remove();

// MFL Skin Selector for all my personal skins
function setTheme(themeName) {	localStorage.setItem('theme_'+year+'_'+league_id, themeName);document.documentElement.className = themeName;}
(function() {	if(localStorage.hasOwnProperty('theme_'+year+'_'+league_id)) setTheme(localStorage.getItem('theme_'+year+'_'+league_id));})();

$("#logo_svg_inserticon").addClass("nfl-icon-onload");


// Old function to popup new css styles
//jQuery(".MFLSkinSelectionbtn").on("click", function (){$("#myMFLSkinSelection").toggle();});
//jQuery("#myMFLSkinSelection a").on("click", function (){$("#myMFLSkinSelection").css("display","none");});


// New function to popup new css styles
jQuery(".MFLSkinSelectionbtn").on("click", function (){
$("#myMFLSkinSelection,.ThemeSwith_overlay").css("display","block");
});
jQuery("#myMFLSkinSelection a").on("click", function (){
$("#myMFLSkinSelection,.ThemeSwith_overlay").css("display","none");
});
jQuery(".ThemeSwith_overlay").on("click", function (){
$("#myMFLSkinSelection,.ThemeSwith_overlay").css("display","none");
});


// LINKS IN MAIN MENU - SCORING - ROSTER - CUSTOM ABILITIES
jQuery('ul li.mm-forcommissioners ul').prepend('<li><a class="no-sub" href="' + baseURLDynamic + '/' + year + '/home/' + league_id + '?MODULE=MESSAGE' + SetHPMability + '">Custom Abilities</a></li>');
jQuery('.myfantasyleague_menu ul li:contains("Franchise") a:contains("Rosters")').attr("href", baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=MESSAGE" + SetHPMroster );
jQuery(document).ready(function () {jQuery('#hsubmenu li a:contains("Rosters")').attr("href", baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=MESSAGE" + SetHPMroster );});

jQuery('.myfantasyleague_menu ul,.MFLSkinSelection').css('visibility','visible');

// ADD LOGIN TO MENU
jQuery('.myfantasyleague_menu > ul').append('<li class="has-sub sub-default" id="slide-menu-login"><a>Login</a><b aria-haspopup="true" aria-controls="p50"></b><input id="sub50" type="checkbox"><label for="sub50"><span></span></label><ul id="p50"></ul></li>');

// MIKE ADDED THIS TO GET A LOGIN LINK TO SHOW WHEN NOT LOGGED INTO LEAGUE - SEE BELOW FOR MORE EDITS DUE TO THIS
jQuery('.myfantasyleague_menu > ul').append('<li class="has-sub sub-default" id="slide-menu-login"><a>Login</a><b aria-haspopup="true" aria-controls="p50"></b><input id="sub50" type="checkbox"><label for="sub50"><span></span></label><ul id="p50"><li class="user-login"><a class="no-sub" href="' + baseURLDynamic + '/' + year + '/login?L=' + league_id + '">Login to league</a></li></ul></li>');

jQuery(document).ready(function() {
    var url = baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=WELCOME";
    jQuery.ajax({
        url: url,
        success: function(data) {
            jQuery(data).find("#welcome td a").each(function() {

				// MIKE REMOVED THIS TO GET A LOGIN LINK TO SHOW WHEN NOT LOGGED INTO LEAGUE
				//if($(this).text().indexOf("create")<0) jQuery('#slide-menu-login ul').append('<li><a class="no-sub" href="' + baseURLDynamic + '/' + year + '/login?L=' + league_id + '">Login</a></li>');

				// MIKE ADDED THIS TO GET A LOGIN LINK TO SHOW WHEN NOT LOGGED INTO LEAGUE
				jQuery('#slide-menu-login ul .user-login').remove();

                jQuery('#slide-menu-login ul').append('<li><a class="no-sub" href="' + jQuery(this).attr("href") + '">' + $(this).text() + '</a></li>');
            });
        },
        async: true
    });
});


// SCRIPT TO PLACE LOGGED IN USER TABLES FIRST
jQuery(document).ready(function () {
var isUserLoggedIn = typeof franchise_id === 'undefined'?false:true; 
  if(isUserLoggedIn){
    if(endsWith(document.URL,'O=01') || endsWith(document.URL,'O=07')||document.URL.indexOf('O=07&DISPLAY') >-1){
     var element = jQuery('table.report:not(#welcome,#player_search,.toggle_module_login table.report,.toggle_module_search table.report,.mm-module .report)');
     for(i = 0 ; i < element.length;i++){
         if(element.eq(i).html().indexOf('FID='+franchise_id)>-1 || element.eq(i).html().indexOf('franchise_'+franchise_id)>-1){
            var selected = '<table align="center" cellspacing="1" class="report">'+element.eq(i).html()+"</table>";
            var replace = '<table align="center" cellspacing="1" class="report">'+element.eq(0).html()+"</table>";
            element.eq(0).html(selected);
            element.eq(i).html(replace);
            break;
         }
     }
    }
  }
});
function endsWith(str, suffix) { return str.indexOf(suffix, str.length - suffix.length) !== -1;}

// KEEP FOOTER AT BOTTOM OF PAGE
function footerAlign() {
  $('footer').css('display', 'block');
  $('footer').css('height', 'auto');
  var footerHeight = $('footer').outerHeight();
  $('body').css('padding-bottom', footerHeight);
  $('footer').css('height', footerHeight);
}
jQuery(document).ready(function(){footerAlign();});
jQuery(window).on( "resize", function() { footerAlign();});

// ADP AND AAV PAGES
jQuery( document ).ready(function() {
    jQuery('#body_adp #container-wrap .report,#body_aav #container-wrap .report').wrap('<div class="mobile-wrap"></div>');
    jQuery("#body_adp #container-wrap form,#body_aav #container-wrap form").addClass("reportform");
    jQuery('#body_adp #container-wrap h3,#body_aav #container-wrap h3,#body_adp #container-wrap h2,#body_aav #container-wrap h2').addClass('h3-menu');
    jQuery('#body_adp #container-wrap .reportnavigation:contains("Hint:")').removeClass().addClass('alert alert-info-body');
    jQuery('#body_aav #container-wrap .reportnavigation:contains("Hint:")').removeClass().addClass('alert alert-info-body');
    jQuery('#body_aav #container-wrap blockquote:contains("Hint:")').removeClass().addClass('alert alert-info-body');
});

// WRAP API PAGE CONTENT
jQuery(document).ready(function(){jQuery('#body_api_info #container-wrap .pagebody').wrapInner('<div class="mobile-wrap">');});

// Deftect mobile devices and remove custom scrollbar
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('::-webkit-scrollbar{display:none}');
}

//THIS NEEDS TO BE PLACED IN HEADER AND IS USED TO GO BACK IN HISTORY FOR MFL'S LIVE SCORING
if(document.getElementById("body_ajax_ls")) {
	var ls_liveScoringWeekCheck = parseInt(location.href.substr( location.href.indexOf("W2=")+3 , 2 ));
	if(ls_liveScoringWeekCheck>0&&ls_liveScoringWeekCheck<liveScoringWeek) {
		liveScoringWeek = parseInt(location.href.substr( location.href.indexOf("W2=")+3 , 2 ));
	}
}

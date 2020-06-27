// Remove div.mobile-wrap inline style
jQuery('.mobile-wrap').removeAttr('style');

// Remove empty container
jQuery('blockquote:empty').remove();

// Wrap all container reports with div.mobile-wrap
jQuery('#container-wrap table.report,blockquote,#body_options_05 table[align="center"]:last,#body_new_predraft form[name="new_predraft"],#body_edit_my_links #container-wrap form table,#body_options_84 form table,#body_trade_offer #container-wrap table,#container-wrap td.two_column_layout table').wrap('<div class="mobile-wrap"></div>');
jQuery('#container-wrap .mobile-wrap td.two_column_layout').parents('table').unwrap();
jQuery('#container-wrap td.two_column_layout .mobile-wrap .mobile-wrap table').unwrap();
jQuery('#body_options_166 #container-wrap').wrapInner('<div class="mobile-wrap"></div>');

// Message Board Page Adjustments
if($('#body_board_show #withmenus').length === 0) {
	jQuery('#body_board_show #container-wrap').wrapInner('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');
} else {
	jQuery('#body_board_show #withmenus').wrapInner('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');
}
jQuery('#body_board_show #container-wrap .addCaption').prepend('<caption><span>Message Board Topics</span></caption>');
jQuery('#body_board_show table span.nav').appendTo('#body_board_show #container-wrap .addCaption caption:first');
jQuery('#body_board_show table th.messageboardbar').eq(1).remove();
jQuery('#body_board_show table caption').eq(1).remove();

// Message Board - Replace MFL quote - reply and edit images with input buttons to match rest of site
jQuery('a img[alt="Reply to post"]').replaceWith('<input type="button" value="Reply" style="margin:0;padding:1px 3px">');
jQuery('a img[alt="Reply to post with quote"]').replaceWith('<input type="button" value="Quote" style="margin:0;padding:1px 3px">');
jQuery('a img[alt="Edit post"]').replaceWith('<input type="button" value="Edit" style="margin:0;padding:1px 3px">');

// Message Board - replace prev , next , back to images with font awesome
jQuery('#body_board_show caption span.nav + span.nav').remove();
jQuery('#body_board_show caption span.nav a img[title="Go to previous topic"]').replaceWith('<i class="fa fa-chevron-circle-left" aria-hidden="true" title="Go to previous topic" style="font-size:14px;vertical-align:text-top;width:14px;height:14px;cursor:pointer"></i>');
jQuery('#body_board_show caption span.nav a img[title="Go to next topic"]').replaceWith('<i class="fa fa-chevron-circle-right" aria-hidden="true" title="Go to next topic" style="font-size:14px;vertical-align:text-top;width:14px;height:14px;cursor:pointer"></i>');
jQuery('#body_board_show caption span.nav a img[title="Go up a level"]').replaceWith('<i class="fa fa-undo" aria-hidden="true" title="Return to Previous Page" style="font-size:14px;vertical-align:text-top;width:14px;height:14px;cursor:pointer"></i>');


// Message Board - replace old message and unread message MFL images to images with font awesome
jQuery('#body_board_show td a img[title="Old/Read"]').replaceWith('<img src="//www.nitrografixx.com/MFL-Popups/newsOld.gif" title="Read Message" style="vertical-align:middle;cursor:pointer">');
jQuery('#body_board_show td a img[title="New/Unread"]').replaceWith('<img src="//www.nitrografixx.com/MFL-Popups/newsNew.gif" title="Unread Message" style="vertical-align:middle;cursor:pointer">');
jQuery('#body_board_show td a img[title="Old/Unread"]').replaceWith('<img src="//www.nitrografixx.com/MFL-Popups/newsNone.gif" title="Old Unread Message" style="vertical-align:middle;cursor:pointer">');


// other report adjustments
jQuery('#body_options_80 #container-wrap ol').wrap('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');
jQuery('#body_options_66 #container-wrap form').wrap('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');

// Unwrap nested div.mobile-wrap
jQuery('#body_options_113 #container-wrap .mobile-wrap .mobile-wrap').unwrap();
jQuery('#container-wrap .mobile-wrap .mobile-wrap table,#body_options_05 .mobile-wrap .mobile-wrap table[align="center"]:last').unwrap();

// Add mobile-view class to all dual table column td cells
jQuery('#container-wrap td.two_column_layout').addClass('mobile-view');
jQuery('#body_player #container-wrap td[width="33%"],#body_player #container-wrap td[width="67%"]').addClass('mobile-view');

// Wrap forms div.mobile-wrap to style same as reports containers
jQuery("#body_options_71 #container-wrap form table").parents("form").wrap('<div class="mobile-wrap form-wrapper"></div>');
jQuery('#body_csetup_hmpgmsg #container-wrap form,#body_add_drop #container-wrap table[width="100%"]').wrap('<div class="mobile-wrap form-wrapper"></div>');
jQuery('#body_csetup_hmpgmsg #container-wrap form .mobile-wrap table').unwrap();

// wrap and adjust homepage message forms to look like table reports
jQuery('#csetup_hmpgmsg .mobile-wrap.form-wrapper form').closest('.mobile-wrap.form-wrapper').wrapInner('<table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table>');
jQuery('#csetup_hmpgmsg .addCaption b').wrap('<caption><span></span></caption>');
jQuery('#csetup_hmpgmsg .addCaption b').contents().unwrap();
jQuery('#csetup_hmpgmsg .addCaption').prepend(jQuery('form caption'));
//change homepage message caption text
jQuery('#csetup_hmpgmsg .addCaption caption span').text('Enter Custom Home Page Message (HPM)');

// Remove captions on outer table that dont need to be there
jQuery('#options_06 td.two_column_layout,#options_169 td.two_column_layout,#options_22 td.two_column_layout').closest('table').addClass('caption-remove');
jQuery('.caption-remove > caption').remove();

// Add span to captions the are missing it
jQuery('table caption:not(:has(span))').wrapInner('<span></span>');

//Update standings accronyms
jQuery('th.divpct').text('Div %');
jQuery('th.all_play_wlt').text('All-Play');
jQuery('th.h2hpct').text('%');

//turn hints into new style
jQuery('div.mobile-wrap .reportnavigation:contains("Hint:")').removeClass().addClass('alert alert-info-table').wrap('<div style="text-align:center"></div>');
jQuery('td.hint').removeClass().addClass('tdalert tdalert-info-table').wrapInner('<span></span>');
jQuery('body .reportnavigation:contains("Hint:")').removeClass().addClass('alert alert-info-body');
jQuery('.reportnavigation:contains("Top FAQ:")').removeClass().addClass('alert alert-info-body');
jQuery('.reportnavigation:contains("Weekly NFL Injury Status is in this color.")').hide();

//give outer tables no border spacing
jQuery('.mobile-wrap').parents('table').addClass('no-borderspacing');

//add class to H3 outside of table body
jQuery('h3').addClass('h3-menu');
jQuery('.mobile-wrap h3').removeClass('h3-menu');

//navigation menu links
jQuery('.reportnavigation:contains("Power Rank As Of Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Franchise Setup:")').removeClass().addClass('weekly-navbar fran_options');
jQuery('.reportnavigation:contains("Standings As Of Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Go To Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Submit Lineup For Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Edit Newsletter for Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Go To Draft Round:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Go To Team:")').removeClass().addClass('weekly-navbar1');
jQuery('.reportnavigation:contains("Select A Category:")').removeClass().addClass('weekly-navbar week_optionsbox').wrap('<div style="text-align:center"></div>');
jQuery('.weekly-navbar.week_optionsbox .reportnavigationheader').text('SELECT WEEK: ');
jQuery("#body_options_236 #container-wrap div > form").addClass("reportform");

//add mobile dropdown menu created from weekly-navbar
jQuery(".weekly-navbar.week_optionsbox").each(function(){
	var tempHTML='';
	$(this).children().each(function(){
		if($(this).hasClass("reportnavigationheader")) {
			// skip
		} else if($(this).hasClass("currentweek")) {
			tempHTML+='<option selected="selected">'+$(this).html()+'</option>';
		} else {
			tempHTML+='<option value="'+$(this).attr("href")+'">'+$(this).html()+'</option>';
		}
	});
	$(this).before('<span class="weekly-navbar-mobile">SELECT WEEK: <select onchange="location.href=this.value">'+tempHTML+'</select></span>');
	tempHTML = null;
});
jQuery(".weekly-navbar.fran_options").each(function(){
	var tempHTML='';
	$(this).children().each(function(){
		if($(this).hasClass("reportnavigationheader")) {
			// skip
		} else if($(this).hasClass("currentweek")) {
			tempHTML+='<option selected="selected">'+$(this).html()+'</option>';
		} else {
			tempHTML+='<option value="'+$(this).attr("href")+'">'+$(this).html()+'</option>';
		}
	});
	$(this).before('<span class="weekly-navbar-mobile">FRANCHISE SETUP: <select onchange="location.href=this.value">'+tempHTML+'</select></span>');
	tempHTML = null;
});

//add mobile dropdown menu created from weekly-navbar to NFL Schedule - Team page
jQuery(".weekly-navbar1").each(function(){
	var tempHTML='';
	$(this).children().each(function(){
		if($(this).hasClass("reportnavigationheader")) {
			// skip
		} else if($(this).hasClass("currentweek")) {
			tempHTML+='<option selected="selected">'+$(this).html()+'</option>';
		} else {
			tempHTML+='<option value="'+$(this).attr("href")+'">'+$(this).html()+'</option>';
		}
	});
	$(this).before('<span class="weekly-navbar-mobile1">SELECT WEEK: <select onchange="location.href=this.value">'+tempHTML+'</select></span>');
	tempHTML = null;
});

//add mobile dropdown menu for homepage message h3 links
jQuery("#csetup_hmpgmsg #container-wrap h3:contains('Edit Message'),#message #container-wrap h3:contains('Edit Message')").each(function(){
	var hpmText = $(this).html().split("|");
	var hpmCurrent = parseInt(location.href.substring(location.href.indexOf("&SEQNO=")+7,location.href.length));
	if(isNaN(hpmCurrent))hpmCurrent=1;
	var tempHTML='';
	var hpmCount=1;
	$(this).find("a").each(function(){
		if(hpmCount===hpmCurrent&&hpmCount!==1&&!document.getElementById("message")) { tempHTML+='<option selected="selected">'+hpmText[hpmCurrent-1].replace("Edit Message: ","")+'</option>'; hpmCount++; }
		tempHTML+='<option value="'+$(this).attr("href")+'">'+$(this).text()+'</option>';
		hpmCount++;
	});
	if(hpmCurrent===20) tempHTML+='<option selected="selected">'+hpmText[hpmCurrent-1]+'</option>';
	$(this).before('<span class="weekly-navbar-mobile">Edit Message: <select onchange="location.href=this.value">'+tempHTML+'</select></span>');
	hpmText = null;
	hpmCurrent = null;
	hpmCount = null;
	tempHTML = null;
});

//add mobile dropdown menu for franchise team h3 links
jQuery("#container-wrap h3.h3-menu:contains('Main')").each(function(){
	var hpmText = $(this).html().split("|");
	var tempHTML='';
	for (var i=0;i<hpmText.length;i++) {
		if(hpmText[i].indexOf("href")===-1)
			if(i===0) 
				tempHTML+='<option selected="selected">Main</option>';
			else
				tempHTML+='<option selected="selected">'+hpmText[i]+'</option>';
		else 
			tempHTML+='<option value="'+hpmText[i].substring(hpmText[i].indexOf("href=")+6,hpmText[i].indexOf(">")-1)+'">'+hpmText[i].substring(hpmText[i].indexOf(">")+1,hpmText[i].indexOf("</a"))+'</option>';
	}
	$(this).before('<span class="weekly-navbar-mobile">'+hpmText[0].substring(0,hpmText[0].indexOf(":"))+': <select onchange="location.href=this.value">'+tempHTML+'</select></span>');
	hpmText = null;
	tempHTML = null;
});

//add mobile dropdown menu for hsubmenu links
jQuery("#hsubmenu #hsubmenuitems").each(function(){
	var tempHTML='';
	$(this).find("li").each(function () {
		if(location.href.substring(location.href.indexOf(".com")+4,location.href.length)===$(this).find("a").attr("href")) var thisSelected = ' selected="selected"'; else var thisSelected = '';
		tempHTML+='<option value="'+$(this).find("a").attr("href")+'"'+thisSelected+'>'+$(this).find("a").text()+'</option>';
	});
	$(this).before('<span class="weekly-navbar-mobile"><select onchange="location.href=this.value"><option value="#">- Quick Links -</option>'+tempHTML+'</select></span>');
	tempHTML = null;
});

//add mobile dropdown menu for player profile pages
jQuery("#container-wrap h3.h3-menu:contains('Status'):contains('In'):contains('All'):contains('My'):contains('Leagues')").each(function(){
	var hpmText = $(this).html().split("|");
	var tempHTML='';
	for (var i=0;i<hpmText.length;i++) {
		if(hpmText[i].indexOf("href")===-1)
			if(i===0) 
				tempHTML+='<option selected="selected">Profile</option>';
			else
				tempHTML+='<option selected="selected">'+hpmText[i]+'</option>';
		else 
			tempHTML+='<option value="'+hpmText[i].substring(hpmText[i].indexOf("href=")+6,hpmText[i].indexOf(">")-1)+'">'+hpmText[i].substring(hpmText[i].indexOf(">")+1,hpmText[i].indexOf("</a"))+'</option>';
	}
	$(this).before('<span class="weekly-navbar-mobile">'+hpmText[0].substring(0,hpmText[0].indexOf(":"))+': <select onchange="location.href=this.value">'+tempHTML+'</select></span>');
	hpmText = null;
	tempHTML = null;
});

//remove all empty - white space and html character in weekly navbars
try {jQuery(".weekly-navbar").html(jQuery(".weekly-navbar").html().replace(/&nbsp;/g,"").replace(/\|/g,""))} catch(er) {};

//remove empty td's on add/drop page
jQuery('#body_options_43 td').filter(function() {
    var html = $(this).html();
    if (html === '' || html === ' ')
        return true;
}).remove();

//remove empty td's on draft page
jQuery('#body_options_52 td[colspan="3"] table > td').filter(function() {
    var html2 = $(this).html();
    if (html2 === '' || html2 === ' ')
        return true;
}).addClass('empty');

//rename some longer captions
jQuery('#message_board_summary caption span').text('Message Board Summary');
jQuery('#owner_activity caption span').text('Owner Activity');
jQuery('#next_weeks_fantasy_schedule caption span').text('H2H Matchups');
jQuery('#last_weeks_fantasy_results caption span').text('H2H Results');
jQuery('#fantasy_recap caption span').text('Game Of The Week Recap');
jQuery('#fantasy_preview caption span').text('Game Of The Week Preview');
jQuery('#avg_draft_time caption span').text('Avg Draft Time');

//add class to player bio main table
jQuery('#body_player #container-wrap table').eq(0).addClass('playerBio-Table');

// addclass to hide or show modules for desktop and mobile
var HideModuleMobile  = "#fakedivname"; // show modules on mobile but hide on desktop
var HideModuleDesktop = "#fakedivname"; // show modules on desktop but hide on mobiles
jQuery('#home ' + HideModuleMobile).parent().addClass('desktop-Hide');
jQuery('#home ' + HideModuleDesktop).parent().addClass('mobile-Hide');

//replace league chat image
jQuery(document).ready(function() {
    $('#league_chat caption span img').replaceWith('<i class="fa fa-comments" aria-hidden="true"></i>');
});

//fix playoff brackets to add blank tr on top and bottom
jQuery('#playoff1 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff1 tr:last');
jQuery('#playoff2 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff2 tr:last');
jQuery('#playoff3 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff3 tr:last');
jQuery('#playoff4 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff4 tr:last');
jQuery('#playoff5 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff5 tr:last');
jQuery('#playoff6 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff6 tr:last');
jQuery('#playoff7 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff7 tr:last');
jQuery('#playoff8 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff8 tr:last');

jQuery('#playoff1 .oddtablerow.lastrow a,#playoff2 .oddtablerow.lastrow a,#playoff3 .oddtablerow.lastrow a,#playoff4 .oddtablerow.lastrow a,#playoff5 .oddtablerow.lastrow a,#playoff6 .oddtablerow.lastrow a,#playoff7 .oddtablerow.lastrow a,#playoff8 .oddtablerow.lastrow a').remove();

// ADD CLASSES TO ADD-DROP TABLES
jQuery('#body_add_drop caption:contains("Current Waiver Claims for")').parent('table').addClass('table1');
jQuery('#body_add_drop caption:contains("Add/Drop For")').parent('table').addClass('table2');
jQuery('#body_add_drop .table2 table caption:contains("Add")').parent('table').addClass('table2-sub1');
jQuery('#body_add_drop .table2 table caption:contains("Drop")').parent('table').addClass('table2-sub2');
jQuery('#body_add_drop b:contains("To Add:")').closest('table').addClass('table3');
jQuery('#body_add_drop .table1').parent('div').addClass('resize');

jQuery('#body_add_drop .table2-sub1 td:contains("Locked Player")').addClass('locked-warning').css('text-align','left');
jQuery('#body_add_drop .table2').find('#add_filt_nfl').closest('td').addClass('add-sorting');

// ADD CLASSES TABLE HEADERS FOR ADD AND DROP TABLE BOXES
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Name")').closest('td').addClass('waiv-name');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Team")').closest('td').addClass('waiv-team');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Pos")').closest('td').addClass('waiv-pos');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Bye")').closest('td').addClass('waiv-bye');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Salary")').closest('td').addClass('waiv-salary');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Pts")').closest('td').addClass('waiv-pts');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Proj")').closest('td').addClass('waiv-proj');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td:contains("Inj")').closest('td').addClass('waiv-inj');

// Last TD - add scroll to it and redo colspan - OLD VERSION
//jQuery('tr.head-th td:last-of-type').addClass('scroll-spacer');
//jQuery('#body_add_drop tr.head-th td.scroll-spacer[width="20px"]').remove();
//jQuery('#body_add_drop tr.head-th td:last-of-type').removeClass('scroll-spacer');
//jQuery('<td width="20px" class="scroll-spacer"></td>').insertAfter('#body_add_drop tr.head-th td:last-of-type');
//jQuery('#body_add_drop .table2-sub2 tr.head-th+tr>td').attr('colspan',10);

// Last TD - add scroll to it and redo colspan
var Colnum = 0;
$('.table2-sub2 tr.head-th td').each(function () {
  if ($(this).attr('colspan')) {
     Colnum += +$(this).attr('colspan');
  } else {
     Colnum++;
  }
});
if ($('tr.head-th td:last-of-type[width="20px"]').length ) { 
    jQuery('tr.head-th td:last-of-type[width="20px"]').addClass('scroll-spacer');
}
if (!$('.table2-sub2 tr.head-th td:last-of-type').hasClass("scroll-spacer")) {
    $('<td width="20px" class="scroll-spacer"></td>').insertAfter('.table2-sub2 tr.head-th td:last-of-type');
    $('.table2-sub2 tr.head-th+tr>td[colspan]').attr('colspan',Colnum+1);
    $('.table2-sub2 div').css("cssText", "overflow-y: scroll");
}

// ADD MOBILE VIEW CLASS TO TDs FOR ADD AND DROP SELECT BOXES
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').parent('td').addClass('mobile-view');
// RENAME CAPTION TEXT
jQuery('#body_add_drop .table1 caption span').text('Current Waiver Claims');
jQuery('#body_add_drop .table2 caption span').text('Select Players to Add/Drop');
jQuery('#body_add_drop .table2-sub1 caption span').text('Add Player');
jQuery('#body_add_drop .table2-sub2 caption span').text('Drop Player');

//jQuery('#body_add_drop .table2-sub2 .head-th').remove();
jQuery('#body_add_drop .table3').parent('td').addClass('table3-td');
jQuery('#body_add_drop .table3-td + td').remove();
jQuery('#body_add_drop .table3-td').attr('colspan',4);
jQuery('#body_add_drop table.table3 tr:last-of-type td[colspan]').attr('colspan',3).addClass('adddrop-lasttd');
jQuery('#body_add_drop .adddrop-lasttd').prev().remove();
jQuery('#body_add_drop .adddrop-lasttd').next().remove();

if(document.getElementById("body_add_drop")) {
	function hideAllFilters(toggleThis){
		if(toggleThis===undefined) {
			jQuery('#custom-filter-name').hide();
			jQuery('#custom-filter-nfl').hide();
			jQuery('#custom-filter-pos').hide();
		} else {
			if(toggleThis==="#custom-filter-name") {jQuery('#custom-filter-name').toggle(); jQuery('#custom-filter-nfl').hide(); jQuery('#custom-filter-pos').hide();}
			if(toggleThis==="#custom-filter-nfl")  {jQuery('#custom-filter-name').hide(); jQuery('#custom-filter-nfl').toggle(); jQuery('#custom-filter-pos').hide();}
			if(toggleThis==="#custom-filter-pos")  {jQuery('#custom-filter-name').hide(); jQuery('#custom-filter-nfl').hide(); jQuery('#custom-filter-pos').toggle();}
		}
	}
	//MOVE FILTERS TO HEADER
	nameFilter = '<div id="custom-filter-name" style="display:none; overflow:visible!important; position:absolute; min-width:auto; left:-45px; top:-25px; z-index:1">'+jQuery('#add_filt_name').clone().wrap('<p>').parent().html()+'</div>';
	nflFilter  = '<div id="custom-filter-nfl" style="display:none; overflow:visible!important; position:absolute; min-width:auto; left:-25px; top:-25px; z-index:1">'+jQuery('#add_filt_nfl').clone().wrap('<p>').parent().html()+'</div>';
	posFilter  = '<div id="custom-filter-pos" style="display:none; overflow:visible!important; position:absolute; min-width:auto; left:-25px; top:-25px; z-index:1">'+jQuery('#add_filt_pos').clone().wrap('<p>').parent().html()+'</div>';
	nflFilter  = nflFilter.replace( "picker_filter('add')","picker_filter('add');hideAllFilters()");
	posFilter  = posFilter.replace( "picker_filter('add')","picker_filter('add');hideAllFilters()");
	jQuery('#body_add_drop .table2-sub1 tr.head-th td.waiv-name').append('<span style="position:relative">'+nameFilter+'<span style="padding-left:6px;cursor:pointer"><i class="fa fa-search" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-name\')"></i></span></span>');
	jQuery('#body_add_drop .table2-sub1 tr.head-th td.waiv-team').append('<span style="position:relative">'+nflFilter +'<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-nfl\' )"></i></span></span>');
	jQuery('#body_add_drop .table2-sub1 tr.head-th td.waiv-pos').append('<span style="position:relative">'+posFilter +'<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-pos\' )"></i></span></span>');
	jQuery('#body_add_drop .table2-sub1 td:contains("Filter by")').html("");
	//jQuery('#body_add_drop .table2-sub1 td:contains("Locked Player")').html('* Locked Player (<a href="locked_players?L='+league_id+'" target="_blank">See Details</a>)');
}

// ADD CLASSES TO ADD-DROP FIRST TABLE
jQuery('#waiver_request_list').addClass('waiver-settings');
jQuery('#waiver_request_list:has("td.points")').removeClass('waiver-settings').addClass('bbid-settings');
jQuery('#waiver_request_list td:first-child:contains("1")').closest('table').addClass('has-rounds');

// ADD CLASS TO TH
jQuery('#waiver_request_list th:contains("Group"),#waiver_request_list th:contains("Round")').addClass('round');
jQuery('#waiver_request_list th:contains("Add")').addClass('add-player');
jQuery('#waiver_request_list th:contains("Drop")').addClass('drop-player');
jQuery('#waiver_request_list th:contains("Bid Amount")').addClass('bid-amount');
jQuery('#waiver_request_list th:contains("Action")').addClass('action');

// ADD CLASS TO TD
jQuery('#waiver_request_list td[rowspan]').parent().addClass('hasrowspan filtertr');
jQuery('#waiver_request_list tr.oddtablerow.hasrowspan').nextUntil('.eventablerow').addClass('sub-hasrowspan filtertr');
jQuery('#waiver_request_list tr.eventablerow.hasrowspan').nextUntil('.oddtablerow').addClass('sub-hasrowspan filtertr');
jQuery('#waiver_request_list tr.eventablerow:not(.filtertr),#waiver_request_list tr.oddtablerow:not(.filtertr)').addClass('norowspan');
jQuery('#waiver_request_list td:first-child:contains("1"),#waiver_request_list td:first-child:contains("2"),#waiver_request_list td:first-child:contains("3"),#waiver_request_list td:first-child:contains("4"),#waiver_request_list td:first-child:contains("5"),#waiver_request_list td:first-child:contains("6"),#waiver_request_list td:first-child:contains("7"),#waiver_request_list td:first-child:contains("8")').addClass('round');
jQuery('#body_add_drop #waiver_request_list td a[href*="player?"]').closest('td').addClass('add-player');
jQuery('#body_add_drop #waiver_request_list td.add-player + td.add-player').removeClass().addClass('drop-player');
jQuery('#waiver_request_list td.points').addClass('bid-amount');
jQuery('#waiver_request_list td:contains("Delete")').addClass('action');

// ADD HOVER ATTRIBUTES TO FONT ICONS FOR MOVEUP MOVEDOWN DELETE EDIT AND COPY
jQuery('#body_add_drop #waiver_request_list td.action a[href*="DOWN"]').attr('title', 'Move Player Down');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="UP"]').attr('title', 'Move Player Up');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="DELETE"]').attr('title', 'Delete This Player Request');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="COPY"]').attr('title', 'Copy Group To Next Round');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="&ROUND"]').attr('title', 'Edit Waivers Selections');

var thCount=0;
var timeEnteredCol = -1;
jQuery('#body_add_drop #waiver_request_list tr th').each(function(){
	if($(this).text()==="Time Entered") timeEnteredCol=thCount;
	thCount++;
});
jQuery('#body_add_drop #waiver_request_list tr th:eq('+(timeEnteredCol+1)+')').remove();
jQuery('#body_add_drop #waiver_request_list tr th:eq('+timeEnteredCol+')').remove();
var addDropRowCount = 0;
jQuery('#body_add_drop #waiver_request_list tr').each(function(){
	if($(this).find('td').length>timeEnteredCol) {
		var tr_rows = $(this).find('td:eq(0)').attr('rowspan');
		var tr_timestamp = $(this).find('td:eq('+timeEnteredCol+')').text();
		var tr_comments = $(this).find('td:eq('+(timeEnteredCol+1)+')').text();
		if($(this).hasClass("eventablerow")) var addDropTableRow = "eventablerow"; else var addDropTableRow = "oddtablerow"
		$(this).find('td:eq('+(timeEnteredCol+1)+')').remove();
		$(this).find('td:eq('+timeEnteredCol+')').remove();
		if(tr_rows===undefined) {
			$(this).find('td:eq(0)').attr('rowspan','3');
			jQuery('#body_add_drop #waiver_request_list tr:eq('+addDropRowCount+')').after('<tr class="'+addDropTableRow+'"><td colspan="'+timeEnteredCol+'" class="time-cell"><span class="warning">Time Entered: </span>'+tr_timestamp+'</td></tr><tr class="'+addDropTableRow+'"><td colspan="'+timeEnteredCol+'" class="comments-cell"><span class="warning">Comments: </span><span class="comment-span">'+tr_comments+'</span></td></tr>)');
		} else {
			$(this).find('td:eq(0)').attr('rowspan',parseInt(tr_rows)+2);
			jQuery('#body_add_drop #waiver_request_list tr:eq('+(addDropRowCount-1+parseInt(tr_rows))+')').after('<tr class="'+addDropTableRow+'"><td colspan="'+timeEnteredCol+'" class="time-cell"><span class="warning">Time Entered: </span>'+tr_timestamp+'</td></tr><tr class="'+addDropTableRow+'"><td colspan="'+timeEnteredCol+'" class="comments-cell"><span class="warning">Comments: </span><span class="comment-span">'+tr_comments+'</span></td></tr>)');
		}
		addDropRowCount++;
		addDropRowCount++;
	}
	addDropRowCount++;
});

jQuery('#waiver_request_list .comment-span:empty').parent().remove();
jQuery('#waiver_request_list tr').removeClass('sub-hasrowspan filtertr hasrowspan norowspan');


// MAKE A PICK DRAFT PAGE CHANGES

// Add Class to main draft table
jQuery('#body_options_52 .mobile-wrap,#body_new_predraft .mobile-wrap').find('span:contains("Pre-Draft Selections For"),span:contains("Your Turn To Draft")').parents('.mobile-wrap').addClass('custom-draft');

// Remove unneeded extra caption and h3
jQuery('#body_options_52 span.reportnavigation,#body_options_52 h3:contains("Waiting For:"),#body_options_52 h3:contains("To Greatly Speed"),#body_options_52 caption:contains("is on the clock")').remove();
jQuery('.custom-draft form table:first').hide();

// Create new html for draft pages
jQuery('.mobile-wrap.custom-draft form:first').append('<table class="make-pick-table"><caption class="make-pick-title"></caption><tbody><tr><td class="mobile-view leftS"></td><td class="draft-blankTD" style="padding:5px;float:left;width:100%"></td><td class="mobile-view rightS"></td></tr></tbody></table><table><tbody><tr class="blockquotes"><td></td></tr></tbody></table>');

// Main table caption
jQuery('.mobile-wrap.custom-draft').find('span:contains("Pre-Draft Selections For"),span:contains("Your Turn To Draft")').appendTo('.make-pick-table caption');
jQuery('.mobile-wrap.custom-draft').find('span:contains("Your Turn To Draft")').text("Your Turn To Draft. Select Below");

// Left side option select player list table
jQuery('.mobile-wrap.custom-draft table caption span:contains("Player")').closest('table').appendTo('.mobile-view.leftS');
jQuery('.mobile-view.leftS table table').wrap('<div class="draft-overflow" style="max-height:262px;overflow-x:auto"></div>');
jQuery('.mobile-view.leftS div > div.draft-overflow').unwrap();
jQuery('.custom-draft .mobile-view > table').width('');
jQuery('.mobile-view.leftS caption span:contains("Pre-Draft")').closest('table').addClass('has-buttons-left');
jQuery('.has-buttons-left tbody').append('<tr><td colspan="9" align="center"><input name="add_to_list" value="Add Player To Que" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr>');
jQuery('.mobile-view.leftS').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('.mobile-view.leftS').find('td a:contains("ADP")').text('ADP');
jQuery('.mobile-view.leftS').find('td a:contains("My Rank")').text('#');
jQuery('.mobile-view.leftS').find('td:contains("Projections")').text('Proj');
jQuery('.mobile-view.leftS tr.head-th td:last-of-type').addClass('scroll-spacer');



// ADD CLASSES TABLE HEADERS FOR MAKE A DRAFT PICK TABLE BOXES
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Name")').closest('td').addClass('waiv-name');
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Team")').closest('td').addClass('waiv-team');
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Pos")').closest('td').addClass('waiv-pos');
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Bye")').closest('td').addClass('waiv-bye');
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Salary")').closest('td').addClass('waiv-salary');
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Pts")').closest('td').addClass('waiv-pts');
jQuery('#body_options_52 .make-pick-table').find('td a:contains("Proj")').closest('td').addClass('waiv-proj');
jQuery('#body_options_52 .make-pick-table').find('td:contains("Inj")').closest('td').addClass('waiv-inj');

if(document.getElementById("body_options_52")) {
	function hideAllFilters(toggleThis){
		if(toggleThis===undefined) {
			//jQuery('#custom-filter-name').hide();
			//jQuery('#custom-filter-nfl').hide();
			//jQuery('#custom-filter-pos').hide();
		} else {
			if(toggleThis==="#custom-filter-name") {jQuery('#custom-filter-name').toggle(); jQuery('#custom-filter-nfl').hide(); jQuery('#custom-filter-pos').hide();}
			if(toggleThis==="#custom-filter-nfl")  {jQuery('#custom-filter-name').hide(); jQuery('#custom-filter-nfl').toggle(); jQuery('#custom-filter-pos').hide();}
			if(toggleThis==="#custom-filter-pos")  {jQuery('#custom-filter-name').hide(); jQuery('#custom-filter-nfl').hide(); jQuery('#custom-filter-pos').toggle();}
		}
	}
	//MOVE FILTERS TO HEADER
	nameFilter = '<div id="custom-filter-name" style="display:none; overflow:visible!important; position:absolute; min-width:auto; left:-45px; top:-25px; z-index:1">'+jQuery('#picker_filt_name').clone().wrap('<p>').parent().html()+'</div>';
	nflFilter  = '<div id="custom-filter-nfl" style="display:none; overflow:visible!important; position:absolute; min-width:auto; left:-25px; top:-25px; z-index:1">'+jQuery('#picker_filt_nfl').clone().wrap('<p>').parent().html()+'</div>';
	posFilter  = '<div id="custom-filter-pos" style="display:none; overflow:visible!important; position:absolute; min-width:auto; left:-25px; top:-25px; z-index:1">'+jQuery('#picker_filt_pos').clone().wrap('<p>').parent().html()+'</div>';
	nflFilter  = nflFilter.replace( "picker_filter('picker')","picker_filter('picker');hideAllFilters()");
	posFilter  = posFilter.replace( "picker_filter('picker')","picker_filter('picker');hideAllFilters()");
	jQuery('#body_options_52 .make-pick-table tr.head-th td.waiv-name').append('<span style="position:relative">'+nameFilter+'<span style="padding-left:6px;cursor:pointer"><i class="fa fa-search" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-name\')"></i></span></span>');
	jQuery('#body_options_52 .make-pick-table tr.head-th td.waiv-team').append('<span style="position:relative">'+nflFilter +'<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-nfl\' )"></i></span></span>');
	jQuery('#body_options_52 .make-pick-table tr.head-th td.waiv-pos').append('<span style="position:relative">'+posFilter +'<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-pos\' )"></i></span></span>');
	jQuery('#body_options_52 .table2-sub1 td:contains("Filter by")').html("");
}

jQuery('.mobile-view.leftS').find('tr:contains("Filter by:")').remove();



// Right side option player drop list - optional message box
jQuery('.mobile-wrap.custom-draft table span:contains("Players Queued")').closest('table').appendTo('.mobile-view.rightS');
jQuery('.mobile-wrap.custom-draft p:contains("Player to draft:")').closest('td').addClass('create-table');
jQuery('.create-table').appendTo('.mobile-view.rightS').wrap('<table class="player-to-draft"><tbody><tr />');
jQuery('<caption><span></span></caption>').insertBefore('.player-to-draft tbody');
jQuery('.player-to-draft p:first').appendTo('.player-to-draft caption span');
jQuery('.player-to-draft caption span p span').unwrap();
jQuery('.player-to-draft #sel_name').text('No Player Selected');
jQuery('.mobile-view.rightS span:contains("Players Queued For Selection")').closest('table').addClass('has-buttons-right');
jQuery('.has-buttons-right tbody').append('<tr><td align="center"><input name="remove_from_list" value="Remove From Que" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr>');
jQuery('.has-buttons-right tbody').prepend('<tr><th style="padding: 2px 0">Sortable Draft Que List</th></tr>');
jQuery('<table><tbody><tr><td align="center"><input style="margin-bottom:0" name="continue" value="Save These Picks And Continue" onclick="selectAllItems();" type="submit"></td></tr></tbody></table>').insertAfter( $('.has-buttons-right').parents('.make-pick-table') );

// Hint and blockquote place in new table
jQuery('.mobile-wrap.custom-draft').find('td[colspan="3"] b:contains("Not sure what to do")').closest('td').wrapInner('<span class="alert alert-info-table"></span>');
jQuery('.alert b:contains("Not sure what to do")').parent().addClass('toggle-hint');
jQuery('.alert b:contains("Not sure what to do")').html('<span class="reportnavigationheader">Help:</span>Not sure what to do? Click for instructions').addClass('toggle-hint');
jQuery('.toggle-hint ol').hide();
jQuery('.toggle-hint b').on("click", function (){$('.toggle-hint ol').slideToggle();}); 
jQuery('.mobile-wrap.custom-draft').find('span.alert-info-table').appendTo('tr.blockquotes td');

// Report form button go to different round
jQuery('.custom-draft .reportform:contains("Or, you may go immediately to:")').insertAfter('.custom-draft');

// Click my rank on load
jQuery('.mobile-view.leftS .head-th').find('a:first').trigger('click');

// COMMISSIONER LOAD AND UNLOAD ROSTERS
// Add Class to main load player table
jQuery('#body_options_27 .mobile-wrap').find('span:contains("Select Players To Add")').parents('.mobile-wrap').addClass('custom-loadplayer');

// Create new html for draft pages
jQuery('#body_options_27 #container-wrap form:first').append('<div class="mobile-wrap"><table class="custom-loadplayer-table"><caption class="custom-loadplayer-title"></caption><tbody><tr><td class="mobile-view leftSL"></td><td class="draft-blankTD" style="padding:5px;float:left;width:100%"></td><td class="mobile-view rightSL"></td></tr></tbody></table><table><tbody><tr class="blockquotes"><td></td></tr><tr class="enter-player"><td style="text-align:center;padding:10px"></td></tr></tbody></table></div>');

// Main table caption
jQuery('.custom-loadplayer > table > caption > span').appendTo('.custom-loadplayer-table caption');

// Left side option select player list table
jQuery('.custom-loadplayer table span:contains("Select Players To")').closest('table').appendTo('.mobile-view.leftSL');
jQuery('.mobile-view.leftSL table table').wrap('<div class="draft-overflow" style="max-height:262px;overflow-x:auto"></div>');
jQuery('.mobile-view.leftSL div > div.draft-overflow').unwrap();
jQuery('.mobile-view.leftSL span:contains("Select Players To Add")').closest('table').addClass('has-buttons-leftL');
jQuery('.has-buttons-leftL').width('');
jQuery('.has-buttons-leftL tbody').append('<tr><td colspan="7" align="center"><input name="add_to_list" value="Add Player" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr>');
jQuery('.mobile-view.leftSL').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('.mobile-view.leftSL').find('td:contains("Projections")').text('Proj');
jQuery('.mobile-view.leftSL tr.head-th td:last-of-type').addClass('scroll-spacer');
jQuery('.mobile-view.leftSL').find('tr:contains("Filter by:")').remove();

// Right side current roster
jQuery('.custom-loadplayer table span:contains("Current Roster")').closest('table').appendTo('.mobile-view.rightSL');
jQuery('.mobile-view.rightSL span:contains("Current Roster")').closest('table').addClass('has-buttons-rightL');
jQuery('.has-buttons-rightL tbody').append('<tr><td align="center"><input name="remove_from_list" value="Remove Player" onclick="removeListItem();" type="button"></td></tr>');
jQuery('.has-buttons-rightL tbody').prepend('<tr><th style="padding: 2px 0">Team Roster</th></tr>');
jQuery('<table><tbody><tr><td align="center"><input value="Load/Unload Roster" onclick="selectAllItems();" type="submit"></td></tr></tbody></table>').insertAfter( $('.has-buttons-rightL').parents('.custom-loadplayer-table') );

// Hint and blockquote place in new table
jQuery('.custom-loadplayer').find('span.alert-info-table').appendTo('tr.blockquotes td');
jQuery('#body_options_27 td:has("textarea")').contents().appendTo('tr.enter-player td');

// Click my rank on load
jQuery('.mobile-view.leftSL .head-th').find('a:first').trigger('click');


// TRADES PAGE
jQuery('#body_options_05 .mobile-wrap').find('span:contains("Pending Trades")').parents('.mobile-wrap').addClass('tradesTable');
jQuery('.tradesTable').find('a:contains("Compare Players")').remove();
jQuery('.tradesTable tr.newposition').removeClass('newposition');
jQuery('.tradesTable').find('tr:contains("Offered To Others")').addClass('offered-by-me');
jQuery('.tradesTable').find('tr:contains("Offered To You")').addClass('offered-to-me');
jQuery('.tradesTable').find('tr:contains("Offering Franchise")').addClass('column-heads');
jQuery('.tradesTable tr').has('ul').addClass('trade-offer');
jQuery('.tradesTable tr.oddtablerow').removeClass('oddtablerow');
jQuery('.tradesTable tr.eventablerow').removeClass('eventablerow');
jQuery('.tradesTable tr').has('.warning').addClass('warningTR no-trades');
jQuery('.tradesTable .no-trades').prevUntil('.trade-offer').addClass('no-trades');
jQuery('.tradesTable .trade-offer td:nth-child(1),.tradesTable .column-heads th:nth-child(1)').addClass('franchise-offered-by');
jQuery('.tradesTable .trade-offer td:nth-child(2),.tradesTable .column-heads th:nth-child(2)').addClass('players-offered-by');
jQuery('.tradesTable .trade-offer td:nth-child(3),.tradesTable .column-heads th:nth-child(3)').addClass('franchise-offered-to');
jQuery('.tradesTable .trade-offer td:nth-child(4),.tradesTable .column-heads th:nth-child(4)').addClass('players-offered-to');
jQuery('.tradesTable .trade-offer td:nth-child(5),.tradesTable .column-heads th:nth-child(5)').addClass('expires-by');
jQuery('.tradesTable .trade-offer td:nth-child(6),.tradesTable .column-heads th:nth-child(6)').addClass('comments-to');
jQuery('.tradesTable .trade-offer td:nth-child(7),.tradesTable .column-heads th:nth-child(7)').addClass('actions-by');

jQuery(".tradesTable .offered-by-me").each(function () {
	$(this).nextUntil(".offered-to-me").addBack().wrapAll("<table class='offeredbymeTable'><tbody>");
});
jQuery(".tradesTable .offered-to-me").each(function () {
	$(this).nextUntil(".tradesTable tbody").addBack().wrapAll("<table class='offeredtomeTable'><tbody>");
});
jQuery(".trade-offer .franchise-offered-by").each(function () {
	$(this).nextUntil(".franchise-offered-to").addBack().wrapAll("<div class='offerer' />");
});
jQuery(".trade-offer .franchise-offered-to").each(function () {
	$(this).nextUntil(".expires-by").addBack().wrapAll("<div class='offeree' />");
});
jQuery(".trade-offer + tr").after('<tr class="divide-trades"><td colspan="20" style="padding:0;margin:0;border:0"></td></tr>');
jQuery('.offeredbymeTable td.comments-to').each(function(){
	if($(this).text().length>1) $(this).wrapInner('<span class="comments-disabled" />'); else $(this).wrapInner('<span class="comments-disabled">No Comments</span>');
});
var tradeOffer=0;
jQuery('.offeredtomeTable td.comments-to').each(function(){
	if($(this).text().length>2) { 
		$(this).contents().eq(0).wrap('<span class="comments-disabled" />'); 
		$(this).find('.comments-disabled').after('<span class="comments-to-textarea">Leave Comment :</span>'); 
	} else { 
		$(this).prepend('<span class="comments-disabled">No Comments</span><span class="comments-to-textarea">Leave Comment :</span>'); 
	} 
	$(this).find("textarea").addClass("comments-textarea").attr("onchange","$('#comments-response-"+tradeOffer+"').val(this.value)");
	tradeOffer++;
});
jQuery(".offeredtomeTable .trade-offer").each(function () {
	$(this).find(".actions-by").append('<div class="actions-expired"><b>Expires On:</b> '+$(this).find(".expires-by").html().replace(year,"").replace(":00 "," ")+'</div>');
});
jQuery(".offeredbymeTable .trade-offer").each(function () {
	$(this).find(".actions-by").append('<span class="actions-expired" style="display:block"><b>Expires On:</b> '+$(this).find(".expires-by").html().replace(year,"").replace(":00 "," ")+'</span>');
});		

	var pendingTrades = new Array(); jQuery(".offeredtomeTable input[name=PENDING]").each(function(){ pendingTrades.push($(this).val()); });		
	var pendingFranchises = new Array(); jQuery(".offeredtomeTable input[name=FRANCHISE_ID]").each(function() { pendingFranchises.push($(this).val()); });		
	var tradeOffer=0;

	jQuery(".offeredtomeTable .trade-offer .actions-by").each(function(){	
		$(this).html('<form class="cus-trades-form" action="trade_response" method="post"><input type="hidden" name="LEAGUE_ID" value="'+league_id+'"/><input type="hidden" name="FRANCHISE_ID" value="'+pendingFranchises[tradeOffer]+'"/><input type="hidden" name="PENDING" value="'+pendingTrades[tradeOffer]+'"/><input type="hidden" name="COMMENTS" id="comments-response-'+tradeOffer+'" value=""/>' + $(this).html() + '</form>');
		tradeOffer++;
	});


// MIKE ADDED TO MOVE RESPOND TRADE OFFER BUTTONS INTO THE FORMS
jQuery('.offeredtomeTable tr:has(input[type="submit"])').each(function() {
	$(this).prev().find('.cus-trades-form').append(this); 
});
jQuery('.offeredtomeTable .cus-trades-form input[type="submit"]').unwrap();
jQuery('.offeredtomeTable .cus-trades-form td').remove();
jQuery('.offeredtomeTable .cus-trades-form input[type="submit"]').unwrap();

//jQuery(".offeredbymeTable .trade-offer + tr").remove();


// Bottom tables to trade from one team to another , make mobile friendly
jQuery('#body_options_05 .no-borderspacing').prepend('<tr class="trade-toggle-mobile" style="text-align:center"><td><input id="tradeShowOther" value="Display Other Team" type="button"><input id="tradeShowMyTeam" value="Display My Team" type="button"></td></tr>');
jQuery('#body_options_05 td[valign="top"] table.report').addClass('trade-twocolumn-table');

// add class to parent div.mobile of the 2 columns tables for trade
jQuery('.trade-twocolumn-table').parents('td').addClass('div-wrap-trade-table');

// add class to each of the 2 column trade tables
jQuery('.div-wrap-trade-table:first').addClass('firstTable');
jQuery('.div-wrap-trade-table:last').addClass('lastTable');

// add class to all table td and th to use later in script to decifer custom contract year and status
jQuery('.trade-twocolumn-table th,.trade-twocolumn-table td').addClass('trade-class');

// add class to table column th and td  - checkbox and trade?
jQuery('.trade-twocolumn-table').find('th:contains("Trade?")').removeClass().addClass('trade-box');
jQuery('.trade-twocolumn-table td').has('input[type="checkbox"]').removeClass().addClass('trade-box');
  // change th text from trade? to trade
  jQuery('.trade-twocolumn-table th.trade-box').html('<i class="fa fa-check" aria-hidden="true"></i>');

// add class table column th and td - players names
jQuery('.trade-twocolumn-table').find('th:contains("Player")').removeClass().addClass('trade-player');
jQuery('.trade-twocolumn-table td').has('a[class*="position"]').removeClass().addClass('trade-player');
  // change th text from player to player name
  jQuery('.trade-twocolumn-table th.trade-player').text('Player Name');

// add class to second table column th - salary - the td already has this class added
jQuery('.trade-twocolumn-table').find('th:contains("Salary")').removeClass().addClass('salary');
jQuery('.trade-twocolumn-table td.salary').removeClass().addClass('salary');

// add class to table column th  - bye week - td already has this class
jQuery('.trade-twocolumn-table').find('th:contains("Bye")').removeClass().addClass('week');
jQuery('.trade-twocolumn-table td.week').removeClass().addClass('week');

// add class to table column th  - ytd points - td already has this class
jQuery('.trade-twocolumn-table').find('th:contains("YTD Pts")').removeClass().addClass('points');
jQuery('.trade-twocolumn-table td.points').removeClass().addClass('points');
  // change th text from "year"YTD Pts to YTD Pts
  jQuery('.trade-twocolumn-table th.points').text('YTD Pts');

// add class to table td that has future draft pick and span it across all td cells
jQuery('.trade-twocolumn-table .trade-box + td:contains("Draft Pick")').removeClass().addClass('draftpickTD');
jQuery('.trade-twocolumn-table .draftpickTD').attr("colspan","7");

// add class to table column th and td  - for blind bidding input and text td
jQuery('.trade-twocolumn-table').find('td:contains("Blind Bidding Dollars")').removeClass().addClass('trade-bbid-text');
jQuery('.trade-twocolumn-table td').has('input[type="text"]').removeClass().addClass('trade-bbid-amt');
jQuery('.trade-bbid-amt').wrapInner('<span />');

contentsLeft = jQuery('.firstTable .trade-bbid-text').contents();
jQuery('.firstTable .trade-bbid-amt').append(contentsLeft);
contentsRight = jQuery('.lastTable .trade-bbid-text').contents();
jQuery('.lastTable .trade-bbid-amt').append(contentsRight);
jQuery('.trade-twocolumn-table td.trade-bbid-text').remove();
jQuery('.trade-twocolumn-table .trade-bbid-amt').attr("colspan","7");


if (jQuery('.trade-twocolumn-table').has('td.contractyear')) {
	jQuery('.firstTable th.trade-class').eq(0).removeClass().addClass('contractyear');
	jQuery('.lastTable th.trade-class').eq(0).removeClass().addClass('contractyear');
	jQuery('.trade-twocolumn-table td.contractyear').removeClass('trade-class');
}
if (jQuery('.trade-twocolumn-table').has('td.contractstatus')) {
	jQuery('.firstTable th.trade-class').eq(0).removeClass().addClass('contractstatus');
	jQuery('.lastTable th.trade-class').eq(0).removeClass().addClass('contractstatus');
	jQuery('.trade-twocolumn-table td.contractstatus').removeClass('trade-class');
}


jQuery('#tradeShowOther').on("click", function (){
	$('.div-wrap-trade-table.firstTable').hide();
	$('#tradeShowOther').hide();
	$('.div-wrap-trade-table.lastTable').show();
	$('#tradeShowMyTeam').show();
});
jQuery('#tradeShowMyTeam').on("click", function (){
	$('.div-wrap-trade-table.lastTable').hide();
	$('#tradeShowMyTeam').hide();
	$('.div-wrap-trade-table.firstTable').show();
	$('#tradeShowOther').show();
});



// FORMAT STATS PAGES
function expandPlayer(thisPosition,thisPlayer,expand) {
	if(expand) {
		jQuery("#expandTotal_"+thisPosition+"_"+thisPlayer).hide();
		jQuery("#expandAvg_"+thisPosition+"_"+thisPlayer).hide();
		jQuery("#collapseTotal_"+thisPosition+"_"+thisPlayer).show();
		jQuery("#collapseAvg_"+thisPosition+"_"+thisPlayer).show();
		jQuery(".nflStatsWeekRow_"+thisPosition+"_"+thisPlayer).show();
	} else {
		jQuery("#expandTotal_"+thisPosition+"_"+thisPlayer).show();
		jQuery("#expandAvg_"+thisPosition+"_"+thisPlayer).show();
		jQuery("#collapseTotal_"+thisPosition+"_"+thisPlayer).hide();
		jQuery("#collapseAvg_"+thisPosition+"_"+thisPlayer).hide();
		jQuery(".nflStatsWeekRow_"+thisPosition+"_"+thisPlayer).hide();
	}
}
function doNFLTotal(isTotal){
	if(isTotal) {
		jQuery("#nflTotalInactive").hide();
		jQuery("#nflAvgInactive").show();
		jQuery("#nflTotalActive").show();
		jQuery("#nflAvgActive").hide();
		jQuery(".nflStatsTotalRow").show();
		jQuery(".nflStatsAvgRow").hide();
	} else {
		jQuery("#nflTotalInactive").show();
		jQuery("#nflAvgInactive").hide();
		jQuery("#nflTotalActive").hide();
		jQuery("#nflAvgActive").show();
		jQuery(".nflStatsTotalRow").hide();
		jQuery(".nflStatsAvgRow").show();
	}
}
function applyStat(thisStat,decimal) {
	if(thisStat==="-") 
		return thisStat; 
	else if(isNaN(parseFloat(thisStat))) 
		if(decimal)
			return "0.0";
		else 
			return 0;
	else 
		return thisStat;
}
function shortenHeader(thisHeader){
	if(thisHeader==="Targets") return "<span title='"+thisHeader+"'>Tgt</span>";
	if(thisHeader==="Pass Interceptions Thrown") return "<span title='"+thisHeader+"'>Int</span>";
	if(thisHeader==="Receptions") return "<span title='"+thisHeader+"'>Rcpt</span>";
	var isRush=false, isRec=false;
	if(thisHeader.indexOf("Rush")>-1) isRush=true;
	if(thisHeader.indexOf("Receiving")>-1) isRec=true;

	var newHeader = thisHeader.toUpperCase();
	newHeader = newHeader.replace("EXTRA","X");
	newHeader = newHeader.replace("NUMBER OF","#");
	newHeader = newHeader.replace("(","( ");
	newHeader = newHeader.replace(")"," )");
	var headerSplit=newHeader.split(" ");
	var newHeader="";
	for (var i=0;i<headerSplit.length;i++){
		newHeader+= headerSplit[i].substring(0,1);
	}
	if(isRush) newHeader = newHeader.replace("R","Run");
	if(isRec) newHeader = newHeader.replace("R","Rec");
	return "<span title='"+thisHeader+"'>"+newHeader+"</span>";
}
function getNFLScheduleReformat(thisTeam){
	var nflScheduleReformat = new Array();
	for (var i=1;i<22;i++) {
		var url = baseURLDynamic+"/"+year+"/export?TYPE=nflSchedule&W="+i+"&JSON=1";
		jQuery.ajax({type: 'GET',url: url, async:false}).done(function (scheduleData) {
			var teamFound = false;
			try {
				for (var m=0;m<scheduleData.nflSchedule.matchup.length;m++){
					if(scheduleData.nflSchedule.matchup[m].team[0].id===thisTeam) {
						nflScheduleReformat[i]=thisTeam+" "+scheduleData.nflSchedule.matchup[m].team[0].score+" at "+scheduleData.nflSchedule.matchup[m].team[1].score+" "+scheduleData.nflSchedule.matchup[m].team[1].id;
						teamFound=true;
						break;
					}
					if(scheduleData.nflSchedule.matchup[m].team[1].id===thisTeam) {
						nflScheduleReformat[i]=thisTeam+" "+scheduleData.nflSchedule.matchup[m].team[1].score+" vs "+scheduleData.nflSchedule.matchup[m].team[0].score+" "+scheduleData.nflSchedule.matchup[m].team[0].id;
						teamFound=true;
						break;
					}
				}
			} catch(er) {}	
			if(!teamFound)nflScheduleReformat[i]="bye";
		});
	}
	return nflScheduleReformat;
}
function doNFLStatsTable(thisTable,nflScheduleArray){
	try {
		var tableCaptionHTML = thisTable.find("caption").html();
		var thisPosition = thisTable.find("caption span").html();
		var tableRows = new Array();
		var weekRow = new Array();
		//EACH TABLE HAS ONE ROW OF TH WITH WEEK INFORMATION
		thisTable.find("tr:eq(0) th").each(function(){
			weekRow[weekRow.length] = jQuery(this).html();
		});
		//EACH TABLE HAS NEW PLAYER BEGIN WHERE COLSPAN ATTRIBUTE EXISTS
		var currPlayer=0;
		var currRow = 0;
		var rowCount = 0;
		thisTable.find("tr").each(function(){
			if(rowCount>0) { // we want to ignore first row
				if(jQuery(this).find("th").length>0) { // NEW PLAYER SETUP
					currPlayer = tableRows.length;
					if(jQuery(this).find("th").html().indexOf("<img")>0)
						tableRows[currPlayer] = ({"name":jQuery(this).find("th").html().substring(0,jQuery(this).find("th").html().indexOf("<img")),"hasInjury":false,"playerRows":new Array()});
					else
						tableRows[currPlayer] = ({"name":jQuery(this).find("th").html(),"hasInjury":false,"playerRows":new Array()});
				} else {
					if(jQuery(this).find("td:eq(0)").html()==="Injury Status") tableRows[currPlayer].hasInjury=true;
					currRow = tableRows[currPlayer].playerRows.length;
					tableRows[currPlayer].playerRows[currRow] = new Array();
					var currCol=0;
					jQuery(this).find("td").each(function(){
						tableRows[currPlayer].playerRows[currRow][currCol] = jQuery(this).html();
						currCol++;
					});
				}
			}
			rowCount++;
		});
		var newTableContent = "";
		if(document.getElementById("body_nfl_team_stats"))
			if(tableRows[0].hasInjury) var statsLastRow = tableRows[0].playerRows.length - 1; else var statsLastRow = tableRows[0].playerRows.length;
		else
			if(tableRows[0].hasInjury) var statsLastRow = tableRows[0].playerRows.length - 2; else var statsLastRow = tableRows[0].playerRows.length - 1;
		
		newTableContent+="<caption>"+tableCaptionHTML+"</caption><tbody>";
		//HEADER ROW
		newTableContent+="<tr><th>Player</th><th>Week</th>";
		if(tableRows[0].hasInjury) newTableContent+="<th>Injury</th>";
		for (var i=0;i<statsLastRow;i++){
			newTableContent+="<th style='text-align:center'>"+shortenHeader(tableRows[0].playerRows[i][0])+"</th>";
		}
		newTableContent+="</tr>";
		for(var p=0;p<tableRows.length;p++) {
			//TOTALS ROW (2ND LAST COLUMN)
			newTableContent+='<tr class="oddtablerow nflStatsTotalRow"><td><span id="expandTotal_'+thisPosition+'_'+p+'" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',true)"><i class="fa fa-plus-square stats-expand" aria-hidden="true"></i></span><span id="collapseTotal_'+thisPosition+'_'+p+'" style="display:none" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',false)"><i class="fa fa-minus-square stats-collapse" aria-hidden="true"></i></span>'+tableRows[p].name+'</td><td style="text-align:center">Total</td>';
			if(tableRows[p].hasInjury) newTableContent+="<td style='text-align:center'></td>";
			for (var i=0;i<statsLastRow;i++){
				if(!(tableRows[0].hasInjury&&i===(tableRows[0].playerRows.length-1))) newTableContent+="<td class='points' style='text-align:center'>"+applyStat(tableRows[p].playerRows[i][tableRows[p].playerRows[i].length-2],false)+"</td>";
			}
			newTableContent+="</tr>";
			//AVG ROW (LAST COLUMN)
			newTableContent+='<tr class="oddtablerow nflStatsAvgRow"><td><span id="expandAvg_'+thisPosition+'_'+p+'" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',true)"><i class="fa fa-plus-square stats-expand" aria-hidden="true"></i></span><span id="collapseAvg_'+thisPosition+'_'+p+'" style="display:none" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',false)"><i class="fa fa-minus-square stats-collapse" aria-hidden="true"></i></span>'+tableRows[p].name+'</td><td style="text-align:center">Avg</td>';
			if(tableRows[p].hasInjury) newTableContent+="<td style='text-align:center'></td>";
			for (var i=0;i<statsLastRow;i++){
				if( !( tableRows[0].hasInjury&&i===(tableRows[0].playerRows.length-1) ) ) newTableContent+="<td class='points' style='text-align:center'>"+applyStat(tableRows[p].playerRows[i][tableRows[p].playerRows[i].length-1],true)+"</td>";
			}
			newTableContent+="</tr>";
			//WEEKS
			for (w=1;w<tableRows[p].playerRows[0].length-2;w++){
				if(document.getElementById("body_nfl_team_stats"))
					newTableContent+="<tr class='eventablerow nflStatsWeekRow nflStatsWeekRow_"+thisPosition+"_"+p+"' style='display:none'><td style='text-align:right'>"+nflScheduleArray[w]+"</td><td style='text-align:center'>"+w+"</td>";
				else
					newTableContent+="<tr class='eventablerow nflStatsWeekRow nflStatsWeekRow_"+thisPosition+"_"+p+"' style='display:none'><td style='text-align:right'>"+tableRows[p].playerRows[tableRows[p].playerRows.length-1][w]+"</td><td style='text-align:center'>"+w+"</td>";				
				for (var i=0;i<statsLastRow;i++){
					if(tableRows[p].hasInjury&&i===0) {
						if(document.getElementById("body_nfl_team_stats"))
							newTableContent+="<td style='text-align:center'>"+tableRows[p].playerRows[tableRows[p].playerRows.length-1][w]+"</td>";
						else
							newTableContent+="<td style='text-align:center'>"+tableRows[p].playerRows[tableRows[p].playerRows.length-2][w]+"</td>";
					}
					if(!(tableRows[0].hasInjury&&i===(tableRows[0].playerRows.length-1))) newTableContent+="<td class='points' style='text-align:center'>"+applyStat(tableRows[p].playerRows[i][w],false)+"</td>";
				}
				newTableContent+="</tr>";
			}
		}
		newTableContent+="</tbody>";
		thisTable.html(newTableContent);
		if(!reformattedStatsFound) thisTable.closest("div").before("Showing: <span id='nflTotalInactive' style='display:none'><a href='#total' onclick='doNFLTotal(true)'>Total</a></span><span id='nflTotalActive'>Total</span> | <span id='nflAvgInactive'><a href='#avg' onclick='doNFLTotal(false)'>Avg</a></span><span id='nflAvgActive' style='display:none'>Avg</span><br><br>");
		reformattedStatsFound = true;
		jQuery(".nflStatsAvgRow").hide();
	} catch(er){}
}
function doMFL_reformatStatsPage(){
	var nflScheduleTemp = getNFLScheduleReformat(jQuery("select[name='TEAM'] option:selected").text());
	jQuery("body").find("table.report").each(function(){doNFLStatsTable(jQuery(this),nflScheduleTemp);});
	nflScheduleTemp = null;
}
if( (document.getElementById('body_nfl_team_stats')||document.getElementById('body_options_138')) && location.href.indexOf("#DEFAULT")===-1) {
	var reformattedStatsFound = false;
	doMFL_reformatStatsPage()
}

// Trade Response Page - for commissioners if commish uses the "Perform Trade"
jQuery('#body_trade_offer b:contains("Gave Up")').parents('table').addClass('offer-table');
jQuery('.offer-table').unwrap();
jQuery('#body_trade_offer table.offer-table').after('<table class="two_column_layout no-borderspacing offer-table-moved"></caption><tbody><tr><td class="two_column_layout mobile-view" valign="top"><div class="mobile-wrap"><table class="leftS" align="center"><caption style="text-align:center"><span></span></caption><tbody><tr><th>Gave Up</th></tr><tr><td class="gave-player oddtablerow" style="text-align:center"></td></tr><tr><th style="text-align:left">New Roster</th></tr><tr><td class="new-roster oddtablerow"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view" valign="top"><div class="mobile-wrap"><table class="rightS" align="center"><caption style="text-align:center"><span></span></caption><tbody><tr><th>Gave Up</th></tr><tr><td class="gave-player oddtablerow" style="text-align:center"></td></tr><tr><th style="text-align:left">New Roster</th></tr><tr><td class="new-roster oddtablerow"></td></tr></tbody></table></div></td></tr></tbody></table>');
jQuery('#body_trade_offer .offer-table h3 a:eq(0)').appendTo('.offer-table-moved .leftS caption span');
jQuery('#body_trade_offer .offer-table h3 a:eq(0)').appendTo('.offer-table-moved .rightS caption span');
jQuery('#body_trade_offer .offer-table tr:nth-child(1) > td:nth-child(1)').contents().appendTo('.offer-table-moved .leftS td.gave-player');
jQuery('#body_trade_offer .offer-table tr:nth-child(1) > td:nth-child(2)').contents().appendTo('.offer-table-moved .rightS td.gave-player');
jQuery('.offer-table-moved .gave-player h3,.offer-table-moved .leftS .gave-player br:first,.offer-table-moved .rightS .gave-player br:first').remove();
jQuery('#body_trade_offer .offer-table tr:nth-child(2) > td:nth-child(1)').contents().appendTo('.offer-table-moved .leftS td.new-roster');
jQuery('#body_trade_offer .offer-table tr:nth-child(2) > td:nth-child(2)').contents().appendTo('.offer-table-moved .rightS td.new-roster');
jQuery('#body_trade_offer .offer-table').remove();
jQuery('#body_trade_offer b:contains("Gave Up")').remove();
jQuery('#body_trade_offer .new-roster h3').remove();

// Trade Response Page - for commissioners and owners who "Reject Trade" , "Accept Trade" , "Revoke Trade"
jQuery('#body_trade_response .h3-menu:contains("Trade Rejected")').parent('#container-wrap').addClass('rejected-page trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("Trade Accepted")').parent('#container-wrap').addClass('accepted-page trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("Trade Revoked")').parent('#container-wrap').addClass('revoked-page trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("The commissioner has been notified")').parent('#container-wrap').addClass('notify-commish trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("allowing owners to approve or reject this trade")').parent('#container-wrap').addClass('notify-poll trade-form-page');

jQuery('#body_trade_response .trade-form-page .h3-menu:first').remove();
jQuery('#body_trade_response .trade-form-page .h3-menu + br').remove();
jQuery('#body_trade_response .trade-form-page .h3-menu').after('<div class="mobile-wrap"><table class="tradesubmit-table"><caption><span>You Have Rejected This Trade</span></caption><tbody><tr><th style="text-align:left">Trade Proposed By</th><th style="text-align:left">Trade Proposed To</th></tr><tr><td class="team-proposedby" style="vertical-align:top;width:50%"></td><td class="team-proposedto" style="vertical-align:top;width:50%"></td></tr></tbody></table></div>');
jQuery('#body_trade_response .accepted-page .tradesubmit-table caption span').text('You Have Accepted This Trade');
jQuery('#body_trade_response .revoked-page .tradesubmit-table caption span').text('You Have Revoked This Trade');
jQuery('#body_trade_response .notify-commish .tradesubmit-table caption span').text('You Have Accepted This Trade');
jQuery('#body_trade_response .notify-poll .tradesubmit-table caption span').text('You Have Accepted This Trade');

try { jQuery('#body_trade_response .trade-form-page ul li:eq(0)').contents().appendTo('td.team-proposedby'); } catch(er) {}
try { jQuery('#body_trade_response .trade-form-page ul li:eq(1)').contents().appendTo('td.team-proposedto'); } catch(er) {}
jQuery('#body_trade_response .trade-form-page td.team-proposedto b,#body_trade_response .trade-form-page td.team-proposedby b,#body_trade_response .trade-form-page .tradesubmit-table br').remove();
jQuery('#body_trade_response .trade-form-page .tradesubmit-table td a').css("display" , "block");
jQuery('#body_trade_response .trade-form-page .tradesubmit-table td a').css("padding" , "3px 0");
jQuery('#body_trade_response .trade-form-page .mobile-wrap').nextUntil("div").remove();

jQuery('#body_trade_response .notify-poll .h3-menu').after('<h3 class="h3-menu">A new poll has been created allowing owners to approve or reject this trade.</h3>');
jQuery('#body_trade_response .notify-commish .h3-menu').after('<h3 class="h3-menu">This trades requires commissioner approval.</h3>');

try {
     jQuery("td.team-proposedto").html(jQuery("td.team-proposedto").html().replace(/To/ig, ""));
     jQuery('.trade-form-page').html(jQuery('.trade-form-page').html().replace(/[\n]/g,''));
     jQuery('.trade-form-page').html(jQuery('.trade-form-page').html().replace('proposed a trade with:',''));
     jQuery("td.team-proposedto").html(jQuery("td.team-proposedto").html().replace(/for/ig, ""));
     jQuery("td.team-proposedby").html(jQuery("td.team-proposedby").html().replace(/will give/ig, ""));
} catch(er) {}

// Trade Offer Page - Propose A Trade Submission Page
jQuery('#body_trade_offer .h3-menu:contains("Trade Proposal to")').parent('#container-wrap').addClass('trade-proposal-form');
jQuery('#body_trade_offer div.mobile-wrap table.report').addClass("remove-table");
jQuery('#body_trade_offer .trade-proposal-form .h3-menu:first,#body_trade_offer .trade-proposal-form .h3-menu:last,#body_trade_offer .trade-proposal-form br').remove();
jQuery('#body_trade_offer .trade-proposal-form .h3-menu:last a').css("display","block");
jQuery('#body_trade_offer .trade-proposal-form .h3-menu:first').after('<div class="mobile-wrap"><table class="tradesubmit-table"><caption><span>You Have Offered This Trade</span></caption><tbody><tr><th style="text-align:left">Trade Proposed By</th><th style="text-align:left">Trade Proposed To</th></tr><tr><td class="team-proposedby" style="vertical-align:top;width:50%"></td><td class="team-proposedto" style="vertical-align:top;width:50%"></td></tr><tr><td colspan="2" style="border:0;box-shadow:none;padding:10px"></td></tr><tr><td colspan="2" class="trade-expires-by" style="text-align:center"></td></tr></tbody></table></div>');
jQuery('#body_trade_offer .trade-proposal-form ul li:eq(0)').contents().appendTo('td.team-proposedby');
jQuery('#body_trade_offer .trade-proposal-form ul li:eq(1)').contents().appendTo('td.team-proposedto');
jQuery('#body_trade_offer .trade-proposal-form .tradesubmit-table td a').css("display" , "block");
jQuery('#body_trade_offer .trade-proposal-form .tradesubmit-table td a').css("padding" , "3px 0");
jQuery('#body_trade_offer .remove-table caption,#body_trade_offer .remove-table a,#body_trade_offer .remove-table ul').remove();
jQuery('#body_trade_offer .remove-table td').contents().appendTo('td.trade-expires-by');

try {
     jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html().replace(/for/ig, ""));
     jQuery("#body_trade_offer .trade-proposal-form td.team-proposedby").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedby").html().replace(/will give/ig, ""));
     jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html().replace(/To/ig, ""));
     jQuery('#body_trade_offer td.trade-expires-by').html($('#body_trade_offer td.trade-expires-by').html().replace('proposed a trade with',''));
     jQuery('#body_trade_offer td.trade-expires-by').html($('#body_trade_offer td.trade-expires-by').html().replace(':',''));
} catch(er) {}
jQuery('#body_trade_offer .remove-table').parents('.mobile-wrap').remove();

// Homepage Messages setup page
jQuery('<table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Modules</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="add_to_list" value="Add To List" onclick="add();" type="button"></td></tr><tr><td class="preview-modules"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Currently Used Modules</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr></tbody></table>').insertBefore('#options_71 form table');
jQuery('#options_71 form table #source_list').appendTo('#options_71 .leftV td.selectbox');
jQuery('#options_71 form table #destination_list').appendTo('#options_71 .rightV td.selectbox');
jQuery('#options_71 form table a[href*="javascript:void(0);"]').appendTo('#options_71 td.preview-modules');
jQuery('#options_71 form table + table').remove();

// My Draft List page
jQuery('#options_129 form[name="my_draft_list"]:has("select")').addClass('preselections');
jQuery('<div class="reportform"><span class="sorting-players">Sort By:<span></span></span><span class="position-players">Show Only:<span></span></span></div><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Players</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></tr><tr><td><input name="add_to_list" value="Add Player" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Draft List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr><tr><td colspan="2"><p class="form_buttons"><input name="save" type="submit" value="Save My Draft List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#options_129 form.preselections .mobile-wrap');
jQuery('#options_129 form.preselections table #picker').appendTo('#options_129 .leftV td.selectbox div');
jQuery('#options_129 form.preselections table #destination_list').appendTo('#options_129 .rightV td.selectbox');
jQuery('#options_129 form.preselections table #picker_filt_nfl').appendTo('#options_129 .sorting-players span');
jQuery('#options_129 form.preselections table #picker_filt_pos').appendTo('#options_129 .position-players span');
jQuery('#options_129 form.preselections table + div.mobile-wrap').hide();
jQuery('#options_129 div.mobile-wrap .report').find('th:contains("Player")').addClass('th-playername');
jQuery('#options_129 div.mobile-wrap .report tr td:has("a")').addClass('td-playername');
jQuery('#options_129 form.preselections table #picker td[width="175px"]').css('text-align','left');

// Select Draft Rounds
jQuery('<table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Franchises</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td style="text-align:center"><input name="add_to_list" value="Add To List" onclick="addListItem();" type="button"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Round Draft Order</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td style="text-align:center"><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr></tbody></table>').insertBefore('#options_91 form table');
jQuery('#options_91 form table #source_list').css('width','100%').appendTo('#options_91 .leftV td.selectbox');
jQuery('#options_91 form table #destination_list').css('width','100%').appendTo('#options_91 .rightV td.selectbox');
jQuery('#options_91 form table + table').remove();

// Commish Load and Unload Rosters Page
jQuery('#body_csetup_loadrost #container-wrap form').addClass('load-rosters');
jQuery('<table class="two_column_layout no-borderspacing" align="center"><caption class="loadteamowner">Team: </caption><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Select Players to Add</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Roster</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From Roster" onclick="removeListItem();"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr><tr><td colspan="2" class="tdalert tdalert-info-table"><span style="width:100%;margin:0;margin-bottom:10px"><b>Hint:</b> Cant find a player on this list?  You can <a href="player_search?L='+league_id+'" target="_blank">search our player database</a> to try to find him.</span></td></tr></tbody></table><table class="report" cellspacing="1" align="center"><tbody><tr><td class="loadtextarea"><div class="mobile-wrap">Or, you may copy and paste player names here, one player name per line</div><p class="form_buttons"><input type="submit" value="Load/Unload Roster" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#body_csetup_loadrost form.load-rosters .mobile-wrap');
jQuery('#body_csetup_loadrost form table.report caption span').eq(2).appendTo('#body_csetup_loadrost caption.loadteamowner');
jQuery('#body_csetup_loadrost form input[name="add_to_list"]').val('Add to Roster');
jQuery('#body_csetup_loadrost form.load-rosters textarea').appendTo('#body_csetup_loadrost td.loadtextarea div');
jQuery('#body_csetup_loadrost form.load-rosters #picker_filt_name').appendTo('#body_csetup_loadrost td.addsearch');
jQuery('#body_csetup_loadrost form.load-rosters table #picker').appendTo('#body_csetup_loadrost .leftV td.selectbox div');
jQuery('#body_csetup_loadrost form.load-rosters table #destination_list').appendTo('#body_csetup_loadrost .rightV td.selectbox');
jQuery('#body_csetup_loadrost form.load-rosters input[name="add_to_list"]').appendTo('#body_csetup_loadrost .leftV td.AddtoBtn');
jQuery('#body_csetup_loadrost form.load-rosters table + div.mobile-wrap').hide();
jQuery('head').append('<style>.style-input{border:1px solid #eee;border-radius:3px;padding:2px;background:#fff}.weekly-navbar-mobile1{text-align:center;display:block}.weekly-navbar1{display:none}#body_csetup_loadrost div.mobile-wrap .report td, #body_csetup_loadrost form.load-rosters td{text-align:center}#body_csetup_loadrost form.load-rosters td[width="175px"]{text-align:left}#body_csetup_loadrost #container-wrap .report td select{max-height:300px;vertical-align:middle}#body_csetup_loadrost .two_column_layout .mobile-wrap select{width:100%}#body_csetup_loadrost td.loadtextarea textarea{width:90%;margin:2px auto;margin-top:5px}#body_options_233 #container-wrap div.mobile-wrap .report textarea{width:100%}</style>');

// Commish Cant Cut List
try {
	jQuery('#body_csetup_cantcut #container-wrap form').addClass('cant-cutlists');
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add Players To Can&apos;t Cut List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Can&apos;t Cut List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" type="submit" value="Save Can&apos;t Cut List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#body_csetup_cantcut form.cant-cutlists .mobile-wrap');
	jQuery('#body_csetup_cantcut form input[name="add_to_list"]').val('Add to List');
	jQuery('#body_csetup_cantcut form.cant-cutlists #picker_filt_name').appendTo('#body_csetup_cantcut td.addsearch');
	jQuery('#body_csetup_cantcut form.cant-cutlists table #picker').appendTo('#body_csetup_cantcut .leftV td.selectbox div');
	jQuery('#body_csetup_cantcut form.cant-cutlists table #destination_list').appendTo('#body_csetup_cantcut .rightV td.selectbox');
	jQuery('#body_csetup_cantcut form.cant-cutlists input[name="add_to_list"]').appendTo('#body_csetup_cantcut .leftV td.AddtoBtn');
	jQuery('#body_csetup_cantcut form.cant-cutlists table + div.mobile-wrap').hide();
	jQuery('head').append('<style>#body_csetup_cantcut div.mobile-wrap .report td, #body_csetup_cantcut form.cant-cutlists td{text-align:center}#body_csetup_cantcut form.cant-cutlists td[width="175px"]{text-align:left}#body_csetup_cantcut #container-wrap .report td select{max-height:300px;vertical-align:middle}#body_csetup_cantcut .two_column_layout .mobile-wrap select{width:100%}</style>');

} catch(er) {}

// Commish Cant Add List
try {
	jQuery('#body_csetup_cantadd #container-wrap form').addClass('cant-addlists');
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add Players To Can&apos;t Add List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Can&apos;t Add List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" type="submit" value="Save Can&apos;t Add List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#body_csetup_cantadd form.cant-addlists .mobile-wrap');
	jQuery('#body_csetup_cantadd form input[name="add_to_list"]').val('Add to List');
	jQuery('#body_csetup_cantadd form.cant-addlists #picker_filt_name').appendTo('#body_csetup_cantadd td.addsearch');
	jQuery('#body_csetup_cantadd form.cant-addlists table #picker').appendTo('#body_csetup_cantadd .leftV td.selectbox div');
	jQuery('#body_csetup_cantadd form.cant-addlists table #destination_list').appendTo('#body_csetup_cantadd .rightV td.selectbox');
	jQuery('#body_csetup_cantadd form.cant-addlists input[name="add_to_list"]').appendTo('#body_csetup_cantadd .leftV td.AddtoBtn');
	jQuery('#body_csetup_cantadd form.cant-addlists table + div.mobile-wrap').hide();
	jQuery('head').append('<style>#body_csetup_cantadd div.mobile-wrap .report td, #body_csetup_cantadd form.cant-addlists td{text-align:center}#body_csetup_cantadd form.cant-addlists td[width="175px"]{text-align:left}#body_csetup_cantadd #container-wrap .report td select{max-height:300px;vertical-align:middle}#body_csetup_cantadd .two_column_layout .mobile-wrap select{width:100%}</style>');
} catch(er) {}

// My Watch List
try {
	jQuery('#options_178 form[action="options"]').addClass('preselections');
	jQuery('<div class="reportform"><span class="sorting-players">Sort By:<span></span></span><span class="position-players">Show Only:<span></span></span></div><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add To Watch List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Import Watch List</span></caption><tbody><tr><th>Copy From Another League</th></tr><tr><td vaign="top">Year of League To Copy From:<select size="1" name="COPY_YEAR" id="COPY_YEAR"><option value="2017">2017</option><option value="2018" selected="selected">2018</option></select><br>League ID To Copy From:<input name="COPY_LEAGUE" id="COPY_LEAGUE" size="6" maxlength="5" type="text"><br><span class="alert alert-info-table"><span class="reportnavigationheader">Hint:</span> When copying players from another league, these players will be added to the current players on this leagues list.</span></td></tr></tbody></table></div></td></tr><tr><td colspan="2"><p class="form_buttons"><input name="submit" value="Add To My Watch List" type="submit"></p></td></tr></tbody></table>').appendTo('#options_178 form.preselections');
	jQuery('#options_178 form.preselections table #picker').appendTo('#options_178 .leftV td.selectbox div');
	jQuery('#options_178 form.preselections table #picker_filt_nfl').appendTo('#options_178 .sorting-players span');
	jQuery('#options_178 form.preselections table #picker_filt_pos').appendTo('#options_178 .position-players span');
	jQuery('#options_178 form.preselections table #picker td[width="175px"]').css('text-align','left');
	jQuery('#options_178 form span:contains("Or You May Copy")').closest('table').remove();
	jQuery('#options_178 table span:contains("My Watch List")').closest('table').addClass('watch-table');
	jQuery('#options_178 .watch-table tr td:nth-child(1),#options_178 .watch-table tr th:nth-child(1)').css( 'text-align', 'left');
	jQuery('#options_178 .watch-table tr td:nth-child(2),#options_178 .watch-table tr th:nth-child(2)').css( 'text-align', 'left');
	jQuery('#options_178 .watch-table tr td:nth-child(3),#options_178 .watch-table tr th:nth-child(3)').css( 'text-align', 'center');
	jQuery('#options_178 .watch-table tr td:nth-child(4),#options_178 .watch-table tr th:nth-child(4)').css( 'text-align', 'center');
	jQuery('#options_178 form > table:first').hide();
	jQuery('#options_178 .watch-table tr td:contains("Delete")').addClass('action');
	jQuery('#options_178 .watch-table tr td.action a[href*="move"]').attr('title', 'Move Player Up');
	jQuery('#options_178 .watch-table tr td.action a[href*="delete"]').attr('title', 'Remove From Watch List');
	jQuery('head').append('<style>#options_178 .watch-table tr td.action a,#options_178 .watch-table tr td.action{font-size:0;text-decoration:none}#options_178 .watch-table tr td.action a:before{font-family:"FontAwesome";font-size:14px;padding:0 3px;font-size: 14px}#options_178 .watch-table tr td.action a[href*="move"]:before{content:\"\\f077\"}#options_178 .watch-table tr td.action a[href*="delete"]:before{content: \"\\f014\"}</style>');
} catch(er) {}

// Drop Players Page
try {
	jQuery('#body_options_257 #container-wrap form').addClass('dropplayer-list');
	jQuery('#body_options_257 #container-wrap form caption:first').addClass('clonecap');
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><caption class="dropcap"></caption><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Roster</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Players To Drop</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" value="Drop Players" onclick="selectAllItems();" type="submit"></p></td></tr></tbody></table>').insertBefore('#body_options_257 form.dropplayer-list .mobile-wrap');
	jQuery('#body_options_257 form input[name="add_to_list"]').val('Add to List');
	jQuery('#body_options_257 .clonecap span').appendTo('#body_options_257 .dropcap');
	jQuery('#body_options_257 form.dropplayer-list #picker_filt_name').appendTo('#body_options_257 td.addsearch');
	jQuery('#body_options_257 form.dropplayer-list table #picker').appendTo('#body_options_257 .leftV td.selectbox div');
	jQuery('#body_options_257 form.dropplayer-list table #destination_list').appendTo('#body_options_257 .rightV td.selectbox');
	jQuery('#body_options_257 form.dropplayer-list input[name="add_to_list"]').appendTo('#body_options_257 .leftV td.AddtoBtn');
	jQuery('#body_options_257 form.dropplayer-list table + div.mobile-wrap').hide();
	jQuery('head').append('<style>#body_options_257 div.mobile-wrap .report td, #body_options_257 form.dropplayer-list td{text-align:center}#body_options_257 form.dropplayer-list td[width="175px"]{text-align:left}#body_options_257 #container-wrap .report td select{max-height:300px;vertical-align:middle}#body_options_257 .two_column_layout .mobile-wrap select{width:100%}</style>');
} catch(er) {}

// Add FA class to top players reports
jQuery('#body_top .report td.status:contains("Free Agent"),#options_236 .report td:contains("Free Agent"),#options_08 .report td.status:contains("Free Agent")').addClass('is-freeagent');

// SVG ICONS JS FOR BROWSER SUPPORT
!function(e,n,t,o){o&&e.addEventListener("DOMContentLoaded",function(){[].forEach.call(e.querySelectorAll("use"),function(n){var o=n.parentNode,r=n.getAttribute("xlink:href").split("#"),a=r[0],l=r[1],s=t[a]=t[a]||new XMLHttpRequest;s.s||(s.s=[],s.open("GET",a),s.onload=function(){var n=e.createElement("x"),t=s.s;n.innerHTML=s.responseText,s.onload=function(){t.splice(0).map(function(e){var t=n.querySelector("#"+e[2]);t&&e[0].replaceChild(t.cloneNode(!0),e[1])})},s.onload()},s.send()),s.s.push([o,n,l]),s.responseText&&s.onload()})})}(document,navigator,{},/Trident\/[567]\b/.test(navigator.userAgent));

// Monthly Calendar
jQuery('head').append('<style>#body_add_drop table.table3 input[name="BBID_AMT"]{width:40px;min-width:auto}#body_add_drop table td table.table3 td{width:50%}.cal-event-desc li:before{content:\"\\f005\";font-family:FontAwesome;display:inline-block;width:16px}.cal-wrap{display:none}#calendar{width:100%;display:grid;grid-template-columns:repeat(7,1fr)}#calendar tr,#calendar tbody{grid-column:1 / -1;display:grid;grid-template-columns:repeat(7,1fr);width:100%}#calendar caption{grid-column:1 / -1;margin-bottom:60px}#calendar td,#calendar th{box-sizing:border-box}#calendar .weekdays th{text-align:center;text-transform:uppercase}#calendar td{display:flex;flex-direction:column}#calendar .day{position:relative}#calendar .month_header{position:relative;font-size:20pt}#calendar .month_header th{position:absolute;left:0;right:0;font-size:24pt;top:-52px;line-height:40px}#calendar .month_header th a{position:absolute;text-decoration:none;font-size:0;color:transparent}#calendar .month_header th a[title="Previous Month"]{left:20px}#calendar .month_header th a[title="Next Month"]{right:20px}#calendar .month_header th a[title="Next Month"]:before,#calendar .month_header th a[title="Previous Month"]:before{font-family:FontAwesome;position:absolute;top:0;font-size:30px;cursor:pointer}#calendar .month_header th a[title="Next Month"]:before{content:\"\\f054\";right:-10px}#calendar .month_header th a[title="Previous Month"]:before{content:\"\\f053\";left:-10px}#calendar .date{text-align:center;margin-bottom:5px;width:30px;height:30px;line-height:30px;border-radius:50%;flex:0 0 auto;align-self:flex-end;font-weight:700}#calendar .date a{position:absolute;left:2px;top:2px}.cal-event{flex:0 0 auto;font-size:13px;text-decoration:none;margin:2px 0}.cal-event-desc{padding:2px}#calendar td{border-style:solid;border-left-width:1px;border-bottom-width:1px;border-top:0;border-right-width:0}@media(max-width: 768px){.cal-wrap{display:block}.scoll-div{height:350px}#calendar .weekdays,#calendar .other-month{display:none}#calendar,#calendar tr,#calendar tbody{grid-template-columns:1fr}#calendar tr{grid-column:1 / 2}#calendar .date{align-self:flex-start}#calendar .date a{right:2px;left:auto}#calendar td.first-td{border-style:solid;border-top-width:1px}#calendar td{border-right-width:1px}}</style>');
jQuery('#monthly_calendar').attr('id','calendar');
jQuery('#calendar').parent('div').addClass('scoll-div');
jQuery('#calendar .day_of_week_header').attr('class', 'weekdays');
jQuery('#calendar .weekdays th').attr('scope','col');
jQuery('#calendar tr.oddtablerow,#calendar tr.eventablerow').removeClass('eventablerow').addClass('dayrows oddtablerow');
if ( $('#calendar .dayrows td').hasClass('today') ) { 
    $('#calendar .dayrows td').addClass('other-month'); 
}else{
    $('#calendar .dayrows td').attr('class', 'other-month');
}
jQuery('#calendar .dayrows td.other-month:has("div.calendarday")').removeClass('other-month').addClass('day');
jQuery('#calendar td.day:first').addClass('first-td');
jQuery('#calendar td.day').removeAttr('valign');
jQuery('#calendar div.calendarday').addClass('date');
jQuery('#calendar .day ul li').wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>');
jQuery('#calendar .day .cal-event').unwrap();
jQuery('#calendar .day .cal-event-desc li').css('list-style', 'none');

jQuery('#calendar .date').html(function (i, html) {
    return html.replace(/&nbsp;/g, '');
});
jQuery('#calendar .month_header th:last-of-type').remove();
jQuery('#calendar .month_header th').html(function(i, currHtml) {
  return currHtml
    .replace('Jan', 'JANUARY')
    .replace('Feb', 'FEBRUARY')
    .replace('Mar', 'MARCH')
    .replace('Apr', 'APRIL')
    .replace('May', 'MAY')
    .replace('Jun', 'JUNE')
    .replace('Jul', 'JULY')
    .replace('Aug', 'AUGUST')
    .replace('Sep', 'SEPTEMBER')
    .replace('Oct', 'OCTOBER')
    .replace('Nov', 'NOVEMBER')
    .replace('Dec', 'DECEMBER');
});
jQuery('#calendar .day:not(:has(div.cal-event))').each(function(index) {
        $(this).append('<div class="cal-event"><div class="cal-event-desc" style="font-style:italic"><li style="list-style:none">No Events Today</li></div></div>');
});
jQuery('.calendarday.date a').html('<i class="fa fa-plus-square" aria-hidden="true"></i>');
jQuery('#body_options_123 h3.h3-menu').remove();

// Monthly Calendar Todays Event Table Calendar
jQuery.get(baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=123", function (data) {
		jQuery('#monthly_events ul li').wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>');
		jQuery('<div class="mobile-wrap cal-wrap"><table class="report" id="monthly_events" align="center" cellspacing="1"><caption><span>Todays Calendar Events</span></caption><tbody><tr class="oddtablerow"><td class="cal_append"></td></tr></tbody></table></div>').insertBefore(jQuery('#calendar').closest('div.mobile-wrap') );
		jQuery(data).find('#monthly_calendar td.today ul').appendTo('#monthly_events td.cal_append');
		jQuery('#monthly_events ul li').wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>');
		jQuery('#monthly_events .cal-event').unwrap();
		jQuery('#monthly_events .cal-event-desc li').css('list-style', 'none');
		jQuery("#monthly_events .cal_append:empty").append('<div class="cal-event"><div class="cal-event-desc" style="font-style:italic"><li style="list-style:none">No Events Today</li></div></div>');
		jQuery('#calendar,#monthly_calendar').css('visibility', 'visible');
		jQuery('.cal-event li a[title|="Delete This Calendar Event"]').parent('li').addClass('remove_char');
		jQuery('.remove_char').each(function (index, value){
			var char_rep = $(this),
			result= char_rep.html().replace(/\(|\)/g, '');
			char_rep.html(result);
		});
	jQuery('.cal-event-desc .remove_char a').html('<i style="color:#da3636" class="fa fa-times-circle" aria-hidden="true"></i>');
});

// HORIZONTAL SCROLL FIXED FIRST COLUMN TABLES
jQuery('#body_options_236 .nocaption,#body_top .nocaption,#body_options_08 .nocaption').prepend('<caption><span>Top Players</span></caption>').removeClass('nocaption');
function doTableScrollShadow(){
	var totalWidth = jQuery(".hz-table-wrap").width();
	var tableWidth = jQuery(".hz-main-table").width();
	var fixedWidth = jQuery(".fixed-side").width();
	//jQuery(".hz-main-table").parent().scroll(function (event) {
	jQuery(".hz-main-table").parent().on('scroll',function (event) {
		var elemPos = $(".hz-main-table").position();
		var scrollPos = $(".hz-table-wrap").scrollLeft();
		var elementWidth = $(".hz-clone").width();
		// MAX LEFT -> REMOVE LEFT SHADOW
		if(elemPos.left>8)
			$(".fixed-side").addClass("hz-hide-shadow");
		else
			$(".fixed-side").removeClass("hz-hide-shadow");	
		// MAX RIGHT -> REMOVE RIGHT SHADOW
		if( (scrollPos + totalWidth) >= (elementWidth-2))
			$(".shadow-right").addClass("hz-hide-shadow");
		else
			$(".shadow-right").removeClass("hz-hide-shadow");			
	});
}
function doTableScroll(which,target_id){
	if(!document.getElementById(target_id)) return false;
	jQuery('#'+target_id+' div.mobile-wrap table:first').addClass('hz-main-table').wrap('<div class="hz-table-wrap">');
	switch(which) {
		case 0:
		case 3:
			jQuery('#'+target_id+' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll');
			jQuery('#'+target_id+' div.mobile-wrap table tr:first').wrap('<thead></thead>');
			jQuery('#'+target_id+' div.mobile-wrap table tr:first th:first').addClass('fixed-side hz-hide-shadow');
			jQuery('#'+target_id+' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
			jQuery('#'+target_id+' div.mobile-wrap table thead').unwrap();
			jQuery('#'+target_id+' .hz-table-scroll tbody td:first-of-type').wrapInner('<th class="fixed-side hz-hide-shadow"></th>');
			jQuery('#'+target_id+' tbody .fixed-side').unwrap();
			jQuery('#'+target_id+' div.mobile-wrap table tbody th.lh_overall_franchise').addClass('fixed-side hz-hide-shadow');
			break;
		case 1:
			jQuery('#'+target_id+' div.mobile-wrap table tr.weeklypointtotals').remove();
			jQuery('#'+target_id+' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll fx-dbl-tbl');
			jQuery('#'+target_id+' div.mobile-wrap table tr:first').wrap('<thead></thead>');
			jQuery('#'+target_id+' div.mobile-wrap table tr:first th:first').addClass('fixed-side fx-dbl hz-hide-shadow');
			jQuery('#'+target_id+' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
			jQuery('#'+target_id+' div.mobile-wrap table thead').unwrap();
			jQuery('#'+target_id+' .hz-table-scroll tbody td:first-of-type').wrapInner('<th class="fixed-side fx-dbl hz-hide-shadow"></th>');
			jQuery('#'+target_id+' tbody .fixed-side').unwrap();
			jQuery('#'+target_id+' div.mobile-wrap table .player').each(function(){$(this).prev("th").append(this);});
			jQuery(".fixed-side").find(".player").contents().unwrap();
			break;
		case 2:
			jQuery('#'+target_id+' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll fx-dbl-tbl');
			jQuery('#'+target_id+' div.mobile-wrap table tr:first').wrap('<thead></thead>');    
			jQuery('#'+target_id+' div.mobile-wrap table tbody tr th:first-of-type').addClass('fixed-side fx-dbl hz-hide-shadow');
			jQuery('#'+target_id+' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
			jQuery('#'+target_id+' div.mobile-wrap table thead').unwrap();
			break;
	}

	jQuery('#'+target_id+' .hz-main-table').clone(true).appendTo('#'+target_id+' .hz-table-scroll').addClass('hz-clone');
	//if(which!==3) jQuery('#'+target_id+' .hz-clone').clone(true).appendTo('#'+target_id+' .hz-table-scroll').addClass('hz_table_remove');
	jQuery (".hz-clone").each(function(){
		$(this).clone(true).appendTo($(this).parent()).addClass('hz_table_remove');
	});
	jQuery('.hz-clone td+td:last-of-type,.hz-clone th+th:last-of-type').addClass('shadow-right hz-hide-shadow');
	jQuery('.hz_table_remove tbody,.hz_table_remove thead').html('');

	//DETECT SCROLL 
	jQuery(document).ready(function() {
		doTableScrollShadow();
	});
}

if ($(window).width() < 890) {
  doTableScroll(1,"body_options_08");
  doTableScroll(1,"body_options_236");
  doTableScroll(1,"body_top");
  doTableScroll(0,"body_options_31");
}
doTableScroll(0,"body_options_170");
doTableScroll(0,"body_options_93");
doTableScroll(2,"body_depth_chart");
doTableScroll(0,"body_options_171");

jQuery('th.fixed-side').has('img.lh_franchise_img , img.franchiseicon').addClass('has-ficon');
jQuery('#body_options_170 .report.hz-main-table.hz-clone td').html('<select><option>None</option></select>');
jQuery('#body_options_93 .report.hz-main-table.hz-clone td').html('<input type="checkbox">');

jQuery('head').append('<style>.hz-table-scroll{position:relative;overflow:hidden;white-space:nowrap}.hz-table-wrap{width:100%;overflow:auto}.hz-table-scroll table{padding-bottom:10px;width:100%;margin:auto;border-collapse:separate;border-spacing:0}.hz-main-table caption,.hz-main-table .fixed-side,.hz-clone th,.hz-clone td{visibility:hidden}.hz_table_remove{padding:0;margin:0;background:none;box-shadow:none;border:0;background-image:none}.hz-clone.hz_table_remove caption,.hz-clone .fixed-side{visibility:visible;pointer-events:auto}.fixed-side{width:100px;padding:3px 5px}.fixed-side img.franchiseicon{max-width:100px;min-width:auto!important}.hz-clone{position:absolute;top:10px;left:10px;pointer-events:none}.fixed-side .franchiseicon,.fixed-side a{max-width:none;height:auto}.fixed-side.fx-dbl{text-align:left;width:1px}.fixed-side a{display:inline}.hz-table-scroll thead th.fixed-side{text-align:center!important}.fixed-side+td,.fixed-side+th{padding-left:6px}#body_options_93 .hz-main-table tbody tr:first-of-type th{font-size:11px}#body_options_93 .hz-main-table thead th{white-space:normal;min-width:100px}#body_depth_chart thead th,#body_depth_chart tbody tr:first-of-type th{text-align:left!important}#body_depth_chart .report.hz-main-table td:nth-child(2){text-align:left}.mobile-wrap.hz-table-scroll{overflow:hidden}.fixed-side{position:sticky}.hz-hide-shadow:after{background-image:none!important}#options_236 th.fixed-side a,#options_08 th.fixed-side a,#body_top th.fixed-side a{padding-left:3px}#options_236 thead .fixed-side,#options_08 thead .fixed-side,#body_top thead .fixed-side{text-align:left!important}.hz-main-table tbody th.fixed-side{text-align:left}.hz-main-table tbody tr.average th.fixed-side{text-align:center}#body_options_93 .hz-main-table tbody tr:first-of-type th.fixed-side{text-align:center}.shadow-right{position:sticky;right:0;visibility:visible}.shadow-right:after{content:"";position:absolute;top:0;width:20px;height:100%;visibility:visible;background:none;right:0;background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.3))}.hz_table_remove_shadow .shadow-right.hz-hide-shadow:after{display:none}.fixed-side:after{content:"";position:absolute;top:0;width:20px;height:100%}.hz-clone .fixed-side:after{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0));right:-20px}.hz-main-table tbody th.fixed-side.has-ficon{text-align:center}</style>');

jQuery('#body_depth_chart').has('.h3-menu').addClass('depth_chart_page');
jQuery('.depth_chart_page th:contains("Depth")').addClass('depth');
jQuery('.depth_chart_page th:contains("Status")').addClass('status');

jQuery('#body_options_166 #container-wrap .homepagemessage,#body_options_166 #container-wrap').css('display','block');
jQuery('#body_options_84 #container-wrap select').css('width','50%');
jQuery('#body_options_84 #container-wrap div.mobile-wrap td,#body_options_145 div.mobile-wrap td,#body_options_83 div.mobile-wrap td,#body_options_168 div.mobile-wrap td').css({
    'width': '50%', 
    'text-align': 'center'
});

// BOX SCORES NOT ALL PLAY SO DONT ALLOW WHOLE BOX TO POPUP WITH EMPTY DETAILS
jQuery("#MFLBoxWrapper table.MFLGameTable").removeAttr("onclick title");

//trades page - hide show offer to and offer from table if blank or has content
jQuery('#body_options_05 div.mobile-wrap:first table').has('tr.newposition').parent().addClass('filter-div-show');
jQuery('#body_options_05 div.mobile-wrap:first').not('.filter-div-show').html('<h3>You have no trade offers to or from</h3>');
jQuery('#body_options_05 div.mobile-wrap.filter-div-show table').has('tr.newposition').addClass('filter-table-show');
jQuery('#body_options_05 div.mobile-wrap.filter-div-show table:first').not('.filter-table-show').html('<table><caption><span>TRADES OFFERED BY YOU (NONE)</span></caption></table>');
jQuery('#body_options_05 div.mobile-wrap.filter-div-show table:last').not('.filter-table-show').html('<table><caption><span>TRADES OFFERED TO YOU (NONE)</span></caption></table>');

//commissioner delete transactions page - hide or show table if empty of has conent
jQuery('#body_options_67 div.mobile-wrap:first table').has('tr.oddtablerow').parent().addClass('filter-div-show');
jQuery('#body_options_67 div.mobile-wrap:first').not('.filter-div-show').html('<h3>There are no transactions to delete</h3>');

//commissioner delete transactions page - hide or show table if empty of has conent
jQuery('#body_options_03 div.mobile-wrap:first table').has('tr.oddtablerow').parent().addClass('filter-div-show');
jQuery('#body_options_03 div.mobile-wrap:first').not('.filter-div-show').html('<h3>There are no transactions</h3>');


// Deftect mobile devices and remove custom scrollbar
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('.hz-table-scroll table{padding-bottom:0!important}');
}

// Unhide pagebody container after all loads - so all html edits we made dont make reports jumpy - there is CSS in each skin to display none on load
jQuery('#MFLBoxWrapper,#tabmenu-wrap,#container-wrap').css('display','block');

// Remove MFL Ads - Live scoring page ads
jQuery('div[id*="usmg_ad"],#ajax_ls div[style="margin-bottom:5px;"]').remove();
jQuery('[src="/ads/ad-live_scoring_js.html"]').remove();
googletag = null;
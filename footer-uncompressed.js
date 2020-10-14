//////////////////////////////////////////////////////////////////////////////////////////////////
//     SCRIPTS INCLUDED IN FOOTER JS FILE
//////////////////////////////////////////////////////////////////////////////////////////////////
//     https://www.mflscripts.com/mfl-apps/global/all-footer_uncompressed.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//     https://www.mflscripts.com/mfl-apps/moduleExpand/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//     https://www.mflscripts.com/mfl-apps/scoreboard/replace-mflScoring/h2h.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//     https://www.mflscripts.com/mfl-apps/standingSettings/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////

if(load_moduleExpand_script===undefined) var load_moduleExpand_script=true;
if(load_replace_mflScoring_h2h===undefined) var load_replace_mflScoring_h2h=true;
if(load_standingSettings_script===undefined) var load_standingSettings_script=true;

/////////////////////////////////////////////////
// GLOBAL FOOTER BASE
/////////////////////////////////////////////////

// Remove div.mobile-wrap inline style
jQuery('.mobile-wrap').removeAttr('style');

// Remove empty container
jQuery('blockquote:empty').remove();

// Wrap all container reports with div.mobile-wrap
jQuery('#container-wrap table.report,blockquote,#body_options_05 table[align="center"]:last,#body_new_predraft form[name="new_predraft"],#body_edit_my_links #container-wrap form table,#body_options_84 form table,#body_trade_offer #container-wrap table,#container-wrap td.two_column_layout table').not('#options_45 #container-wrap table.report').wrap('<div class="mobile-wrap"></div>');
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
jQuery('#body_board_show td a img[title="Old/Read"]').replaceWith('<img src="https://www.mflscripts.com/ImageDirectory/script-images/newsOld.gif" title="Read Message" style="vertical-align:middle;cursor:pointer">');
jQuery('#body_board_show td a img[title="New/Unread"]').replaceWith('<img src="https://www.mflscripts.com/ImageDirectory/script-images/newsNew.gif" title="Unread Message" style="vertical-align:middle;cursor:pointer">');
jQuery('#body_board_show td a img[title="Old/Unread"]').replaceWith('<img src="https://www.mflscripts.com/ImageDirectory/script-images/newsNone.gif" title="Old Unread Message" style="vertical-align:middle;cursor:pointer">');


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

jQuery('#body_add_drop .table2-sub1 tr:first-of-type th,#body_add_drop .table2-sub2 tr:first-of-type th').replaceWith(function(){
    return $("<td />", {html: $(this).html()});
});

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
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Opp")').closest('td').addClass('waiv-opp');

// Last TD - add scroll to it and redo colspan
var Colnum = 0;
$('.table2-sub2 tr.head-th td').each(function () {
  if ($(this).attr('colspan')) {
     Colnum += +$(this).attr('colspan');
  } else {
     Colnum++;
  }
});

if (jQuery('tr.head-th td:last-of-type[width="20px"],#body_add_drop .table2-sub1 tr.head-th td:last-of-type,#body_add_drop .table2-sub2 tr.head-th td:last-of-type').length ) { 
    $('tr.head-th td:last-of-type[width="20px"],#body_add_drop .table2-sub1 tr.head-th td:last-of-type,#body_add_drop .table2-sub2 tr.head-th td:last-of-type').addClass('scroll-spacer');
}

jQuery('.table2-sub2 td.waiv-proj.scroll-spacer').removeClass('scroll-spacer');

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
jQuery('#body_options_52 span.reportnavigation,#body_options_52 h3:contains("Waiting For:"),#body_options_52 h3:contains("On Deck:"),#body_options_52 h3:contains("To Greatly Speed"),#body_options_52 caption:contains("is on the clock"),#body_options_52 div.warning:contains("To Greatly Speed"),#body_options_52 .custom-draft br').remove();
jQuery('.custom-draft form table:first').hide();

// Create new html for draft pages
jQuery('.mobile-wrap.custom-draft form:first').append('<table class="make-pick-table"><caption class="make-pick-title" style="text-align:center"></caption><tbody><tr><td class="mobile-view leftS"></td><td class="draft-blankTD" style="padding:5px;float:left;width:100%"></td><td class="mobile-view rightS"></td></tr></tbody></table><table><tbody><tr class="blockquotes"><td></td></tr></tbody></table>');

// Main table caption
jQuery('.mobile-wrap.custom-draft').find('span:contains("Pre-Draft Selections For"),span:contains("Your Turn To Draft")').appendTo('.make-pick-table caption');
jQuery('.mobile-wrap.custom-draft').find('span:contains("Your Turn To Draft")').text("Your Turn To Draft. Select Below");

// Left side option select player list table
jQuery('.mobile-wrap.custom-draft table caption span:contains("Player")').closest('table').appendTo('.mobile-view.leftS');
jQuery('.mobile-view.leftS table table').wrap('<div class="draft-overflow" style="max-height:262px;overflow-x:auto"></div>');
jQuery('.mobile-view.leftS div > div.draft-overflow').unwrap();
jQuery('.custom-draft .mobile-view > table').width('');
jQuery('.mobile-view.leftS caption span:contains("Pre-Draft")').closest('table').addClass('has-buttons-left');
jQuery('.mobile-view.leftS caption span:contains("Draft")').closest('table').addClass('has-buttons-left');


// 8-24-20 MIKE CHANGED TO REMOVE COLSPAN ON TD ADJUST COL AND ADD THAT CLASS NAME
jQuery('.has-buttons-left tbody').append('<tr><td class="adjust_col" align="center"><input name="add_to_list" value="Add Player To Que" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr>');

// 8-24-20 MIKE ADDED TO COUNT TH AND GET COLSPAN FOR BUTTON UNDER SCROLL TABLE TO MATCH UP

jQuery('.custom-draft:contains("Your Turn To Draft. Select Below")').find('td.adjust_col').remove();

jQuery('.has-buttons-left tr:first-of-type th').replaceWith(function(){
    return $("<td />", {html: $(this).html()});
});

jQuery('#body_new_predraft .mobile-wrap caption').find('span:contains("Saved Round")').closest('.mobile-wrap').addClass('custom-draft-rounds');

jQuery('.mobile-view.leftS').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('.mobile-view.leftS tr.head-th').find('td a:contains("ADP")').text('ADP');
jQuery('.mobile-view.leftS tr.head-th').find('td a:contains("My Rank")').text('#');
jQuery('.mobile-view.leftS tr.head-th').find('td:contains("Projections")').text('Proj');
jQuery('.mobile-view.leftS tr.head-th td:last-of-type').addClass('scroll-spacer');

// ADD CLASSES TABLE HEADERS FOR MAKE A DRAFT PICK TABLE BOXES
jQuery('.make-pick-table').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('.make-pick-table tr.head-th').find('td a:contains("#")').closest('td').addClass('my_ranks');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Name")').closest('td').addClass('waiv-name');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Team")').closest('td').addClass('waiv-team');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Pos")').closest('td').addClass('waiv-pos');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Bye")').closest('td').addClass('waiv-bye');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Salary")').closest('td').addClass('waiv-salary');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Pts")').closest('td').addClass('waiv-pts');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Proj")').closest('td').addClass('waiv-proj');
jQuery('.make-pick-table tr.head-th').find('td:contains("Inj")').closest('td').addClass('waiv-inj');
jQuery('.make-pick-table tr.head-th').find('td:contains("Rank")').closest('td').addClass('waiv-rank');
jQuery('.make-pick-table tr.head-th').find('td:contains("ADP")').closest('td').addClass('waiv-adp');

jQuery('.has-buttons-left .my_ranks').closest('table').addClass('has_my_ranks');
jQuery('.make-pick-table .my_ranks').remove();

jQuery( document ).ready(function() {
  jQuery('.has_my_ranks .pickerbox td:first-of-type').remove();
  jQuery('.has_my_ranks .draft-overflow').closest('td').attr('colspan',colCount);

  jQuery(".has_my_ranks .head-th td span select").on('change', function() {
    $('.has_my_ranks .pickerbox td:first-of-type').remove();
  });

  jQuery('.has_my_ranks #picker_filt_name').on('input', function() {
    $('.has_my_ranks .pickerbox td:first-of-type').remove();
  });
});

jQuery(".has_my_ranks .head-th a").click(function(){
  $('.has_my_ranks .pickerbox td:first-of-type').remove();
});

var colCount = 0;
  jQuery('.has-buttons-left tr.head-th td').each(function () {
        if ($(this).attr('colspan')) {
            colCount += +$(this).attr('colspan');
        } else {
            colCount++;
  }
});
jQuery('td.adjust_col').attr('colspan',colCount);


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
			newTableContent+='<tr class="oddtablerow nflStatsTotalRow"><td><span id="expandTotal_'+thisPosition+'_'+p+'" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',true)"></span><span id="collapseTotal_'+thisPosition+'_'+p+'" style="display:none" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',false)"></span><span class="plus-toggle-stats"><span class="toggle-btn"></span></span>'+tableRows[p].name+'</td><td style="text-align:center">Total</td>';
			if(tableRows[p].hasInjury) newTableContent+="<td style='text-align:center'></td>";
			for (var i=0;i<statsLastRow;i++){
				if(!(tableRows[0].hasInjury&&i===(tableRows[0].playerRows.length-1))) newTableContent+="<td class='points' style='text-align:center'>"+applyStat(tableRows[p].playerRows[i][tableRows[p].playerRows[i].length-2],false)+"</td>";
			}
			newTableContent+="</tr>";
			//AVG ROW (LAST COLUMN)
			newTableContent+='<tr class="oddtablerow nflStatsAvgRow"><td><span id="expandAvg_'+thisPosition+'_'+p+'" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',true)"></span><span id="collapseAvg_'+thisPosition+'_'+p+'" style="display:none" onclick="expandPlayer(\''+thisPosition+'\',\''+p+'\',false)"></span><span class="plus-toggle-stats"><span class="toggle-btn"></span></span>'+tableRows[p].name+'</td><td style="text-align:center">Avg</td>';
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
		if(!reformattedStatsFound) thisTable.closest("div").before("<div class='display_links' style='text-align:center;margin:10px 0'><h3 style='display:inline;margin:0;padding:0;vertical-align:middle;font-weight:300'>Display: </h3><span id='nflTotalInactive' style='display:none'><a href='#total' onclick='doNFLTotal(true)'>Total</a></span><span id='nflTotalActive'><a>Total</a></span> | <span id='nflAvgInactive'><a href='#avg' onclick='doNFLTotal(false)'>Avg</a></span><span id='nflAvgActive' style='display:none'><a>Avg</a></span></div>");
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
	jQuery('head').append('<style>#body_options_257 div.mobile-wrap .report td, #body_options_257 form.dropplayer-list td{text-align:center}#body_options_257 form.dropplayer-list td[width="175px"]{text-align:left}#body_options_257 #container-wrap .report td select{max-height:270px;vertical-align:middle}#body_options_257 .two_column_layout .mobile-wrap select{width:100%}</style>');
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

jQuery('#body_depth_chart #depth_chart').has('caption span:contains("NFL Depth Chart")').attr("id","depth_chart_grid");


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
doTableScroll(2,"depth_chart_grid");
doTableScroll(0,"body_options_171");

jQuery('th.fixed-side').has('img.lh_franchise_img , img.franchiseicon').addClass('has-ficon');
jQuery('#body_options_170 .report.hz-main-table.hz-clone td').html('<select><option>None</option></select>');
jQuery('#body_options_93 .report.hz-main-table.hz-clone td').html('<input type="checkbox">');

jQuery('head').append('<style>.hz-table-scroll{position:relative;overflow:hidden;white-space:nowrap}.hz-table-wrap{width:100%;overflow:auto}.hz-table-scroll table{padding-bottom:10px;width:100%;margin:auto;border-collapse:separate;border-spacing:0}.hz-main-table caption,.hz-main-table .fixed-side,.hz-clone th,.hz-clone td{visibility:hidden}.hz_table_remove{padding:0;margin:0;background:none;box-shadow:none;border:0;background-image:none}.hz-clone.hz_table_remove caption,.hz-clone .fixed-side{visibility:visible;pointer-events:auto}.fixed-side{width:100px;padding:3px 5px}.fixed-side img.franchiseicon{max-width:100px;min-width:auto!important}.hz-clone{position:absolute;top:10px;left:10px;pointer-events:none}.fixed-side .franchiseicon,.fixed-side a{max-width:none;height:auto}.fixed-side.fx-dbl{text-align:left;width:1px}.fixed-side a{display:inline}.hz-table-scroll thead th.fixed-side{text-align:center!important}.fixed-side+td,.fixed-side+th{padding-left:6px}#body_options_93 .hz-main-table tbody tr:first-of-type th{font-size:11px}#body_options_93 .hz-main-table thead th{white-space:normal;min-width:100px}#depth_chart_grid thead th,#depth_chart_grid tbody tr:first-of-type th{text-align:left!important}#depth_chart_grid .report.hz-main-table td:nth-child(2){text-align:left}.mobile-wrap.hz-table-scroll{overflow:hidden}.fixed-side{position:sticky}.hz-hide-shadow:after{background-image:none!important}#options_236 th.fixed-side a,#options_08 th.fixed-side a,#body_top th.fixed-side a{padding-left:3px}#options_236 thead .fixed-side,#options_08 thead .fixed-side,#body_top thead .fixed-side{text-align:left!important}.hz-main-table tbody th.fixed-side{text-align:left}.hz-main-table tbody tr.average th.fixed-side{text-align:center}#body_options_93 .hz-main-table tbody tr:first-of-type th.fixed-side{text-align:center}.shadow-right{position:sticky;right:0;visibility:visible}.shadow-right:after{content:"";position:absolute;top:0;width:20px;height:100%;visibility:visible;background:none;right:0;background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.3))}.hz_table_remove_shadow .shadow-right.hz-hide-shadow:after{display:none}.fixed-side:after{content:"";position:absolute;top:0;width:20px;height:100%}.hz-clone .fixed-side:after{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0));right:-20px}.hz-main-table tbody th.fixed-side.has-ficon{text-align:center}</style>');

jQuery('#depth_chart').has('th:contains("Status")').addClass('depth_chart_page');
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

//Added 8-26-20 for home page message about draft
jQuery('#body_home h2.warning:contains("Your Draft Is Scheduled To Start Shortly")').wrap('<span class="alert alert-info-body draft_warning" style="text-align:center"></span>');jQuery('#body_home span.draft_warning h2').contents().unwrap();

//Added 9-1-20 for injured reserve page
jQuery('#body_options_18 .report.nocaption').find('th:contains("Deactivate To IR")').text("Deactivate");
jQuery('#body_options_18 .report.nocaption').find('th:contains("Activate From IR?")').text("Activate");
jQuery('#body_options_18 .report.nocaption').find('th:contains("Drop From Roster?")').text("Drop");
jQuery('#body_options_18 .report.nocaption td.inputfield').find('.warning:contains("Can not be deactivated")').text("Not-Eligible");
jQuery('#body_options_18 .report.nocaption').find('th:contains("Starter?")').text("Starter");
jQuery('#body_options_18 .report.nocaption td').find('span.warning:contains("Questionable")').text("Q");
jQuery('#body_options_18 .report.nocaption td').find('span.warning:contains("Doubtful")').text("D");
jQuery('#body_options_18 .report.nocaption td').find('span.warning:contains("Out")').text("O");

//Added 9-2-20 for draft preferences page
jQuery('#body_csetup_draftpref .mobile-wrap table td:last-of-type').remove();


if(load_moduleExpand_script) {
/////////////////////////////////////////////////
// MODULE EXAND AND COLLAPSE  https://www.mflscripts.com/mfl-apps/moduleExpand/script.js
/////////////////////////////////////////////////

if(MFLEnableMedia===undefined) var MFLEnableMedia=true;
if(MFLRememberModuleStates===undefined) var MFLRememberModuleStates = true;


if(document.getElementById("body_home")&&location.href.indexOf("MODULE=MESSAGE")===-1&&location.href.indexOf("/message")===-1&&location.href.indexOf("SEQNO=")===-1) jQuery('head').append('<style>#home caption span a{position:relative}span.custom_collapse:before,span.custom_expand:before{content:"";position:absolute;width:100%;height:30px;left:0;visibility:visible}span.custom_collapse:before,span.custom_expand:before{z-index:1}span.plus-toggle{right:8px;margin:0;position:absolute;margin-top:10px;width:22px}.plus-toggle span::before,.plus-toggle span::after{content:"";display:block;position:absolute;width:.2rem;border-radius:1.4rem;height:1rem;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .3s ease;transition:all .3s ease;z-index:0}.plus-toggle span::after{width:1rem;height:.2rem}.custom_expand[style="display:none"] + span + .plus-toggle span::after{-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:0}.custom_expand[style="display:none"] + span + .plus-toggle span::before{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:.25rem}#collapseLink.collapseLink,#expandLink.expandLink{z-index:1}.plus-toggle-main{right:5px;position:absolute;width:26px;height:26px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);background:#fff;border-radius:50%}.toggle-btn-main::before,.toggle-btn-main::after{content:"";display:block;position:absolute;width:.2rem;border-radius:1.4rem;height:1rem;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .3s ease;transition:all .3s ease;z-index:0}.toggle-btn-main::after{width:1rem;height:.2rem}#expandLink[style*="display:none"] + .plus-toggle-main span::after{-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:0}#expandLink[style*="display:none"] + .plus-toggle-main span::before{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:.25rem}</style>');


function doCustomCollapseAll(isCollapse){
	//collapse/expand custom tabs
	var counter=0;
	jQuery("body #myfantasyleague_tabs").each(function(){
		if(isCollapse) {
			jQuery(this).find(".toggle_tabs:eq(0)").attr("style","display:none");
			jQuery(this).find("tbody:eq(0)").attr("style","display:none");
			if(MFLRememberModuleStates) localStorage.setItem('moduleCollapse_'+counter+'_'+league_id,'true');
		} else {
			jQuery(this).find(".toggle_tabs:eq(0)").removeAttr("style");
			jQuery(this).find("tbody:eq(0)").removeAttr("style");
			if(MFLRememberModuleStates) localStorage.removeItem('moduleCollapse_'+counter+'_'+league_id)
		}
		counter++;
	});
	//collapse/expand remaining modules except those nested in #myfantasyleague_tabs
	jQuery(".mobile-wrap table.homepagemodule.report").each(function(){
		if(jQuery(this).parent().attr("id")===undefined&&jQuery(this).parent().parent().attr("class")!=="homepagetabcontent") {
			if(isCollapse) {
				jQuery(this).find("tbody:eq(0)").attr("style","display:none");
				if(MFLRememberModuleStates) localStorage.setItem('moduleCollapse_'+counter+'_'+league_id,'true'); 
			} else {
				jQuery(this).find("tbody:eq(0)").removeAttr("style");
				if(MFLRememberModuleStates) localStorage.removeItem('moduleCollapse_'+counter+'_'+league_id);
			}
			counter++;
		}
	});
	if(isCollapse) {
		jQuery(".custom_expand").each(function(){ jQuery(this).removeAttr("style")});
		jQuery(".custom_collapse").each(function(){ jQuery(this).attr("style","display:none")});
	} else {
		jQuery(".custom_expand").each(function(){ jQuery(this).attr("style","display:none")});
		jQuery(".custom_collapse").each(function(){ jQuery(this).removeAttr("style")});
	}
}
function doAppendIcon(){
	if(MFLEnableMedia) jQuery("head").append("<style>@media only screen and (max-width:48.000em) {.plus-toggle-main{right:52px;top:22.5px;}#expandLink,#collapseLink{ right:40px!important;height:45px!important}} label[for='sub100'] + #homepagetabs{padding-right:40px;padding-right:2.500rem} @media only screen and (max-width:48.000em) { label[for='sub100'] + #homepagetabs{padding-right:0}}</style>");
		var collapseStyle='display:inline'; var expandStyle='display:none';  
		if(MFLRememberModuleStates) if(localStorage.getItem('moduleExpandAll_'+league_id)==='true') { collapseStyle='display:none'; expandStyle='display:inline'; }
		jQuery("#tab1").parent().append("<span class='all-module-expand-collapse'><a title='Collapse Tabs' id='collapseLink' class='collapseLink' style='cursor:pointer;position:absolute;top:0;right: 0;width:50px;width:3.125rem;height:100%;text-align:center;"+collapseStyle+";'  onclick='doCustomCollapseAll(true);jQuery(\"#expandLink\").attr(\"style\",\"cursor: pointer;position: absolute;top:0;right:0;width:50px;width:3.125rem;height: 100%;text-align: center;display:inline\");jQuery(\".collapseLink\").attr(\"style\",\"cursor: pointer;position: absolute;top:0;right: 0;width:50px;width:3.125rem;height: 100%;text-align: center;display:none\");localStorage.setItem(\"moduleExpandAll_"+league_id+"\",\"true\");'></a><a title='Expand Tabs' id='expandLink' class='expandLink' style='cursor:pointer;position: absolute;top:0;right:0;width:50px;width:3.125rem;height:100%;text-align:center;"+expandStyle+";' onclick='doCustomCollapseAll(false);jQuery(\"#expandLink\").attr(\"style\",\"cursor: pointer;position: absolute;top:0;right:0;width:50px;width:3.125rem;height:100%;text-align:center;display:none\");jQuery(\".collapseLink\").attr(\"style\",\"cursor: pointer;position:absolute;top:0;right:0;width:50px;width:3.125rem;height:100%;text-align:center;display:inline\");localStorage.removeItem(\"moduleExpandAll_"+league_id+"\");'></a><span class='plus-toggle-main'><span class='toggle-btn-main'></span></span></span>");
}
function doCustomCollapseHPM(autoCollapse){
	//collapse all custom tabs and append own expand/collapse
	var counter=0;
	if(autoCollapse) { var collapseStyle='display:none'; var expandStyle=''; } else { var collapseStyle=''; var expandStyle='display:none'; }
	jQuery("body #myfantasyleague_tabs").each(function(){
		if(autoCollapse) {
			jQuery(this).find(".toggle_tabs:eq(0)").attr("style","display:none");
			jQuery(this).find("tbody:eq(0)").attr("style","display:none");
		}
		jQuery(this).find("caption").prepend('<span title="Expand Report" style="'+expandStyle+  '" class="module_expand custom_expand"   id="myExpand_'+counter+'"   onclick="jQuery(\'#myExpand_'  +counter+'\').parents(\'#myfantasyleague_tabs\').find(\'.toggle_tabs:eq(0)\').removeAttr(\'style\');jQuery(\'#myExpand_'  +counter+'\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').removeAttr(\'style\');jQuery(\'#myExpand_'+counter+'\').attr(\'style\',\'display:none\'); jQuery(\'#myCollapse_'+counter+'\').removeAttr(\'style\');localStorage.removeItem(\'moduleCollapse_'+counter+'_'+league_id+'\');"></span><span title="Collapse Report" style="'+collapseStyle+'" class="module_expand custom_collapse" id="myCollapse_'+counter+'" onclick="jQuery(\'#myCollapse_'+counter+'\').parents(\'#myfantasyleague_tabs\').find(\'.toggle_tabs:eq(0)\').attr(\'style\',\'display:none\');jQuery(\'#myCollapse_'+counter+'\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').attr(\'style\',\'display:none\');jQuery(\'#myExpand_'+counter+'\').removeAttr(\'style\');jQuery(\'#myCollapse_'+counter+'\').attr(\'style\',\'display:none\');localStorage.setItem(\'moduleCollapse_'+counter+'_'+league_id+'\',\'true\');"></span><span class="plus-toggle"><span class="toggle-btn"></span></span>');
		counter++;
	});
	//collapse remaining modules except those nested in #myfantasyleague_tabs and append own expand/collapse
	jQuery(".mobile-wrap table.homepagemodule.report").each(function(){
		if(jQuery(this).parent().attr("id")===undefined&&jQuery(this).parent().parent().attr("class")!=="homepagetabcontent") {
			if(autoCollapse)jQuery(this).find("tbody:eq(0)").attr("style","display:none");
			jQuery(this).find("caption").prepend('<span title="Expand Report" style="'+expandStyle+  '" class="module_expand custom_expand"   id="myExpand_'+counter+'"   onclick="jQuery(\'#myExpand_'  +counter+'\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').removeAttr(\'style\');jQuery(\'#myExpand_'+counter+'\').attr(\'style\',\'display:none\'); jQuery(\'#myCollapse_'+counter+'\').removeAttr(\'style\');localStorage.removeItem(\'moduleCollapse_'+counter+'_'+league_id+'\');"></span><span title="Collapse Report" style="'+collapseStyle+'" class="module_expand custom_collapse" id="myCollapse_'+counter+'" onclick="jQuery(\'#myCollapse_'+counter+'\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').attr(\'style\',\'display:none\');jQuery(\'#myExpand_'+counter+'\').removeAttr(\'style\');jQuery(\'#myCollapse_'+counter+'\').attr(\'style\',\'display:none\'); localStorage.setItem(\'moduleCollapse_'+counter+'_'+league_id+'\',\'true\');"></span><span class="plus-toggle"><span class="toggle-btn"></span></span>');
			counter++;
		}
	});
	if(MFLRememberModuleStates) doCollapseModuleStates();
	doAppendIcon();
}
function doCollapseModuleStates(){
	var counter=0;
	jQuery("body #myfantasyleague_tabs").each(function(){
		if(localStorage.getItem('moduleCollapse_'+counter+'_'+league_id)==='true') {
			jQuery(this).find(".toggle_tabs:eq(0)").attr("style","display:none");
			jQuery(this).find("tbody:eq(0)").attr("style","display:none");
			jQuery('#myExpand_'+counter).removeAttr('style');
			jQuery('#myCollapse_'+counter).attr('style','display:none');
		}
		counter++;
	});
	jQuery(".mobile-wrap table.homepagemodule.report").each(function(){
		if(jQuery(this).parent().attr("id")===undefined&&jQuery(this).parent().parent().attr("class")!=="homepagetabcontent") {
			if(localStorage.getItem('moduleCollapse_'+counter+'_'+league_id)==='true'){
				jQuery(this).find("tbody:eq(0)").attr("style","display:none");
				jQuery('#myExpand_'+counter).removeAttr('style');
				jQuery('#myCollapse_'+counter).attr('style','display:none');
			}
			counter++;
		}
	});
}
jQuery('.toggle-btn').text('');

setTimeout(function(){
  jQuery('.toggle-btn').text('');
}, 1000);
jQuery('#waiver_request_list').addClass('homepagemodule');
jQuery('.playoffbracket.homepagemodule').addClass('report');
jQuery('#waiver_request_list caption span').html('Current Waiver Claims');
if(moduleExpand===undefined) var moduleExpand="No";
if(moduleExpand==='No'&&document.getElementById("body_home")&&location.href.indexOf("MODULE=MESSAGE")===-1&&location.href.indexOf("/message")===-1&&location.href.indexOf("SEQNO=")===-1) doCustomCollapseHPM(false);
setTimeout(function(){
  if(moduleExpand===undefined) var moduleExpand="No";
  if(moduleExpand==='No'&&document.getElementById("body_home")&&location.href.indexOf("MODULE=MESSAGE")===-1&&location.href.indexOf("/message")===-1&&location.href.indexOf("SEQNO=")===-1) doCustomCollapseHPM(false);
}, 10);

}



if(load_replace_mflScoring_h2h) {
/////////////////////////////////////////////////
// MFL LIVE SCORING  https://www.mflscripts.com/mfl-apps/scoreboard/replace-mflScoring/h2h.js
/////////////////////////////////////////////////

//APPEND CSS
jQuery('head').append('<style>#body_ajax_ls .ls_starters td.reallysmall + td + td + td.ls_player_stats{display:none!important}#body_ajax_ls h3.warning,#body_ajax_ls h3.h3-menu,#body_ajax_ls h3.warning+h3{visibility:visible}#body_ajax_ls #other_games td.ls_og_cell{font-size:13px}#body_ajax_ls #nfl_games td.ls_box_possession:after{content:"";background-size:12px 12px;height:12px;width:12px;position:absolute;margin-left:5px;top:50%;transform:translateY(-50%)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball+td,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone+td{width:90px}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone{width:42px}#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone:after{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/goal-post.svg)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball:after{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/football.svg)}#body_ajax_ls #nfl_games div.ls_other_game td{padding:1px 2px}#nfl_games td[style="border:none;"]:last-of-type{padding:0!important}div.ls_team_name{font-size:20px!important;line-height:50px}.ls-modal{display:none;position:fixed;z-index:99999;padding-top:30px;left:0;top:0;width:100%;height:100%;overflow:auto}.ls-modal-content{position:relative;margin:auto;padding:0;width:96%;-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s;margin-bottom:30px;max-width:400px;border-radius:3px}#ls-modal-content{max-height:500px;overflow-x:auto}@-webkit-keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}.ls-modal-header{padding:3px;background:none}.ls-modal-header h2{text-align:left;margin:0;padding:0;padding-left:5px;text-transform:uppercase}.ls-modal-header .close{font-size:20px;font-weight:700;position:absolute;right:5px;top:5px;text-align:center;border-radius:3px;padding:0;height:22px;width:22px;line-height:22px}.ls-modal-header .close:hover,.ls-modal-header .close:focus{text-decoration:none;cursor:pointer}.ls-modal-body{padding:0 2px;font-size:13px;padding-bottom:1px}#ls-modal-content li,#ls-modal-content ul{margin:0;padding:0;list-style:none}#ls-modal-content .ls-popup-position-li{font-weight:700;font-size:14px;padding-left:5px}#ls-modal-content .ls-popup-player-li{position:relative;padding-left:8px}#ls-modal-content .ls-popup-player-li:last-child{border:0}#ls-modal-content .ls-popup-stats{font-style:italic;display:block;font-size:11px;line-height:11px;font-weight:400;padding:2px 0;padding-left:3px;max-width:350px}#ls-modal-content span.ls-popup-points{text-indent:0;display:inline;position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);right:5px;font-weight:700;font-size:13px;border:0}.ls-explain-points-total::before{content:"Total Points :";padding-right:5px}.ls-explain-points-li::before{content:"\\f005";font-family:FontAwesome;padding-right:3px;margin-left:-1.5em}tr[onclick^="ls_nfl_stats_popup"]{cursor:pointer}div.mobile-wrap.ls-boxscore{padding:0 10px;padding-bottom:5px}.ls_scroller{padding:10px 0;padding-bottom:5px;overflow-x:auto;-webkit-overflow-scrolling:touch}#ls-modal-content span.ls-popup-text{font-style:italic;font-weight:700}.ls-popup-text::before,.ls-popup-icon-wrapper::before{content:"-";padding:0 2px}#ls-modal-content img.ls-popup-icon{max-height:16px;max-width:80px}#body_ajax_ls table#roster_away,#body_ajax_ls table#roster_home{table-layout:fixed}#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:100px}#body_ajax_ls td.ls_marquee_value{padding-left:0;padding-right:0}#body_ajax_ls .ls-matchup th:last-of-type,#body_ajax_ls .ls-matchup td:last-of-type{width:50px}.ls_other_game .ls_projections{cursor:pointer}.ls_pace_box .ls_projected{display:none}.ls-has-bye #LS_TopTableHolder div.mobile-wrap,.ls-has-bye .mobile-wrap.ls-matchup{margin:10px auto;margin-top:0}#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type{display:table-cell!important}#body_ajax_ls .ls-has-bye .ls-bye-hide,#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:first-of-type{display:none!important}#body_ajax_ls .ls-has-bye #LS_TopTableHolder div.mobile-wrap,#body_ajax_ls .ls-has-bye .ls_players_table div.mobile-wrap.ls-matchup{max-width:650px}.ls-has-bye #LS_HomeTeamName div{opacity:1!important}.ls_other_game_bye_hidden{display:none!important}@media only screen and (max-width: 48em){.ls_players_table td.mobile-view:last-of-type{display:none}#LS_HomeTeamName div{opacity:.3}}@media only screen and (min-width: 48em){#body_ajax_ls .ls_players_table td.mobile-view:last-of-type,#body_ajax_ls .ls_players_table td.mobile-view:first-of-type{display:table-cell!important}#LS_HomeTeamName div,#LS_AwayTeamName div{opacity:1!important}}@media only screen and (max-width:430px){#ls-modal-content .ls-popup-stats{max-width:280px}}@media only screen and (max-width:360px){#ls-modal-content .ls-popup-stats{max-width:200px}}@media only screen and (max-width:320px){#ls-modal-content .ls-popup-stats{max-width:180px}}@media only screen and (max-height:600px) and (orientation:landscape){#ls-modal-content{max-height:460px}}@media only screen and (max-height:500px) and (orientation:landscape){#ls-modal-content{max-height:360px}}@media only screen and (max-height:450px) and (orientation:landscape){#ls-modal-content{max-height:310px}}@media only screen and (max-height:400px) and (orientation:landscape){#ls-modal-content{max-height:260px}}@media only screen and (max-height:350px) and (orientation:landscape){#ls-modal-content{max-height:210px}}@media only screen and (max-height:300px) and (orientation:landscape){#ls-modal-content{max-height:160px}}@media only screen and (max-height:250px) and (orientation:landscape){#ls-modal-content{max-height:110px}}@media only screen and (max-height:200px) and (orientation:landscape){#ls-modal-content{max-height:150px}}@media only screen and (max-width:70em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:80px}}@media only screen and (max-width:60em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:60px}}@media only screen and (max-width:55em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:40px}}@media only screen and (max-width: 54.25em){#body_ajax_ls .ls-has-bye #LS_TopTableHolder .LS_ScoreboardTitle,#body_ajax_ls .ls-has-bye #LS_TopTableHolder .prmin{display:table-cell}}@media only screen and (max-width:48em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:140px}}@media only screen and (max-width:33em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:80px}}@media only screen and (max-width:30em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:40px}}@media only screen and (max-width: 30em){.ls_pace_legend_title{display:block}#body_ajax_ls .ls-has-bye #LS_TopTableHolder .LS_ScoreboardTitle,#body_ajax_ls .ls-has-bye #LS_TopTableHolder .prmin{font-size:10px}}@media only screen and (max-width: 25em){.ls_projected{display:block}}.hide-overlay{background:none!important}</style>');

// test ticker speed
var ls_ticker_speed = 200;
var ls_away_id;
var ls_home_id;
var ls_pace_tracker = new Array();
if (ls_scoreboardName === undefined) var ls_scoreboardName = "Live Scoring";
if (showTeamName === undefined) var showTeamName = true;
if (showTeamIcon === undefined) var showTeamIcon = true;
if (ls_includeProjections === undefined) var ls_includeProjections = true;
if (ls_includeInjuryStatus === undefined) var ls_includeInjuryStatus = true;
if (ls_excludeIR === undefined) var ls_excludeIR = false;
if (ls_excludeTaxi === undefined) var ls_excludeTaxi = false;
if (ls_orig_proj_when_final === undefined) var ls_orig_proj_when_final = false;
if (ls_box_abbrev_name_icon === undefined) var ls_box_abbrev_name_icon = 2;
if (ls_popup_abbrev_name_icon === undefined) var ls_popup_abbrev_name_icon = 0;
if (ls_popup_status === undefined) var ls_popup_status = false;
if (ls_hide_bye_teams === undefined) var ls_hide_bye_teams = false;

function ls_scoring_run() {
	jQuery('td div[class^="pfpts"]').prop('title', 'Click to View Details');
	jQuery('td div[class^="game_"]').prop('title', 'View NFL Game Boxscore');
	jQuery('td a[href^="pro_matchup"]').prop('title', 'View NFL Game Boxscore');
	jQuery('td a[href^="player"]').prop('title', 'View Player News').parent().addClass('td-first-type');
	jQuery('#other_games div.ls_other_game').prop('title', 'View Match Up');
	jQuery('td.ls_player_stats').each(function() {
		$(this).closest('tr').find('td.td-first-type').append($(this));
	});
	jQuery('.ls_player_stats div:empty').html('<span class="ls-no-stats">-</span>');
	jQuery('#roster_away td:contains("Total"):contains("Points")').parent().addClass('td-totals-row');
	jQuery('#roster_home td:contains("Total"):contains("Points")').parent().addClass('td-totals-row');
	jQuery('#roster_away td:contains("Homefield"):contains("Advantage")').parent().addClass('td-totals-row');
	jQuery('#roster_home td:contains("Homefield"):contains("Advantage")').parent().addClass('td-totals-row');
	jQuery('.td-totals-row td:first-child').addClass('td-totals');
	if ($('input[name="hide_stats"]').is(':checked')) {
		$('#roster_away td, #roster_home td').addClass('td-pad');
	};
}

function ls_hide_projections(checkbox) {
	if (checkbox.checked) {
		jQuery(".ls_projections").attr("style", "display:none");
		localStorage.setItem("ls_includeProjections_" + league_id, "1");
	} else {
		jQuery(".ls_projections").removeAttr("style");
		localStorage.removeItem("ls_includeProjections_" + league_id);
	}
}

function ls_hide_nfl_boxscore(checkbox) {
	if (checkbox.checked) {
		jQuery(".ls-nfl-boxscore").slideToggle('500');
		localStorage.setItem("ls_includeNFLBox_" + league_id, "1");
	} else {
		jQuery(".ls-nfl-boxscore").slideToggle('500');
		localStorage.removeItem("ls_includeNFLBox_" + league_id);
	}
}

function ls_get_player_projection(pid) {
	try {
		if (ls_nfl_games[ls_player[pid].nfl_team].secs_left === 0)
			if (ls_player[pid] === undefined || isNaN(ls_player[pid].points))
				if (ls_projections['pid_' + pid] === undefined) 
					return ({
						"pace": 0,
						"points": 0,
						"projected": 0,
						"formatted": format_points(0),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
				else 
					return ({
						"pace": 0,
						"points": 0,
						"projected": parseFloat(ls_projections['pid_' + pid]),
						"formatted": format_points(0),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
			else
				if (ls_projections['pid_' + pid] === undefined) 
					return ({
						"pace": ls_player[pid].points,
						"points": ls_player[pid].points,
						"projected": 0,
						"formatted": format_points(ls_player[pid].points),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
				else 
					return ({
						"pace": ls_player[pid].points,
						"points": ls_player[pid].points,
						"projected": parseFloat(ls_projections['pid_' + pid]),
						"formatted": format_points(ls_player[pid].points),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
		else if (ls_nfl_games[ls_player[pid].nfl_team].secs_left === 3600)
			if (ls_projections['pid_' + pid] === undefined) 
				return ({
					"pace": 0,
					"points": 0,
					"projected": 0,
					"formatted": '',
					"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
				});
			else
				return ({
					"pace": parseFloat(ls_projections['pid_' + pid]),
					"points": 0,
					"projected": parseFloat(ls_projections['pid_' + pid]),
					"formatted": ls_projections['pid_' + pid],
					"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
				});
		else if (ls_projections['pid_' + pid] === undefined) 
			return ({
				"pace": ls_player[pid].points,
				"points": (ls_player[pid].points - 0),
				"projected": ls_player[pid].points,
				"formatted": format_points(ls_player[pid].points),
				"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
			});
		else 
			return ({
				"pace": (ls_player[pid].points + parseFloat(ls_projections['pid_' + pid]) * (ls_nfl_games[ls_player[pid].nfl_team].secs_left / 3600)),
				"points": ls_player[pid].points,
				"projected": parseFloat(ls_projections['pid_' + pid]),
				"formatted": format_points(ls_player[pid].points + parseFloat(ls_projections['pid_' + pid]) * (ls_nfl_games[ls_player[pid].nfl_team].secs_left / 3600)),
				"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
			});
	} catch (er) {
		return ({
			"pace": 0,
			"points": 0,
			"projected": 0,
			"formatted": '',
			"game_sec_remaining": 0
		});
	}
}

function ls_update_injuries() {
	jQuery("#roster_away td:first-child a,#roster_home td:first-child a").each(function() {
		var _pid = $(this).attr("href").substr(17, 5);
		if (ls_injuries["pid_" + _pid] !== undefined) {
			$(this).parent().append(' (<span class="warning injurystatus" title="' + ls_injuries["pid_" + _pid].status + '">' + ls_injuries["pid_" + _pid].code + '</span>)');
		}
	});
}
		
function ls_update_projections() {
	//LOOP THROUGH ALL THE ROSTERS AND DO PROJECTIONS
	for (var key in ls_rosters) {
		if (ls_rosters.hasOwnProperty(key)) {
			//UPDATE PROJECTIONS FOR STARTERS AND STARTER TOTALS
			var _pace = 0;
			var _proj = 0;
			var _pts = 0;
			var _gsr = 0;
			if (ls_rosters[key].hasOwnProperty("S")) {
				for (var i = 0; i < ls_rosters[key].S.length; i++) {
					var _return_ar = ls_get_player_projection(ls_rosters[key].S[i]);
					_pace += _return_ar.pace;
					_proj += _return_ar.projected;
					_pts += _return_ar.points;
					_gsr += _return_ar.game_sec_remaining;
					if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
						jQuery("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
						if ((_return_ar.pace - _return_ar.projected) < 0) 
							jQuery(".pfpts_" + ls_rosters[key].S[i]).addClass('ls_below_projected');
						else if ((_return_ar.pace - _return_ar.projected) > 0) 
							jQuery(".pfpts_" + ls_rosters[key].S[i]).addClass('ls_above_projected');
					} else if ((_return_ar.pace - _return_ar.projected) < 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else if ((_return_ar.pace - _return_ar.projected) > 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else 
						jQuery("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
				}
			}
			if (ls_orig_proj_when_final && _gsr === 0) {
				jQuery("#ls_pace_fspts_" + key).html('<span class="ls_projected" title="Original Projection">' + format_points(_proj) + '</span>');
				ls_pace_tracker["fid_" + key] = '<span class="ls_projected" title="Original Projection">' + format_points(_proj) + '</span>';
				if ((_pace - _proj) < 0) 
					jQuery(".ogffpts_" + key + ", #ogffpts_" + key + ", #fspts_" + key).addClass('ls_below_projected');
				else if ((_pace - _proj) > 0) 
					jQuery(".ogffpts_" + key + ", #ogffpts_" + key + ", #fspts_" + key).addClass('ls_above_projected');
			} else if ((_pace - _proj) < 0) {
				jQuery("#ls_pace_fspts_" + key).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>');
				ls_pace_tracker["fid_" + key] = '<span class="ls_below_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
			} else if ((_pace - _proj) > 0) {
				jQuery("#ls_pace_fspts_" + key).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>');
				ls_pace_tracker["fid_" + key] = '<span class="ls_above_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
			} else {
				jQuery("#ls_pace_fspts_" + key).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>');
				ls_pace_tracker["fid_" + key] = '<span class="ls_at_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
			}
			jQuery("#ls_pace_box_" + key).html(ls_pace_tracker["fid_" + key]);
			//UPDATE PROJECTIONS FOR RESERVES AND RESERVE TOTALS
			var _pace = 0;
			var _proj = 0;
			var _pts = 0;
			var _gsr = 0;
			if (ls_rosters[key].hasOwnProperty("NS")) {
				for (var i = 0; i < ls_rosters[key].NS.length; i++) {
					var _return_ar = ls_get_player_projection(ls_rosters[key].NS[i]);
					_pace += _return_ar.pace;
					_proj += _return_ar.projected;
					_pts += _return_ar.points;
					_gsr += _return_ar.game_sec_remaining;
					if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
						jQuery("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
						if ((_return_ar.pace - _return_ar.projected) < 0) jQuery(".pfpts_" + ls_rosters[key].NS[i]).addClass('ls_below_projected');
						else if ((_return_ar.pace - _return_ar.projected) > 0) jQuery(".pfpts_" + ls_rosters[key].NS[i]).addClass('ls_above_projected');
					} else if ((_return_ar.pace - _return_ar.projected) < 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else if ((_return_ar.pace - _return_ar.projected) > 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else 
						jQuery("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
				}
			}
			if (ls_orig_proj_when_final && _gsr === 0) {
				jQuery("#ls_pace_frpts_" + key).html('<span class="ls_projected" title="Original Projection">' + format_points(_proj) + '</span>');
				if ((_pace - _proj) < 0) 
					jQuery("#frpts_" + key).addClass('ls_below_projected');
				else if ((_pace - _proj) > 0) 
					jQuery("#frpts_" + key).addClass('ls_above_projected');
			} else if ((_pace - _proj) < 0) 
				jQuery("#ls_pace_frpts_" + key).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>');
			else if ((_pace - _proj) > 0) 
				jQuery("#ls_pace_frpts_" + key).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>');
			else 
				jQuery("#ls_pace_frpts_" + key).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>');
			//UPDATE PROJECTIONS FOR INJURED RESERVE
			var _pace = 0;
			var _proj = 0;
			var _pts = 0;
			var _gsr = 0;
			if (ls_rosters[key].hasOwnProperty("IR")) {
				for (var i = 0; i < ls_rosters[key].IR.length; i++) {
					var _return_ar = ls_get_player_projection(ls_rosters[key].IR[i]);
					_pace += _return_ar.pace;
					_proj += _return_ar.projected;
					_pts += _return_ar.points;
					_gsr += _return_ar.game_sec_remaining;
					if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
						jQuery("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
						if ((_return_ar.pace - _return_ar.projected) < 0) 
							jQuery(".pfpts_" + ls_rosters[key].IR[i]).addClass('ls_below_projected');
						else if ((_return_ar.pace - _return_ar.projected) > 0) 
							jQuery(".pfpts_" + ls_rosters[key].IR[i]).addClass('ls_above_projected');
					} else if ((_return_ar.pace - _return_ar.projected) < 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else if ((_return_ar.pace - _return_ar.projected) > 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else 
						jQuery("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
				}
			}
			//UPDATE PROJECTIONS FOR TAXI SQUAD
			var _pace = 0;
			var _proj = 0;
			var _pts = 0;
			var _gsr = 0;
			if (ls_rosters[key].hasOwnProperty("TS")) {
				for (var i = 0; i < ls_rosters[key].TS.length; i++) {
					var _return_ar = ls_get_player_projection(ls_rosters[key].TS[i]);
					_pace += _return_ar.pace;
					_proj += _return_ar.projected;
					_pts += _return_ar.points;
					_gsr += _return_ar.game_sec_remaining;
					if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
						jQuery("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
						if ((_return_ar.pace - _return_ar.projected) < 0) 
							jQuery(".pfpts_" + ls_rosters[key].TS[i]).addClass('ls_below_projected');
						else if ((_return_ar.pace - _return_ar.projected) > 0) 
							jQuery(".pfpts_" + ls_rosters[key].TS[i]).addClass('ls_above_projected');
					} else if ((_return_ar.pace - _return_ar.projected) < 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else if ((_return_ar.pace - _return_ar.projected) > 0) 
						jQuery("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
					else 
						jQuery("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
				}
			}
		}
	}
}

function ls_projections_html() {
	if (jQuery("#hide_projections_cb").is(':checked')) 
		var _style = ' style="display:none"';
	else 
		var _style = '';
	var _td_pad = '';
	if ($('input[name="hide_stats"]').is(':checked')) {
		_td_pad = ' td-pad';
	};
	//IF PROJECTIONS COLUMN MISSING THEN ADD
	if (!jQuery("#roster_away tr:first-child th").hasClass("ls_projections") && !jQuery("#roster_home tr:first-child th").hasClass("ls_projections")) {
		jQuery("#roster_away tr, #roster_home tr").each(function() {
			if ($(this).find("th").length > 0) {
				$(this).find("th.ls_game_info").after('<th class="ls_projections"' + _style + ' title="Pace/Projected Points">PP</th>');
			} else {
				try {
					 var _pid = $(this).find("td:first-child a").attr("href").substr(17, 5);
					$(this).find("td.ls_game_info").after('<td class="ls_projections' + _td_pad + '"' + _style + ' id="ls_pace_pts_' + _pid + '"></td>');
				} catch (er) {
					//TOTALS ROW
					var _id = $(this).find("td:last-child div").attr("id");
					if (_id === undefined) 
						$(this).find("td.ls_game_info").after('<td class="ls_projections' + _td_pad + '"' + _style + '></td>');
					else 
						$(this).find("td.ls_game_info").after('<td class="ls_projections ffpts_pace_total' + _td_pad + '"' + _style + ' id="ls_pace_' + _id + '"></td>');
				}
			}
		});
	}
		$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
}

function ls_add_icons(home) {
	if (home === undefined) {
		try {
			var _home = jQuery("#ficon_home img").attr("id").substr(-4);
			//INITIALIZE GLOBAL HOME & AWAY
			ls_home_id = jQuery("#ficon_home img").attr("id").substr(-4);
			ls_away_id = jQuery("#ficon_away img").attr("id").substr(-4);
			ls_check_if_bye();
		} catch (er) {
			// ICON MUST NOT EXIST THEREFORE NEED TO REVERSE ENGINEER TO GET ID FROM TEAM NAME
			for (var key in franchiseDatabase) {
				if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
					if (franchiseDatabase[key].name === jQuery("#fname_home").text()) ls_home_id = franchiseDatabase[key].id;
					if (franchiseDatabase[key].name === jQuery("#fname_away").text()) ls_away_id = franchiseDatabase[key].id;
					ls_check_if_bye();
				}
			}
			var _home = ls_home_id;
		}
	} else var _home = home;
	jQuery("[id^=og_]").each(function() {
		var _homeId = $(this).attr("onclick").substr(13, 4);
		if($(this).attr("onclick").indexOf('BYE')!==-1) {
			var _roadId = 'BYE';
			$(this).addClass('ls_other_game_bye');
			ls_check_if_bye_final();
		} else
			var _roadId = $(this).attr("onclick").substr(20, 4);
		if (_homeId === _home) 
			$(this).addClass("current_matchup");
		else 
			$(this).removeClass("current_matchup");
		if(_roadId!=='BYE') {
			switch (ls_box_abbrev_name_icon) {
				case 0: //ABBREV
					$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + _roadId].abbrev + '</span>');
					break;
				case 1: //FULL NAME
					$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">'+franchiseDatabase["fid_" + _roadId].name+'</span>');
					break;
				case 2: //ICON ON FAIL USE LOGO ON FAIL USE ABBREV
					if (franchiseDatabase["fid_" + _roadId].icon !== "")
						$(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _roadId].icon + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _roadId].name + '" />');
					else if (franchiseDatabase["fid_" + _roadId].logo !== "")
						$(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _roadId].logo + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _roadId].name + '" />');
					else 
						$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + _roadId].abbrev + '</span>');
					break;
				case 3: //ICON+ABBREV ON FAIL USE LOGO+ABBREV ON FAIL USE ABBREV
					if (franchiseDatabase["fid_" + _roadId].icon !== "")
						$(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _roadId].icon + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _roadId].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _roadId].abbrev + '</span>');
					else if (franchiseDatabase["fid_" + _roadId].logo !== "")
						$(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _roadId].logo + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _roadId].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _roadId].abbrev + '</span>');
					else 
						$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + _roadId].abbrev + '</span>');
					break;
				case 4: //ICON+NAME ON FAIL USE LOGO+NAME ON FAIL USE NAME
					if (franchiseDatabase["fid_" + _roadId].icon !== "")
						$(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _roadId].icon + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _roadId].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _roadId].name + '</span>');
					else if (franchiseDatabase["fid_" + _roadId].logo !== "")
						$(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _roadId].logo + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _roadId].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _roadId].name + '</span>');
					else 
						$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">' + franchiseDatabase["fid_" + _roadId].name + '</span>');
					break;
				default: $(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + _roadId].abbrev + '</span>');
			}
		} else if(ls_hide_bye_teams) {
			$(this).addClass('ls_other_game_bye_hidden');
		}
		switch (ls_box_abbrev_name_icon) {
			case 0: //ABBREV
				$(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + _homeId].abbrev + '</span>');
				break;
			case 1: //FULL NAME
				$(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">' + franchiseDatabase["fid_" + _homeId].name + '</span>');
				break;
			case 2: //ICON ON FAIL USE LOGO ON FAIL USE ABBREV
				if (franchiseDatabase["fid_" + _homeId].icon !== "")
					$(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _homeId].icon + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _homeId].name + '" />');
				else if (franchiseDatabase["fid_" + _homeId].logo !== "")
					$(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _homeId].logo + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _homeId].name + '" />');
				else 
					$(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + _homeId].abbrev + '</span>');
				break;
			case 3: //ICON+ABBREV ON FAIL USE LOGO+ABBREV ON FAIL USE ABBREV
				if (franchiseDatabase["fid_" + _homeId].icon !== "")
					$(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _homeId].icon + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _homeId].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _homeId].abbrev + '</span>');
				else if (franchiseDatabase["fid_" + _homeId].logo !== "")
					$(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _homeId].logo + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _homeId].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _homeId].abbrev + '</span>');
				else 
					$(this).find("table tr:eq(1) td:eq(0)").html(franchiseDatabase["fid_" + _homeId].abbrev);
				break;
			case 4: //ICON+NAME ON FAIL USE LOGO+NAME ON FAIL USE NAME
				if (franchiseDatabase["fid_" + _homeId].icon !== "")
					$(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _homeId].icon + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _homeId].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _homeId].name + '</span>');
				else if (franchiseDatabase["fid_" + _homeId].logo !== "")
					$(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + _homeId].logo + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + _homeId].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + _homeId].name + '</span>');
				else 
					$(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">' + franchiseDatabase["fid_" + _homeId].name + '</span>');
				break;
			default: $(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + _homeId].abbrev + '</span>');
		}
		if (ls_includeProjections) {
			if (jQuery("#hide_projections_cb").is(':checked')) 
				var _style = ' style="display:none"';
			else 
				var _style = '';
			if(_roadId==='BYE')
				$(this).find("table tr:eq(0) td:eq(0)").after('<td class="ls_projections ls_pace_box"' + _style + '>&nbsp;</td>');
			else
				$(this).find("table tr:eq(0) td:eq(0)").after('<td id="ls_pace_box_' + _roadId + '" class="ls_projections ls_pace_box"' + _style + '>' + ls_pace_tracker["fid_" + _roadId] + '</td>');
			$(this).find("table tr:eq(1) td:eq(0)").after('<td id="ls_pace_box_' + _homeId + '" class="ls_projections ls_pace_box"' + _style + '>' + ls_pace_tracker["fid_" + _homeId] + '</td>');
		}
	});
	jQuery(".ls_other_game.current_matchup td.ls_og_cell:first").filter(function () {
		if ($.trim($(this).text()) === "BYE") {
			jQuery("#ajax_ls").addClass("ls-has-bye");
			jQuery("#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type").attr('colspan',2);
			jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamRecord").attr('colspan',7);
			jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamName").attr('colspan',7);
			jQuery("#body_ajax_ls .ls-has-bye #LS_HomeScore").attr('colspan',4);
		}
	});
}

function ls_add_caption() {
	jQuery('<caption><span></span></caption>').insertBefore('#roster_away tbody');
	jQuery('<caption><span></span></caption>').insertBefore('#roster_home tbody');
	var fnameAwayContents = $('#fname_away').html();
	var fnameHomeContents = $('#fname_home').html();
	jQuery('#roster_away caption').html(fnameAwayContents);
	jQuery('#roster_home caption').html(fnameHomeContents);
}

function ls_parse_standings() {
	ls_records = new Array();
	for (var key in franchiseDatabase) {
		if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
			ls_records[franchiseDatabase[key].id] = "0-0-0";
		}
	}
	var url = baseURLDynamic + "/" + year + "/export?TYPE=standings&L=" + league_id + "&JSON=1&rand=" + Math.random();
	$.ajax({
		type: 'GET',
		url: url
	}).done(function(standingsData) {
		try {
			for (var i = 0; i < standingsData.standings.franchise.length; i++) {
				try {
					ls_records[standingsData.standings.franchise[i].id] = standingsData.standings.franchise[i].h2hw.$t + "-" + standingsData.standings.franchise[i].h2hl.$t + "-" + standingsData.standings.franchise[i].h2ht.$t;
				} catch (er) {
					try {
						ls_records[standingsData.standings.franchise[i].id] = standingsData.standings.franchise[i].h2hw.$t + "-" + standingsData.standings.franchise[i].h2hl.$t;
					} catch (er) {
						ls_records[standingsData.standings.franchise[i].id] = "0-0-0";
					}
				}
			}
		} catch (er) {}
	});
}

function ls_add_records(home, away) {
	if (home === undefined) try {
		var _home = jQuery("#ficon_home img").attr("id").substr(-4);
	} catch (er) {
		// ICON MUST NOT EXIST THEREFORE NEED TO REVERSE ENGINEER TO GET ID FROM TEAM NAME
		for (var key in franchiseDatabase) {
			if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
				if (franchiseDatabase[key].name === jQuery("#fname_home").text()) var _home = franchiseDatabase[key].id;
			}
		}
	}
	else var _home = home;
	if (away === undefined) try {
		var _away = jQuery("#ficon_away img").attr("id").substr(-4);
	} catch (er) {
		// ICON MUST NOT EXIST THEREFORE NEED TO REVERSE ENGINEER TO GET ID FROM TEAM NAME
		for (var key in franchiseDatabase) {
			if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
				if (franchiseDatabase[key].name === jQuery("#fname_away").text()) var _away = franchiseDatabase[key].id;
			}
		}
	}
	else var _away = away;
	jQuery("#LS_AwayTeamRecord").html(ls_records[_away]);
	jQuery("#LS_HomeTeamRecord").html(ls_records[_home]);
}

function ls_parse_projections() {
	ls_projections = new Array();
	if(liveScoringWeek<1) var _liveScoringWeek = 1; else var _liveScoringWeek = liveScoringWeek;
	$.ajax({
		type: 'GET',
		url: baseURLDynamic + "/" + year + "/export?TYPE=projectedScores&L=" + league_id + "&W=" + _liveScoringWeek + "&JSON=1",
		async: false
	}).done(function(projectionsData) {
		for (var i = 0; i < projectionsData.projectedScores.playerScore.length; i++) {
			if (projectionsData.projectedScores.playerScore[i].score.length === 0) ls_projections["pid_" + projectionsData.projectedScores.playerScore[i].id] = 0;
			else ls_projections["pid_" + projectionsData.projectedScores.playerScore[i].id] = projectionsData.projectedScores.playerScore[i].score;
		}
		projectionsData = null;
	});
}

function ls_parse_injuries() {
	ls_injuries = new Array();
	$.ajax({
		type: 'GET',
		url: baseURLDynamic + "/" + year + "/export?TYPE=injuries&JSON=1",
		async: false
	}).done(function(injuryData) {
		for (var i = 0; i < injuryData.injuries.injury.length; i++) {
			ls_injuries["pid_" + injuryData.injuries.injury[i].id] = ({
				"code": injuryData.injuries.injury[i].status.substr(0, 1),
				"status": injuryData.injuries.injury[i].status,
				"details": injuryData.injuries.injury[i].details
			});
		}
		injuryData = null;
	});
}

function ls_check_if_bye(){
	// if away team is bye then add bye class to main scoreboard to hide for mobile and activate home team
	if(ls_away_id==='BYE') {
		jQuery("#ajax_ls").addClass("ls-has-bye");
		jQuery("#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type").attr('colspan',2);
		jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamRecord").attr('colspan',7);
		jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamName").attr('colspan',7);
		jQuery("#body_ajax_ls .ls-has-bye #LS_HomeScore").attr('colspan',4);
	} else {
		jQuery("#ajax_ls").removeClass("ls-has-bye");
		jQuery("#body_ajax_ls .ls_players_table td.mobile-view:last-of-type").removeAttr('colspan');
		jQuery("#body_ajax_ls #LS_HomeTeamRecord").removeAttr('colspan');
		jQuery("#body_ajax_ls #LS_HomeTeamName").removeAttr('colspan');
		jQuery("#body_ajax_ls #LS_HomeScore").removeAttr('colspan');
	}
}

function ls_check_if_bye_final() {
	jQuery('#other_games .ls_other_game_bye div[class^="oggstat"]:contains("F")').closest(".ls_other_game").addClass("ls_box_gameover");
	jQuery('#other_games .ls_other_game_bye.ls_box_gameover div[class^="oggstat"]').parent().addClass("winner_mark");
	jQuery('#other_games .ls_other_game_bye.ls_box_gameover div[class^="oggstat"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
}

function ls_check_if_final() {
	// Determine if both teams games are final
	jQuery("#other_games .ls_other_game").filter(function() {
		return $(this).find("tr").length === $(this).find('div[class^="oggstat"]:contains("F")').length;
	}).addClass('ls_box_gameover');

	jQuery('#other_games .ls_other_game').each(function() {
		if (parseInt($(this).find('tr td div[class^="ogffpts"]').text()) === 0) {
			$(this).removeClass('ls_box_gameover');
		}
	});

	// Add Gameover for Bye Week Teams done playing 
	jQuery('#other_games .ls_other_game_bye div[class^="oggstat"]:contains("F")').closest('.ls_other_game').addClass('ls_box_gameover');

	// If both teams games are final - find which has highest score and add class
	jQuery('#other_games .ls_box_gameover').each(function() {
		var maxVal = Math.max.apply(Math, $('div[class^="ogffpts"]', this).map(function() {
			return +$(this).text();
		}).toArray());
		$('div', this).each(function() {
			$(this).text() == maxVal && $(this).parent().next().addClass('winner_mark');
		});
	});

	// add font awesome caret to team with highest score
	jQuery('#other_games .ls_box_gameover div[class^="oggstat"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
}

function ls_format_score() {
	var min_digits = 8;
	var use_blanks = true; // IF TRUE USE BLANKS ELSE USE ZERO
	var _awayScore = jQuery("#ffpts_away").text();
	var _homeScore = jQuery("#ffpts_home").text();
	var _oldScore = _awayScore;
	for (var i = min_digits; i > _oldScore.length; i--) {
		if (use_blanks) _awayScore = 'x' + _awayScore;
		else _awayScore = '0' + _awayScore;
	}
	var _oldScore = _homeScore;
	for (var i = min_digits; i > _oldScore.length; i--) {
		if (use_blanks) _homeScore = 'x' + _homeScore;
		else _homeScore = '0' + _homeScore;
	}
	var html = '';
	for (var i = 0; i < _awayScore.length; i++) {
		if (_awayScore.substr(i, 1) === "x") html += '<span class="blank ls_num_' + (i + 1) + '"><a></a></span>';
		else html += '<span class="ls_num_' + (i + 1) + '"><a>' + _awayScore.substr(i, 1) + '</a></span>';
	}
	jQuery("#ffpts_away").html(html);
	html = '';
	for (var i = 0; i < _homeScore.length; i++) {
		if (_homeScore.substr(i, 1) === "x") html += '<span class="blank ls_num_' + (i + 1) + '"><a></a></span>';
		else html += '<span class="ls_num_' + (i + 1) + '"><a>' + _homeScore.substr(i, 1) + '</a></span>';
	}
	jQuery("#ffpts_home").html(html);
}

function ls_removeIR() {
	var _irFound = false;
	var _taxiFound = false;
	jQuery("#roster_away tr.ls_nonstarters").each(function() {
		if ($(this).find("th:first-child").text() === "Injured Reserve") _irFound = true;
		if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
		if (_irFound && !_taxiFound) {
			$(this).remove();
		}
	});
	_irFound = false;
	_taxiFound = false;
	jQuery("#roster_home tr.ls_nonstarters").each(function() {
		if ($(this).find("th:first-child").text() === "Injured Reserve") _irFound = true;
		if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
		if (_irFound && !_taxiFound) {
			$(this).remove();
		}
	});
	for (var key in ls_rosters) {
		if (ls_rosters.hasOwnProperty(key)) {
			ls_rosters[key].IR = new Array();
		}
	}
}

function ls_removeTaxi() {
	var _taxiFound = false;
	jQuery("#roster_away tr.ls_nonstarters").each(function() {
		if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
		if (_taxiFound) {
			$(this).remove();
		}
	});
	_taxiFound = false;
	jQuery("#roster_home tr.ls_nonstarters").each(function() {
		if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
		if (_taxiFound) {
			$(this).remove();
		}
	});
	for (var key in ls_rosters) {
		if (ls_rosters.hasOwnProperty(key)) {
			ls_rosters[key].TS = new Array();
		}
	}
}

function ls_validate_matchup(home,away) {
	if(ls_hide_bye_teams&&away==="BYE") {
		//PICK A GAME WITHOUT A BYE
		for (var i=0;i<ls_games.length;i++) {
			var game = ls_games[i].split(",");
			if(game[0]!=="BYE") {
				ls_home_id = game[1];
				ls_away_id = game[0];
				break;
			}
		}
	}
}

// Anything that needs to run again when user clicks the boxscores matchups , place in here , still need to place on page load as well
function switch_game(home, away) {
	ls_update_all = 1;
	ls_home_id = home;
	ls_away_id = away;
	ls_validate_matchup(ls_home_id,ls_away_id);
	ls_check_if_bye();
	show_game(ls_home_id, ls_away_id);
	update_scores();
	if (ls_includeInjuryStatus) ls_update_injuries();
	ls_add_icons(ls_home_id);
	try { MFLPlayerPopupNewsIcon();} catch (er) {}
	ls_add_caption();
	ls_add_records(ls_home_id, ls_away_id);
	$("#LS_AwayTeamName,#LS_AwayTeamRecord,#LS_AwayScore").trigger('click');
		$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
}

//YOU CAN NOW ADD WHATEVER YOU WANT HERE AND IT WILL RUN IMMEDIATELY AFTER MFLS' update_scores 
function ls_after_update_scores() {
	if (ls_includeProjections) ls_projections_html();
	ls_format_score();
	if (ls_includeProjections) ls_update_projections();
	ls_check_if_final();
	ls_check_if_bye_final();
	ls_scoring_run();
	ls_update_nfl_box();
		$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
}

//FUNCTIONS REQUIRED TO GO BACK IN HISTORY
function ls_navbar() {
	var html = '';
	html += '<div id="myNavigationHolder" style="margin-top:10px"><span class="weekly-navbar"><span class="reportnavigationheader">Select Week: </span>';
	if (location.href.indexOf("W=") === -1) {
		if(liveScoringWeek<1) var _liveScoringWeek = 1;	else var _liveScoringWeek = liveScoringWeek;
	} else 
		var _liveScoringWeek = parseInt(location.href.substr(location.href.indexOf("W=") + 2, 2));
	for (var i = 1; i <= 17; i++) {
		if (i < liveScoringWeek) 
			html += '<a href="#week' + i + '" onclick="location.href=\'' + baseURLDynamic + '/' + year + '/ajax_ls?L=' + league_id + '&W=' + _liveScoringWeek + '&W2=' + i + '\';"> ' + i + ' </a>';
		else if (i === liveScoringWeek) 
			html += '<span class="currentweek"> ' + i + ' </span>';
		else if (i <= _liveScoringWeek) 
			html += '<a href="#week' + i + '" onclick="location.href=\'' + baseURLDynamic + '/' + year + '/ajax_ls?L=' + league_id + '&W=' + _liveScoringWeek + '&W2=' + i + '\';"> ' + i + ' </a>';
		else 
			html += '<a href="#week' + i + '" class="inactive" style="cursor:default"> ' + i + ' </a>';
	}
	html += '</span>';
	html += '<span class="weekly-navbar-mobile">Select Week: ';
	html += '<select size="1" id="ls_scoreboardWeek" onchange="location.href=\'' + baseURLDynamic + '/' + year + '/ajax_ls?L=' + league_id + '&W=' + _liveScoringWeek + '&W2=\'+document.getElementById(\'ls_scoreboardWeek\').value;">';
	for (var i = 1; i <= 17; i++) {
		if (i < liveScoringWeek) 
			html += '<option value="' + i + '">' + i + '</option>';
		else if (i === liveScoringWeek) 
			html += '<option value="' + i + '" selected="selected">' + i + '</option>';
		else if (i <= _liveScoringWeek) 
			html += '<option value="' + i + '">' + i + '</option>';
	}
	html += '</select>';
	html += '</span>';
	html += '</div>';
	jQuery("#ls_setting_drop").before(html);
}

var ls_nfl_records = new Array();
function ls_update_nfl_records(){
	for (var i=1;i<liveScoringWeek;i++) {
		var url = baseURLDynamic + "/" + year + "/export?TYPE=nflSchedule&W=" + i + "&JSON=1&rand=" + Math.random();
		$.ajax({
			type: 'GET',
			url: url,
			async: false
		}).done(function(nflData) {
			for (var i = 0; i < nflData.nflSchedule.matchup.length; i++) {
			if(ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id] === undefined) ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id] = ({ w:0 , l:0 , t:0 });
				if(ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id] === undefined) ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id] = ({ w:0 , l:0 , t:0 });
				if(parseInt(nflData.nflSchedule.matchup[i].team[0].score) > parseInt(nflData.nflSchedule.matchup[i].team[1].score)) {
					ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id].w+= 1;
					ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id].l+= 1;
				} else if(parseInt(nflData.nflSchedule.matchup[i].team[0].score) < parseInt(nflData.nflSchedule.matchup[i].team[1].score)) {
					ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id].l+= 1;
					ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id].w+= 1;
				} else {
					ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id].t+= 1;
					ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id].t+= 1;
				}
			}
		});
	}
}

function ls_update_week() {
	if(liveScoringWeek<1) var _liveScoringWeek = 1; else var _liveScoringWeek = liveScoringWeek;
	//NEED TO RE-BUILD LS_NFL_GAMES
	ls_nfl_games = [];
	var url = baseURLDynamic + "/" + year + "/export?TYPE=nflByeWeeks&W=" + _liveScoringWeek + "&JSON=1&rand=" + Math.random();
	$.ajax({
		type: 'GET',
		url: url,
		async: false
	}).done(function(nflData) {
		try {
			for (var i = 0; i < nflData.nflByeWeeks.team.length; i++) {
				ls_nfl_games[nflData.nflByeWeeks.team[i].id] = [];
				ls_nfl_games[nflData.nflByeWeeks.team[i].id].time = 0;
				ls_nfl_games[nflData.nflByeWeeks.team[i].id].opp = "BYE";
			}
		} catch (er) {}
	});
	var url = baseURLDynamic + "/" + year + "/export?TYPE=nflSchedule&W=" + _liveScoringWeek + "&JSON=1&rand=" + Math.random();
	$.ajax({
		type: 'GET',
		url: url,
		async: false
	}).done(function(nflData) {
		for (var i = 0; i < nflData.nflSchedule.matchup.length; i++) {
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id] = [];
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id] = [];
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].time = parseInt(nflData.nflSchedule.matchup[i].kickoff);
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].pretty_time = "";
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].opp = nflData.nflSchedule.matchup[i].team[1].id;
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].where = 'away';
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].time = parseInt(nflData.nflSchedule.matchup[i].kickoff);
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].pretty_time = "";
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].opp = nflData.nflSchedule.matchup[i].team[0].id;
			ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].where = 'home';
		}
	});
	//NEED TO RE-BUILD LS_GAMES
	ls_games = [];
	ls_rosters = [];
	var _awayTeam = "";
	var _homeTeam = "";
	var _missingPlayers = "";
	var url = baseURLDynamic + "/" + year + "/export?TYPE=weeklyResults&L=" + league_id + "&W=" + _liveScoringWeek + "&DETAILS=1&JSON=1&rand=" + Math.random();
	$.ajax({
		type: 'GET',
		url: url,
		async: false
	}).done(function(scoringData) {
		//MULTIPLE MATCHUPS
		try {
			for (var i = 0; i < scoringData.weeklyResults.matchup.length; i++) {
				ls_games.push(scoringData.weeklyResults.matchup[i].franchise[0].id + "," + scoringData.weeklyResults.matchup[i].franchise[1].id);
				if (_awayTeam === "") _awayTeam = scoringData.weeklyResults.matchup[i].franchise[0].id;
				if (_homeTeam === "") _homeTeam = scoringData.weeklyResults.matchup[i].franchise[1].id;
				if (typeof franchise_id !== "undefined") {
					if (franchise_id === scoringData.weeklyResults.matchup[i].franchise[0].id || franchise_id === scoringData.weeklyResults.matchup[i].franchise[1].id) {
						_awayTeam = scoringData.weeklyResults.matchup[i].franchise[0].id;
						_homeTeam = scoringData.weeklyResults.matchup[i].franchise[1].id;
					}
				}
				ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id] = {};
				ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].TS = [];
				ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].IR = [];
				if (ls_best_lineup === 0) {
					ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].S = [];
					ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].NS = [];
				} else {
					ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].R = [];
				}
				try {
					for (var j = 0; j < scoringData.weeklyResults.matchup[i].franchise[0].player.length; j++) {
						switch (scoringData.weeklyResults.matchup[i].franchise[0].player[j].status) {
							case "starter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].S.push(scoringData.weeklyResults.matchup[i].franchise[0].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].R.push(scoringData.weeklyResults.matchup[i].franchise[0].player[j].id);
								break;
							case "nonstarter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].NS.push(scoringData.weeklyResults.matchup[i].franchise[0].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].R.push(scoringData.weeklyResults.matchup[i].franchise[0].player[j].id);
								break;
							case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].TS.push(scoringData.weeklyResults.matchup[i].franchise[0].player[j].id);
								break;
							case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup[i].franchise[0].id].IR.push(scoringData.weeklyResults.matchup[i].franchise[0].player[j].id);
								break;
						}
						if (ls_player[scoringData.weeklyResults.matchup[i].franchise[0].player[j].id] === undefined) _missingPlayers += scoringData.weeklyResults.matchup[i].franchise[0].player[j].id + ",";
					}
				} catch (er) {}
				ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id] = {};
				ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].TS = [];
				ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].IR = [];
				if (ls_best_lineup === 0) {
					ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].S = [];
					ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].NS = [];
				} else {
					ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].R = [];
				}
				try {
					for (var j = 0; j < scoringData.weeklyResults.matchup[i].franchise[1].player.length; j++) {
						switch (scoringData.weeklyResults.matchup[i].franchise[1].player[j].status) {
							case "starter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].S.push(scoringData.weeklyResults.matchup[i].franchise[1].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].R.push(scoringData.weeklyResults.matchup[i].franchise[1].player[j].id);
								break;
							case "nonstarter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].NS.push(scoringData.weeklyResults.matchup[i].franchise[1].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].R.push(scoringData.weeklyResults.matchup[i].franchise[1].player[j].id);
								break;
							case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].TS.push(scoringData.weeklyResults.matchup[i].franchise[1].player[j].id);
								break;
							case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup[i].franchise[1].id].IR.push(scoringData.weeklyResults.matchup[i].franchise[1].player[j].id);
								break;
						}
						if (ls_player[scoringData.weeklyResults.matchup[i].franchise[1].player[j].id] === undefined) _missingPlayers += scoringData.weeklyResults.matchup[i].franchise[1].player[j].id + ",";
					}
				} catch (er) {}
			}
		} catch (er) {}
	//ONLY ONE MATCHUP
		try {
			if(scoringData.weeklyResults.matchup.franchise[0]!==undefined) {
				ls_games.push(scoringData.weeklyResults.matchup.franchise[0].id + "," + scoringData.weeklyResults.matchup.franchise[1].id);
				if (_awayTeam === "") _awayTeam = scoringData.weeklyResults.matchup.franchise[0].id;
				if (_homeTeam === "") _homeTeam = scoringData.weeklyResults.matchup.franchise[1].id;
				if (typeof franchise_id !== "undefined") {
					if (franchise_id === scoringData.weeklyResults.matchup.franchise[0].id || franchise_id === scoringData.weeklyResults.matchup.franchise[1].id) {
						_awayTeam = scoringData.weeklyResults.matchup.franchise[0].id;
						_homeTeam = scoringData.weeklyResults.matchup.franchise[1].id;
					}
				}
				ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id] = {};
				ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].TS = [];
				ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].IR = [];
				if (ls_best_lineup === 0) {
					ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].S = [];
					ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].NS = [];
				} else {
					ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].R = [];
				}
				try {
					for (var j = 0; j < scoringData.weeklyResults.matchup.franchise[0].player.length; j++) {
						switch (scoringData.weeklyResults.matchup.franchise[0].player[j].status) {
							case "starter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].S.push(scoringData.weeklyResults.matchup.franchise[0].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].R.push(scoringData.weeklyResults.matchup.franchise[0].player[j].id);
								break;
							case "nonstarter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].NS.push(scoringData.weeklyResults.matchup.franchise[0].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].R.push(scoringData.weeklyResults.matchup.franchise[0].player[j].id);
								break;
							case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].TS.push(scoringData.weeklyResults.matchup.franchise[0].player[j].id);
								break;
							case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup.franchise[0].id].IR.push(scoringData.weeklyResults.matchup.franchise[0].player[j].id);
								break;
						}
						if (ls_player[scoringData.weeklyResults.matchup.franchise[0].player[j].id] === undefined) _missingPlayers += scoringData.weeklyResults.matchup.franchise[0].player[j].id + ",";
					}
				} catch (er) {}
				ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id] = {};
				ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].TS = [];
				ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].IR = [];
				if (ls_best_lineup === 0) {
					ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].S = [];
					ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].NS = [];
				} else {
					ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].R = [];
				}
				try {
					for (var j = 0; j < scoringData.weeklyResults.matchup.franchise[1].player.length; j++) {
						switch (scoringData.weeklyResults.matchup.franchise[1].player[j].status) {
							case "starter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].S.push(scoringData.weeklyResults.matchup.franchise[1].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].R.push(scoringData.weeklyResults.matchup.franchise[1].player[j].id);
								break;
							case "nonstarter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].NS.push(scoringData.weeklyResults.matchup.franchise[1].player[j].id);
								else ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].R.push(scoringData.weeklyResults.matchup.franchise[1].player[j].id);
								break;
							case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].TS.push(scoringData.weeklyResults.matchup.franchise[1].player[j].id);
								break;
							case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.matchup.franchise[1].id].IR.push(scoringData.weeklyResults.matchup.franchise[1].player[j].id);
								break;
						}
						if (ls_player[scoringData.weeklyResults.matchup.franchise[1].player[j].id] === undefined) _missingPlayers += scoringData.weeklyResults.matchup.franchise[1].player[j].id + ",";
					}
				} catch (er) {}
			}
		} catch (er) {}
	//THERE MAY BE MORE THAN ONE MFL TEAM ON BYE
		try {
			for (var i = 0; i < scoringData.weeklyResults.franchise.length; i++) {
				ls_games.push("BYE," + scoringData.weeklyResults.franchise[i].id);
				if (_awayTeam === "") _awayTeam = "BYE";
				if (_homeTeam === "") _homeTeam = scoringData.weeklyResults.franchise[i].id;
				if (typeof franchise_id !== "undefined") {
					if (franchise_id === scoringData.weeklyResults.franchise[i].id) {
						_awayTeam = "BYE";
						_homeTeam = scoringData.weeklyResults.franchise[i].id;
					}
				}
				ls_rosters[scoringData.weeklyResults.franchise[i].id] = {};
				ls_rosters[scoringData.weeklyResults.franchise[i].id].TS = [];
				ls_rosters[scoringData.weeklyResults.franchise[i].id].IR = [];
				if (ls_best_lineup === 0) {
					ls_rosters[scoringData.weeklyResults.franchise[i].id].S = [];
					ls_rosters[scoringData.weeklyResults.franchise[i].id].NS = [];
				} else {
					ls_rosters[scoringData.weeklyResults.franchise[i].id].R = [];
				}
				try {
					for (var j = 0; j < scoringData.weeklyResults.franchise[i].player.length; j++) {
						switch (scoringData.weeklyResults.franchise[i].player[j].status) {
							case "starter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.franchise[i].id].S.push(scoringData.weeklyResults.franchise[i].player[j].id);
								else ls_rosters[scoringData.weeklyResults.franchise[i].id].R.push(scoringData.weeklyResults.franchise[i].player[j].id);
								break;
							case "nonstarter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.franchise[i].id].NS.push(scoringData.weeklyResults.franchise[i].player[j].id);
								else ls_rosters[scoringData.weeklyResults.franchise[i].id].R.push(scoringData.weeklyResults.franchise[i].player[j].id);
								break;
							case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.franchise[i].id].TS.push(scoringData.weeklyResults.franchise[i].player[j].id);
								break;
							case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.franchise[i].id].IR.push(scoringData.weeklyResults.franchise[i].player[j].id);
								break;
						}
						if (ls_player[scoringData.weeklyResults.franchise[i].player[j].id] === undefined) _missingPlayers += scoringData.weeklyResults.franchise[i].player[j].id + ",";
					}
				} catch (er) {}
			}
		} catch (er) { }
	//THERE MAY BE ONLY ONE MFL TEAM ON BYE
	try {
		if(scoringData.weeklyResults.franchise.id!==undefined) {
			ls_games.push("BYE," + scoringData.weeklyResults.franchise.id);
				if (_awayTeam === "") _awayTeam = "BYE";
				if (_homeTeam === "") _homeTeam = scoringData.weeklyResults.franchise.id;
				if (typeof franchise_id !== "undefined") {
					if (franchise_id === scoringData.weeklyResults.franchise.id) {
						_awayTeam = "BYE";
						_homeTeam = scoringData.weeklyResults.franchise.id;
					}
				}
				ls_rosters[scoringData.weeklyResults.franchise.id] = {};
				ls_rosters[scoringData.weeklyResults.franchise.id].TS = [];
				ls_rosters[scoringData.weeklyResults.franchise.id].IR = [];
				if (ls_best_lineup === 0) {
					ls_rosters[scoringData.weeklyResults.franchise.id].S = [];
					ls_rosters[scoringData.weeklyResults.franchise.id].NS = [];
				} else {
					ls_rosters[scoringData.weeklyResults.franchise.id].R = [];
				}
				try {
					for (var j = 0; j < scoringData.weeklyResults.franchise.player.length; j++) {
						switch (scoringData.weeklyResults.franchise.player[j].status) {
							case "starter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.franchise.id].S.push(scoringData.weeklyResults.franchise.player[j].id);
								else ls_rosters[scoringData.weeklyResults.franchise.id].R.push(scoringData.weeklyResults.franchise.player[j].id);
								break;
							case "nonstarter":
								if (ls_best_lineup === 0) ls_rosters[scoringData.weeklyResults.franchise.id].NS.push(scoringData.weeklyResults.franchise.player[j].id);
								else ls_rosters[scoringData.weeklyResults.franchise.id].R.push(scoringData.weeklyResults.franchise.player[j].id);
								break;
							case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.franchise.id].TS.push(scoringData.weeklyResults.franchise.player[j].id);
								break;
							case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
								ls_rosters[scoringData.weeklyResults.franchise.id].IR.push(scoringData.weeklyResults.franchise.player[j].id);
								break;
						}
						if (ls_player[scoringData.weeklyResults.franchise.player[j].id] === undefined) _missingPlayers += scoringData.weeklyResults.franchise.player[j].id + ",";
					}
				} catch (er) {}
			}
		} catch (er) { }
	});
	if (_missingPlayers !== "") {
		var url = baseURLDynamic + "/" + year + "/export?TYPE=players&L=" + league_id + "&PLAYERS=" + _missingPlayers + "&DETAILS=&SINCE&JSON=1&rand=" + Math.random();
		$.ajax({
			type: 'GET',
			url: url,
			async: false
		}).done(function(playerData) {
			try { //MULTIPLE MISSING PLAYERS
				for (var i = 0; i < playerData.players.player.length; i++) {
					ls_player[playerData.players.player[i].id] = new LSPlayer(playerData.players.player[i].id, playerData.players.player[i].name, playerData.players.player[i].position, playerData.players.player[i].team, playerData.players.player[i].position);
				}
			} catch (er) { //ONE MISSING PLAYER
				ls_player[playerData.players.player.id] = new LSPlayer(playerData.players.player.id, playerData.players.player.name, playerData.players.player.position, playerData.players.player.team, playerData.players.player.position);
			}
		});
	}
	ls_create_players_roster();
	switch_game(_homeTeam, _awayTeam);
	jQuery('#body_ajax_ls #container-wrap,#body_ajax_ls table[style="margin-top:4px"],#body_ajax_ls table#ls_ticker_tab_id,#body_ajax_ls table#ls_ticker_tab_id + p,#body_ajax_ls table#ls_ticker_tab_id + p + p,#body_ajax_ls p:last-of-type,#body_ajax_ls #ls_setting_drop,#body_ajax_ls #myNavigationHolder,#body_ajax_ls table.report + div.mobile-wrap').css('visibility', 'visible');
}

//FUNCTIONS USED IN NFL BOX
var ls_players_nfl = new Array();
var ls_players_roster = new Array();
function ls_create_players_roster() {
	for (var key in ls_rosters) {
		if (ls_rosters.hasOwnProperty(key)) {
			try {
				for (var i = 0; i < ls_rosters[key].S.length; i++) ls_players_roster[ls_rosters[key].S[i]] = ({
					fid: key,
					status: "S",
					title: "Starter"
				});
			} catch (er) {}
			try {
				for (var i = 0; i < ls_rosters[key].NS.length; i++) ls_players_roster[ls_rosters[key].NS[i]] = ({
					fid: key,
					status: "NS",
					title: "Non-Starter"
				});
			} catch (er) {}
			try {
				for (var i = 0; i < ls_rosters[key].IR.length; i++) ls_players_roster[ls_rosters[key].IR[i]] = ({
					fid: key,
					status: "IR",
					title: "Fantasy IR"
				});
			} catch (er) {}
			try {
				for (var i = 0; i < ls_rosters[key].TS.length; i++) ls_players_roster[ls_rosters[key].TS[i]] = ({
					fid: key,
					status: "TS",
					title: "Taxi Squad"
				});
			} catch (er) {}
			try {
				for (var i = 0; i < ls_rosters[key].R.length; i++) ls_players_roster[ls_rosters[key].R[i]] = ({
					fid: key,
					status: "R",
					title: "Reserve"
				});
			} catch (er) {}
		}
	}
}

function ls_nfl_stats_popup(nfl) {
	//WE NEED TO HIT PLAYER API TO GET ALL PLAYERS FOR NFL TEAM SINCE MANY ARE UNDEFINED
	if (ls_players_nfl[nfl] === undefined) {
		ls_players_nfl[nfl] = new Array();
		var url = baseURLDynamic + "/" + year + "/export?TYPE=players&L=" + league_id + "&PLAYERS=&DETAILS=&SINCE&JSON=1&rand=" + Math.random();
		$.ajax({
			type: 'GET',
			url: url,
			async: false
		}).done(function(playerData) {
			for (var i = 0; i < playerData.players.player.length; i++) {
				if (playerData.players.player[i].team === nfl) {
					if (ls_team_pos[playerData.players.player[i].position] !== undefined) {
						ls_players_nfl[nfl][playerData.players.player[i].id] = ({
							"name": playerData.players.player[i].name,
							"position": playerData.players.player[i].position,
							"isTeam": ls_team_pos[playerData.players.player[i].position],
							"isDefense": ls_def_pos[playerData.players.player[i].position]
						});
					}
				}
				if (ls_player[playerData.players.player[i].id] === undefined) ls_player[playerData.players.player[i].id] = new LSPlayer(playerData.players.player[i].id, playerData.players.player[i].name, playerData.players.player[i].position, playerData.players.player[i].team, playerData.players.player[i].position);
			}
		});
	}
	var content_str = "";
	content_str += '<ul class="ls-popup-position-ul">';
	for (var pos in ls_team_pos) {
		content_str += '<li class="ls-popup-position-li">' + pos + '</li>';
		content_str += '<ul class="ls-popup-player-ul">';
		var position_html = [];
		for (var key in ls_players_nfl[nfl]) {
			if (ls_players_nfl[nfl].hasOwnProperty(key)) {
				if (pos === ls_players_nfl[nfl][key].position) {
					try {
						if (ls_team_pos[pos] === 1 && ls_def_pos[pos] === 1) var stats_str = get_tstats_str(nfl);
						else if (ls_team_pos[pos] === 1 && ls_def_pos[pos] !== 1) var stats_str = get_otstats_str(nfl);
						else var stats_str = get_stats_str(key);
					} catch(er) {
						var stats_str = '';
					}
					if (stats_str !== '') {
						var _points = parseFloat(update_player_points(key));
						var _name = ls_players_nfl[nfl][key].name.substr(ls_players_nfl[nfl][key].name.indexOf(",") + 2, ls_players_nfl[nfl][key].name.length) + ' ' + ls_players_nfl[nfl][key].name.substr(0, ls_players_nfl[nfl][key].name.indexOf(","));
						var _icon = '';
						var _text = '';
						if (ls_players_roster[key] !== undefined) {
							if(ls_popup_status) _name += '<span class="ls-popup-status ls-popup-status-' + ls_players_roster[key].status.toLowerCase() + '" title="' + ls_players_roster[key].title + '">' + ls_players_roster[key].status + '</span>';
							switch (ls_popup_abbrev_name_icon) {
								case 0:
									if (franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev === '') var _text = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '</span>';
									else var _text = '<span class="ls-popup-text" title="' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev + '</span>';
									break;
								case 1:
									var _text = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '</span>';
									break;
								case 2:
									if (franchiseDatabase["fid_" + ls_players_roster[key].fid].icon === '') {
										if (franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev === '') var _text = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '</span>';
										else var _text = '<span class="ls-popup-text" title="' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev + '</span>';
									} else var _icon = '<span class="ls-popup-icon-wrapper"><img class="ls-popup-icon" src=' + franchiseDatabase["fid_" + ls_players_roster[key].fid].icon + ' title="' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '" alt="" /></span>';
									break;
							}
						}
						position_html.push({
							points: _points,
							html: '<li class="ls-popup-player-li"><span class="ls-popup-points" style="cursor:pointer" title="Click to View Details" onclick="ls_explain_points(\''+key+'\')">' + format_points(_points) + '</span> ' + _name + _icon + _text + ' <span class="ls-popup-stats">' + stats_str + '</span></li>'
						});
					}
				}
			}
		}
		//sort hi point-getter to low point-getter
		position_html.sort(function(a, b) {
			return b.points - a.points
		});
		for (var i = 0; i < position_html.length; i++) {
			content_str += position_html[i].html;
		}
		content_str += '</ul>';
	}
	content_str += '</ul>';
	jQuery("#ls-modal-header-content").html('Live Stats for ' + nfl);
	jQuery("#ls-modal-content").html(content_str);
	jQuery("#ls-modal-container").attr('style', 'display:block');
	jQuery('#ls-modal-content').scrollTop(0);
}

var ls_nfl_final = 0;
var ls_nfl_sched = 0;
function ls_update_nfl_box() {
	for (var key in ls_nfl_games) {
		if (ls_nfl_games.hasOwnProperty(key)) {
			if (ls_nfl_games[key].where === "home") {
				//as games kickoff there is an error in game_status that breaks script so we need to error check
				try { // IGNORE ON ERROR
					var key2 = ls_nfl_games[key].opp;
					var _yardStatus = '';
					var _gameStatus = ls_nfl_games[key].game_status.substring(ls_nfl_games[key].game_status.indexOf("<br>") + 4, ls_nfl_games[key].game_status.length);
					if (_gameStatus.indexOf("<br>") !== -1) {
						_yardStatus = '<div class="ls_down_dist" style="font-size:9px;font-style:italic">' + _gameStatus.substring(_gameStatus.indexOf("<br>") + 4, _gameStatus.length) + '</div>';
						_gameStatus = _gameStatus.substring(0, _gameStatus.indexOf("<br>"));
					}
					var _ptsScored_home = "";
					var _ptsScored_away = "";
					try { _ptsScored_home = '<span class="ls-nfl-record" style="font-size:10px;font-style:italic">('+ls_nfl_records[key].w +'-'+ls_nfl_records[key].l +'-'+ls_nfl_records[key].t+ ')</span>'; } catch(er) {}
					try { _ptsScored_away = '<span class="ls-nfl-record" style="font-size:10px;font-style:italic">('+ls_nfl_records[key2].w+'-'+ls_nfl_records[key2].l+'-'+ls_nfl_records[key2].t+')</span>'; } catch(er) {}
					if (ls_tstats.hasOwnProperty(key))
						if (ls_tstats[key].TPS !== undefined) _ptsScored_home = ls_tstats[key].TPS;
					if (ls_tstats.hasOwnProperty(key2))
						if (ls_tstats[key2].TPS !== undefined) _ptsScored_away = ls_tstats[key2].TPS;
					jQuery(".nflgffpts_" + key).html(_ptsScored_home);
					jQuery(".nflgffpts_" + key2).html(_ptsScored_away);
					jQuery("#ls_nfl_box_status_" + key).removeClass('ls_nfl_box_over ls_nfl_box_sched ls_nfl_box_inprog');
					jQuery(".ls_box_possession_" + key).removeClass('ls_nothas_ball ls_in_redzone ls_has_ball');
					jQuery(".ls_box_possession_" + key2).removeClass('ls_nothas_ball ls_in_redzone ls_has_ball');
					if (ls_nfl_games[key].secs_left === 0 || _gameStatus === "Final") {
						jQuery("#ls_nfl_box_status_" + key).addClass('ls_nfl_box_over');
						jQuery(".ls_down_dist_" + key).html("");
						jQuery(".ls_down_dist_" + key2).html("");
					} else if (ls_nfl_games[key].secs_left === 3600) {
						jQuery("#ls_nfl_box_status_" + key).addClass('ls_nfl_box_sched');
					} else {
						jQuery("#ls_nfl_box_status_" + key).addClass('ls_nfl_box_inprog');
						// CHECK ORIGINAL class .game_TEAMABBR FOR POSSESSION THEN APPLY TO NFL BOX
						if (jQuery(".ls-update-box.game_" + key).hasClass("ls_noposs")) {
							jQuery(".ls_box_possession_" + key).addClass("ls_nothas_ball");
							jQuery(".ls_down_dist_" + key).html("");
						}
						if (jQuery(".ls-update-box.game_" + key).hasClass("ls_redzone")) {
							jQuery(".ls_box_possession_" + key).addClass("ls_in_redzone");
							jQuery(".ls_down_dist_" + key).html(_yardStatus);
						}
						if (jQuery(".ls-update-box.game_" + key).hasClass("ls_withposs")) {
							jQuery(".ls_box_possession_" + key).addClass("ls_has_ball");
							jQuery(".ls_down_dist_" + key).html(_yardStatus);
						}
						if (jQuery(".ls-update-box.game_" + key2).hasClass("ls_noposs")) {
							jQuery(".ls_box_possession_" + key2).addClass("ls_nothas_ball");
							jQuery(".ls_down_dist_" + key2).html("");
						}
						if (jQuery(".ls-update-box.game_" + key2).hasClass("ls_redzone")) {
							jQuery(".ls_box_possession_" + key2).addClass("ls_in_redzone");
							jQuery(".ls_down_dist_" + key2).html(_yardStatus);
						}
						if (jQuery(".ls-update-box.game_" + key2).hasClass("ls_withposs")) {
							jQuery(".ls_box_possession_" + key2).addClass("ls_has_ball");
							jQuery(".ls_down_dist_" + key2).html(_yardStatus);
						}
					}
					jQuery("#ls_nfl_box_status_" + key).html(_gameStatus);
					if (_gameStatus === "Final") {
						try {
							if (parseInt(ls_tstats[key].TPS) > parseInt(ls_tstats[key2].TPS)) {
								jQuery(".nflggstat_" + key).html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
								jQuery(".nflggstat_" + key).parent().addClass('winner_mark');
							} else if (parseInt(ls_tstats[key2].TPS) > parseInt(ls_tstats[key].TPS)) {
								jQuery(".nflggstat_" + key2).html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
								jQuery(".nflggstat_" + key2).parent().addClass('winner_mark');
							}
						} catch (er) {}
					}
				} catch(er) {}
			}
		}
	}
	//GAME RE-ORDER LIVE GAME / FUTURE GAME / GAME OVER
	var html_live = '';
	var html_future = '';
	var html_over = '';
	var html_other = '';
	var ls_nfl_final_temp = 0;
	var ls_nfl_sched_temp = 0;
	jQuery("#nfl_games tr td div.ls_other_game").each(function() {
		var _homeId = $(this).attr("id").substr(5, 3);
		var html_temp = '<div id="nflg_' + _homeId + '" class="ls_other_game" style="display:inline-block;margin:0 2px;min-width:110px;cursor:default;width:auto">' + $(this).html() + '</div>';
		switch (ls_nfl_games[_homeId].status) {
			case "INPROG":
				html_live += html_temp;
				break;
			case "OVER":
				html_over += html_temp;
				ls_nfl_final_temp++;
				break;
			case "SCHED":
				html_future += html_temp;
				ls_nfl_sched_temp++;
				break;
			default: html_other += html_temp;
		}
	});
	//ONLY RE-ORDER IF NEW GAME HAS GONE FINAL OR NEW GAME HAS STARTED
	if(ls_nfl_final_temp>ls_nfl_final || ls_nfl_sched_temp < ls_nfl_sched) {
		var html = '';
		html += html_live;
		html += html_future;
		html += html_over;
		html += html_other;
		jQuery("#nfl_games tr td").html(html);
		ls_nfl_final = ls_nfl_final_temp;
		ls_nfl_sched = ls_nfl_sched_temp;
	}
}

function ls_create_nfl_box() {
	var html = '';
	if (jQuery("#hide_nfl_boxscore_cb").is(':checked'))
		html += '<div class="mobile-wrap ls-boxscore ls-nfl-boxscore" style="margin-top:5px;text-align:center;display:none"><div class="ls_scroller">';
	else
		html += '<div class="mobile-wrap ls-boxscore ls-nfl-boxscore" style="margin-top:5px;text-align:center"><div class="ls_scroller">';
	html += '<table id="nfl_games" style="table-layout:fixed;font-size:13px" border="0" cellpadding="0" cellspacing="2"><tbody><tr><td>';
	//GAME ORDER LIVE GAME / FUTURE GAME / GAME OVER
	var html_live = '';
	var html_future = '';
	var html_over = '';
	var html_other = '';
	for (var key in ls_nfl_games) {
		if (ls_nfl_games.hasOwnProperty(key)) {
			if (ls_nfl_games[key].where === "home") {
				var key2 = ls_nfl_games[key].opp;
				var html_temp = '';
				html_temp += '<div id="nflg_' + key + '" class="ls_other_game" style="display:inline-block;margin:0 2px;min-width:110px;cursor:default;width:auto">';
				html_temp += '<table border="0" cellspacing="0" cellpadding="0">';
				html_temp += '<tbody>';
				html_temp += '<tr onclick="ls_nfl_stats_popup(\'' + key2 + '\')" title="Live Stats for ' + key2 + '"><td style="position:relative;height:22px" class="ls_og_cell ls_box_possession ls_box_possession_' + key2 + '"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + key2 + '.svg" class="ls_nfl_box_icon" style="height:30px;max-width:20px;max-height:20px;" alt="' + key2 + '" title="' + key2 + '" /><span class="ls-update-box game_' + key2 + '" style="display:none"></span></td><td style="font-size:9px;font-style:italic;text-align:left" class="ls_down_dist_' + key2 + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + key2 + '">0</div></td><td style="border:none;"><div style="width:2px" class="nflggstat nflggstat_' + key2 + '">&nbsp;</div></td></tr>';
				html_temp += '<tr onclick="ls_nfl_stats_popup(\'' + key  + '\')" title="Live Stats for ' + key  + '"><td style="position:relative;height:22px" class="ls_og_cell ls_box_possession ls_box_possession_' + key  + '"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + key  + '.svg" class="ls_nfl_box_icon" style="height:30px;max-width:20px;max-height:20px;" alt="' + key  + '" title="' + key  + '" /><span class="ls-update-box game_' + key  + '" style="display:none"></span></td><td style="font-size:9px;font-style:italic;text-align:left" class="ls_down_dist_' + key  + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + key  + '">0</div></td><td style="border:none;"><div style="width:2px" class="nflggstat nflggstat_' + key  + '">&nbsp;</div></td></tr>';
				html_temp += '<tr><td class="ls_og_cell_status" colspan="4" style="height:16px"><span id="ls_nfl_box_status_' + key + '" class="ls_nfl_box_status" style="font-size:11px">Gametime</span></td></tr>';
				html_temp += '</tbody>';
				html_temp += '</table>';
				html_temp += '</div>';
				switch (ls_nfl_games[key].status) {
					case "INPROG":
						html_live += html_temp;
						break;
					case "OVER":
						html_over += html_temp;
						ls_nfl_final++;
						break;
					case "SCHED":
						html_future += html_temp;
						ls_nfl_sched++;
						break;
					default: html_other += html_temp;
				}
			}
		}
	}
	html += html_live;
	html += html_future;
	html += html_over;
	html += html_other;
	html += '</td></tr></tbody></table>';
	html += '</div>';
	jQuery(".settings-mobile-wrap").after(html);
}

function ls_explain_points(pid){
        jQuery("#ls-modal-container").addClass('hide-overlay');
	var html = '';
	var pos = ls_player[pid].pos;
	if(ls_includeProjections) {
		var gsr = isNaN(ls_nfl_games[ls_player[pid].nfl_team].secs_left) ? 0 : ls_nfl_games[ls_player[pid].nfl_team].secs_left;
		var proj = isNaN(parseFloat(ls_projections['pid_' + pid])) ? 0 : parseFloat(ls_projections['pid_' + pid]);
	}
	var pts = 0;
	ls_explain = "";
	if(ls_team_pos[pos] === 1) {
		var nfl_team = ls_player[pid].nfl_team;
		if(ls_tstats[nfl_team] !== undefined) {
			points = score_player(nfl_team,pos);
		}
	} else if(ls_team_pos[pos] === 0 && ls_stats[pid] !== undefined) {
		points = score_player(pid,pos);
	}
	html+= '<div class="ls-explain-points-wrapper" style="padding-left:40px"><div class="ls-explain-points-name" style="font-size:14px;margin-left:-20px;padding-bottom:8px;font-weight:bold">'+ls_player[pid].name+" "+ls_player[pid].nfl_team+" "+ls_player[pid].pos+'</div>';
	if(ls_explain !== "") {
		html+= '<ul class="ls-explain-points-ul">';
		var stats = ls_explain.split("|");
		for (i = 0; i < stats.length; i++) {
			if(stats[i] !== "") {
				var fields = stats[i].split(",");
		try { pts+=parseFloat(fields[2]);} catch(er) {}
				html+= '<li class="ls-explain-points-li">' + fields[2] + " points for " + fields[1] + " ";
				if(ls_cat_desc[fields[0]] !== undefined) {
					html+= ls_cat_desc[fields[0]];
				} else {
					html+= fields[0];
				}
				html+= "</li>";
			}
		}
		html+= '</ul>';
		html+= '<div class="ls-explain-points-total" style="font-size:16px;margin-left:-20px;padding-top:8px;font-weight:bold">'+format_points(pts)+'</div>';
	} else {
		html+= '<div class="ls-explain-no-stats">No stats</div>';
	}
	if(ls_includeProjections) {
		var pace = pts + ((gsr / 3600) * proj);
		if ($('input[name="hide_projections"]').is(':checked'))
			html+= '<div class="ls_projections" style="display:none">';
		else
			html+= '<div class="ls_projections">';
		html+= '<hr style="margin:10px 5px 10px -36px;border-color:#555">';
		if(gsr===3600)
			html+= '<div class="ls-explain-points-orig-proj" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:44px">'+format_points(proj)+'</span></div>';
		else if(gsr===0) {
			html+= '<div class="ls-explain-points-orig-proj" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:44px">'+format_points(proj)+'</span></div>';
			if((pts-proj)<0)
				html+= '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_below_projected" style="display:inline-block;text-align:right;min-width:44px">'+format_points(pts-proj)+'</span></div>';
			else
				html+= '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_above_projected" style="display:inline-block;text-align:right;min-width:44px">+'+format_points(pts-proj)+'</span></div>';
		} else {
			html+= '<div class="ls-explain-points-orig-proj" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:44px">'+format_points(proj)+'</span></div>';
			html+= '<div class="ls-explain-points-pace" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Pace Points :</span><span style="display:inline-block;text-align:right;min-width:44px">'+format_points(pace)+'</span></div>';
			if((pace-proj)<0)
				html+= '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_below_projected" style="display:inline-block;text-align:right;min-width:44px">'+format_points(pace-proj)+'</span></div>';
			else
				html+= '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_above_projected" style="display:inline-block;text-align:right;min-width:44px">+'+format_points(pace-proj)+'</span></div>';
		}
		html+= '</div>';
	}
	html+='</div>';

	jQuery("#ls-modal-container-2 #ls-modal-header-content").html('Points Breakdown');
	jQuery("#ls-modal-container-2 #ls-modal-content").html(html);
	jQuery("#ls-modal-container-2").attr('style', 'display:block');
	jQuery('#ls-modal-container-2 #ls-modal-content').scrollTop(0);
}

if (document.getElementById("body_ajax_ls")) {
	// MFL Live Scoring Page Formatting
	jQuery('h4:first').remove();
	jQuery('#other_games').wrap('<div class="mobile-wrap ls-boxscore"></div>');
	jQuery('.ls-boxscore #other_games').wrap('<div class="ls_scroller"></div>');
	jQuery('table').has('div.ls-boxscore').addClass('ls-outer-table');
	jQuery('td.mobile-view').wrapInner('<div class="mobile-wrap ls-matchup"></div>');
	jQuery('td').has('div.ls-boxscore').css({
		"padding": "0",
		"text-align": "center"
	});
	jQuery('div.mobile-wrap:first table:first').unwrap();
	jQuery('p').wrapAll('<div class="mobile-wrap ls-btm-table"></div>');
	jQuery('div.mobile-wrap > table.ls-outer-table').unwrap();
	jQuery('.ls_marquee_label:contains("Playing")').addClass('playing').text('P');
	jQuery('.ls_marquee_label:contains("Yet"):contains("to"):contains("Play")').addClass('ytp').text('YTP');
	jQuery('.ls_marquee_label:contains("Minutes"):contains("Remaining")').addClass('pmr').text('PMR');
	// REMEMBER CHECK BOX FOR NFL BOXSCORES
	if (localStorage["ls_includeNFLBox_" + league_id] === "1") jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_nfl_boxscore" checked="checked" id="hide_nfl_boxscore_cb" onclick="ls_hide_nfl_boxscore(this)"> Hide NFL');
	else jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_nfl_boxscore" id="hide_nfl_boxscore_cb" onclick="ls_hide_nfl_boxscore(this)"> Hide NFL');
	// REMEMBER CHECKBOX FOR PROJECTIONS
	if (ls_includeProjections) {
		if (localStorage["ls_includeProjections_" + league_id] === "1") jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_projections" checked="checked" id="hide_projections_cb" onclick="ls_hide_projections(this)"> Hide Pace');
		else jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_projections" id="hide_projections_cb" onclick="ls_hide_projections(this)"> Hide Pace');
	}
	jQuery('<div id="ls_setting_drop"><div class="settings-mobile-wrap"><div class="ls_setting_container"><span class="ls_toggle_settings" style="cursor:pointer;font-size:16px;padding-left:5px;width:100%;display:block;"><i class="fa fa-cogs" aria-hidden="true"></i> Settings</span><div class="ls_append_input" style="display:none;margin-left:5px"></div></div></div></div>').insertBefore('.ls-outer-table');
	jQuery('input#hide_nonstarters_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_nonstarters_cb">Bench</label>');
	jQuery('input#hide_game_info_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_game_info_cb">Games</label>');
	jQuery('input#hide_stats_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_stats_cb">Stats</label>');
	jQuery('input#hide_ticker_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_ticker_cb">Ticker</label>');
	jQuery('input#hide_nfl_boxscore_cb').wrap('<div class="hide_bench" id="ls_nfl_boxscore_wrapper"></div>').after('<label for="hide_nfl_boxscore_cb">NFL</label>');
	if (ls_includeProjections) jQuery('input#hide_projections_cb').wrap('<div class="hide_bench" id="ls_pace_wrapper"></div>').after('<label for="hide_projections_cb">Pace</label>');
	jQuery('.hide_bench').appendTo('.ls_append_input');
	jQuery('#ls_setting_drop .ls_toggle_settings').on("click", function () {
		$(".ls_append_input").slideToggle('500');
	});
	// Toggle class when player stats not selected to remove padding
	jQuery('input[name="hide_stats"]').on("click", function () {
		$('#roster_away td, #roster_home td').toggleClass('td-pad');
	});
	// Move MFL page bottom notes to live ticker table
	jQuery('<div id="ls_mfl_notes"><div class="ls_update_msg" style="display:inline;text-align:center">Data last updated on: </div> , stats will update roughly every 40 seconds while games are in progress.<br>Stats are unofficial and subject to change. Official results can be viewed on <a href="' + baseURLDynamic + '/' + year + '/options?L=' + league_id + '&O=22" target="_blank">Weekly Results</a></div>').insertAfter('#ls_ticker_tab_id');
	if (ls_orig_proj_when_final) jQuery('#ls_mfl_notes').append('<br><span class="ls_projections ls_pace_legend"><span class="ls_pace_legend_title" style="padding:0 3px">Pace Legend:</span><span class="ls_above_projected" style="padding:0 3px">Above Projected</span><span class="ls_below_projected" style="padding:0 3px">Below Projected</span><span class="ls_at_projected" style="padding:0 3px">At Projected</span><span class="ls_projected" style="padding:0 3px">Original Projection</span></span>');
	jQuery('#last_update').appendTo('.ls_update_msg');
	jQuery('div.ls-btm-table').remove();
	jQuery('tr').has('.ls-matchup').addClass('ls_players_table');
	jQuery('<tr><td id="LS_TopTableHolder" colspan="2"><div class="mobile-wrap"><table class="LS_MainScoreboard" style="table-layout:fixed"><tbody><tr><td id="LS_AwayTeamName" class="ls-bye-hide"></td><td colspan="6" rowspan="2" id="LS_CenterTop" class="ls-bye-hide"><span class="hometeam ls-bye-hide">HOME</span><span class="awayteam ls-bye-hide">AWAY</span></td><td id="LS_HomeTeamName"></td></tr><tr><td id="LS_AwayTeamRecord" class="ls-bye-hide">0-0-0</td><td id="LS_HomeTeamRecord">0-0-0</td></tr><tr><td rowspan="2" id="LS_AwayScore" class="ls-bye-hide"></td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Currently Playing">P</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle" title="Players Currently Playing">P</td><td rowspan="2" id="LS_HomeScore"></td></tr><tr><td id="LS_AwayPlayers" class="prmin ls-bye-hide" title="Players Currently Playing"></td><td id="LS_AwayYTP" class="prmin ls-bye-hide" title="Players Yet to Play"></td><td id="LS_AwayPMR" class="prmin ls-bye-hide" title="Player Minutes Remaining"></td><td id="LS_HomePMR" class="prmin" title="Player Minutes Remaining"></td><td id="LS_HomeYTP" class="prmin" title="Players Yet to Play"></td><td id="LS_HomePlayers" class="prmin" title="Players Currently Playing"></td></tr></tbody></table></div></td></tr>').insertBefore('.ls_players_table');
	jQuery('#LS_TopTableHolder #LS_AwayTeamName').append($('#ficon_away'));
	jQuery('#LS_TopTableHolder #LS_HomeTeamName').append($('#ficon_home'));
	jQuery('#LS_TopTableHolder #LS_AwayTeamName').append($('#fname_away'));
	jQuery('#LS_TopTableHolder #LS_HomeTeamName').append($('#fname_home'));
	jQuery('#LS_TopTableHolder #LS_AwayScore').append($('#ffpts_away'));
	jQuery('#LS_TopTableHolder #LS_HomeScore').append($('#ffpts_home'));
	jQuery('#LS_TopTableHolder #LS_AwayPlayers').append($('#playing_away'));
	jQuery('#LS_TopTableHolder #LS_HomePlayers').append($('#playing_home'));
	jQuery('#LS_TopTableHolder #LS_AwayYTP').append($('#ytp_away'));
	jQuery('#LS_TopTableHolder #LS_HomeYTP').append($('#ytp_home'));
	jQuery('#LS_TopTableHolder #LS_AwayPMR').append($('#pmr_away'));
	jQuery('#LS_TopTableHolder #LS_HomePMR').append($('#pmr_home'));
	jQuery('#LS_AwayTeamName,#LS_AwayTeamRecord,#LS_AwayScore').on("click", function () {
		$('.ls_players_table td.mobile-view:last-of-type').css("display", "none");
		$('.ls_players_table td.mobile-view:first-of-type').css("display", "table-cell");
		$('#LS_AwayTeamName div').css("opacity", "1");
		$('#LS_HomeTeamName div').css("opacity", ".3");
	});
	jQuery('#LS_HomeTeamName,#LS_HomeTeamRecord,#LS_HomeScore').on("click", function () {
		$('.ls_players_table td.mobile-view:first-of-type').css("display", "none");
		$('.ls_players_table td.mobile-view:last-of-type').css("display", "table-cell");
		$('#LS_HomeTeamName div').css("opacity", "1");
		$('#LS_AwayTeamName div').css("opacity", ".3");
	});
	if (ls_scoreboardName) {
		jQuery("#LS_CenterTop").html("<span class='hometeam ls-bye-hide'>HOME</span><span class='awayteam ls-bye-hide'>AWAY</span>" + ls_scoreboardName);
	}
	if (!showTeamName) {
		jQuery("#fname_away,#fname_home").css('display', 'none');
	}
	if (!showTeamIcon) {
		jQuery("#ficon_away,#ficon_home").css('display', 'none');
	}
	ls_parse_standings(); // ONE TIME CALL TO POPULATE RECORDS
	if (ls_includeProjections) ls_parse_projections(); //ONLY PARSE PROJECTIONS IF ENABLED
	if (ls_includeInjuryStatus) ls_parse_injuries(); //ONLY PARSE INJURIES IF ENABLED
	var ls_is_live_week = true;
	if (typeof ls_liveScoringWeekCheck !== "undefined") {
		ls_navbar();
		if (location.href.indexOf("W=") === -1) {
			if(liveScoringWeek<1) var _liveScoringWeek = 1; else var _liveScoringWeek = liveScoringWeek;
		} else 
			var _liveScoringWeek = parseInt(location.href.substr(location.href.indexOf("W=") + 2, 2));
		if (liveScoringWeek !== _liveScoringWeek) ls_is_live_week = false;
	}
	if (ls_is_live_week) {
		ls_update_nfl_records(); //ONE TIME CALL TO CREATE NFL RECORDS FOR NFL BOX SCORE
		ls_create_players_roster(); //ONE TIME CALL TO CREATE MFL ROSTERS OF PLAYERS
		setTimeout("ls_scoring_run()", 50); //THIS NEEDS TO RUN ON PAGE LOAD
		if (ls_includeProjections) {
			setTimeout("ls_projections_html()", 1000); // NEED TO ADD NFL ICONS ON INITIAL LOAD
			setTimeout("ls_update_projections()", 1000); // NEED TO UPDATE PROJECTIONS ON INITIAL LOAD
		}
		if (ls_includeInjuryStatus) setTimeout("ls_update_injuries()", 1000); // NEED TO UPDATE INJURIES ON INITIAL LOAD
		ls_add_icons(); // ADD ICONS TO SCOREBOARD; ONE TIME ONLY
		ls_add_caption();
		setTimeout("ls_format_score()", 1000); // NECESSARY FOR INITIAL LOAD
		setTimeout("ls_add_records()", 1500); // NECESSARY FOR INITIAL LOAD
		setTimeout("ls_check_if_final()", 2000); // NECESSARY FOR INITIAL LOAD
		if (ls_excludeIR) setTimeout("ls_removeIR()", 1000); // NEED TO REMOVE PLAYER ON FANTASY IR, IF SET, ON INITIAL LOAD
		if (ls_excludeTaxi) setTimeout("ls_removeTaxi()", 1000); // NEED TO REMOVE PLAYER ON TAXI, IF SET, ON INITIAL LOAD
		ls_create_nfl_box();
		ls_update_nfl_box();
	} else {
		ls_timeout = 0; //PREVENT UPDATES WHEN NOT ON LIVE WEEK
		setTimeout("ls_update_week()", 1000);
		setTimeout("ls_update_all = 1", 1050); //PREVENT HIGHLIGHTS WHEN NOT ON LIVE WEEK
		setTimeout("ls_create_nfl_box()", 1100);
		setTimeout("ls_update_nfl_box()", 1200);
	}
	//APPEND OUR FUNCTION TO MFLS' update_scores() FUNCTION
update_scores = (function() {
	var cached_function = update_scores;
	return function() {
		$(".ls_team_points span,.ls_team_points a").contents().unwrap();
		$(".ls_team_points a:empty").remove();
		cached_function.apply(this, arguments);
		ls_after_update_scores();
		$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
	};
}());
	if (ls_is_live_week) {
		setTimeout(function() {
			jQuery('#body_ajax_ls #container-wrap,#body_ajax_ls table[style="margin-top:4px"],#body_ajax_ls table#ls_ticker_tab_id,#body_ajax_ls table#ls_ticker_tab_id + p,#body_ajax_ls table#ls_ticker_tab_id + p + p,#body_ajax_ls p:last-of-type,#body_ajax_ls #ls_setting_drop,#body_ajax_ls #myNavigationHolder,#body_ajax_ls table.report + div.mobile-wrap').css('visibility', 'visible');
		}, 2500);		
	}
	jQuery("document").ready(function() {
		setTimeout(function() {
			$("div.current_matchup").trigger('click');
		}, 100);
		setTimeout(function() {
			$("div.current_matchup").trigger('click');
		}, 1000);
		setTimeout(function() {
			$("div.current_matchup").trigger('click');
		}, 2000);
		setTimeout(function() {
			$("div.current_matchup").trigger('click');
		}, 3000);
	});
	//SIMPLE MODAL
	jQuery("body").append('<div id="ls-modal-container" class="ls-modal"><div class="ls-modal-content"><div class="ls-modal-header"><span class="close" onclick="jQuery(\'#ls-modal-container\').removeAttr(\'style\')">X</span><h2 id="ls-modal-header-content"></h2></div><div class="ls-modal-body"><p id="ls-modal-content"></p></div></div></div><div id="ls-modal-container-2" class="ls-modal"><div class="ls-modal-content"><div class="ls-modal-header"><span class="close" onclick="jQuery(\'#ls-modal-container-2\').removeAttr(\'style\');jQuery(\'#ls-modal-container\').removeClass(\'hide-overlay\')">X</span><h2 id="ls-modal-header-content"></h2></div><div class="ls-modal-body"><p id="ls-modal-content"></p></div></div></div>');
	jQuery("#ls-modal-container").on("click", function () {
		$("#ls-modal-container").css('display', 'none');
	});
	//jQuery("#ls-modal-container-2").on("click", function () {
		//$("#ls-modal-container-2").css('display', 'none');
	//});
        jQuery("#ls-modal-container-2").on("click", function () { $("#ls-modal-container-2").css('display', 'none');$('#ls-modal-container').removeClass('hide-overlay') });
	jQuery(".ls-modal-content").on("click", function (e) {
		e.stopPropagation();
	});
	// Stop highlight on initial page load
	setTimeout("clear_highlights()", 500);
}

// Deftect mobile devices and remove custom scrollbar css that add heights on mobiles
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var style = document.createElement('style');
	document.head.appendChild(style);
	style.sheet.insertRule('::-webkit-scrollbar{display:none}');
}

//**********************************************
//
//   UPDATED/EDITED MFL LIVESCORING FUNCTIONS 
//
//**********************************************

// RE-WRITE OF MFL'S init_marquee TO ELIMINATE
function init_marquee (which, fid) {
	var fidkey = "fid_" + fid;
	var icon = "";
	if(fid == 'BYE' || fid == 'AVG') {
		if(fid == 'BYE') {
			load_elem("fname_" + which, "BYE");
			update_field("ffpts_" + which, "&nbsp;");
		}
		else {
			load_elem("fname_" + which, "Average");
			ls_avg_field = "ffpts_" + which;
			ls_do_avg = 1;
			update_field(ls_avg_field, "&nbsp;");
		}
		load_elem("ficon_" + which, "&nbsp;");
		update_field("playing_" + which, "&nbsp;");
		update_field("ytp_" + which, "&nbsp;");
		update_field("pmr_" + which, "&nbsp;");
	}
	else if(franchiseDatabase[fidkey].icon != undefined) {
		if(franchiseDatabase[fidkey].icon.length > 1) {
			icon = '<img src="' + franchiseDatabase[fidkey].icon + 
				'" ' + ls_icon_dim + ' id="franchiseicon_' + fid + 
				'" class="franchiseicon" />';
		}
		load_elem("ficon_" + which, icon);
		load_elem("fname_" + which, franchiseDatabase[fidkey].name);
		update_field("ffpts_" + which, format_points(ls_fran_totals[fid].total));
		update_field("playing_" + which, ls_fran_totals[fid].playing);
		update_field("ytp_" + which, ls_fran_totals[fid].ytp);
		update_field("pmr_" + which, format_time_rem(ls_fran_totals[fid].pmr));
		//update_field("proj_" + which, ls_fran_totals[fid].proj);
	}
}
// RE-WRITE OF MFL'S update_game_status TO GET NFL ICONS TO APPEAR 
function update_game_status (team) {
	var opp = ls_nfl_games[team].opp;
	if(liveScoringWeek<1) var _liveScoringWeek = 1; else var _liveScoringWeek = liveScoringWeek;
	var game_status = '<a target="new" href="pro_matchup?L=' + league_id + '&W=' + _liveScoringWeek + '&MATCHUP=';
	var poss_class = "";
	var custom_game_status_class = ""; //NEW ADDITION HERE AND ALL OCCURRENCES BELOW
	var custom_is_half = false; //NEW ADDITION HERE AND ALL OCCURRENCES BELOW
	if(ls_nfl_games[team].time === 0) {
		game_status = "BYE";
		ls_nfl_games[team].secs_left = 0;
		ls_nfl_games[team].status = "BYE";
		custom_game_status_class = "ls_gameis_over";
	} else if (ls_nfl_games[team].time > ls_last_update_secs) {
		if(ls_nfl_games[team].where === 'away') {
			game_status = game_status + team + '%2C' + opp + '" title="View NFL Game Boxscore"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon">&nbsp;@&nbsp;<img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp + '.svg" class="ls_nfl_icon">';
		} else {
			game_status = game_status + opp  + '%2C' + team + '" title="View NFL Game Boxscore"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp  + '.svg" class="ls_nfl_icon">&nbsp;v&nbsp;<img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon">';
		}
		game_status = game_status + "</a><br>" + ls_nfl_games[team].pretty_time;
		ls_nfl_games[team].secs_left = 3600;
		ls_nfl_games[team].status = "SCHED";
		custom_game_status_class = "ls_gameis_scheduled";
	} else if(ls_tstats[team] === undefined) {
		console.log("team stats for " + team + " is undefined");
		return;
	} else if(ls_tstats[opp] === undefined) {
		console.log("team stats for " + opp + " is undefined");
		return;
	} else {
		if(ls_tstats[team].TPS === undefined) {
			ls_tstats[team].TPS = 0;
		}
		if(ls_tstats[opp].TPS === undefined) {
			ls_tstats[opp].TPS = 0;
		}
		if(ls_nfl_games[team].where === 'away') {
			game_status = game_status + team + '%2C' + opp +  '" title="View NFL Game Boxscore"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon">' + ls_tstats[team].TPS + '&nbsp;@&nbsp;' + ls_tstats[opp].TPS  + '<img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp  + '.svg" class="ls_nfl_icon">';
		} else {
			game_status = game_status + opp  + '%2C' + team + '" title="View NFL Game Boxscore"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp  + '.svg" class="ls_nfl_icon">' + ls_tstats[opp].TPS  + '&nbsp;v&nbsp;' + ls_tstats[team].TPS + '<img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon">';
		}
		game_status = game_status + "</a><br>";
		if(ls_tstats[team].QUARTER == '' || ls_tstats[team].QUARTER === 'F') {
			ls_nfl_games[team].secs_left = 0;
			ls_nfl_games[team].status = "OVER";
			game_status = game_status + "Final";
			custom_game_status_class = "ls_gameis_over";
		} else {
			custom_game_status_class = "ls_gameinprogress";
			poss_class = "ls_noposs";
			var when;
			ls_nfl_games[team].status = "INPROG";
			var parts = ls_tstats[team].REMAINING.split(":");
			ls_nfl_games[team].secs_left = parts[0]*60 + Number(parts[1]);
			if(ls_tstats[team].QUARTER === 'O' || ls_tstats[team].QUARTER > 4) {
				when = "OT";
			} else if(ls_tstats[team].QUARTER === 'H') {
				when = "H";
				ls_nfl_games[team].secs_left += 15*60*2;
				custom_is_half = true;
			} else {
				ls_nfl_games[team].secs_left += 15*60*(4-ls_tstats[team].QUARTER);
				when = ls_tstats[team].QUARTER + "Q";
			}
			when = when + "&nbsp;" + ls_tstats[team].REMAINING;
			
			var down = ls_tstats[team].DOWN;
			if(down === undefined || down === 0) {
				down = 1;
			}
			if(down === 1) {
				down = down + "st";
			} else if(down === 2) {
				down = down + "nd";
			} else if(down === 3) {
				down = down + "rd";
			} else if(down === 4) {
				down = down + "th";
			}
			game_status = game_status + when;
			if(ls_tstats[team].YARDLINE !== undefined && ls_tstats[team].YARDLINE !== "") {
				var fieldpos = ls_tstats[team].YARDLINE.split(":");
				var side = fieldpos[0];
				var yardline = Number(fieldpos[1]);
				if(side == '50') {
					side = "";
					yardline = 50;
				}
				if(ls_tstats[team].TOGO !== undefined && ls_tstats[team].TOGO !== "") {
					var downdist = down + "&nbsp;and&nbsp;" + ls_tstats[team].TOGO + " at " + side + "&nbsp;" + yardline;
					game_status = game_status + "<br>" + downdist;
						if(ls_tstats[team].POSSESSION > 0) {
						poss_class = "ls_withposs";
						//console.log(team + " poss=" + ls_tstats[team].POSSESSION + " yard=" + ls_tstats[team].YARDLINE + " " + side + " " + yardline);
						if(side !== team && yardline < 20) {
							poss_class = "ls_redzone";
						}
					}
				}
			}
		}
	}
	//NEW ADDITION update game status using value of custom_game_status_class
	if(custom_game_status_class==="ls_gameis_over") 
		jQuery(".ls_players_table div.game_"+team).closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_gameinprogress ls_has_ball').addClass('ls_gameis_over');
	else if(custom_game_status_class==="ls_gameinprogress")
		jQuery(".ls_players_table div.game_"+team).closest('tr').removeClass('ls_gameis_scheduled ls_gameis_over').addClass('ls_gameinprogress');
	else if(custom_game_status_class==="ls_gameis_scheduled")
		jQuery(".ls_players_table div.game_"+team).closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_has_ball ls_gameinprogress ls_gameis_over').addClass("class","ls_gameis_scheduled");
	if(custom_is_half)
		jQuery(".ls_players_table div.game_"+team).closest('tr').closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_has_ball');
	//END NEW ADDITION 
	ls_nfl_games[team]["game_status"] = game_status;
	update_field_by_class("game_" + team, game_status, 1);
	update_class_by_class("game_" + team, poss_class);
}

function update_class_by_class (classid, new_class) {
	var ellist = document.getElementsByClassName(classid);
	for (var i = 0; i < ellist.length; i++) {
		if(ellist[i]) {
			if(new_class !== "ls_redzone") {
				removeClass(ellist[i], "ls_redzone");
			}
			if(new_class !== "ls_withposs") {
				removeClass(ellist[i], "ls_withposs");
			}
			if(new_class !== "ls_noposs") {
				removeClass(ellist[i], "ls_noposs");
			}
			if(new_class !== undefined && new_class !== "") {
				addClass(ellist[i], new_class);
			}
		}
	}
	//NEW ADDITION update possession status 
	if(new_class==="ls_withposs")
		jQuery(".ls_players_table div."+classid).closest('tr').removeClass('ls_nothas_ball ls_in_redzone').addClass('ls_has_ball');
	else if(new_class==="ls_noposs")
		jQuery(".ls_players_table div."+classid).closest('tr').removeClass('ls_has_ball ls_in_redzone').addClass('ls_nothas_ball');
	else if(new_class==="ls_redzone")
		jQuery(".ls_players_table div."+classid).closest('tr').addClass('ls_in_redzone');
        jQuery('td.ls_game_info:contains("0:00")').closest('tr').removeClass('ls_has_ball ls_withposs ls_redzone ls_nothas_ball');
}

} 


if(load_standingSettings_script) {
/////////////////////////////////////////////////
// Standings Settings  <script src="https://www.mflscripts.com/mfl-apps/standingSettings/script.js"></script>
/////////////////////////////////////////////////



// ADD CLASS TO STANDINGS REPORTS ONLY BASED ON CAPTION TEXT "LEAGUE STANDINGS"
(function($){
	$.expr[':'].text = function(obj, index, meta, stack){
		return ($(obj).text() === meta[3])
	};
})(jQuery);
jQuery('#standings caption span:text("League Standings")').closest('table').addClass('standings-filter');

// APPEND STANDINGS SETTINGS FONT AWESOME TO CAPTION
jQuery('.standings-filter caption span').last().append('<i class="fa fa-cogs standings-cog" aria-hidden="true" title="Setup Standings Columns"></i>').addClass('standing_cog_span');

// TH FICON DOES NOT HAVE ANY TEXT SO ADD TEXT FOR FRANCHISE
jQuery('.standings-filter th.ficon').text('Franchise');

// REPLACE MFL STANDINGS TH AND TD CLASSES THAT ARE USING A "#" SIGN
jQuery('.standings-filter td[class="#w"],.standings-filter th[class="#w"]').removeClass().addClass('waiver-moves');
jQuery('.standings-filter td[class="#a"],.standings-filter th[class="#a"]').removeClass().addClass('add-moves');

// APPEND STANDINGS SETTINGS POPUP DIV AND OVERLAY - APPEND ALL POSSIBLE STANDINGS COLUMNS HEADERS
jQuery('<div class="standings-settings_overlay" style="display: none;"></div><div id="standings-settings" class="standings-settings-content" style="display:none;"><p style="text-align:center;font-weight:bold;text-decoration:underline;margin:0;font-size:15px">SELECT STANDINGS COLUMNS</p><div class="ss_setting_ck"><input type="checkbox" name="fname_checkbox" id="fname_checkbox" class="fname" checked="checked" onchange="ss_checkbox(this)"><label for="fname_checkbox">Franchise Name</label></div><div class="ss_setting_ck"><input type="checkbox" name="ficon_checkbox" id="ficon_checkbox" class="ficon" checked="checked" onchange="ss_checkbox(this)"><label for="ficon_checkbox">Franchise Icon</label></div><div class="ss_setting_ck"><input type="checkbox" name="ficonname_checkbox" id="ficonname_checkbox" class="ficonname" checked="checked" onchange="ss_checkbox(this)"><label for="ficonname_checkbox">Franchise Icon and Name</label></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Overall Columns</p><div class="ss_setting_ck"><input type="checkbox" name="h2hwlt_checkbox" id="h2hwlt_checkbox" class="h2hwlt" checked="checked" onchange="ss_checkbox(this)"><label for="h2hwlt_checkbox">Overall Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hpct_checkbox" id="h2hpct_checkbox" class="h2hpct" checked="checked" onchange="ss_checkbox(this)"><label for="h2hpct_checkbox">Overall Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hw_checkbox" id="h2hw_checkbox" class="h2hw" checked="checked" onchange="ss_checkbox(this)"><label for="h2hw_checkbox">Overall Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hl_checkbox" id="h2hl_checkbox" class="h2hl" checked="checked" onchange="ss_checkbox(this)"><label for="h2hl_checkbox">Overall Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2ht_checkbox" id="h2ht_checkbox" class="h2ht" checked="checked" onchange="ss_checkbox(this)"><label for="h2ht_checkbox">Overall Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="gb_checkbox" id="gb_checkbox" class="gb" checked="checked" onchange="ss_checkbox(this)"><label for="gb_checkbox">Games Back</label></div><div class="ss_setting_ck"><input type="checkbox" name="strk_checkbox" id="strk_checkbox" class="strk" checked="checked" onchange="ss_checkbox(this)"><label for="strk_checkbox">Winning-Losing Streak</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Division Columns</p><div class="ss_setting_ck"><input type="checkbox" name="divw_checkbox" id="divw_checkbox" class="divw" checked="checked" onchange="ss_checkbox(this)"><label for="divw_checkbox">Divisional Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="divl_checkbox" id="divl_checkbox" class="divl" checked="checked" onchange="ss_checkbox(this)"><label for="divl_checkbox">Divisional Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="divt_checkbox" id="divt_checkbox" class="divt" checked="checked" onchange="ss_checkbox(this)"><label for="divt_checkbox">Divisional Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="divwlt_checkbox" id="divwlt_checkbox" class="divwlt" checked="checked" onchange="ss_checkbox(this)"><label for="divwlt_checkbox">Divisional Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="divpct_checkbox" id="divpct_checkbox" class="divpct" checked="checked" onchange="ss_checkbox(this)"><label for="divpct_checkbox">Divisional Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivw_checkbox" id="nondivw_checkbox" class="nondivw" checked="checked" onchange="ss_checkbox(this)"><label for="nondivw_checkbox">Non-Divisional Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivl_checkbox" id="nondivl_checkbox" class="nondivl" checked="checked" onchange="ss_checkbox(this)"><label for="nondivl_checkbox">Non-Divisional Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivt_checkbox" id="nondivt_checkbox" class="nondivt" checked="checked" onchange="ss_checkbox(this)"><label for="nondivt_checkbox">Non-Divisional Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivwlt_checkbox" id="nondivwlt_checkbox" class="nondivwlt" checked="checked" onchange="ss_checkbox(this)"><label for="nondivwlt_checkbox">Non-Divisional Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivpct_checkbox" id="nondivpct_checkbox" class="nondivpct" checked="checked" onchange="ss_checkbox(this)"><label for="nondivpct_checkbox">Non-Divisional Winning Percentage</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Conference Columns</p><div class="ss_setting_ck"><input type="checkbox" name="confw_checkbox" id="confw_checkbox" class="confw" checked="checked" onchange="ss_checkbox(this)"><label for="confw_checkbox">Conference Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="confl_checkbox" id="confl_checkbox" class="confl" checked="checked" onchange="ss_checkbox(this)"><label for="confl_checkbox">Conference Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="conft_checkbox" id="conft_checkbox" class="conft" checked="checked" onchange="ss_checkbox(this)"><label for="conft_checkbox">Conference Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="confwlt_checkbox" id="confwlt_checkbox" class="confwlt" checked="checked" onchange="ss_checkbox(this)"><label for="confwlt_checkbox">Conference Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="confpct_checkbox" id="confpct_checkbox" class="confpct" checked="checked" onchange="ss_checkbox(this)"><label for="confpct_checkbox">Conference Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfw_checkbox" id="nonconfw_checkbox" class="nonconfw" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfw_checkbox">Non-Conference Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfl_checkbox" id="nonconfl_checkbox" class="nonconfl" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfl_checkbox">Non-Conference Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconft_checkbox" id="nonconft_checkbox" class="nonconft" checked="checked" onchange="ss_checkbox(this)"><label for="nonconft_checkbox">Non-Conference Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfwlt_checkbox" id="nonconfwlt_checkbox" class="nonconfwlt" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfwlt_checkbox">Non-Conference Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfpct_checkbox" id="nonconfpct_checkbox" class="nonconfpct" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfpct_checkbox">Non Conference Winning Percentage</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Points Columns</p><div class="ss_setting_ck"><input type="checkbox" name="pf_checkbox" id="pf_checkbox" class="pf" checked="checked" onchange="ss_checkbox(this)"><label for="pf_checkbox">Total YTD Point Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="avgpf_checkbox" id="avgpf_checkbox" class="avgpf" checked="checked" onchange="ss_checkbox(this)"><label for="avgpf_checkbox">Weekly Average Point Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="pa_checkbox" id="pa_checkbox" class="pa" checked="checked" onchange="ss_checkbox(this)"><label for="pa_checkbox">Total YTD Opp. Points Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="avgpa_checkbox" id="avgpa_checkbox" class="avgpa" checked="checked" onchange="ss_checkbox(this)"><label for="avgpa_checkbox">Weekly Average Opp. Points Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="divpf_checkbox" id="divpf_checkbox" class="divpf" checked="checked" onchange="ss_checkbox(this)"><label for="divpf_checkbox">Total YTD Points Scored In Div. Games</label></div><div class="ss_setting_ck"><input type="checkbox" name="confpf_checkbox" id="confpf_checkbox" class="confpf" checked="checked" onchange="ss_checkbox(this)"><label for="confpf_checkbox">Total YTD Points Scored In Conference</label></div><div class="ss_setting_ck"><input type="checkbox" name="maxpf_checkbox" id="maxpf_checkbox" class="maxpf" checked="checked" onchange="ss_checkbox(this)"><label for="maxpf_checkbox">Highest Weekly Point Total</label></div><div class="ss_setting_ck"><input type="checkbox" name="minpf_checkbox" id="minpf_checkbox" class="minpf" checked="checked" onchange="ss_checkbox(this)"><label for="minpf_checkbox">Lowest Weekly Point Total</label></div><div class="ss_setting_ck"><input type="checkbox" name="maxpa_checkbox" id="maxpa_checkbox" class="maxpa" checked="checked" onchange="ss_checkbox(this)"><label for="maxpa_checkbox">Highest Weekly Points Against</label></div><div class="ss_setting_ck"><input type="checkbox" name="minpa_checkbox" id="minpa_checkbox" class="minpa" checked="checked" onchange="ss_checkbox(this)"><label for="minpa_checkbox">Lowest Weekly Points Against</label></div><div class="ss_setting_ck"><input type="checkbox" name="vp_checkbox" id="vp_checkbox" class="vp" checked="checked" onchange="ss_checkbox(this)"><label for="vp_checkbox">Victory Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="pp_checkbox" id="pp_checkbox" class="pp" checked="checked" onchange="ss_checkbox(this)"><label for="pp_checkbox">Potential Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="pb_checkbox" id="pb_checkbox" class="pb" checked="checked" onchange="ss_checkbox(this)"><label for="pb_checkbox">Points Back</label></div><div class="ss_setting_ck"><input type="checkbox" name="op_checkbox" id="op_checkbox" class="op" checked="checked" onchange="ss_checkbox(this)"><label for="op_checkbox">Offensive Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="dp_checkbox" id="dp_checkbox" class="dp" checked="checked" onchange="ss_checkbox(this)"><label for="dp_checkbox">Defensive Points</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Accounting Columns</p><div class="ss_setting_ck"><input type="checkbox" name="bbidspent_checkbox" id="bbidspent_checkbox" class="bbidspent" checked="checked" onchange="ss_checkbox(this)"><label for="bbidspent_checkbox">Total $ Spent YTD On Blind Bidding</label></div><div class="ss_setting_ck"><input type="checkbox" name="bbidbalance_checkbox" id="bbidbalance_checkbox" class="bbidbalance" checked="checked" onchange="ss_checkbox(this)"><label for="bbidbalance_checkbox">Balance Available For Blind Bidding</label></div><div class="ss_setting_ck"><input type="checkbox" name="acct_checkbox" id="acct_checkbox" class="acct" checked="checked" onchange="ss_checkbox(this)"><label for="acct_checkbox">Accounting Balance</label></div><div class="ss_setting_ck"><input type="checkbox" name="salary_checkbox" id="salary_checkbox" class="salary" checked="checked" onchange="ss_checkbox(this)"><label for="salary_checkbox">Total Salary</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">All-Play Columns</p><div class="ss_setting_ck"><input type="checkbox" name="all_play_wlt_checkbox" id="all_play_wlt_checkbox" class="all_play_wlt" checked="checked" onchange="ss_checkbox(this)"><label for="all_play_wlt_checkbox">All-Play Wins, Losses and Tie</label></div><div class="ss_setting_ck"><input type="checkbox" name="all_play_pct_checkbox" id="all_play_pct_checkbox" class="all_play_pct" checked="checked" onchange="ss_checkbox(this)"><label for="all_play_pct_checkbox">All-Play Winning Percentage</label></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Ranking Columns</p><div class="ss_setting_ck"><input type="checkbox" name="pwr_checkbox" id="pwr_checkbox" class="pwr" checked="checked" onchange="ss_checkbox(this)"><label for="pwr_checkbox">Power Rank</label></div><div class="ss_setting_ck"><input type="checkbox" name="altpwr_checkbox" id="altpwr_checkbox" class="altpwr" checked="checked" onchange="ss_checkbox(this)"><label for="altpwr_checkbox">Alternative Power Rank</label></div><div class="ss_setting_ck"><input type="checkbox" name="eff_checkbox" id="eff_checkbox" class="eff" checked="checked" onchange="ss_checkbox(this)"><label for="eff_checkbox">Efficiency Rating</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Transactions Columns</p><div class="ss_setting_ck"><input type="checkbox" name="ww_checkbox" id="ww_checkbox" class="ww" checked="checked" onchange="ss_checkbox(this)"><label for="ww_checkbox">Waiver Wire Order</label></div><div class="ss_setting_ck"><input type="checkbox" name="add-moves_checkbox" id="add-moves_checkbox" class="add-moves" checked="checked" onchange="ss_checkbox(this)"><label for="add-moves_checkbox">Year-To-Date Number Of Add Moves</label></div><div class="ss_setting_ck"><input type="checkbox" name="waiver-moves_checkbox" id="waiver-moves_checkbox" class="waiver-moves" checked="checked" onchange="ss_checkbox(this)"><label for="waiver-moves_checkbox">Year-To-Date Number Of Waiver Moves</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Miscellaneous Columns</p><div class="ss_setting_ck"><input type="checkbox" name="eliminated_checkbox" id="eliminated_checkbox" class="eliminated" checked="checked" onchange="ss_checkbox(this)"><label for="eliminated_checkbox">Guillotine Leagues, Week Eliminated</label></div><div class="ss_setting_ck"><input type="checkbox" name="custom_standings_column01_checkbox" id="custom_standings_column01_checkbox" class="custom_standings_column01" checked="checked" onchange="ss_checkbox(this)"><label for="custom_standings_column01_checkbox">Custom Standings Column 1</label></div><div class="ss_setting_ck"><input type="checkbox" name="custom_standings_column02_checkbox" id="custom_standings_column02_checkbox" class="custom_standings_column02" checked="checked" onchange="ss_checkbox(this)"><label for="custom_standings_column02_checkbox">Custom Standings Column 2</label></div></div></div>').appendTo("body");

// CHECK STANDINGS TH CLASSES AGAINST ALL INPUTS LOADED AND REMOVES ONES NOT BEING USED
(function() {
	let classes = [];
	let classes_check = [];
	$('.standings-filter th').each(function() {
		classes.push($(this).attr("class"));
		classes_check[$(this).attr("class")] = 1;
	})
	console.log(classes);
	$('#standings-settings div input').each(function() {
		let divClassName = $(this).attr("class");
		if (classes.indexOf(divClassName) == -1) {
			$(this).parent('.ss_setting_ck').remove();
		}
	})
	for (var class_check in classes_check) {
		if(classes_check.hasOwnProperty(class_check)) {
			if(localStorage.getItem(league_id+"_"+year+"_"+class_check)==='hidden') {
				$('.standings-filter .' + class_check + '').hide();
				$("#"+class_check+"_checkbox").prop("checked",false);
			}
		}
	}
})();

// SHOW AND HIDE OVERLAY ON CLICK OF COG WHEEL AND OVERLAY
jQuery(".standings-cog").on("click", function (){
	$("#standings-settings,.standings-settings_overlay").css("display","block");
});
jQuery(".standings-settings_overlay").on("click", function (){
	$("#standings-settings,.standings-settings_overlay").css("display","none");
});

// INPUT CLICK FUNCTION TO HIDE AND SHOW TD AND TH IN STANDINGS TABLES
function ss_checkbox(e) {
	let getClass = $(e).attr('class') //get class name
	if ($(e).is(':checked')) {
		$('.standings-filter .' + getClass + '').show();
		localStorage.removeItem(league_id+"_"+year+"_"+getClass);
	} else {
		$('.standings-filter .' + getClass + '').hide();
		localStorage.setItem(league_id+"_"+year+"_"+getClass,"hidden");
	}
}

// REMOVE EMPTY SETTINGS SECTIONS
jQuery('.ss_wrapper').not(':has(".ss_setting_ck")').remove();

// APPEND STANDINGS SETTINGS CSS
jQuery('<style>.standings-cog{margin-left:10px;cursor:pointer;z-index:1;pointer-events:all;position:absolute;top:50%;transform:translateY(-50%)}.standing_cog_span{position:relative}#standings-settings{position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;width:300px;z-index:999999;height:300px;overflow:auto}.standings-settings_overlay{content:"";width:100%;height:100%;position:fixed;left:0;top:0;z-index:99999}#standings-settings input{display:none}#standings-settings div{position:relative;display:block;margin:10px 0}#standings-settings input+label:before{font-family:FontAwesome;display:inline-block;content:"\\f096";position:absolute;left:0}#standings-settings input:checked+label:before{content:"\\f046";z-index:0}#standings-settings label{padding-left:20px;font-size:13px;line-height:13px;cursor:pointer;display:block}#standings-settings #fname_checkbox:checked+label,#standings-settings #fname_checkbox+label,#standings-settings #ficon_checkbox:checked+label,#standings-settings #ficon_checkbox+label,#standings-settings #ficonname_checkbox:checked+label,#standings-settings #ficonname_checkbox+label{pointer-events:none}#standings-settings #fname_checkbox:checked+label:before,#standings-settings #fname_checkbox+label:before,#standings-settings #ficon_checkbox:checked+label:before,#standings-settings #ficon_checkbox+label:before,#standings-settings #ficonname_checkbox:checked+label:before,#standings-settings #ficonname_checkbox+label:before{content:"\\f023";pointer-events:none}#standings-settings p.headp-carrot{position:relative}#standings-settings p.headp-carrot:after{font-family:FontAwesome;display:inline-block;content:"\\f0d7";position:absolute;top:50%;transform:translateY(-50%);margin-left:5px}</style>').appendTo('head');

}

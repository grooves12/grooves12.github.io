<!-- MFL LIVE SCORING SCRIPT ALL PLAY LEAGUES SETTINGS --> 
<script>
var ls_scoreboardName = "LEAGUE SCOREBOARD";   //enter text to name your scoreboard
var showTeamName = false;                      //set to true to display franchise names in scoreboard header
var showTeamIcon = true;                       //set to true to display franchise icons in scoreboard header
var ls_includeProjections = true;              //set to true to display projections next to player scores
var ls_includeInjuryStatus = true;             //set to true to display injury status as per the norm
var ls_excludeIR = true;                       //set to true to remove players on fantasy IR
var ls_excludeTaxi = true;                     //set to true to remove players on taxi squad
var ls_popup_abbrev_name_icon = 2;             // -1=disable; 0=abbrev; 1=name; 2=icon
var ls_orig_proj_when_final = true;            //set true to change pace to projection when games go final
var ls_popup_status = true;                    //set true to add status of player to popup
var ls_box_abbrev_name_icon = 2;               //0=abbrev; 1=name; 2=icon; 3=icon+abbrev; 4=icon+name
var ls_hide_bye_teams = false;                 //set to true to hide boxscore matchup teams on bye weeks
</script>

<!-- MFL LIVE SCORING SCRIPT ALL PLAY LEAGUES JS FILE -->
<script src="https://www.mflscripts.com/mfl-apps/scoreboard/replace-mflScoring/allplay.js"></script>


<!-- BELOW IS FULL UNCOMPRESSED SCRIPT - MARK OUT THE LINKED JS FILE ABOVE TO SCRIPT IF USING THIS RAW FILE -->
<script>
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//DO NOT EDIT BELOW HERE
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
if($('#body_ajax_ls').length) {
/////////////////////////////////////////////////
// MFL LIVE SCORING  https://www.mflscripts.com/mfl-apps/scoreboard/replace-mflScoring/allplay.js
/////////////////////////////////////////////////

//APPEND CSS
jQuery('head').append('<style>#body_ajax_ls div.ls_other_game{min-width:120px}#body_ajax_ls .mobile-wrap.ls-matchup,#LS_TopTableHolder div.mobile-wrap{margin:0 auto;margin-bottom:10px}#body_ajax_ls #other_games td.ls_og_cell{font-size:13px}#body_ajax_ls #nfl_games td.ls_box_possession:after{content:"";background-size:12px 12px;height:12px;width:12px;position:absolute;margin-left:5px;top:50%;transform:translateY(-50%)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball+td,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone+td{width:90px}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone{width:42px}#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone:after{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/goal-post.svg)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball:after{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/football.svg)}#body_ajax_ls #nfl_games div.ls_other_game td{padding:1px 2px}#nfl_games td[style="border:none;"]:last-of-type{padding:0!important}div.ls_team_name{font-size:20px!important;line-height:50px}.ls-modal{display:none;position:fixed;z-index:99999;padding-top:30px;left:0;top:0;width:100%;height:100%;overflow:auto}.ls-modal-content{position:relative;margin:auto;padding:0;width:96%;-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s;margin-bottom:30px;max-width:400px;border-radius:3px}#ls-modal-content{max-height:500px;overflow-x:auto}@-webkit-keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}.ls-modal-header{padding:3px;background:none}.ls-modal-header h2{text-align:left;margin:0;padding:0;padding-left:5px;text-transform:uppercase}.ls-modal-header .close{font-size:20px;font-weight:700;position:absolute;right:5px;top:5px;text-align:center;border-radius:3px;padding:0;height:22px;width:22px;line-height:22px}.ls-modal-header .close:hover,.ls-modal-header .close:focus{text-decoration:none;cursor:pointer}.ls-modal-body{padding:0 2px;font-size:13px;padding-bottom:1px}#ls-modal-content li,#ls-modal-content ul{margin:0;padding:0;list-style:none}#ls-modal-content .ls-popup-position-li{font-weight:700;font-size:14px;padding-left:5px}#ls-modal-content .ls-popup-player-li{position:relative;padding-left:8px}#ls-modal-content .ls-popup-player-li:last-child{border:0}#ls-modal-content .ls-popup-stats{font-style:italic;display:block;font-size:11px;line-height:11px;font-weight:400;padding:2px 0;padding-left:3px;max-width:350px}#ls-modal-content span.ls-popup-points{text-indent:0;display:inline;position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);right:5px;font-weight:700;font-size:13px;border:0}.ls-explain-points-total::before{content:"Total Points :";padding-right:5px}.ls-explain-points-li::before{content:"\\f005";font-family:FontAwesome;padding-right:3px;margin-left:-1.5em}tr[onclick^="ls_nfl_stats_popup"]{cursor:pointer}div.mobile-wrap.ls-boxscore{padding:0 10px;padding-bottom:5px}.ls_scroller{padding:10px 0;padding-bottom:5px;overflow-x:auto;-webkit-overflow-scrolling:touch}#ls-modal-content span.ls-popup-text{font-style:italic;font-weight:700}.ls-popup-text::before,.ls-popup-icon-wrapper::before{content:"-";padding:0 2px}#ls-modal-content img.ls-popup-icon{max-height:16px;max-width:80px}#body_ajax_ls table#roster_home{table-layout:fixed}#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:100px}#body_ajax_ls td.ls_marquee_value{padding-left:0;padding-right:0}#body_ajax_ls .ls-matchup th:last-of-type,#body_ajax_ls .ls-matchup td:last-of-type{width:50px}.ls_other_game .ls_projections{cursor:pointer}.ls_pace_box .ls_projected{display:none}div.ls_team_name{font-size:20pt}#LS_HomeTeamName,#LS_CenterTop{width:50%}#other_games .ls_other_game tr{height:24px}#other_games > tbody:nth-child(1) > tr:nth-child(1),#other_games br{display:none}#other_games th{display:none}@media only screen and (max-width:430px){#ls-modal-content .ls-popup-stats{max-width:280px}}@media only screen and (max-width:360px){#ls-modal-content .ls-popup-stats{max-width:200px}}@media only screen and (max-width:320px){#ls-modal-content .ls-popup-stats{max-width:180px}}@media only screen and (max-height:600px) and (orientation:landscape){#ls-modal-content{max-height:460px}}@media only screen and (max-height:500px) and (orientation:landscape){#ls-modal-content{max-height:360px}}@media only screen and (max-height:450px) and (orientation:landscape){#ls-modal-content{max-height:310px}}@media only screen and (max-height:400px) and (orientation:landscape){#ls-modal-content{max-height:260px}}@media only screen and (max-height:350px) and (orientation:landscape){#ls-modal-content{max-height:210px}}@media only screen and (max-height:300px) and (orientation:landscape){#ls-modal-content{max-height:160px}}@media only screen and (max-height:250px) and (orientation:landscape){#ls-modal-content{max-height:110px}}@media only screen and (max-height:200px) and (orientation:landscape){#ls-modal-content{max-height:150px}}@media only screen and (max-width:70em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:80px}}@media only screen and (max-width:60em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:60px}}@media only screen and (max-width:55em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:40px}}@media only screen and (max-width:48em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:140px}}@media only screen and (max-width:33em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:80px}}@media only screen and (max-width:30em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:40px}}@media only screen and (max-width: 30em){.ls_pace_legend_title{display:block}#body_ajax_ls .ls-has-bye #LS_TopTableHolder .LS_ScoreboardTitle,#body_ajax_ls .ls-has-bye #LS_TopTableHolder .prmin{font-size:10px}}@media only screen and (max-width: 25em){.ls_projected{display:block}}.hide-overlay{background:none!important}@media only screen and (max-width: 54.25em){#LS_TopTableHolder #LS_CenterTop,#LS_TopTableHolder .prmin,#LS_TopTableHolder .LS_ScoreboardTitle{display:table-cell}}@media only screen and (min-width:48.1em){#body_ajax_ls .ls-outer-table{table-layout:fixed}#body_ajax_ls #roster_away caption,#roster_home caption{display:none}}@media only screen and (max-width:40em){#LS_TopTableHolder #LS_CenterTop,#LS_TopTableHolder .prmin,#LS_TopTableHolder .LS_ScoreboardTitle{display:none}#LS_HomeTeamName{width:50%}.LS_MainScoreboard{table-layout:auto!important}}@media only screen and (max-width:28.000em){#LS_HomeScore span{font-size:30px;min-width:24px}}@media only screen and (max-width:410px){td.ls_projections,th.ls_projections,#ls_pace_wrapper{display:none!important}}</style>');

// test ticker speed
var ls_ticker_speed = 200;
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
if (ls_popup_abbrev_name_icon === undefined) var ls_popup_abbrev_name_icon = -1;
if (ls_popup_status === undefined) var ls_popup_status = false;

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
	jQuery('#roster_home td:contains("Total"):contains("Points")').parent().addClass('td-totals-row');
	jQuery('.td-totals-row td:first-child').addClass('td-totals');
	if ($('input[name="hide_stats"]').is(':checked')) {
		$('#roster_home td').addClass('td-pad');
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
	jQuery("#roster_home td:first-child a").each(function() {
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
	if (!jQuery("#roster_home tr:first-child th").hasClass("ls_projections")) {
		jQuery("#roster_home tr").each(function() {
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
		} catch(error) {
			// ICON MUST NOT EXIST THEREFORE NEED TO REVERSE ENGINEER TO GET ID FROM TEAM NAME
			for (var key in franchiseDatabase) {
				if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
					if (franchiseDatabase[key].name === jQuery("#fname_home").text()) ls_home_id = franchiseDatabase[key].id;
				}
			}
			var _home = ls_home_id;
		}
	} else var _home = home;
	jQuery("[id^=og_]").each(function() {
		var _homeId = $(this).attr("onclick").substr(13, 4);
		if (_homeId === _home) $(this).addClass("current_matchup");
		else $(this).removeClass("current_matchup");
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
			if (jQuery("#hide_projections_cb").is(':checked')) var _style = ' style="display:none"';
			else var _style = '';
			$(this).find("table tr:eq(0) td:eq(0)").after('<td id="ls_pace_box_' + _homeId + '" class="ls_projections ls_pace_box"' + _style + '>' + ls_pace_tracker["fid_" + _homeId] + '</td>');
		}
	});
}

function ls_add_caption() {
	jQuery('<caption><span></span></caption>').insertBefore('#roster_home tbody');
	var fnameHomeContents = $('#fname_home').html();
	jQuery('#roster_home caption').html(fnameHomeContents);
}

function ls_parse_standings() {
	ls_records = new Array();
	for (var key in franchiseDatabase) {
		if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
			ls_records[franchiseDatabase[key].id] = "";
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
					ls_records[standingsData.standings.franchise[i].id] = standingsData.standings.franchise[i].pf.$t + "pts (ranks " + (i + 1) + " out of " + standingsData.standings.franchise.length + ")";
				} catch (er) {}
			}
		} catch (er) {}
	});
}

function ls_add_records(home, away) {
	if (home === undefined) try {
		var _home = jQuery("#ficon_home img").attr("id").substr(-4);
	} catch(error) {
		// ICON MUST NOT EXIST THEREFORE NEED TO REVERSE ENGINEER TO GET ID FROM TEAM NAME
		for (var key in franchiseDatabase) {
			if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
				if (franchiseDatabase[key].name === jQuery("#fname_home").text()) var _home = franchiseDatabase[key].id;
			}
		}
	}
	else var _home = home;
	jQuery("#LS_HomeTeamRecord").html(ls_records[_home]);
}

function ls_parse_projections() {
	ls_projections = new Array();
	if(liveScoringWeek<1) var _liveScoringWeek = 1; else var _liveScoringWeek = liveScoringWeek;
	$.ajax({
		type: 'GET',
		url: baseURLDynamic + "/" + year + "/export?TYPE=projectedScores&L=" + league_id + "&W=" + _liveScoringWeek + "&JSON=1",
		async: true
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
		async: true
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

function ls_format_score() {
	var min_digits = 8;
	var use_blanks = true; // IF TRUE USE BLANKS ELSE USE ZERO
	var _homeScore = jQuery("#ffpts_home").text();
	var _oldScore = _homeScore;
	for (var i = min_digits; i > _oldScore.length; i--) {
		if (use_blanks) _homeScore = 'x' + _homeScore;
		else _homeScore = '0' + _homeScore;
	}
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

// Anything that needs to run again when user clicks the boxscores matchups , place in here , still need to place on page load as well
function switch_game(home, away) {
	ls_update_all = 1;
	ls_home_id = home;
	show_game(home, away);
	update_scores();
	if (ls_includeInjuryStatus) ls_update_injuries();
	ls_add_icons(home);
	try { MFLPlayerPopupNewsIcon();} catch(error) {}
	ls_add_caption();
	ls_add_records(home, away);
	$("#LS_AwayTeamName,#LS_AwayTeamRecord,#LS_AwayScore").trigger('click');
		$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
		$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>');
}

//YOU CAN NOW ADD WHATEVER YOU WANT HERE AND IT WILL RUN IMMEDIATELY AFTER MFLS' update_scores 
function ls_after_update_scores() {
	if (ls_includeProjections) ls_projections_html();
	ls_format_score();
	if (ls_includeProjections) setTimeout("ls_update_projections()", 400);
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
	for (var i = 1; i <= 21; i++) {
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
	for (var i = 1; i <= 21; i++) {
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
			async: true
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
	var _homeTeam = "";
	var _missingPlayers = "";
	var url = baseURLDynamic + "/" + year + "/export?TYPE=weeklyResults&L=" + league_id + "&W=" + _liveScoringWeek + "&DETAILS=1&JSON=1&rand=" + Math.random();
	$.ajax({
		type: 'GET',
		url: url,
		async: false
	}).done(function(scoringData) {
		try {
			for (var i = 0; i < scoringData.weeklyResults.franchise.length; i++) {
				ls_games.push(scoringData.weeklyResults.franchise[i].id);
				if (_homeTeam === "") _homeTeam = scoringData.weeklyResults.franchise[i].id;
				if (typeof franchise_id !== "undefined") {
					if (franchise_id === scoringData.weeklyResults.franchise[i].id) {
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
	switch_game(_homeTeam, "");
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

function ls_nfl_stats_popup_setup(nfl) {
	//WE NEED TO HIT PLAYER API TO GET ALL PLAYERS FOR NFL TEAM SINCE MANY ARE UNDEFINED
	if (ls_players_nfl[nfl] === undefined) {
		ls_players_nfl[nfl] = new Array();
		var url = baseURLDynamic + "/" + year + "/export?TYPE=players&L=" + league_id + "&PLAYERS=&DETAILS=&SINCE&JSON=1&rand=" + Math.random();
		$.ajax({
			type: 'GET',
			url: url,
			async: true
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
			ls_nfl_stats_popup(nfl);
		});
	} else {
		ls_nfl_stats_popup(nfl)
	}
}

function ls_nfl_stats_popup(nfl) {
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
				html_temp += '<tr onclick="ls_nfl_stats_popup_setup(\'' + key2 + '\')" title="Live Stats for ' + key2 + '"><td style="position:relative;height:22px" class="ls_og_cell ls_box_possession ls_box_possession_' + key2 + '"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + key2 + '.svg" class="ls_nfl_box_icon" style="height:30px;max-width:20px;max-height:20px;" alt="' + key2 + '" title="' + key2 + '" /><span class="ls-update-box game_' + key2 + '" style="display:none"></span></td><td style="font-size:9px;font-style:italic;text-align:left" class="ls_down_dist_' + key2 + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + key2 + '">0</div></td><td style="border:none;"><div style="width:2px" class="nflggstat nflggstat_' + key2 + '">&nbsp;</div></td></tr>';
				html_temp += '<tr onclick="ls_nfl_stats_popup_setup(\'' + key  + '\')" title="Live Stats for ' + key  + '"><td style="position:relative;height:22px" class="ls_og_cell ls_box_possession ls_box_possession_' + key  + '"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + key  + '.svg" class="ls_nfl_box_icon" style="height:30px;max-width:20px;max-height:20px;" alt="' + key  + '" title="' + key  + '" /><span class="ls-update-box game_' + key  + '" style="display:none"></span></td><td style="font-size:9px;font-style:italic;text-align:left" class="ls_down_dist_' + key  + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + key  + '">0</div></td><td style="border:none;"><div style="width:2px" class="nflggstat nflggstat_' + key  + '">&nbsp;</div></td></tr>';
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
	jQuery(".ls_append_input").after(html);
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
	jQuery('td.mobile-view[valign="middle"]').removeClass().addClass('td-boxscore').unwrap().wrap('<tr></tr>');
	jQuery('td.mobile-view').wrap('</tr><tr class="ls_players_table"></tr>');
	jQuery('td.mobile-view').wrapInner('<div class="mobile-wrap ls-matchup"></div>');
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
	jQuery('<div id="ls_setting_drop"><div class="ls_setting_container"><span class="ls_toggle_settings" style="cursor:pointer;font-size:16px;padding-left:5px"><i class="fa fa-cogs" aria-hidden="true"></i> Settings</span><div class="ls_append_input" style="display:none;margin-left:5px"></div></div></div>').insertBefore('.ls-outer-table');
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
		$('#roster_home td').toggleClass('td-pad');
	});
	// Move MFL page bottom notes to live ticker table
	jQuery('<div id="ls_mfl_notes"><div class="ls_update_msg" style="display:inline;text-align:center">Data last updated on: </div> , stats will update roughly every 40 seconds while games are in progress.<br>Stats are unofficial and subject to change. Official results can be viewed on <a href="' + baseURLDynamic + '/' + year + '/options?L=' + league_id + '&O=22" target="_blank">Weekly Results</a></div>').insertAfter('#ls_ticker_tab_id');
	if (ls_orig_proj_when_final) jQuery('#ls_mfl_notes').append('<br><span class="ls_projections ls_pace_legend"><span class="ls_pace_legend_title" style="padding:0 3px">Pace Legend:</span><span class="ls_above_projected" style="padding:0 3px">Above Projected</span><span class="ls_below_projected" style="padding:0 3px">Below Projected</span><span class="ls_at_projected" style="padding:0 3px">At Projected</span><span class="ls_projected" style="padding:0 3px">Original Projection</span></span>');
	jQuery('#last_update').appendTo('.ls_update_msg');
	jQuery('div.ls-btm-table').remove();
	jQuery('tr').has('.ls-matchup').addClass('ls_players_table');
	jQuery('<tr><td id="LS_TopTableHolder"><div class="mobile-wrap"><table class="LS_MainScoreboard" style="table-layout:fixed"><tbody><tr><td colspan="2" rowspan="2" id="LS_CenterTop">Live Scoring</td><td colspan="3" id="LS_HomeTeamName"></td></tr><tr><td colspan="3" id="LS_HomeTeamRecord">0-0-0</td></tr><tr><td colspan="2" rowspan="2" id="LS_HomeScore"></td><td class="LS_ScoreboardTitle" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle" title="Players Currently Playing">P</td></tr><tr><td id="LS_HomePMR" class="prmin" title="Player Minutes Remaining"></td><td id="LS_HomeYTP" class="prmin" title="Players Yet to Play"></td><td id="LS_HomePlayers" class="prmin" title="Players Currently Playing"></td></tr></tbody></table></div></td></tr>').insertBefore('.ls_players_table');
	jQuery('#LS_TopTableHolder #LS_HomeTeamName').append($('#ficon_home'));
	jQuery('#LS_TopTableHolder #LS_HomeTeamName').append($('#fname_home'));
	jQuery('#LS_TopTableHolder #LS_HomeScore').append($('#ffpts_home'));
	jQuery('#LS_TopTableHolder #LS_HomePlayers').append($('#playing_home'));
	jQuery('#LS_TopTableHolder #LS_HomeYTP').append($('#ytp_home'));
	jQuery('#LS_TopTableHolder #LS_HomePMR').append($('#pmr_home'));
	if (ls_scoreboardName) {
		jQuery("#LS_CenterTop").html(ls_scoreboardName);
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
		//ls_add_icons(); // ADD ICONS TO SCOREBOARD; ONE TIME ONLY
		setTimeout("ls_add_icons()", 500);
		ls_add_caption();
		setTimeout("ls_format_score()", 1000); // NECESSARY FOR INITIAL LOAD
		setTimeout("ls_add_records()", 1500); // NECESSARY FOR INITIAL LOAD
		if (ls_excludeIR) setTimeout("ls_removeIR()", 1000); // NEED TO REMOVE PLAYER ON FANTASY IR, IF SET, ON INITIAL LOAD
		if (ls_excludeTaxi) setTimeout("ls_removeTaxi()", 1000); // NEED TO REMOVE PLAYER ON TAXI, IF SET, ON INITIAL LOAD
		ls_create_nfl_box();
		ls_update_nfl_box();
	} else {
		ls_timeout = 0; //PREVENT UPDATES WHEN NOT ON LIVE WEEK
		setTimeout("ls_update_week()", 1200);
		setTimeout("ls_update_all = 1", 1250); //PREVENT HIGHLIGHTS WHEN NOT ON LIVE WEEK
		setTimeout("ls_create_nfl_box()", 1300);
		setTimeout("ls_update_nfl_box()", 1400);
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


// Remove MFL Ads - Live scoring page ads
jQuery('div[id*="usmg_ad"],#ajax_ls div[style="margin-bottom:5px;"]').remove();
jQuery('[src="/ads/ad-live_scoring_js.html"]').remove();
googletag = null;

// Deftect mobile devices and remove custom scrollbar css that add heights on mobiles
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var style = document.createElement('style');
	document.head.appendChild(style);
	style.sheet.insertRule('::-webkit-scrollbar{display:none}');
}


}  // Close Replace Live Scoring Script
</script>

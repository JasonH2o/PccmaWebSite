// when the document is ready retrieve praise teams

$(document).ready(function () {
    Get(praiseTeamsPath,AddToPraiseTeamDropDownMenu);
})

// add the list the drop down
function AddToPraiseTeamDropDownMenu(data) {    
    var praiseTeams = data['value'];

    for (var i = 0; i < praiseTeams.length; ++i) {
        var link = $("<li>").append($("<a>").attr("href", "/html/PraiseTeamTool.html?PraiseTeamId=" + praiseTeams[i].Id).append(praiseTeams[i].PraiseTeamName));
        $("#praiseTeamList").append(link);
    }
}
// when document loaded, grab the praise team id first
var curretnPraiseTeam;

$(document).ready(function () {        
    var param = getURLParameter("PraiseTeamId");
    
    GetById(praiseTeamsPath, param, AppendPraiseTeamName);
})

function AppendPraiseTeamName(data) {
    var praiseTeamName = data['PraiseTeamName'];
    console.log(data);
    $('#logoHeader').append(praiseTeamName);
}
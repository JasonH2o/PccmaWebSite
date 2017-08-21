// when document loaded, grab the praise team id first
var currentPraiseTeam;

$(document).ready(function () {        
    var param = getURLParameter("PraiseTeamId");
    
    GetById(praiseTeamsPath, param, AppendPraiseTeamName);
})

function AppendPraiseTeamName(data) {
    currentPraiseTeam = data;
    var praiseTeamName = data['PraiseTeamName'];
    console.log(data);
    $('#logoHeader').append(praiseTeamName);
}

function HandlePraiseTeamMembers() {
    var url = praiseTeamsPath + "(" + currentPraiseTeam.Id + ")/" + praiseTeamMembersPath;
    Get(url, BuildPraiseTeamMemberTable);
}

function BuildPraiseTeamMemberTable(data) {
    ClearContent();

    var mainDiv = $('#main-div');    
    var header = $('<h2>').append(currentPraiseTeam['PraiseTeamName'] + " Members: ");
    mainDiv.append(header);

    var table = $('<table>').addClass('table table-hover');
    var tableHeader = $('<thead>').addClass('thead-default');
    var tr = $('<tr>');
    tr.append($('<th>').append('Praise Team Id'));
    tr.append($('<th>').append('Member Name'));
    tr.append($('<th>').append('Specialties'));
    tableHeader.append(tr);
    table.append(tableHeader);

    // append dynamic data
    var praiseTeamMembers = data['value'];
    for (var i = 0; i < praiseTeamMembers.length; ++i) {
        var entry = $('<tr>');
        entry.append($('<td>').append(praiseTeamMembers[i].PraiseTeamId));
        entry.append($('<td>').append(praiseTeamMembers[i].MemberName));
        entry.append($('<td>').append(praiseTeamMembers[i].Specialties));
        table.append(entry);
    }
    mainDiv.append(table);

    // append image
    var image = $('<img>').attr("src", "../images/home/cycle.png")
                        .attr("alt", "slider image").addClass("slider-hill");
    mainDiv.append(image);

    // append button
    var div = $('#btn-div');
    div.append($('<a>').attr("href", "#")
       .addClass("btn btn-common uppercase")
       .append("Add"));

    div.append($('<a>').attr("href", "#")
       .addClass("btn btn-common uppercase")
       .append("Update"));       
    
}

function ClearContent() {
    $('#main-div').empty();
    $('#btn-div').empty();
}
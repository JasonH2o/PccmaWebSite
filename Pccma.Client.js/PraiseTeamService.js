// Client service calls to do CRUD operation

var url = "http://localhost:56777/";
var praiseTeamsPath = "PraiseTeams";
var praiseTeamMembersPath = "PraiseTeamMembers";
var expandPraiseTeamMemberPath = "?$expand=PraiseTeamMembers";

function TestGet(){
    //Get(praiseTeamsPath);
    Get(praiseTeamMembersPath, callback);
}

function Get(path, callback, expandPath = "") {
    $.ajax({
        url: url + path + expandPath,
        type: "GET",
        dataType: "json",
        success: callback,
        error: function (request, message, error) {
            console.log(error);
        }
    });
}

    function callback(data){
        console.log(data);
    }

function TestGetById(){
    GetById(praiseTeamsPath, 4, callback, expandPraiseTeamMemberPath);
    GetById(praiseTeamMembersPath,1, callback);
}
function GetById(path, id, callback, expandPath = "") {
    $.ajax({
        url: url + path + "(" + id + ")" + expandPath,
        type: "GET",        
        dataType: "json",
        success: callback,
        error: function (request, message, error) {
            console.log(error);
            //TODO: display the error in the UI 
        }
    });
}

var pt = new Object();
pt.PraiseTeamName = "Test Team5";
pt.TeamLeader = "Tester5";
pt.Id = -1;

var ptm = new Object();
ptm.Id = -1;
ptm.PraiseTeamId = 4;
ptm.MemberName = "Tester";
ptm.Specialties = "Sing";

function TestCreate() {
    //Create(praiseTeamsPath, pt);
    Create(praiseTeamMembersPath,ptm, callback);
}

function Create(path, data, callback) {   
    $.ajax({
        url: url + path,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        traditional:true, 
        data: JSON.stringify(data),        
        success: callback, 
        error: function (request, message, error) {            
            console.log(error);
        }
    });
}

function TestDelete() {
    //Delete(praiseTeamsPath,1021);
    Delete(praiseTeamMembersPath,11, callback);    
}

function Delete(path, id, callback) {
    $.ajax({
        url: url + path + "(" + id + ")",
        type: "DELETE",
        success: function (data) {
            console.log(data);
        },
        error: function (request, message, error) {
            console.log(error);
        }
    });
}

var pt2 = new Object();
pt2.PraiseTeamName = "Andy Special Team";
pt2.Id = 1004;

var ptm2 = new Object();
ptm2.Id = 10;
ptm2.MemberName = "Vincent Chan";


function TestUpdate() {
    //Update(4, pt2);
    Update(praiseTeamMembersPath, 10, ptm2,callback);
}

function Update(path, id, data, callback) {
    $.ajax({
        url: url + path + "(" + id + ")",
        type: 'PATCH',
        contentType:"application/json;charset=utf-8",
        data: JSON.stringify(data),
        success: callback,
        error: function (request, message, error) {
            console.log(error);
        }
    });
}


function HandleData(data) {
    // do things here
    console.log("Success!");
}

// helper function 
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

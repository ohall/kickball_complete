"use strict";

window.onload = init;

var balls = 0,
	strikes = 0,
	fouls = 0,
	outs = 0,
	inning = 1,
	halfInning = "Top",
	homeTeam = "Home",
	awayTeam = "Away",
	homeScore = 0,
	awayScore = 0;


function init(){    
	var strikeButton = document.getElementById("strikeButton"),
		foulButton = document.getElementById("foulButton"),
		ballButton = document.getElementById("ballButton"),
		runnerSafeButton = document.getElementById("runnerSafeButton"),
		runnerOutButton = document.getElementById("runnerOutButton"),
		awayScoreButton = document.getElementById("awayScoreButton"),
		homeScoreButton = document.getElementById("homeScoreButton"),
		awayTeamNameLabel = document.getElementById("awayTeamNameLabel"),
		homeTeamNameLabel = document.getElementById("homeTeamNameLabel"),
		modalClose = document.getElementById("modalClose");
	
	awayTeamNameLabel.innerHTML = awayTeam;
	homeTeamNameLabel.innerHTML = homeTeam;
	strikeButton.onclick = strikeButtonClick;
	foulButton.onclick = foulButtonClick;
	ballButton.onclick = ballButtonClick;
	runnerSafeButton.onclick = runnerSafeButtonClick;
	runnerOutButton.onclick = runnerOutButtonClick;
	awayScoreButton.onclick = awayScoreButtonClick;
	homeScoreButton.onclick = homeScoreButtonClick;
	modalClose.onclick = hideModal('modalPage');
	
}

function awayScoreButtonClick(){
	awayScore++;
	setDisplayedNums();
}

function homeScoreButtonClick(){
	homeScore++;
	setDisplayedNums();
}

function strikeButtonClick() {
	strikes++;
	setDisplayedNums();
	checkIfOut();
}
function foulButtonClick() {
	fouls++;
	setDisplayedNums();
	checkIfOut();
}
function ballButtonClick() {
	balls++;
	checkIfOut();
	setDisplayedNums();
	
}
function runnerSafeButtonClick() {
	resetCount();
	setDisplayedNums();
}
function runnerOutButtonClick() {
	kickerOut();
}

function checkIfOut() {
	if(strikes == 3 || fouls == 3 ){
		kickerOut();
	}else if (balls == 4) {
		resetCount();
	}
}

function kickerOut(){
	outs++;
	resetCount();
	if (outs == 3) {
		inningOver();
	}
}

function inningOver(){
	newInningCount();
}

function setDisplayedNums() {
	var ballDisplay = document.getElementById("ballsCount"),
		strikeDisplay = document.getElementById("strikesCount"),
		foulsDisplay = document.getElementById("foulsCount"),
		outsDisplay = document.getElementById("outsCount"),
		inningMarker = document.getElementById("inningMarker"),
		awayScoreLabel = document.getElementById("awayTeamScore"),
		homeScoreLabel = document.getElementById("homeTeamScore");
	awayScoreLabel.innerHTML = awayScore;
	homeScoreLabel.innerHTML = homeScore;
	ballDisplay.innerHTML = balls;
	strikeDisplay.innerHTML = strikes;
	foulsDisplay.innerHTML = fouls;
	outsDisplay.innerHTML = outs;
	inningMarker.innerHTML = halfInning+" "+inning;
}

function resetCount() {
	balls = 0;
	strikes = 0;
	fouls = 0;
	setDisplayedNums();
}

function newInningCount() {
	resetCount();
	outs = 0;
	if(halfInning == "Top"){
		halfInning = "Bottom"
	}else{
		halfInning = "Top"
		inning++;
	}
	setDisplayedNums();
}


function revealModal(divID)
{
    window.onscroll = function () { document.getElementById(divID).style.top = document.body.scrollTop; };
    document.getElementById(divID).style.display = "block";
    document.getElementById(divID).style.top = document.body.scrollTop;
}

function hideModal(divID)
{
	alert("modal");
    document.getElementById(divID).style.display = "none";
}
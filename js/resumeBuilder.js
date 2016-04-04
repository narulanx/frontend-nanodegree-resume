var bio = {
	"name" : "NIKHIL NARULA",
	"role" : "Front End Developer",
	"contacts" : {
		"mobile" : "937-825-2660",
		"email" : "nik.coolest@gmail.com",
		"github" : "narulanx",
		"location" : "Miamisburg, OH"
	},
	"biopic" : "images/me.jpg",
	"welcomeMessage" : "I write clean and efficient code with main focus on responsiveness, browser compatibility and object orientation. Coding with HTML, JavaScript and CSS is FUN.",
	"skills" : ["HTML5","JavaScript","JQuery","CSS","Java/J2EE","JSP","Servlets"]
};

/**
* @description Displays the Bio section of the resume
*/
bio.display = function() {
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	//var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#navbar").append(HTMLnavHeader);
	$("#navbar .container").append(HTMLnavbarHeader);
	$("#navbar .container").append(HTMLnavbarCollapse);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedBioPic);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	//$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#header").append(formattedWelcomMessage);
	if (bio.skills.length !== 0) {
		$("#header").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		}
	}
	$(".skill-chart").append(HTMLchart1).append(HTMLchart2).append(HTMLchart3);
	$("#skills").append(HTMLmore);
	$("#skills").append(HTMLless);
};

var work = {
	"jobs" : [
		{
			"title" : "Technology Lead",
			"employer" : "Infosys Limited",
			"dates" : "August 2012 - Present",
			"location" : "Miamisburg, OH",
			"description" : "I have been working as a Web Developer for the last 8 years with Java as my primary skills. I have worked on front end development as well using HTML, JavaScript, JQuery and CSS."
		},
		{
			"title" : "Software Engineer",
			"employer" : "Infosys Limited",
			"dates" : "July 2007 - August 2012",
			"location" : "Bangalore, India",
			"description" : "I was a software developer for 5 years in Infosys while enhancing my skills on both front end and back end development."
		}
	]
};

/**
@description Displays the work section of the resume
*/
work.display = function(){
	for (var job in work.jobs){
		if (work.jobs.hasOwnProperty(job)) {
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(HTMLworkDateWrap);
			$(".work-entry:last .work-flex").append(formattedWorkDates);
			$(".work-entry:last .work-flex").append(formattedworkLocation);
			$(".work-entry:last").append(formattedworkDescription);
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "Siddanganga Institute of Technology",
			"location" : "Tumkur, India",
			"degree" : "B.E.",
			"dates" : "2003 - 2007",
			"majors" : ["Information Technology"],
			"url" : "http://www.sit.ac.in/"
		},
		{
			"name" : "D.B.M.S. English School",
			"location" : "Jamshedpur, India",
			"degree" : "I.S.C.",
			"dates" : "2003",
			"majors" : ["maths","physics","chemistry"],
			"url" : "http://dbms.edu.in/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud245"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
		},
		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud882-nd"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		}
	]
};

/**
* @description displays the education section of the resume
*/
education.display = function(){
	for (var school in education.schools){
		if (education.schools.hasOwnProperty(school)) {
			$('#education').append(HTMLschoolStart);
			var formattedSchoolDegreeURL = HTMLschoolDegreeURL.replace("%data%",education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedScool = formattedSchoolDegreeURL + formattedSchoolDegree + formattedSchoolName;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			$('.education-entry:last').append(formattedScool);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedSchoolLocation);
			$('.education-entry:last').append(formattedSchoolMajor);
		}

	}
	$('#education').append(HTMLonlineClasses);
	for (var oc in education.onlineCourses){
		if (education.onlineCourses.hasOwnProperty(oc)) {
			$('#education').append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[oc].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[oc].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[oc].date);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[oc].url);
			$('.education-entry:last').append(formattedOnlineUrl + formattedOnlineTitle + formattedOnlineSchool);
			$('.education-entry:last').append(formattedOnlineDates);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "Lexis Diligence",
			"dates" : "Feb 2016 - Present",
			"description" : "This Project involves brainstorming with business about the feasibility of enhancements from a technical point of view and also implementing them in an agile work flow model.",
			"images" : ["http://loremflickr.com/320/240"]
		},
		{
			"title" : "Quebec Essentials and Practice Areas",
			"dates" : "Feb 2016 - Present",
			"description" : "Canada is one of our business units in our legacy project, Rosetta. Quebec is a customer of the Canada legal BU. This project is about creating 5 essential search forms and 5 practice areas for Quebec in Canada, which involves extensive use of database, XMLs, user/admin/adaptation level properties and some code changes as well.",
			"images" : ["http://loremflickr.com/320/240"]
		},
		{
			"title" : "Rosetta Level of Effort",
			"dates" : "Mar 2014 - Jan 2016",
			"description" : "This Project involves handling of small and medium enhancements for our 11 business units in Rosetta. All the enhancements are vertical specific, search form specific, adaptation specific and UI specific. The project involves attending weekly client meetings to get the requirements and discuss project issues. It also involves coordination between client and the offshore team.",
			"images" : ["http://loremflickr.com/320/240"]
		},
		{
			"title" : "AT UI Refresh",
			"dates" : "Jun 2014 - Dec 2015",
			"description" : "This project is divided into phases. Phase 1 was released in Dec 2014; and phase 2 was released in Dec 2015. The project aimed at giving a completely new user experience to the users while navigating to results screen and legal documents. To achieve this, a lot of front end development were used to bring the screens on par with current web applications.",
			"images" : ["http://loremflickr.com/320/240"]
		},
		{
			"title" : "Rosetta Maintenance",
			"dates" : "Sep 2011 - Feb 2014",
			"description" : "Rosetta is a web application and it is a Search engine for people (lawyers, students etc.) in different countries who want to perform search on various legal and news content. Rosetta provides services based on adaptation, which means it provides various services in different countries and on different areas of user interest. Services in Rosetta include Search, Results, Document-View, Delivery, History and alerts etc.",
			"images" : ["http://loremflickr.com/320/240"]
		},
		{
			"title" : "Lexis PSL",
			"dates" : "Dec 2009 - Aug 2011",
			"description" : "Lexis PSL (Professional Support Lawyers) is a project which enables the users to view the legal documents, either by performing a search on a particular Practice Area and the content type or by navigating through the subtopic landing pages. The documents have features such as delivery (via email, print and download), permalinking (copy URL), viewing recently viewed document, creating alerts, displaying the latest legal updates and news content, giving feedback, changing password etc. This project is being executed in an agile development methodology involving scrumworks. The project involves requirement elaboration, design, build, testing and implementation.",
			"images" : ["http://loremflickr.com/320/240"]
		},
		{
			"title" : "Attorneys.com (ADC) and Lawyers.com (LDC)",
			"dates" : "Nov 2007 - Nov 2009",
			"description" : "ADC and LDC are web applications which have the functionality to send the user’s detailed legal requirements to the lawyers via email by making a search using the area of practice or browsing through the states and cities. The application has lawyer’s profile which included their area of practice, location and other details. It also provides search by various methods, suggestions, Blogs, Legal Dictionary etc. The project used agile methodology as its process.",
			"images" : ["http://loremflickr.com/320/240"]
		}
	]
};

/**
* @description displays the project section of the resume
*/
projects.display = function(){
    for(var project in projects.projects){
    	if (projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
			//$(".project-entry:last").append(HTMLprojectClient.replace("%data%",projects.projects[project].client));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
			for(var i = 0; i < projects.projects[project].images.length; i++){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[i]));
			}
		}
    }
};

var footerContacts = {
	"contacts" : [
		{
			"name" : "facebook",
			"url" : "https://www.facebook.com/nikhil.narula.908",
			"title" : "facebook",
			"class" : "fa-facebook"
		},
		{
			"name" : "googlePlus",
			"url" : "https://plus.google.com/113441010670121634704/posts",
			"title" : "Google+",
			"class" : "fa-google-plus"
		},
		{
			"name" : "linkedIn",
			"url" : "https://www.linkedin.com/in/nikhil-narula-37a20717?trk=nav_responsive_tab_profile",
			"title" : "LinkedIn",
			"class" : "fa-linkedin"
		},
		{
			"name" : "github",
			"url" : "https://github.com/narulanx",
			"title" : "github",
			"class" : "fa-github"
		}
	]
};

/**
* @description displays the contact section of the resume
*/
footerContacts.display = function(){
	for(var contact in footerContacts.contacts){
		if (footerContacts.contacts.hasOwnProperty(contact)) {
			var footerAnchor = HTMLfooterAnchor.replace("%data%",footerContacts.contacts[contact].url) + HTMLfooterTitle.replace("%data%",footerContacts.contacts[contact].title);
			$("#footerContacts").append(footerAnchor);
			$("#footerContacts a:last").append(HTMLfooterIcon.replace("%data%",footerContacts.contacts[contact].class));
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
footerContacts.display();

$(".more").on("click", function(e){
	$('#skills li').show().css("display", "flex");
	$(".more").css("display", "none");
	$(".less").css("display", "flex");
	e.preventDefault();
});
$(".less").on("click", function(e){
	$('#skills li').css("display", "none");
	$('#skills li:lt(4)').show().css("display", "flex");
	$(".less").css("display", "none");
	$(".more").css("display", "flex");
	e.preventDefault();
});

/* Calls after the page loads */
$(document).ready(function() {
	$('#skills li:lt(4)').show().css("display", "flex");
	$('#skills li.more').show();

	//progress bar data
	$('#html5').circleProgress({
        value: 0.75,
        size: 100,
        fill: {
            color: "#E05454"
        }
    });
    $('#javascript').circleProgress({
        value: 0.70,
        size: 100,
        fill: {
            color: "#15D236"
        }
    });
    $('#css').circleProgress({
        value: 0.80,
        size: 100,
        fill: {
            color: "#4D60C9"
        }
    });

    /*var workScroll = $('#workExperience').offset().top;
    var projectScroll = $('#projects').offset().top;
    var educationScroll = $('#education').offset().top;
    var mapScroll = $('#mapDiv').offset().top;
    var connectScroll = $('#lets-connect').offset().top;
    $(window).scroll(function(){
    	$('ul.nav li a').removeClass('active');
    	if($(window).scrollTop() < workScroll){
    		$('ul.nav li a#1').addClass('active');
    	}
    	else if($(window).scrollTop() < projectScroll){
    		$('ul.nav li a#2').addClass('active');
    	}
    	else if($(window).scrollTop() < educationScroll){
    		$('ul.nav li a#3').addClass('active');
    	}
    	else if($(window).scrollTop() < mapScroll){
    		$('ul.nav li a#4').addClass('active');
    	}
    });*/

    /* Events to highlight the tab when they are clicked to scroll to a particular position */
    $('.collapse a').on('click', function(){
    	$('.collapse').toggleClass('in');
    });

    $('ul.nav li a').on('click', function() {
    	$('ul.nav li a').removeClass('active');
    	$(this).toggleClass('active');
    });
});
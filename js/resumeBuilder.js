// *** Header *** //
var bio = {
    "name": "Kazim Reza  ",
    "role": "  Web Developer",
    "contacts": {
        "mobile": "314-267-2221",
        "email": "hl305@hotmail.com",
        "github": "kazimreza",
        "twitter": "hl305",
        "location": "St. Louis, MO",
        "blog": "Fake Data"
    },
    "welcomeMessage": "My Measure of Success - My Team's Performance",
    "skills": [
        "Technical Team Manager", "Web Developer", "iOS App Developer", "Corporate Communications"
    ],
    "biopic": "images/KazimReza.jpg"
};

// *** Work Experience *** //
var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "Manager Network Services",
        "location": "St. Louis, MO",
        "dates": "January 2008 - Present",
        "description": "<ul><li>Manage team of Tier II Network Support Technicians – troubleshooting with tier I to address customer’s concerns about their DSL service</li><li>Use MSOC methodology to improve team’s performance</li><li>Review technician’s performance and provide training, feedback and coaching to technicians, so they can perform effectively and efficiently</li><li>Analyze data and create original reports to help improve team’s performance</li><li>Conduct quality inspections, to maintain safe work performance and high customer satisfaction.</li><li>Identify and remove roadblocks, that effects technician’s performance.</li><li>Address and resolve customer issues. Ensure that all functions are performed in a timely fashion to meet customer and company specifications.</li><li>Improved crew's work quality (revisit rate) from over 9% to fewer than 5%.</li><li>Improved SME rating from 4.5 to 4.8 (on a scale of 1-5)</li><li>Created Quintile report for DSL Tier II (Core ‘C’ & Core ‘N’) technicians</li><li>Managed three different teams of 16 Field Technicians for two years</li><li>Coached the teams of new technicians into a team of tenured Technicians</li><li>Improved the overall team’s (all three teams) performance ranking from bottom 20% to top 20% of teams.</li><li>Field Technicians; engages in installation and maintenance, provisioning, dispatch, and testing activities at the customer premise or a company location for U-Verse Service.</li><li>Interview and screen new (potential) technicians, to install and repair U-Verse service.</li><li>Maintained AT&T’s compliance with environmental laws and regulations</li><li>Received Service Excellence Award.</li><ul>"

    }, {
        "employer": "One Stop Communications",
        "title": "Manager - Sales and Service, Wireless Communications",
        "location": "St. Louis, MO",
        "dates": "June 1995 - June 2005",
        "description": "<ul><li>Authorized dealer for Verizon Wireless (Ameritech), T-Mobile, Sprint, and Nextel.</li><li>Sold wireless communication service, cell phones, pagers, two way radios.</li><li>Purchased bulk airtime from career; divide it, priced it, packaged it, and sold it as Pre-Paid airtime (with and without phone) to consumers, using a network of 40+ dealers.</li><li>Managed five retail locations with a crew of 17 employees.</li><li>Managed outside sales force of five sales representatives.</li><li>Repaired cell phones and pagers. </li><li>Project Management, Inception to Implementation. </li><li>Managed all aspects of business operations, including but not limited to employee management, sales, accounting/payroll. Increase sales from $0.00 in sales to over two million dollars in sales in 5 years.</li><li>Human resource role for hiring Retail Sales Consultants and Sales Support Representatives for a group of stores. Creates and implements recruiting and interviewing plans. Ensures applicants have completed all necessary training to perform their daily duties.</li></ul>"

    }, {
        "employer": "Multimedia Security",
        "title": "Sales Manager",
        "location": "Chesterfield, MO",
        "dates": "November 1993 - June 1995",
        "description": "<ul><li>Managed a sales team of 12 Door to Door sales representatives.</li><li>Exceed sales revenue quota for 12 months in a row.</li><li>Started as a Door to Door Sales Representative, was promoted to Sales Manager in six months.</li></ul>"

    }, {
        "employer": "Cherokee Management",
        "title": "Manager",
        "location": "St. Louis, MO",
        "dates": "November 1993 - June 1995",
        "description": "<ul><li>Manage commercial and residential rental properties.</li><li>Work as general contractor for Rehabilitation of old buildings / houses.</li><li>Coordinate work detail among sub-contractors (electrical, plumbing, mechanical, etc.).</li><li>Maintained and managed over 30 rental properties.</li></ul>"

    }]
};

// *** Projects *** //
var projects = {
    "projects": [{
        "title": "Class Reunion Website",
        "dates": "August 2016",
        "description": "25 year Class Reunion - St. Charles West High School",
        "images":["images/AA1.png"]

    }, {
        "title": "Robot Maze",
        "dates": "March 2016",
        "description": "Udacity, iOS App Developer Nano Degree",
        "images": ["images/robotMaze.png"]

    }, {
        "title": "Pirate Fleet",
        "dates": "April 2016",
        "description": "Udacity, iOS App Developer Nano Degree",
        "images": ["images/pirateShip.png"]

    }, {
        "title": "Silly Song",
        "dates": "May 2016",
        "description": "Udacity, iOS App Developer Nano Degree",
        "images": ["images/sillySong.png"]

    }, {
        "title": "Pitch Perfect",
        "dates": "November 2015",
        "description": "Udacity, Intro to iOS App Development",
        "images": ["images/pitchPerfect.png"]

    } ]
};

// *** Education *** //
var education = {
    "schools": [{
        "name": "University of Missouri - St. Louis",
        "location": "St. Louis, MO",
        "degree": "BS",
        "majors": ["Accounting", "  MIS", "  Computer Network"],
        "dates": "9/1987 - 6/1991",
        "url": "https://umsl.edu"

    }, {
        "name": "Washington University",
        "location": "St. Louis, MO",
        "degree": "MS",
        "majors": ["Mathematics", "  MIS", "  CS"],
        "dates": "9/1992 - 6/1993",
        "url": "https://www.wustl.edu"
    }, {
        "name": "Udacity",
        "location": "Online - CA, USA",
        "degree": "Nano Degree",
        "majors": ["iOS App Developer", "  Frontend Web Developer"],
        "url": "https://www.udacity.com",
        "dates": "2016-2016"

    }],
    'onlineCourses': [{
    'title': 'Nano Degree',
    'description': ["iOS App Developer", "  Frontend Web Developer"],
    'school': 'Udacity',
    'dates': '2/2016 - 6/2016',
    'url': 'https://www.udacity.com'
  }]
};


// *** Adding Bio Info  *** //
bio.display = function () {
    'use strict'
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);

var formattedWelcomeMessage = HTMLWelcomeMessage.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedBlog);    
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);


// *** Skills List *** //

    for (var skill=0;
         skill < bio.skills.length;
        skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkills);
    }
};
bio.display();

// *** Adding Work Experience *** //
work.display = function() {
    'use strict'
     
    for (var job =0; 
         job < work.jobs.length; 
         job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// *** Adding Projects *** //
projects.display = function() {
    'use strict'
     
    for (var project=0; 
         project < projects.projects.length; 
         project++) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImages);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
};

projects.display();

// *** Adding Education *** //
education.display = function() {
    'use strict'

    for (var sch=0; 
         sch < education.schools.length; 
         sch++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[sch].name);
        //formattedSchool = formattedSchool.replace("%logo%", education.schools[sch].logo);
        $(".education-entry:last").append(formattedSchool);
        
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[sch].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedMajors = HTMLschoolMajors.replace("%data%", education.schools[sch].majors);
        $(".education-entry:last").append(formattedMajors);
        
        var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[sch].url);
        $(".education-entry:last").append(formattedUrl);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
        $(".education-entry:last").append(formattedLocation);
    };
    $('#education').append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(onlineCourse) {
    $('#education').append(HTMLschoolStart);    

    var formattedTitle = HTMLonlineTitle.replace('%data%',onlineCourse.title);
    var formattedSchool = HTMLonlineSchool.replace('%data%',onlineCourse.school);
    var formattedDates = HTMLonlineDates.replace('%data%',onlineCourse.dates);
    var formattedUrl = HTMLonlineURL.replace('%data%',onlineCourse.url);    
    $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
  });
};

education.display();

// *** Google map of locations *** //
$("#mapDiv").append(googleMap);

// *** BackToTop Function *** //

$(document).ready(function() {


    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.backToTop').fadeIn();
        } else {
            $('.backToTop').fadeOut();
        }
    });

    $('.backToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
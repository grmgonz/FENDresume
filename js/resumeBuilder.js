//var name = "Gabe Gonzales";
//var formattedName = HTMLheaderName.replace("%data%", name);
// var role = "Web Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
var bio = {
  "name": "Gabe Gonzales",
  "role": "Front-End Web Developer",
  "contacts": {
    "mobile": "###-###-####",
    "email": "grmgonz@gmail.com",
    "github": "grmgonz",
    "location": "Grande Prairie"
  },
  "welcomeMessage": "I hope you enjoy my Online Resume Project! Scroll On ⇳",
  "skills": ["HTML5", "CSS3", "Javascript", "Imagination & Perseverance"],
  "biopic": "images/gabe.jpg"
};
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").prepend(formattedRole).prepend(formattedName);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#footerContacts, #topContacts").append(formattedMobile,
    formattedEmail, formattedGithub);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedBioPic).append(formattedWelcomeMsg);
  if (bio.skills.length) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });
  }
};
var education = {
  "schools": [{
    "image": "images/SFUlogo.png",
    "name": "<a href = https://www.sfu.ca/ target = _blank>Simon Fraser University</a>",
    "location": "Simon Fraser University, Burnaby, BC, Canada",
    "degree": "Bachelor",
    "majors": ["History"],
    "minor": "Kinesiology",
    "dates": "2009 - 2013",
    "url": "https://www.sfu.ca/ "
  }],
  "onlineCourses": [{
    "image": "images/udacity.png",
    "title": "<a href = https://www.udacity.com/course/nd001 target= _blank>" +
      " Front-End Web Developer Nanodegree</a>",
    "school": "Udacity",
    "date": "April 2016 - present",
    "url": "https://www.udacity.com/course/nd001"
  }, {
    "image": "images/udemy.png",
    "title": "<a href = https://www.udemy.com/how-to-become-a-web-developer" +
      "-from-scratch/ target=_blank> Become a Web Developer from Scratch</a>",
    "school": "Udemy",
    "date": "2015 - 2016",
    "url": "https://www.udemy.com/how-to-become-a-web-developer-from-scratch/"
  }]
};
education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedImage = HTMLschoolImage.replace("%data%", school.image);
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    var formattedMinor = HTMLschoolMinor.replace("%data%", school.minor);
    $(".education-entry:last").append(formattedImage).append(
      formattedSchoolName + formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolLocation).append(
      formattedSchoolDates).append(formattedMajor).append(formattedMinor);
  });
  if (education.onlineCourses.length) {
    $(".education-entry").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      var formattedEduImage = HTMLonlineImage.replace("%data%", course.image);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.date);
      $(".online-entry:last").append(formattedEduImage,
        formattedOnlineTitle + formattedOnlineSchool,
        formattedOnlineDates);
    });
  }
};
var work = {
  "jobs": [{
    "employer": "<a href=http://gabegonzales.co/ target = _blank>" +
      "GRMG Web Development</a>",
    "title": "Freelance Front-End Web Developer",
    "location": "Grande Prairie, Alberta, Canada",
    "dates": "September 2015-Present",
    "description": "I started my freelancing business to create" +
      "websites that will help people reach their goals."
  }, {
    "employer": "<a href = http://www.pwsd76.ab.ca/Pages/default.aspx" +
      "target = _blank>Peace Wapiti School Division No. 76</a>",
    "title": "Physical Educational Assistant",
    "location": "Grande Prairie, AB, Canada",
    "dates": "Sept 2015-June 2016",
    "description": "As an EA, I was responsible for assisting Phys ed for grades 1-8."
  }, {
    "employer": "<a href= http://www.goodlifefitness.com/ target=_blank>" +
      "Goodlife Fitness</a>",
    "title": " Level 3 Personal Trainer/Strength Coach",
    "location": "Toronto",
    "dates": "January 2014-March 2015",
    "description": "As a personal trainer I created workout progams" +
      "designed to reach my clients' health and fitness goals."
  }, {
    "employer": "<a href= http://www.snclubs.com/ target=_blank>" +
      "Steve Nash Fitness World</a>",
    "title": " Level 4 Personal Trainer",
    "location": "Vancouver, BC, Canada",
    "dates": "January 2013-January 2014",
    "description": "As a personal trainer I created workout progams" +
      "designed to reach my clients' health and fitness goals."
  }]
};
work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedDescription);
  })
};
var projects = {
  "projects": [{
    "title": "<a href= http://gabegonzales.co/ target = _blank>" +
      "GRMG Web Devlopment</a>",
    "dates": "2009 - 2013",
    "description": "This project is Version 1 of my freelancing" +
      "website. I designed it using HTML, CSS and JS.",
    "images": ["images/grmg.png"]
  }, {
    "title": "<a href= http://www.nehasetlur.com/ target = _blank>" +
      "Neha Setlur</a>",
    "dates": "2009 - 2013",
    "description": "This project is a fitness blog I designed using" +
      "Wordpress and utilizing HTML, CSS and PHP.",
    "images": ["images/nehaport.jpg"]
  }, {
    "title": "<a href= http://www.deathofcarbs.com/ target= _blank>" +
      "Death Of Carbs</a>",
    "dates": "2009 - 2013",
    "description": "This project is a personal health blog I designed" +
      "using Wordpress and utilizing HTML, CSS and PHP.",
    "images": ["images/doclogo.png"]
  }]
};
projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[
      project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[
      project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects
      .projects[project].description);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[
      project].images);
    $(".project-entry:last").append(formattedTitle, formattedDates,
      formattedImage, formattedDescription);
  }
};
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
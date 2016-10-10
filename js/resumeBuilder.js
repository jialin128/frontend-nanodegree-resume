var skills = ["ASP.net", " C/C++", " C#", " JavaScript", " HTML", " CSS"];

var bio = {
    "name": "Jialin Jhong",
    "role": "Web Developer",
    "welcomeMessage": "Nice to meet you",
    "biopic": "images/fry.jpg",
    "contacts": {
     "eamil": "jialin9112@gmail.com",
     "github": "jialin128",
     "location": "Taoyuan"
    },
    "skills": skills
} 

var work = {
    "jobs": [
        {
            "employer": "IISI",
            "title": "Intern",
            "location": "New Taipei City",
            "dates": "2015 summer vacation",
            "description": "Assist the implementation of the new projects"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Container loading and packing system",
            "dates": "2012",
            "description": "This study aims to propose the idea of heuristic methods based on cutting algorithm and genetic algorithms in a single container, with the specific process, and places things in a real setting, to achieve an approximate optimum utilization of space or the ultimate goal.",
            "images":[]
        }
    ]
}

var education = {
    "schools":
    [
        {
            "name": "National Central University",
            "location": "Taoyuan",
            "degree": "Master",
            "dates": 2016,
            "url": "http://www.ncu.edu.tw/",
            "major": ["Information Management"]
        },
          {
            "name": "Yuan Ze University",
            "location": "Taoyuan",
            "degree": "Bachelor",
            "dates": 2014,
            "url": "http://www.yzu.edu.tw/",
            "major": ["Information Management"]
        }
    ],
    "onlineCourses": 
    [
         { 
         "title" : "The Data Scientist’s Toolbox", 
         "school": "Johns Hopkins University", 
         "dates": 2015,
         "url": "https://www.coursera.org/learn/data-scientists-tools"
         },
         { 
         "title" : "JavaScript Basics", 
         "school": "Udacity", 
         "dates": 2016,
         "url": "https://classroom.udacity.com/courses/ud804"
         },
         { 
         "title" : "Java Programming: Solving Problems with Software", 
         "school": "Duke University", 
         "dates": 2016,
         "url": "https://www.coursera.org/learn/java-programming"
         }
    ]
}

var frontendWebProject = {
    "projects":[
        {
            //"title": "Build a Random Quote Machine",
            "title": "Random Quote Machine",
            "images": ["images/quote.png"],
            "url": "http://codepen.io/jialin128/full/WxaWGO"
        },
        {
            "title": "Show the Local Weather",
            "images":["images/weather.png"],
            "url": "http://codepen.io/jialin128/full/LkqErv"
        },
        {
            "title": "Build a Wikipedia Viewer",
            "images":["images/wiki.png"],
            "url": "http://codepen.io/jialin128/full/GqZELB"
        },
        {
            "title": "JavaScript Calculator",
            "images":["images/calculator.png"],
            "url": "http://codepen.io/jialin128/full/qaWAKd"
        },
         {
            "title": "Build a Tic Tac Toe Game",
            "images":["images/tictactoe.png"],
            "url": "https://codepen.io/jialin128/full/pEjwJQ"
        },
        {
            "title": "Build a Simon Game",
            "images":["images/simon.png"],
            "url": "http://codepen.io/jialin128/full/BLLQOX"
        }
    ]
}


bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);
        
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    
    //contact info
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.eamil);
    $("#header").append(formattedEmail);
    
    var footerEmail = '<a href="mailto:' + bio.contacts.eamil +'">' + bio.contacts.eamil +'</a>';
    $("#footerContacts").append(footerEmail);
   
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGithub);
    
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);
    
    //skill
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(formattedSkills);
    
}


work.display = function(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
      
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  } 
}


projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
  
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);
      
       var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);
      
       var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);
      
      if(projects.projects[project].images.length > 0){
          for(image in projects.projects[project].images){
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);        
          }
      }
  }
}


education.display = function(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }
    //online courses 
    $("#education").append(HTMLonlineClasses);
    for(onlineCourse in education.onlineCourses){
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".education-entry:last").append(formattedName);
        
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedSchool);
        
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedDates);
        
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);
    }
}


frontendWebProject.display = function(){
    for(project in frontendWebProject.projects)
    {
      $(".row").append(HTMLfrontendProjectStart);

      var formattedTitleURL = HTMLfrontendProjectTitleURL.replace("%NameData%", frontendWebProject.projects[project].title);
      formattedTitleURL = formattedTitleURL.replace("%urlData%", frontendWebProject.projects[project].url);
      $(".frontendproject-entry:last").append(formattedTitleURL);
        
      if(frontendWebProject.projects[project].images.length > 0)
      {
        for(image in frontendWebProject.projects[project].images)
        {
              var formattedImage = HTMLfrontendProjectImage.replace("%data%", frontendWebProject.projects[project].images[image]);
              $(".frontendproject-entry:last").append(formattedImage);        
        }
      }
    }
   $(".frontendproject-entry:last").append(HTMLrowEnd);
}

bio.display();

//Google map
$("#mapDiv").append(googleMap);

work.display();
$("#workExperience").click(function(){
   $(".work-entry").toggle("slide");
})

projects.display();
$("#projects").click(function(){
   $(".project-entry").toggle("slide");
})

education.display();
$("#education").click(function(){
   $(".education-entry").toggle("slide");
})

frontendWebProject.display();

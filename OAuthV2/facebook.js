var firstName;
var lastName;
var email;
var gender;
var dob;
var company;
var position;
var location1;
var picture;

window.onload = function() {
  FB.logout(function(response) {
  // user is now logged out 
  console.log("logout"+response);
  console.log(response);
});
   IN.User.logout(function() {
    console.log("logout"+response);
	console.log(response);
       });
};

function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
     
      testAPI();
	  // FB.api();
  
  }{ scope: 'email,user_birthday,user_location,user_hometown' };

  // testAPI();
  }
  
function checkLoginState() {
	FB.login(function(response){
		console.log(response);
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
	});
  }
 
 
 // function signOut() {
    // gapi.auth.signOut();
    // window.location = "/user/logout"
  // }
 
 
  
  
  
  window.fbAsyncInit = function() {
    FB.init({
 //       appId      : '1840782732845866', //localhost
     appId      : '257420148012172', 
 
       xfbml      : true,
    scope: "email,user_birthday,public_profile,user_location,user_hometown",
	 version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  };



 function testAPI() {
                    var url = '/me?fields=name,email,first_name,last_name,picture,gender,age_range,location';
	
    // console.log('Welcome!  Fetching your information.... ');
	try {
		FB.api(url, function (response) {
		
		  var hide = document.getElementById('container-hide');
		 hide.style.display='none';
		 
		 var show1 = document.getElementById('container-hide1');
		 show1.style.display='block';
		 
		 firstName=response.first_name;
		 lastName=response.last_name;
		 if(response.gender!=undefined){ 
		 gender=response.gender;
		 }
		 else{
			 gender="Data is not public";
		 }
		 	   
		  if(response.email!=undefined){
		 email=response.email;
		  }
		  else{
			  email="Data is not public";
		  }
		 picture =response.picture.data.url;
		 console.log(firstName+lastName);
		 
		  // var show = document.getElementById('container-show');
		 // show.style.display='block';
		 
		// document.getElementById('first_name').value =response.first_name;
		   // document.getElementById('last_name').value =response.last_name;
		
	
			   // document.getElementById('email').value =response.email;
		// }  
		 // if(response.gender!=undefined){ 
			// document.getElementById('gender').value =response.gender;
		// }  
		
		
			
			
		});
	}catch(err) {
		alert(err.message);
	}
  }


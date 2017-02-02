

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
     
      testAPI();
	  // FB.api();
  
  }{ scope: 'email,user_birthday,user_location,user_hometown' };

  // testAPI();
  }
  
  function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

  
function checkLoginState() {
	FB.login(function(response){
		console.log(response);
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
	});
  }
  
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
  
  
  window.fbAsyncInit = function() {
    FB.init({
 //               appId      : '1840782732845866', //localhost
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
		
		 
		document.getElementById('first_name').value =response.first_name;
		   document.getElementById('last_name').value =response.last_name;
		
		   
		 if(response.email!=undefined){
			   document.getElementById('email').value =response.email;
		}  
		else{
			document.getElementById('email').value ="Data is not Public";
		}
		 if(response.gender!=undefined){ 
			document.getElementById('gender').value =response.gender;
		}  
		else{
			document.getElementById('gender').value ="Data is not Public";
		}
				document.getElementById('location').value ="Data is not Public";
				document.getElementById('birthday').value ="Data is not Public";
				document.getElementById('picture1').src =response.picture.data.url;
				document.getElementById('company').value ="Data is not Public";
				document.getElementById('position').value ="Data is not Public";
			
		});
	}catch(err) {
		alert(err.message);
	}
  }


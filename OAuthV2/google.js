 var apikey = 'AIzaSyAT41Zfe4KJbFX7PIqoRj47mJcx2fpLc9Y'; 
 var clientId = '282608505833-s96kjj3v0ucmsnmg0frgctn1lpk67vuk.apps.googleusercontent.com';
 
 // var apikey = 'AIzaSyBEcEUsr35dokeXWFJfV18s9GTkE0wZNfE';      //localhost
// var clientId = '78421908922-54c6tchuoor9cbofsi5q83fc4ok9ii0t.apps.googleusercontent.com';   //localhost

var scopes = 'https://www.googleapis.com/auth/user.birthday.read'; 
var scopes = 'https://www.googleapis.com/auth/userinfo.email'; 
  // var scopes = 'https://www.googleapis.com/auth/user.birthday.read'; 
 
function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
}

function handleAuthResult(authResult) {
 
    if (authResult && !authResult.error) {
        makeApiCall();
    } 
}

function handleAuthClick(event) { gapi.auth.authorize({ client_id: clientId, 
            scope: scopes, immediate: false }, handleAuthResult);
 
    return false;
}
 // function signOut() {
    // gapi.auth.signOut();
    // window.location = "/user/logout"
  // }
  
   // function signOut() {
    // var auth2 = gapi.v1.getAuthInstance();
    // auth2.signOut().then(function () {
      // console.log('User signed out.');
    // });
  // }
  
  
 
 function logoutgen(){
	 FB.logout(function(response) {
   
  console.log("logout"+response);
  console.log(response);
});
   IN.User.logout(function() {
    console.log("logout"+response);
	console.log(response);
       });

 }

function makeApiCall() {

	
		gapi.client.load('plus', 'v1', function () {
        var request = gapi.client.plus.people.get({
        'userId': 'me'
        });
 
        request.execute(function (resp) {
		console.log(resp);
		console.log(resp.birthday);
		
		
		if(resp.birthday!=undefined){
		var date =resp.birthday;
        var newdate = date.split("-").reverse().join("-");
        console.log(newdate);
		dob=newdate;
		}
		else{
		dob="Data is not public";
		}
		
		// if(resp.gender!=undefined){
				// document.getElementById('gender').value =resp.gender;
		// }
		
		// if(resp.image.url!=undefined){
			 // document.getElementById('picture1').src =resp.image.url;
		// }
		// if(resp.emails[0].value!=undefined){
			// document.getElementById('email').value =resp.emails[0].value;
		// }
		
		// document.getElementById('first_name').value =resp.name.givenName;
	    // document.getElementById('last_name').value =resp.name.familyName;
	    	
		
		var hide = document.getElementById('container-hide1');
		hide.style.display='none';
		var show = document.getElementById('container-hide2');
		show.style.display='block';
		
		

        });
    });
}
 
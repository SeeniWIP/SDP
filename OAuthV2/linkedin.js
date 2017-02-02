

    function onLinkedInLoad() {
        IN.UI.Authorize().place();      
        IN.Event.on(IN, "auth", function () { onLogin(); });
    }

    function onLogin() {
            console.log("auth");
			IN.API.Profile("me")
			.fields("firstName", "lastName", "industry", "location:(name)", "picture-url", "headline", "summary", "num-connections", "public-profile-url", "distance", "positions", "email-address", "educations", "date-of-birth")
			.result(displayResult)
			.error(displayProfilesErrors);
    }  

	// function logout(){
		// console.log("inside logout");
		// alert("insde logout");
				// IN.Event.onOnce(IN, 'systemReady', function() {
			  // try {
				 // console.log("inside try");
				// IN.User.logout();
				 // console.log("later try");
			  // } catch (err) {
				  
				  // console.log("inside catch");
				// console.log(err);
			  // }
			  // setTimeout("goToHome()", 10000);
			// });
			// function goToHome() {
			  // location.href="login.html";
			// }
	// }
	
	
    function displayResult(profiles) {
        var member = profiles.values[0];
		
	if(member.positions!=undefined){
		if(member.positions.values){
			if(member.positions.values[0]!=undefined){
				if(member.positions.values[0].company.name!=undefined){
				var compname=member.positions.values[0].company.name;
				company=compname;
				// document.getElementById('company').value =compname;
				}
				else{
				compname="Data is not public";
				}
				if(member.positions.values[0].title!=undefined){
				var position1=member.positions.values[0].title;
				// document.getElementById('position').value =position;
				position=position1;
				}
				else{
					position="Data is not public";
					}
			}
			else{
			company="Data is not public";
			position="Data is not public";
			}
		}
		else{
		company="Data is not public";
		position="Data is not public";
			}
	}
	else{
		company="Data is not public";
		position="Data is not public";
	}
	
		
	if(member.location.name!=undefined){
		var loc=member.location.name;
		location1=loc;
		// document.getElementById('location').value =loc;
	}
	else{
		location1="Data is not public";
	}
		
	/* if(member.pictureUrl!=undefined){
		var photo=member.pictureUrl; 
		picture= photo;
		 // document.getElementById('picture1').src =photo;
	} */
	
	email=member.emailAddress;
	
		
    // var id=member.id;
    // var first_Name=member.firstName; 
    // var last_Name=member.lastName; 
	  // document.getElementById('first_name').value =member.firstName;
	   // document.getElementById('last_name').value =member.lastName;
	   // document.getElementById('email').value =member.emailAddress;	
		
    var hide = document.getElementById('container-hide2');
     hide.style.display='none';
	 
	 // var show = document.getElementById('container-hide');
     // show.style.display='block';
	 
	 

	 	
    var show = document.getElementsByClassName('container-show');
     for (var i = 0; i < show.length; i++) {
        show[i].style.display = "block";
    }
	
	
	  console.log(firstName+lastName);
	 
	 document.getElementById('first_name').value =firstName;
	  document.getElementById('last_name').value =lastName;
	  document.getElementById('email').value =email;
	  document.getElementById('company').value =company;
	  document.getElementById('position').value =position;
	  
	  document.getElementById('picture1').src =picture;
	  document.getElementById('location').value =location1;
	  document.getElementById('gender').value =gender;
	   document.getElementById('birthday').value =dob;
	   
	   var details = { 'first_name': firstName, 'last_name': lastName, 'email': email, 'company': company, 'position':position, 'picture':picture,
	   'loc':location1, 'gender':gender, 'birthday':dob};
	   
	    
	  localStorage.setItem('details1', JSON.stringify(details));
	  
	  
	  var retrievedObject = localStorage.getItem('details1');

     console.log('Details: ', JSON.parse(retrievedObject));
	 console.log('Details: ', JSON.parse(retrievedObject).gender);
	  
	 		

}

function displayProfilesErrors(error) {
profilesDiv = document.getElementById("profiles");
console.log(error);
} 
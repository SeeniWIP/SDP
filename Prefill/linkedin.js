

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
    function displayResult(profiles) {
        var member = profiles.values[0];
	if(member.positions!=undefined){
		if(member.positions.values){
			if(member.positions.values[0]!=undefined){
				if(member.positions.values[0].company.name!=undefined){
				var compname=member.positions.values[0].company.name;
				document.getElementById('company').value =compname;
				}
				else{
					document.getElementById('company').value ="Data is not Public";
				}
				if(member.positions.values[0].title!=undefined){
				var position=member.positions.values[0].title;
				document.getElementById('position').value =position;
				}
				else{
					document.getElementById('position').value ="Data is not Public";
				}
			}
		}
		else{
					document.getElementById('company').value ="Data is not Public";
					document.getElementById('position').value ="Data is not Public";
	}
	}
	else{
					document.getElementById('company').value ="Data is not Public";
					document.getElementById('position').value ="Data is not Public";
	}
	if(member.location.name!=undefined){
		var loc=member.location.name;
		document.getElementById('location').value =loc;
	}
	else{
		document.getElementById('location').value ="Data is not Public";
	}
		
	if(member.pictureUrl!=undefined){
		var photo=member.pictureUrl; 
		 document.getElementById('picture1').src =photo;
	}
	else{
		document.getElementById('picture1').value ="Data is not Public";
	}
		
    var id=member.id;
    var first_Name=member.firstName; 
    var last_Name=member.lastName; 
		
	   document.getElementById('first_name').value =member.firstName;
	   document.getElementById('last_name').value =member.lastName;
	   document.getElementById('email').value =member.emailAddress;		
		document.getElementById('birthday').value ="Data is not Public";

}

function displayProfilesErrors(error) {
profilesDiv = document.getElementById("profiles");
console.log(error);
} 
	  
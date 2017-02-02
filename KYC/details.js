
	 
window.onload = function(){
	var retrievedObject = localStorage.getItem('details1');

console.log('Details: ', JSON.parse(retrievedObject));
console.log('Details: ', JSON.parse(retrievedObject).birthday);
console.log('Details: ', JSON.parse(retrievedObject).loc);
	  
	  var first_name=JSON.parse(retrievedObject).first_name;
	  var last_name=JSON.parse(retrievedObject).last_name;
	  var email=JSON.parse(retrievedObject).email;
	  var company=JSON.parse(retrievedObject).company;
	  var position=JSON.parse(retrievedObject).position;
	  var picture=JSON.parse(retrievedObject).picture;
	  var location1=JSON.parse(retrievedObject).loc;
	  var gender=JSON.parse(retrievedObject).gender;
	  var birthday=JSON.parse(retrievedObject).birthday;

     document.getElementById('first_name1').value =first_name;
	  document.getElementById('first_name1').value =first_name;
	  document.getElementById('last_name1').value =last_name;
	  document.getElementById('email1').value =email;
	  document.getElementById('company1').value =company;
	  document.getElementById('position1').value =position;
	  
	  document.getElementById('picture11').src =picture;
	  document.getElementById('location1').value =location1;
	  document.getElementById('gender1').value =gender;
	   document.getElementById('birthday1').value =birthday;
	   
};

function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

	
	 
	  // console.log(firstName+lastName);
	 
	 // document.getElementById('first_name').value =firstName;
	  // document.getElementById('last_name').value =lastName;
	  // document.getElementById('email').value =email;
	  // document.getElementById('company').value =company;
	  // document.getElementById('position').value =position;
	  
	  // document.getElementById('picture1').src =picture;
	  // document.getElementById('location').value =location1;
	  // document.getElementById('gender').value =gender;
	   // document.getElementById('birthday').value =dob;
	   
	   // var details = { 'first_name': firstName, 'last_name': lastName, 'email': email, 'company': company, 'position':position, 'picture':picture,
	   // 'location':location1, 'gender':gender, 'birthday':dob};
	   
	    
	  // localStorage.setItem('details', JSON.stringify(details));
	  
	  
	  // var retrievedObject = localStorage.getItem('details');

     // console.log('Details: ', JSON.parse(retrievedObject));
	 // console.log('Details: ', JSON.parse(retrievedObject).gender);
	  
	 		

// }

// function displayProfilesErrors(error) {
// profilesDiv = document.getElementById("profiles");
// console.log(error);
// } 
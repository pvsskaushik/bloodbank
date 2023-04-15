document
  .getElementById("donor-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var bloodGroup = document.getElementById("blood-group").value;
    var location = document.getElementById("location").value;

    // Create an object to store the data
    var donor = {
      name: name,
      email: email,
      phone: phone,
      bloodGroup: bloodGroup,
      location: location,
    };

    // Save the data to local storage
    var donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.push(donor);
    localStorage.setItem("donors", JSON.stringify(donors));

    // Reset the form
    document.getElementById("donor-form").reset();
  });

// Define the initial donors
const initialDonors = [
  {
    name: "Sarah Jones",
    email: "sjones@gmail.com",
    phone: "8885557890",
    bloodGroup: "B+",
    location: "Hyderabad, India",
  },

  {
    name: "Amit Patel",
    email: "apatel@gmail.com",
    phone: "9175551234",
    bloodGroup: "O+",
    location: "Secunderabad, Hyderabad",
  },

  {
    name: "Emily Kim",
    email: "ekim@gmail.com",
    phone: "8885552345",
    bloodGroup: "A-",
    location: "Madhapur, Hyderabad",
  },

  {
    name: "Sanjay Singh",
    email: "ssingh@gmail.com",
    phone: "9865556789",
    bloodGroup: "AB+",
    location: "Gachibowli, Hyderabad",
  },

  {
    name: "Rachel Chen",
    email: "rchen@gmail.com",
    phone: "9885554567",
    bloodGroup: "B-",
    location: "Banjara Hills, Hyderabad",
  },

  {
    name: "Manish Sharma",
    email: "msharma@gmail.com",
    phone: "9035557890",
    bloodGroup: "O-",
    location: "Hitech City, Hyderabad",
  },

  {
    name: "Priya Menon",
    email: "pmenon@gmail.com",
    phone: "9175553456",
    bloodGroup: "A+",
    location: "Jubilee Hills, Hyderabad",
  },

  {
    name: "Kiran Rao",
    email: "krao@gmail.com",
    phone: "9985555678",
    bloodGroup: "AB-",
    location: "Kondapur, Hyderabad",
  },

  {
    name: "Neha Gupta",
    email: "ngupta@gmail.com",
    phone: "9035556789",
    bloodGroup: "B+",
    location: "Ameerpet, Hyderabad",
  },

  {
    name: "Rajesh Kumar",
    email: "rkumar@gmail.com",
    phone: "9865551234",
    bloodGroup: "O+",
    location: "Begumpet, Hyderabad",
  },
];

// Function to initialize the donor list table with initial donors
function initializeDonorList() {
  // Get a reference to the donor list table body
  const tableBody = document.getElementById("donor-list-body");

  // Loop through the initial donors and add rows to the table
  for (let i = 0; i < initialDonors.length; i++) {
    const donor = initialDonors[i];

    const row = document.createElement("tr");
    row.innerHTML =
      "<td>" +
      donor.name +
      "</td>" +
      "<td>" +
      donor.email +
      "</td>" +
      "<td>" +
      donor.phone +
      "</td>" +
      "<td>" +
      donor.bloodGroup +
      "</td>" +
      "<td>" +
      donor.location +
      "</td>";

    tableBody.appendChild(row);
  }
}

// Call the initializeDonorList function to initialize the table with initial donors
initializeDonorList();

function populateDonorList() {
  // Get the donor data from local storage
  var donors = JSON.parse(localStorage.getItem("donors")) || [];

  // Get a reference to the donor list table body
  var tableBody = document.getElementById("donor-list-body");

  // Clear the table
  // tableBody.innerHTML = "";

  // Loop through the donor data and add rows to the table
  for (var i = 0; i < donors.length; i++) {
    var donor = donors[i];

    var row = document.createElement("tr");
    row.innerHTML =
      "<td>" +
      donor.name +
      "</td>" +
      "<td>" +
      donor.email +
      "</td>" +
      "<td>" +
      donor.phone +
      "</td>" +
      "<td>" +
      donor.bloodGroup +
      "</td>" +
      "<td>" +
      donor.location +
      "</td>";

    tableBody.appendChild(row);
  }
}

// Call the populateDonorList function to populate the table when the page loads
populateDonorList();

// SearchButton functionality
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  const bloodGroup = document.getElementById("search-blood-group").value;
  const donorListBody = document.getElementById("donor-list-body");
  const rows = donorListBody.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const bloodGroupCell = rows[i].getElementsByTagName("td")[3];
    if (bloodGroupCell.textContent === bloodGroup || bloodGroup === "") {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});

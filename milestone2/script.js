var form = document.getElementById("resume-form");
var resumedisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skill = document.getElementById("skill").value;
    var resumecollect = "\n<h2>personal information</h2>\n<p>name : ".concat(name, " </p>\n<p>email : ").concat(email, " </p>\n<p>phone : ").concat(phone, " </p>\n\n<h2>education</h2>\n<p>education : ").concat(education, " </p>\n\n<h2>skill</h2>\n<p>education : ").concat(skill, " </p>\n\n");
    if (resumedisplay) {
        resumedisplay.innerHTML = resumecollect;
    }
    else {
        console.error("went wrong");
    }
});

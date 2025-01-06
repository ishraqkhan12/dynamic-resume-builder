

// ---------------------- Form ----------------------------------
let form = document.querySelector("#form")
let nameForm = document.querySelector("#name-F")
let titleForm = document.querySelector("#title-F")
let summaryForm = document.querySelector('#summaryForm')
let projectForm = document.querySelector('#project-F')
let experienceForm = document.querySelector('#experience-F')
let projectNameForm = document.querySelector("#projectName-F")
let projectDetForm = document.querySelector("#projectDet-F")
let projectName2Form = document.querySelector("#projectName2-F")
let projectDet2Form = document.querySelector("#projectDet2-F")
let degreeForm = document.querySelector("#degree-F")
let instituteForm = document.querySelector("#institute-F")
let degree2Form = document.querySelector("#degree2-F")
let institute2Form = document.querySelector("#institute2-F")
let phoneForm = document.querySelector("#phone-F")
let emailForm = document.querySelector("#email-F")
let githubForm = document.querySelector("#github-F")
let linkedInForm = document.querySelector("#linkedIn-F")
let skill1Form = document.querySelector("#skill1-F")
let skill2Form = document.querySelector("#skill2-F")
let skill3Form = document.querySelector("#skill3-F")
let btn = document.getElementById("new")

const add = btn.addEventListener("click", (e) => {

    e.preventDefault()
    let new1 = document.createElement("input")
    new1.setAttribute("id", "skill2-F")
    new1.setAttribute("placeholder", "Enter here")
    btn.before(new1)
    btn.style.visibility = "hidden"

    new1.addEventListener("input", () => {
        skill2Cv.style.visibility = "inline"
        skill2Cv.innerHTML = new1.value

    })
    console.log(new1);
   
    

})

// 



// ---------------------- cv ----------------------------------

let resume = document.querySelector("#resume")
// resume.classList.remove("hide")

let nameCV = document.querySelector("#name-C")
let professionCv = document.querySelector(".profession-C")
let summaryCv = document.querySelector("#summary-C")
let projectCv = document.querySelector("#project-C")
let projectDetCv = document.querySelector("#projectDet-C")
let project2Cv = document.querySelector("#project2-C")
let projectDet2Cv = document.querySelector("#projectDet2-C")
let degreeCv = document.querySelector("#degree-C")
let instituteCv = document.querySelector("#institute-C")
let degree2Cv = document.querySelector("#degree2-C")
let institute2Cv = document.querySelector("#institute2-C")
let phoneCv = document.querySelector("#phone-C")
let emailCv = document.querySelector("#email-C")
let githubCv = document.querySelector("#github-C")
let linkedInCv = document.querySelector("#linkedIn-C")
let skill1Cv = document.querySelector("#skill1-C")
let skill2Cv = document.querySelector("#skill2-C")
let skill3Cv = document.querySelector("#skill3-C")
let headingP = document.querySelector("#P-E-C")

const submitBtn = document.querySelector('#submitBtn').addEventListener('click', async (event) => {


    // FORM VALIDATION 

    // Create an array of all input fields
    let inputs = [
        nameForm,
        titleForm,
        summaryForm,
        projectForm,
        experienceForm,
        projectNameForm,
        projectDetForm,
        projectName2Form,
        projectDet2Form,
        degreeForm,
        instituteForm,
        degree2Form,
        institute2Form,
        phoneForm,
        emailForm,
        githubForm,
        linkedInForm,
        skill1Form,
        // skill2Form,
        // skill3Form
    ];
    
    // Check if any input is empty
    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "2px solid red";
            // console.log("not submit");
            
        } else {
            input.style.border = "";
            // console.log("submit");
            
        }
    });
    
    
    if (!isValid) {
        alert("Please fill out all the fields.");
    } else {
        console.log("Form submitted successfully!");
        form.classList.add("hide-F")
        resume.classList.remove("hide-C")
    }
    


      // ------------- IMAGE CONVERT FORM TO CV
    let imageForm = document.querySelector("#photoInput")
    console.log(imageForm);
    let imageCv = document.querySelector("#image")
    console.log(imageCv);




    let imageFile = imageForm.files ? imageForm.files[0] : null
    let photoBase64 = " ";
    if (imageFile) {
        photoBase64 = await fileToBase64(imageFile)
        localStorage.setItem('PhotoCv', photoBase64)
        imageCv.src = photoBase64;
        console.log("ghiyt");

    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }



    if (experienceForm.checked) {
        headingP.innerHTML = "<strong>Experience:</strong>";
        console.log("1st if");
        // headingP mein "Experience" dikhana
    } else {
        headingP.innerHTML = "<strong>Project:</strong>"; // Agar "Experience" select nahi hai toh h1 ko clear karein
        console.log("2st if");

    }



    nameCV.innerHTML = nameForm.value
    professionCv.innerHTML = titleForm.value
    summaryCv.innerHTML = summaryForm.value
    projectCv.innerHTML = projectNameForm.value
    projectDetCv.innerHTML = projectDetForm.value
    project2Cv.innerHTML = projectName2Form.value
    projectDet2Cv.innerHTML = projectDet2Form.value

    degreeCv.innerHTML = degreeForm.value
    instituteCv.innerHTML = instituteForm.value
    degree2Cv.innerHTML = degree2Form.value
    institute2Cv.innerHTML = institute2Form.value
    phoneCv.innerHTML = phoneForm.value
    emailCv.innerHTML = emailForm.value
    githubCv.innerHTML = githubForm.value
    linkedInCv.innerHTML = linkedInForm.value
    skill1Cv.innerHTML = skill1Form.value
    // skill3Cv.innerHTML = skill3Form.value
    // }



})
let back = document.querySelector(".Back").addEventListener("click", ()=>{

    form.classList.remove("hide-F")
    resume.classList.add("hide-C")

})









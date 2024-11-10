const form = document.getElementById("resume-form") as HTMLFormElement;

const resumedisplay = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit",(event:Event)=>{
event.preventDefault();

const name =(document.getElementById("name")as HTMLInputElement).value
const email =(document.getElementById("email")as HTMLInputElement).value
const phone =(document.getElementById("phone")as HTMLInputElement).value
const education =(document.getElementById("education")as HTMLInputElement).value
const skill =(document.getElementById("skill")as HTMLInputElement).value

const resumecollect= `
<h2>personal information</h2>
<p>name : ${name} </p>
<p>email : ${email} </p>
<p>phone : ${phone} </p>

<h2>education</h2>
<p>education : ${education} </p>

<h2>skill</h2>
<p>education : ${skill} </p>

`
if(resumedisplay){
    resumedisplay.innerHTML=resumecollect
}else{
    console.error("went wrong")
}


})
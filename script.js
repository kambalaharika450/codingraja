document.getElementById('resume-form').addEventListener('submit',function(event){
    event.preventDefault();
    //retrieve form data
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const address=document.getElementById('address').value;
    const education=document.getElementById('education').value;
    const experience=document.getElementById("experience").value;
    const skills=document.getElementById('skills').value;
    
    const resumeOutput=document.getElementById('resume-output');
    
     resumeOutput.innerHTML=
    <h2>Resume</h2>
    <p><strong> Name:</strong> ${name}</p>
    <p><strong> Email:</strong> ${email}</p>
    <p><strong> phone:</strong> ${phone}</p>
    p><strong> address:</strong> ${address}</p>
    <h3>Education:</h3><p>${education}</p>
    <h3> Experience:</h3><p> ${experience}</p>
    <h3>skills:</h3><p>${skills}</p>;
    }); 
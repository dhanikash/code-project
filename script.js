function validateForm() {
      const name = document.getElementById("name").value;
   
      const email = document.getElementById("email").value;

   const answer = document.getElementById("answer").value;
   
  
      const nameErr = document.getElementById("name-error");
     
      const emailErr = document.getElementById("email-error");

      const answerErr = document.getElementById("answer-error");
    
  
      nameErr.textContent = "";
    
      emailErr.textContent = "";

      answerErr.textContent = "";
   
      let isValid = true;
  
      if (name === "" || /\d/.test(name)) {
          nameErr.textContent = "Please enter your name properly.";
          isValid = false;
      }
  
    
  
      if (email === "" || !email.includes("@") || !email.includes(".")) {
          emailErr.textContent = "Please enter a valid email address.";
          isValid = false;
      }

      if (answer === "" || answer.length<10) {
        answerErr.textContent = "Please enter a answer minimum 10 words.";
        isValid = false;
    }
    
  
      if (isValid) {
          alert("Form submitted successfully!");
          return true;
      }
      else {
          return false;
      }
  }
  
  function resetErrors() {
      document.getElementById("name-error").textContent = "";
      document.getElementById("answer-error").textContent = "";
      document.getElementById("email-error").textContent = "";
    
  }



function validateForm(event) {
    //variables for user input
    let fname = document.forms['main-contact-form']['fname'].value;
    let lname = document.forms['main-contact-form']['lname'].value;
    let email = document.forms['main-contact-form']['email'].value;
    let subject = document.forms['main-contact-form']['subject'].value;
    let message = document.forms['main-contact-form']['message'].value;

    //variables for validation messages
    let rfvFName = document.getElementById('rfvFName');
    let rfvLName = document.getElementById('rfvLName');
    let rfvEmail = document.getElementById('rfvEmail');
    let rfvSubject = document.getElementById('rfvSubject');
    let rfvMessage = document.getElementById('rfvMessage');

    //Regular expression object
    let regEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    let regFName = new RegExp(/^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/);
    let regLName = new RegExp(/^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/);


    //Test all conditions and stop form from submitting
    if (fname.length == 0 || lname.length == 0 || email.length == 0 || subject.length == 0 || message.length == 0 || !regEmail.test(email) || !regFName.test(fname) || !regLName.test(lname)) {
        event.preventDefault();//<---prevents default action - stops form from submitting

        //Test individual conditions and print error messages
        if (fname.length == 0) {
            rfvFName.textContent = "* First name is required";
        }
        else {
            rfvFName.textContent = "";
        }
        if (lname.length == 0) {
            rfvLName.textContent = "* Last name is required";
        }
        else {
            rfvLName.textContent = "";
        }
        if (email.length == 0) {
            rfvEmail.textContent = "* E-Mail is required";
        }
        else {
            rfvEmail.textContent = "";
        } if (subject.length == 0) {
            rfvSubject.textContent = "* Subject is required";
        }
        else {
            rfvSubject.textContent = "";
        } if (message.length == 0) {
            rfvMessage.textContent = "* Message is required";
        }
        else {
            rfvMessage.textContent = "";
        }

        //Regular Expression error message
        if (!regEmail.test(email) && email.length > 0) {
            rfvEmail.textContent = "* Please enter a valid email.";
        }

        if (regEmail.test(email) && email.length > 0) {
            rfvEmail.textContent = "";
        }

        if (!regFName.test(fname) && fname.length > 0) {
            rfvFName.textContent = "* Please enter a human name.";
        }
        if (regFName.test(fname) && fname.length > 0) {
            rfvFName.textContent = "";
        }
        if (!regLName.test(lname) && lname.length > 0) {
            rfvLName.textContent = "* Please enter a human name.";
        }
        if (regLName.test(lname) && lname.length > 0) {
            rfvLName.textContent = "";
        }

    }//end all conditions if
}//end function
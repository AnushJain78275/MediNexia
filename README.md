# MediNexia
Using a combination of HTML, CSS, JavaScript, jQuery, form submission, and CloudHQ, I successfully developed my own health bot called ‘MediNexia’ without relying on Azure services. This project allowed me to create a customized virtual assistant tailored to specific healthcare needs while leveraging the power of web technologies.
To begin, I utilized HTML to structure the user interface of the health bot. I designed a visually appealing and user-friendly layout, incorporating forms, buttons, and other interactive elements to facilitate user interactions. CSS was employed to style and enhance the appearance of the bot, ensuring a cohesive and professional look.
The core functionality of the health bot was implemented using JavaScript and jQuery. I leveraged these scripting languages to handle user inputs, validate form data, and perform real-time data processing. Through JavaScript, I programmed the bot to understand user queries and respond appropriately, providing relevant health information, symptom triage, and general guidance.
To enable seamless communication between the bot and the backend, I utilized form submission. When users submitted their queries or input through the forms, the data was sent to the Gmail , registered beforehand on formsubmit.co.
For data storage and management, I utilized CloudHQ, a cloud-based service that offers synchronization and backup capabilities. CloudHQ provided a reliable and secure platform to store user data, maintain session information, and ensure the continuity of the health bot's functionality across multiple devices and sessions. Note that CloudHQ helped me to automatically save the data in the google spreadsheet with all the information needed.

Throughout the development process, I focused on creating a responsive and intuitive user experience. I implemented error handling mechanisms to address common user mistakes and provided informative feedback to guide users towards the desired outcomes. Additionally, I incorporated dynamic updates to reflect changes in the healthcare landscape and ensure the bot's content remained relevant.
By utilizing the power of HTML, CSS, JavaScript, jQuery, form submission, and CloudHQ, I was able to develop a functional and personalized health bot. Although it may not have the advanced AI capabilities and scalability of Azure Health Bot, this solution provided an effective and cost-efficient alternative for creating a tailored virtual health assistant.

#ConvFom Jquery Plugin
convForm is a fancy jQuery plugin to create a smart, interactive live chat bot from a normal html form that you can define your own questions for each form field using conv-* attributes.

How to use it:
1. The plugin requires the latest jQuery library is loaded properly in the document.

1
<script src="//code.jquery.com/jquery.min.js"></script>
2. Load the jQuery convForm plugin's JavaScript and CSS files in the document.

1
<link rel="stylesheet" href="dist/jquery.convform.css">
2
<script src="dist/jquery.convform.js"></script>
3. Define the question to ask using conv-question attribute as this:

1
<input type="text" name="name" conv-question="Question to ask">
4. If you'd like to show specific questions based on your user's answer.

01
<select name="conversation" conv-question="Question To Ask">
02
  <option value="yes">Yes</option>
03
  <option value="no">No</option>
04
</select>
05
 
06
<div conv-fork="conversation">
07
  <div conv-case="yes">
08
    <input type="text" conv-question="Question To Ask" no-answer="true">
09
  </div>
10
  <div conv-case="no">
11
    <select name="thought" conv-question="Question To Ask">
12
      <option value="yes">Yes</option>
13
      <option value="no">No</option>
14
    </select>
15
  </div>
16
</div>
5. Possible plugin options with default values.

view source
01
var convForm = $('.my-conv-form-wrapper').convform({
02
    placeHolder :'Type Here',
03
    typeInputUi :'textarea',// 'input' or 'textarea'
04
    timeOutFirstQuestion : 1200,
05
    buttonClassStyle :'icon2-arrow',
06
    selectInputStyle:'show',// or disable, hide
07
    selectInputDisabledText:'Select an option',
08
    eventList : {
09
      onSubmitForm :function(convState) {
10
        console.log('completed');
11
        convState.form.submit();
12
        return true;
13
      },
14
      onInputSubmit :function(convState, readyCallback) {
15
        if(convState.current.input.hasOwnProperty('callback')) {
16
          if(typeof convState.current.input.callback ==='string') {
17
            window[convState.current.input.callback](convState, readyCallback);
18
          }else {
19
            convState.current.input.callback(convState, readyCallback);
20
          }
21
        }else {
22
          readyCallback();
23
        }
24
      }
25
    },
26
    formIdName :'convForm',
27
    inputIdName :'userInput',
28
    loadSpinnerVisible :'',
29
    buttonText:'▶'
30
});


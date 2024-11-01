// Chatbox code (NOT MY CODE) only made few changes (read below)

// Code directly taken from: https://www.codewithrandom.com/2023/03/18/chatbot-javascript-how-to-build-a-chatbot-from-scratch-in-javascript/
/* Changes made: 
  -questions & responses
  -Style of bot (in css) 
  -used 'const' where its suitable instead of var or let
  -added comments*/ 

function talk() 
{
  //10 questions & responses
  const know = {
    "Who are you?": 
      "Hello, I am Codewith_random, your helpful therapy assistant.",
    "What do you do?": 
        "I provide information and resources about therapy and mental health, and help connect you with a therapist if needed.",
    "Can you recommend a therapist?":
          "Sure for this, you will have to fill a form below",
    "What are some methods for coping with anxiety?": 
          "Deep breathing, mindfulness, exercise, and support-seeking.",
    "How can I manage my depression symptoms?": 
          "Exercise, rest, a healthy diet, therapy, and medicine.",
    "How to reduce social anxiety?": 
        "Relaxation techniques, challenging thoughts, systematic desensitization (gradual exposure).",
    "How to improve mood when feeling depressed?": 
        "Engaging in joyful activities, self-care, setting goals.",
    "Self-help techniques for managing anxiety?": 
        "Deep breathing, relaxation, challenging thoughts, support.",
        Bye: "Alright, take care and I'll be here when you need me.",
    };
  // Get the value of the user input from the element with id "userBox"
  // Makes answers appear when a user types a question
  const user = document.getElementById("userBox").value;

  /* Set the innerHTML of the element with id "chatLog" to the value of user 
  followed by a line break */
  document.getElementById("chatLog").innerHTML = user + "<br>";

  // Check if the value of user is in the know object
  /* 2 types of responses, if(one from a known question) & 
  else(other from an unknown question) */
  if (user in know) 
  {
    /* If it is, set the innerHTML of the element with id "chatLog" to the value 
    of know[user] followed by a line break */
    // Known question response
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } 
  else 
  {
    /* If it is not, set the innerHTML of the element with id "chatLog" to 
    "Sorry, I didn't understand" followed by a line break */
    // Unknown question response
    document.getElementById("chatLog").innerHTML =
      "Sorry, I didn't understand <br>";
  }
}
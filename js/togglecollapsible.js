// Collapsible panel

/* Got Help from:
   https://www.w3schools.com/howto/howto_js_collapsible.asp
   https://stackoverflow.com/questions/52183364/javascript-collapsible-panel-open-by-default
   Changes made:
  -Code before function toggleCollapsible(id) is my own 
  -Add Comments
  -css styling 
*/  

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Add an event listener to the siteMapButton element
  document.getElementById('siteMapButton').addEventListener('click', function() 
  {
      // When the siteMapButton is clicked, call the toggleCollapsible function with the id of the site-map-container element
      toggleCollapsible('site-map-container');
  });

  // Add an event listener to the wireframeButton element
  document.getElementById('wireframeButton').addEventListener('click', function() 
  {
      // When the wireframeButton is clicked, call the toggleCollapsible function with the id of the wireframe-container element
      toggleCollapsible('wireframe-container');
  });

  // Add an event listener to the mockupButton element
  document.getElementById('mockupButton').addEventListener('click', function() 
  {
      // When the mockupButton is clicked, call the toggleCollapsible function with the id of the mock-up-container element
      toggleCollapsible('mock-up-container');
  });
});

// Made a function on my own but the code inside this function is not my own code
// Code inside this function is a code from stackoverflow (Link mentioned at start)
function toggleCollapsible(id) 
{
  // Get the container element with the specified id
  var container = document.getElementById(id);
    
  // If the container's maxHeight style property is set
  if (container.style.maxHeight) 
  {
    // Then set the container's maxHeight style property to null, which will hide its content
    container.style.maxHeight = null;
  } 
  else 
  {
    // Otherwise set the container's maxHeight style property to its scrollHeight plus "px", which will show its content
    container.style.maxHeight = container.scrollHeight + "px";
  }
}
/** JavaScript for Instagram API 
 * ****************************   */
var userFeed = new Instafeed({
    get: 'user',
    userId: '18022367538',
    accessToken: '18022367538.1677ed0.574edd7525d74ce89cc8f56886bd9357',
    resolution: 'standard_resolution',
    template: `	<li>
                    <a href="{{link}}" target="_blank" id="{{id}}">
                        <img src="{{image}}" />
                        <ul class="insta-info">
                            <li class="likes">{{likes}}</li>
                            <li class="comments">{{comments}}</li>
                        </ul>
                    </a>
                </li>`,
    sortBy: 'most-recent',
    limit: 7,
    links: true    
  });
  userFeed.run();
  /** End of JavaScript for Instagram API */


  /** Include.HTML 
   * *****************************************  */
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };
  /** End Include.HTML */
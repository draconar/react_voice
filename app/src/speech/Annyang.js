

var config = {
  lang : 'pt-BR'
  , commandList : ['consultar *term', 'transferir *term', '*term']
  , voiceCallback : function(component, command){return function(term){component.hearWhatWasSaid(command + ' ' + term);}}
}

var Annyang = {
  init: function(reactComp) {
    console.log('initializing Annyang');

    function FetchProto(url) {
              fetch('./api/some.json')
          .then(
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }

              // Examine the text in the response
              response.json().then(function(data) {
                console.log(data);
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
    }

    function bindCommands(component) {
      // annyang will capture anything after a splat (*) and pass it to the function.
      // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
      var cmds = {};
      var l = config.commandList.length;

      for(var i = 0; i < l; i++) {
        cmds[config.commandList[i]] = config.voiceCallback(component, config.commandList[i]);
      }

      return cmds;
    }
    if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call


        annyang.setLanguage(config.lang);

      // Turn on debugging for the console
        annyang.debug();

        // Initialize annyang with our commands
        annyang.addCommands(bindCommands(reactComp));

      // // Start listening. You can call this here, or attach this call to an event, button, etc.
       annyang.start();
    }

  }

}

module.exports = Annyang;

REACT VOICE
===========

A little study on using Facebook's React framework and Annyang's speech synthesis library.

Installation
============
  You need to have NodeJS installed. Having that in your machine, the installation command is:

npm install

Configuration
=============

Go to the file src/speech/Annyang.js, find the object config and change it to use your favorite language:

``var config = {
  lang : 'pt-BR'
  , commandList : ['consultar *term', 'transferir *term', '*term']
  , voiceCallback : function(component, command){return function(term){component.hearWhatWasSaid(command + ' ' + term);}}
}``

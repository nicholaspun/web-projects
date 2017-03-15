(function() {
  'use strict';

  angular
    .module('webfun')
    .service('searchService', searchService);

  function searchService(){

    var svc = this;

    var returnStr = {
      "hello world!": "Hello, welcome to my app!",
      "test": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ipsum in risus porttitor, in dignissim orci placerat. Vestibulum auctor accumsan arcu, eu suscipit mi convallis nec. Phasellus accumsan libero turpis, at aliquam elit placerat id. Integer condimentum justo id sem finibus posuere. Vestibulum vitae massa at tortor egestas scelerisque. Donec sed mi urna. Suspendisse a erat et sapien mattis gravida. Pellentesque erat sem, vestibulum id neque sed, vehicu  porttitor leo. Ut non justo rutrum, efficitur mauris eu, convallis purus. Sed ac leo sit amet ex sodales mollis.Aliquam in rhoncus elit. Nunc euismod efficitur enim, at tempus mi ornare nec. Aenean vel arcu vehicula, hendrerit lorem eget,dignissim justo. Donec vehicula, ante vel pharetra porttitor, ipsum enim lobortis massa, nec pellentesque odio quam pretium nibh."
    }

    svc.getReturnStr = function(searchItem) {
      return (searchItem in returnStr) ? returnStr[searchItem] : null ;
    }

  }

})();

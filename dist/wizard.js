!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=222)}({217:function(e,n,t){},222:function(e,n,t){"use strict";t.r(n);var a=["aaa.png","android.png","angular.png","apple.png","asp.net.png","backend.png","bio.png","brain.png","c++.png","c.png","corpo.png","crossplatform.png","csharp.png","dataanalysis.png","databases.png","django.png","easylerning.png","en.png","facebook.png","forkids.png","frontend.png","fun.png","games.png","go.png","google.png","graphics.png","groovy.png","html&css.png","indie.png","java.png","javascript.png","jekyll-light.png","jekyll.png","kotlin.png","lernsthnew.png","libgdx.png","linux.png","lowlevel.png","microsoft.png","mobile.png","money.png","no.png","node.js.png","pc.png","phaser.png","php.png","pl.png","prodev.png","python.png","r.png","react.png","robot.png","ruby.png","rubyonrails.png","rust.png","scala.png","scratch.png","smallbuissness.png","spring.png","sql.png","startup.png","statistics.png","swift.png","symfony.png","undecided.png","unity.png","unrealengine4.png","virtualreality.png","webdev.png","webdev2.png","windows.png","wordpress.png","yes.png"];function r(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(){document.querySelector(".answers").innerHTML='<div class="spinner">\n      <div class="bounce1"></div>\n      <div class="bounce2"></div>\n      <div class="bounce3"></div>\n    </div>'}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,o=[{key:"load",value:function(e){window.addEventListener("load",e),a.forEach(function(e){(new Image).src="/img/"+e}),document.addEventListener("DOMContentLoaded",i)}}],(t=null)&&r(n.prototype,t),o&&r(n,o),e}();var s=function e(n,t,a){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=n,this.img=t,this.next=a};function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.querySelector(".question")}var n,t,a;return n=e,(t=[{key:"set",value:function(e){this.element.innerText=e}}])&&c(n.prototype,t),a&&c(n,a),e}();function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e){return e.toLowerCase().replace(/[-]/g,"").replace("#","sharp")}function d(){$(this).children("img").addClass("jumpImg"),$(this).children("p").addClass("answer-p-hover"),$(this).children(".shade").addClass("shadeImg")}function w(){$(this).children("img").removeClass("jumpImg"),$(this).children("p").removeClass("answer-p-hover"),$(this).children(".shade").removeClass("shadeImg")}var g=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.answerElement=document.createElement("button"),this.answerElement.classList.add("answer"),this.answerElement.addEventListener("mouseover",d),this.answerElement.addEventListener("focus",d),this.answerElement.addEventListener("mouseout",w),this.answerElement.addEventListener("blur",w),this.answerElement.setAttribute("tabindex","0")}var n,t,a;return n=e,(t=[{key:"setNextAnswerReference",value:function(e){this.answerElement.next=e}},{key:"appendImage",value:function(e){var n=document.createElement("img");n.setAttribute("src","/img/"+u(e)),n.setAttribute("alt",""),this.answerElement.appendChild(n)}},{key:"appendShade",value:function(){var e=document.createElement("div");e.classList.add("shade"),this.answerElement.appendChild(e)}},{key:"appendAnswerText",value:function(e){var n=document.createElement("p");n.innerText=e.replace(/-/g," "),this.answerElement.appendChild(n)}},{key:"onClick",value:function(e){this.answerElement.addEventListener("click",e)}},{key:"getAnswerElement",value:function(){return this.answerElement}},{key:"makeItLinkToTechnology",value:function(e){var n=document.createElement("a");n.setAttribute("href","/technologie/"+u(e)),n.setAttribute("target","_blank"),n.appendChild(this.answerElement),this.answerElement=n}}])&&p(n.prototype,t),a&&p(n,a),e}();function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var h=document.querySelectorAll(".answers")[0],m=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=h}var n,t,a;return n=e,(t=[{key:"createWrapperForGuide",value:function(){var e=document.createElement("div");e.classList.add("guide-container"),h.append(e),this.container=e}},{key:"add",value:function(e,n,t){var a=new g;a.appendImage(n),null!==t?(a.appendShade(),a.appendAnswerText(e),a.setNextAnswerReference(t),a.onClick(A)):(a.appendAnswerText(e),a.makeItLinkToTechnology(e)),this.container.appendChild(a.getAnswerElement())}},{key:"addMessage",value:function(e){var n=document.createElement("p");"lub"===e&&n.classList.add("or"),n.innerHTML=e,this.container.appendChild(n)}},{key:"clear",value:function(){for(var e=this.container.children,n=e.length;n--;)e[n].classList.add("fadeOut"),e[n].style.display="none",e[n].remove()}},{key:"endGuideWrapper",value:function(){this.container=h}}])&&f(n.prototype,t),a&&f(n,a),e}();function y(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var v=new l,b=new m,k=function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.guides=[];for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];void 0!==a&&a.forEach(function(e){n.guides.push(e.toString().split(" "))})}var n,t,a;return n=e,(t=[{key:"show",value:function(){b.clear(),v.set("Sugestia:"),b.addMessage("Zacznij z:"),this.guides.forEach(function(e,n){n>0&&b.addMessage("lub","span"),b.createWrapperForGuide(),e.forEach(function(e){"or"===e?b.addMessage("lub"):"->"===e?b.addMessage('Później:<br><i class="then fa fa-long-arrow-down fa-4x" aria-hidden="true"></i>'):b.add(e,e+".png",null)}),b.endGuideWrapper()})}}])&&y(n.prototype,t),a&&y(n,a),e}();function E(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var j=new m,C=new l,P=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=n}var n,t,a;return n=e,(t=[{key:"show",value:function(){j.clear(),C.set(L[this.key].question),L[this.key].answers.forEach(function(e){j.add(e.text,e.img,e.next)})}}])&&E(n.prototype,t),a&&E(n,a),e}(),L={whyProgramming:{question:"Dlaczego chciałbyś się uczyć programowania?",answers:[new s("Chciałbym tym zainteresować moje dzieci","forkids.png",new k("Scratch -> Python or Javascript")),new s("Chciałbym zostać programistą","prodev.png",new P("whichField")),new s("Mam pomysł na projekt","startup.png",new P("whatToCreate")),new s("Nie wiem, słyszałem, że to fajne. Wybierz coś dla mnie","fun.png",new k("Python","Javascript"))]},whatToCreate:{question:"Co chciałbyś zrobić?",answers:[new s("Aplikację mobilną","mobile.png",new P("whichMobilePlatform")),new s("Grę","games.png",new P("whichPlatformForGame")),new s("Aplikację desktopową","webdev.png",new P("whichDesktopPlatform")),new s("Prostą stronę internetową","webdev2.png",new k("HTML-&-CSS -> Javascript")),new s("Założyć bloga","webdev2.png",new k("Jekyll","Wordpress"))]},whichField:{question:"W jakiej dziedzinie?",answers:[new s("Aplikacje","webdev.png",new P("typeOfApps")),new s("Gry","games.png",new P("typeOfGames")),new s("Data science/Big data","dataanalysis.png",new k("R","Python","Scala")),new s("Systemy wbudowane","lowlevel.png",new k("C","Rust")),new s("Sztuczna inteligencja/Machine Learning","brain.png",new k("Python","Scala")),new s("Robotyka","robot.png",new k("C","C++","Python","Rust")),new s("Bioinformatyka","bio.png",new k("R")),new s("Bazy danych","databases.png",new k("SQL")),new s("Nie wiem, ja tylko chce $$$","money.png",new k("Java","C#","Python"))]},whichMobilePlatform:{question:"Na jaką platformę?",answers:[new s("iOS","apple.png",new k("Swift")),new s("Android","android.png",new k("Java","Kotlin")),new s("Web","webdev.png",new P("frontendOrBackend"))]},whichDesktopPlatform:{question:"Na jaką platformę?",answers:[new s("Mac","apple.png",new k(["Swift"])),new s("Linux","linux.png",new k(["Java"])),new s("Windows","windows.png",new k("C#")),new s("Wieloplatformowe","crossplatform.png",new k("Java"))]},typeOfApps:{question:"Jaki rodzaj aplikacji?",answers:[new s("Mobilne","mobile.png",new P("whichMobilePlatform")),new s("Desktopowe","pc.png",new P("whichDesktopPlatform")),new s("Webowe","webdev.png",new P("frontendOrBackend"))]},frontendOrBackend:{question:"Frontend czy backend?",answers:[new s("Frontend","frontend.png",new k("Javascript -> Angular or React")),new s("Backend","backend.png",new P("whichTypeOfWork"))]},whichTypeOfWork:{question:"Jaka praca bardziej Ci odpowiada?",answers:[new s("W korporacji","corpo.png",new P("doLikeMicrosoft")),new s("Małe biznesy / Freelance","smallbuissness.png",new k("PHP -> Symfony","Python -> Django","Ruby -> Ruby-on-rails","Javascript -> Node.js"))]},doLikeMicrosoft:{question:"Lubisz Microsoft?",answers:[new s("Tak","yes.png",new k("C# -> ASP.NET")),new s("Nie","no.png",new k("Java -> Spring"))]},typeOfGames:{question:"Jaki typ gier?",answers:[new s("AAA","aaa.png",new k("C++ -> Unreal-Engine-4")),new s("Indie","indie.png",new k("C# -> Unity","Java -> LibGDX","Kotlin -> LibGDX")),new s("Wirtualna rzeczywistość","virtualreality.png",new k("C++ -> Unreal-Engine-4","C# -> Unity")),new s("Yyy co?","undecided.png",new P("easyOrPerformence"))]},whichPlatformForGame:{question:"Na jaką plaftormę?",answers:[new s("Gra desktopowa","pc.png",new P("typeOfGames")),new s("Gra mobilna","mobile.png",new k("C# -> Unity","Java -> LibGDX","Kotlin -> LibGDX")),new s("Gra przeglądarkowa","webdev.png",new k("Javascript -> Phaser"))]},easyOrPerformence:{question:"Łatwiejsza nauka czy wydajność?",answers:[new s("Łatwiejsza nauka","easylerning.png",new k("C# -> Unity")),new s("Wydajność","graphics.png",new k("C++ -> Unreal-Engine-4"))]}};t.d(n,"loadNextQuestionAndRememberPrevious",function(){return A}),t(217);var O=new P("whyProgramming"),T=[O];o.load(function(){return S(O)});var z=$(".return-btn");function A(){var e=this.next;T.push(e),S(e)}function S(e){1===T.length?z.css("visibility","hidden"):z.css("visibility","visible"),e.show()}function x(){1!==T.length&&(T.pop(),S(T[T.length-1]))}z.on("click",x),z.on("mouseleave",function(e){return e.target.blur()}),$(document).on("keydown",function(e){8===e.which&&x()});var M=$(".again-btn");M.on("click",function(){return S(O)}),M.on("mouseleave",function(e){return e.target.blur()}),$(document).on("keydown",function(e){27===e.which&&S(O)})}});
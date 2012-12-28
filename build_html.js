// Build HTML page

$(document).ready(function() {
  var html = ' \
    <div class="header"> \
      <a href="https://parse.com/docs/js_guide" class="logo"></a> \
    </div> \
   \
    <div class="content"> \
      <img class="step3" height="30" src="http://files.parse.com/7753f2de-837b-4c04-a6ae-f5180e71b574/68083eea-cfbb-4ff8-a582-c8d6a112b80b-Screen%20Shot%202012-12-26%20at%202.59.41%20PM.png"/> \
      <img class="step2" height="59" src="http://files.parse.com/7753f2de-837b-4c04-a6ae-f5180e71b574/1592bfa9-250e-485c-9904-707a8fbd67a3-Screen%20Shot%202012-12-26%20at%202.59.45%20PM.png"/> \
      <img class="step1" height="38" src="http://files.parse.com/7753f2de-837b-4c04-a6ae-f5180e71b574/ba403e17-ae82-4f61-b9a6-426d1a2a93b3-Screen%20Shot%202012-12-26%20at%202.59.35%20PM.png"/> \
      <a href="#" class="submit_button disabled">Run your code</a> \
      <div class="results"> \
        <p class="resultsText"></p> \
        <img class="loading" src="http://files.parse.com/7753f2de-837b-4c04-a6ae-f5180e71b574/ab6dad6d-1f39-4507-98c9-3543090e7897-ajax-loader2.gif"/> \
      </div> \
    </div> \
   \
    <style> \
      body { \
        background-color: #f5f5f5; \
        margin: 0px; \
        border-left: 1px solid #aaa; \
        height: 420px; \
      } \
   \
      .header { \
        height: 60px; \
        z-index: 10000; \
        background: url(https://parse.com/images/home/header_bg.png) repeat-x top left; \
        background-position: 0 0; \
        text-align: center; \
        padding: 0 35px 15px 35px; \
        margin-bottom: 35px; \
        position: relative; \
        font-weight: 400; \
      } \
   \
      .results { \
        background-color: #ccc; \
        margin-top: 47px; \
        height: 175px; \
        width: 90%; \
        margin-left: auto; \
        margin-right: auto; \
        -moz-box-shadow:rgba(0,0,0,0.5) 0 0 5px inset,rgba(255,255,255,0.4) 0 1px 0; \
        -webkit-box-shadow:rgba(0,0,0,0.5) 0 0 5px inset,rgba(255,255,255,0.4) 0 1px 0; \
        -o-box-shadow:rgba(0,0,0,0.5) 0 0 5px inset,rgba(255,255,255,0.4) 0 1px 0; \
        box-shadow:rgba(0,0,0,0.5) 0 0 5px inset,rgba(255,255,255,0.4) 0 1px 0; \
        color:#bcbdbe; \
        -moz-border-radius: 8px; \
        -webkit-border-radius: 8px; \
        -o-border-radius: 8px; \
        -ms-border-radius: 8px; \
        -khtml-border-radius: 8px; \
        border-radius: 8px; \
        display: table; \
      } \
   \
      .resultsText { \
        display: table-cell; \
        vertical-align: middle; \
        text-align: center; \
        color: black; \
        font-family: "Helvetica Neue", "Helvetica"; \
      } \
   \
      .logo { \
        background: url(https://parse.com/images/logo_header2.png) no-repeat top left; \
        width: 152px; \
        height: 43px; \
        display: block; \
        float: left; \
        margin-top: 20px; \
        margin-right: 0; \
      } \
   \
      .step2 { \
        position: absolute; \
        padding-right: 100px; \
        top: 80px; \
        right: 43%; \
        z-index: -1; \
        opacity: 0.2; \
      } \
   \
      .step3 { \
        position: absolute; \
        top: 165px; \
        left: 5%; \
        z-index: -1; \
        opacity: 0.2; \
      } \
   \
      .step1 { \
        position: absolute; \
        padding-right: 100px; \
        top: 383px; \
        right: 6%; \
        z-index: -1; \
      } \
   \
      .loading { \
        position: absolute; \
        left: 48%; \
        top: 64%; \
        display: none; \
      } \
   \
      .submit_button { \
        background-color: #015A09 9; \
        border: 1px solid #015A09; \
        display: block; \
        height: 20px; \
        width: 150px; \
        margin-left: auto; \
        margin-right:auto; \
        text-decoration: none; \
        background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#16C34C),color-stop(100%,#037C10)); \
        background-image: -webkit-linear-gradient(#16C34C,#037C10); \
        background-image: -moz-linear-gradient(#16C34C,#037C10); \
        background-image: -o-linear-gradient(#16C34C,#037C10); \
        background-image: -ms-linear-gradient(#16C34C,#037C10); \
        background-image: linear-gradient(#16C34C,#037C10); \
        text-align: center; \
        padding: 10px; \
        -moz-border-radius: 4px; \
        -webkit-border-radius: 4px; \
        -o-border-radius: 4px; \
        -ms-border-radius: 4px; \
        -khtml-border-radius: 4px; \
        border-radius: 4px; \
        color: white; \
        font-size: 20px; \
        text-shadow: #065511 0 -1px 0; \
        -moz-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5); \
        -webkit-box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.5); \
        -o-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5); \
        box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.5); \
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; \
        cursor: pointer; \
        margin-top: 25px; \
        border-top: 1px solid #828181; \
        font-size: 17px; \
        -moz-border-radius: 10px; \
        -webkit-border-radius: 10px; \
        -o-border-radius: 10px; \
        -ms-border-radius: 10px; \
        -khtml-border-radius: 10px; \
        border-radius: 10px; \
        font-weight: 400; \
      } \
   \
      .submit_button:hover { \
        background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#59cc6e),color-stop(100%,#179023)); \
        background-image:-webkit-linear-gradient(#59cc6e,#179023); \
        background-image:-moz-linear-gradient(#59cc6e,#179023); \
        background-image:-o-linear-gradient(#59cc6e,#179023); \
        background-image:-ms-linear-gradient(#59cc6e,#179023); \
        background-image:linear-gradient(#59cc6e,#179023); \
      } \
   \
      .submit_button:active { \
        background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#0f7f25),color-stop(100%,#065511)); \
        background-image:-webkit-linear-gradient(#0f7f25,#065511); \
        background-image:-moz-linear-gradient(#0f7f25,#065511); \
        background-image:-o-linear-gradient(#0f7f25,#065511); \
        background-image:-ms-linear-gradient(#0f7f25,#065511); \
        background-image:linear-gradient(#0f7f25,#065511); \
        -moz-box-shadow:rgba(0,0,0,0.4) 0 2px 2px inset,rgba(255,255,255,0.4) 0 1px 0; \
        -webkit-box-shadow:rgba(0,0,0,0.4) 0 2px 2px inset,rgba(255,255,255,0.4) 0 1px 0; \
        -o-box-shadow:rgba(0,0,0,0.4) 0 2px 2px inset,rgba(255,255,255,0.4) 0 1px 0; \
        box-shadow:rgba(0,0,0,0.4) 0 2px 2px inset,rgba(255,255,255,0.4) 0 1px 0; \
        color:#bcbdbe; \
        border-top:1px solid #0c521c; \
      } \
   \
      .submit_button.disabled { \
        background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#cacaca),color-stop(100%,#777)); \
        background-image:-webkit-linear-gradient(#cacaca,#777); \
        background-image:-moz-linear-gradient(#cacaca,#777); \
        background-image:-o-linear-gradient(#cacaca,#777); \
        background-image:-ms-linear-gradient(#cacaca,#777); \
        background-image:linear-gradient(#cacaca,#777); \
        color: #e6e6e6; \
      }        \
    </style> \
  ';

  $("body").html(html);
});

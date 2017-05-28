/**
 * Created by dm on 5/28/17.
 */

// Defualt set up
$("#verifySuccess").hide();
$("#verifyFail").hide();


$("#signSubmit").click(function(){
  try {
    var privateKey = $("#privateKey").val();
    var note = $("#note").val();
    var signature = DAPPLog.getSignature(privateKey, note);
    $("#signature").val(signature);
  } catch(error) {
     alert(error+ ' '+privateKey);
  }

});

$("#verifySubmit").click(function(){
  var address = $("#verifyAddress").val();
  var note = $("#note").val();
  var signature = $("#verifySignature").val();
  try {
    var verified = DAPPLog.verify(address, signature, note);

    if (verified===true) {
      $("#verifySuccess").show();
      $("#verifyFail").hide();
    } else {
      $("#verifyFail").show();
      $("#verifySuccess").hide();
    }

  } catch(error) {
    $("#verifyFail").show();
    $("#verifySuccess").hide();
  }

});

<!-- Documnt Ready State -->

$(document).ready(function() {

  $('#privateKey').on('input', function() {
    var input=$(this);
    var is_name=input.val();
    if(is_name){input.removeClass("invalid");}
    else{input.addClass("invalid");}
  });

  $('#address').on('input', function() {
    var input=$(this);
    var is_name=input.val();
    if(is_name){input.removeClass("invalid");}
    else{input.addClass("invalid");}
  });

  $('#verifySignature').on('input change keyup paste', function() {
    var textarea=$(this);
    var is_name=textarea.val();
    if(is_name){textarea.removeClass("invalid");}
    else{textarea.addClass("invalid");}
  });

  $('#verifyAddress').on('input', function() {
    var input=$(this);
    var is_name=input.val();
    if(is_name){input.removeClass("invalid");}
    else{input.addClass("invalid");}
  });

});





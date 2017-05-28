/**
 * Created by dm on 5/28/17.
 */

// Defualt set up
$("#verifySuccess").hide();
$("#verifyFail").hide();


$("#signSubmit").click(function(){
  var privateKey = $("#privateKey").val();
  var address = $("#address").val();
  var note = $("#note").val();
  var signature = DAPPLog.getSignature(privateKey, note);
  $("#signature").val(signature);
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



/**
 * Created by dm on 5/28/17.
 */

$("#signSubmit").click(function(){
  var privateKey = $("#privateKey").val();
  var address = $("#address").val();
  var note = $("#note").val();
  var signature = DAPPLog.getSignature(privateKey, note);
  $("#signature").val(signature);
  alert ('button clicked'+signature);
});

$("#verifySubmit").click(function(){
  var address = $("#verifyAddress").val();
  var note = $("#note").val();
  var signature = $("#verifySignature").val();
  try {
    var varified = DAPPLog.verify(address, signature, note);
    alert ('button clicked'+varified+signature);
  } catch(error) {
    alert(error);
  }

});



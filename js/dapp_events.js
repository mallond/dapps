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

$("#saveToIPFS").click(function(){
  try {
    var note = $("#saveNote").val();
    node.files.add(new node.types.Buffer(note), function (err, res) {
      if (err || !res) {
        return console.error('Error - ipfs files add', err, res)
      }

      res.forEach(function (file) {
        document.getElementById("hashKeyX").innerHTML = 'Note Hash Key: '+file.hash;
        document.getElementById("permiLink").innerHTML = 'Immutable Link: https://ipfs.io/ipfs/'+file.hash;
        console.log('successfully stored', file.hash)
      })
    })

  } catch(error) {
    alert(error+ ' '+privateKey);
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

  $('#verifySignature').on('click change keyup paste', function() {
    var textarea=$(this);
    var is_name=textarea.val();
    if(is_name){textarea.removeClass("invalid");}
    else{textarea.addClass("invalid");}
  });

  $('#verifyAddress').on('input click', function() {
    var input=$(this);
    var is_name=input.val();
    if(is_name){input.removeClass("invalid");}
    else{input.addClass("invalid");}
  });

});





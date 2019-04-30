$('.submiclick').click(function(){
    let firstName = $('#fname').val();
    let lastName = $('#surname').val();
    let address = $('#address').val();
    let phone = $('#phoneno').val();
    let mailId = $('#emailId').val();
    let zip = $('#Zip').val();
    console.log(firstName,lastName,address,phone,mailId,zip);
    let textspeech = "Hi the first name you have entered  is "+firstName+" !sur name is "+lastName+"! address is "+address+" !mobile number is "+phone+"!email id is "+mailId+" !and pincode is"+zip;
    //console.log(textspeech);
    speakmsg(textspeech);
});

var speakmsg  = (text)=>{
    if ('speechSynthesis' in window) {
    var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[0];
        msg.rate = 5/ 10;
        msg.pitch = 1;
        msg.text = text;
  
        msg.onend = function(e) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };
  
        speechSynthesis.speak(msg);
    }else{

    }

}
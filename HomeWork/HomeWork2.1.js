function sendSMS(SMS){
    let result = Math.ceil(SMS.length / 60)
    console.log(`Щоб надіслати цей текст вам потрібно використати ${result} повідомлення(-ь) \n${SMS}`);
}
sendSMS("...");

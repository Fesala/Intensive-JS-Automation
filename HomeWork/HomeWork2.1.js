function sendSMS(SMS){
    let result = Math.ceil(SMS.length / 60)
    console.log(`Щоб надіслати цей текст вам потрібно ${result} повідомлення`);
}
sendSMS("...");
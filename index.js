var swRegistration = null;

if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register('./sw.js').then(function (swReg) {

        if (swReg.active) {
            //send_message_to_sw();
        }

        swRegistration = swReg;

    })
        .catch(function (error) {
            console.error('Service Worker Error', error);
        });

    // function send_message_to_sw(msg) {
    //     $.ajax({
    //         url: '/TEST/GetPushNotification',
    //         type: 'GET',
    //         success: function (res) {
    //             if (res.Success) {
    //                 navigator.serviceWorker.controller.postMessage(res.Data);
    //             }
    //         },
    //         error: function () {
    //             ('Push data ERROR!');
    //         }
    //     });

    // }

} else {
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported';
}

window.onload = function () {
    const notifyButton = document.querySelector('#notify-button');

    notifyButton.addEventListener('click', function () {
        const title = 'Simple Title';
        const options = {
            body: 'Simple piece of body text.\nSecond line of body text :)'
        };
        swRegistration.showNotification(title, options);
    
    });
    
    
    $("#clear-button").click(function () {
        Push.clear();
    });
    
    $("#check-button").click(function () {
        console.log(Push.Permission.has());
    });
}
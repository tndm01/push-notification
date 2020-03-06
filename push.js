"use strict";

var push = require('web-push');

var vapidKeys = {
    publicKey: 'BGBKWEaxRcP5S9k61GvnqGdmkFFeYGtGNRUvTFLvpnYEoL3ehqonnEDB48OtLrH76T5NhuZNYWcrQjMMhRl1iaA',
    privateKey: '143oNcKqqaex1uPjVwZ06Lo-prLYtOeRNOnMJS0YzIY'
};
push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey);
var sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/crsa2GefmB8:APA91bF4LVy6TfH5LMAfj7Q0RrB1poIP63y3WpJ-aiQa_LCwTQqzNnKxG5h9LboWbnBgfZ5yChVXhCGLYHRXRdT_gbrD7WvrnslPLk0cf1qAGD8gucdFe4UzX6GN8VwnA3K3dsOKisXJ",
    expirationTime: null,
    keys: {
        p256dh: "BAHyu-JRFwblhh9Dx4OCLagMBQG1AXrkAp4GCa4fvEt_7yvb6KDZzFhaWRNKec2uGReyY7wuyvZ_L91aQ4za8fU",
        auth: "OKYZu5WsdlSbh6R2oKF7JA"
    }
};
push.sendNotification(sub, 'test message');
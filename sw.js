var body = "";
var title = "";
self.addEventListener('push', function (event) {
    event.waitUntil(

        self.registration.showNotification(title, {
            body: body,
        })
    );
});

self.addEventListener('message', function handler(event) {
    body = event.data.Name;
    title = event.data.Title;
    console.log('postMessage received', event);
});

self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});

self.addEventListener('notificationclick', function (event) {
    console.log('Event Notification', event);
});
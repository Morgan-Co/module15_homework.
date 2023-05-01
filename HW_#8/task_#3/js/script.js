const chat = document.getElementById('chat');
        const message = document.getElementById('message');
        const send = document.getElementById('send');
        const locationBtn = document.getElementById('location');

        const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');

        function addMessage(msg) {
            const p = document.createElement('p');
            p.textContent = msg;
            chat.appendChild(p);
        }

        socket.addEventListener('message', (event) => {
            addMessage('Сервер: ' + event.data);
        });

        send.addEventListener('click', () => {
            const msg = message.value;
            socket.send(msg);
            addMessage('Вы: ' + msg);
            message.value = '';
        });

        locationBtn.addEventListener('click', () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const mapLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                socket.send(mapLink);
                addMessage('Вы отправили геолокацию: ' + mapLink);
            });
        });
const getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

const getDistance = function(event, target) {
    const differenceX = event.offsetX - target.x;
    const differenceY = event.offsetY - target.y;
    return Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));
};

const getDistanceHint = function(distance) {
    if (distance < 11) {
        return 'МАКСИМАЛЬНО ГОРЯЧО!!\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else if (distance < 20) {
        return 'Очень горячо!\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else if (distance < 40) {
        return 'Горячо.\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else if (distance < 80) {
        return 'Тепло.\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else if (distance < 110) {
        return 'Ни холодно ни жарко.\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else if (distance < 160) {
        return 'Холодно.\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else if (distance < 240) {
        return 'Очень холодно.\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else if (distance < 320) {
        return 'Очень очень холодно.\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    } else {
        return 'Сейчас замёрзнешь!\nРасстояние до клада - ' + Math.floor(distance) + ' пикселей\nОсталось ' + clicksLeft + ' попыток';
    }
};

const width = $('img').width();
const height = $('img').height();
let clicks = 0;
let clicksLeft = 15;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

$('img').click(function(event) {
    clicks++;
    clicksLeft--;
    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);
    $('p').text(distanceHint);

    if (distance < 8) {
        $('h1').text("УРА!")
        $('p').text("Клад найден!")
        alert('Ура! Клад найден!\n\n Сделано попыток: ' + clicks);
    }

    if (clicks > 15) {
        $('h1').text("КОНЕЦ ИГРЫ!")
        $('p').text("Клад не найден")
        alert("КОНЕЦ ИГРЫ!\nУвы! Попытки закончились. Клад не найден.")
    }
});
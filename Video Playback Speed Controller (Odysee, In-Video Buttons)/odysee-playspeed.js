const body = document.querySelector('body')

function main() {
    var placementDiv = document.querySelector('.content__wrapper')
    var vid = document.querySelector('video')

    const decreaseSpeedButton = document.createElement('button')
    decreaseSpeedButton.id = 'decrease-speed-button'
    decreaseSpeedButton.addEventListener('click', decreaseSpeed)
    decreaseSpeedButton.innerHTML = '<<'

    const increaseSpeedButton = document.createElement('button')
    increaseSpeedButton.id = 'increase-speed-button'
    increaseSpeedButton.addEventListener('click', increaseSpeed)
    increaseSpeedButton.innerHTML = '>>'

    const buttonRate = document.createElement('button')
    buttonRate.id = 'button-rate'
    buttonRate.addEventListener('click', resetSpeed)
    buttonRate.innerHTML = vid.playbackRate.toFixed(2)

    var buttonRow = document.createElement('div')
    buttonRow.id = 'button-row'
    buttonRow.appendChild(decreaseSpeedButton)
    buttonRow.appendChild(buttonRate)
    buttonRow.appendChild(increaseSpeedButton)

    placementDiv.appendChild(buttonRow)

    function decreaseSpeed() {
        vid.playbackRate -= 0.25;
    }

    function resetSpeed() {
        vid.playbackRate = 1;
    }

    function increaseSpeed() {
        vid.playbackRate += 0.25;
    }

    vid.addEventListener('mousemove', function () {
        buttonRow.style.display = 'block';
        buttonRate.innerHTML = vid.playbackRate.toFixed(2);
    });

    vid.addEventListener('mouseout', function () {
        buttonRow.style.display = 'none';
    });

    buttonRow.addEventListener('mousemove', function () {
        buttonRow.style.display = 'block';
    });

    buttonRow.addEventListener('click', function () {
        buttonRate.innerHTML = vid.playbackRate.toFixed(2);
    });
}

setTimeout(main, 6000);
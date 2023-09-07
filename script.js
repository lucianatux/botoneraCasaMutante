// Primer grupo de sonidos
const firstSoundsGroup = [
    {
      id:1,
      keyCode: 81,
      key: 'Q',
      description: 'Trueno',
      url: '../assets/trueno.mp3'
    },
    {
      id:2,
      keyCode: 87,
      key: 'W',
      description: 'Lluvia',
      url: '../assets/lluvia.mp3'
    },
    {
      id:3,
      keyCode: 69,
      key: 'E',
      description: 'Neblina',
      url: '../assets/neblina.mp3'
    },
    {
      id:4,
      keyCode: 82,
      key: 'R',
      description: 'Viento',
      url: '../assets/viento.mp3'
    },
    {
      id:5,
      keyCode: 65,
      key: 'A',
      description: 'Toc-toc',
      url: '../assets/toctoc.mp3'
    },
    {
      id:6,
      keyCode: 83,
      key: 'S',
      description: 'Timbre',
      url: '../assets/timbre.mp3'
    },
    {
      id:7,
      keyCode: 68,
      key: 'D',
      description: "Subir escalera",
      url: '../assets/subirescalera.mp3'
    },
    {
      id:8,
      keyCode: 70,
      key: 'F',
      description: 'Bajar escalera',
      url: '../assets/bajarescalera.mp3'
    },
    {
      id:9,
      keyCode: 90,
      key: 'Z',
      description: 'Ventana rota',
      url: '../assets/ventanarota.mp3'
    },
    {
      id:10,
      keyCode: 88,
      key: 'X',
      description: "Cadena inodoro",
      url: '../assets/cadenainodoro.mp3'
    },
    {
      id:11,
      keyCode: 67,
      key: 'C',
      description: 'Goteo',
      url: '../assets/goteo.mp3'
    },
    {
      id:12,
      keyCode: 86,
      key: 'V',
      description: 'Abrir puerta',
      url: '../assets/abrirpuerta.mp3'
    }
  ];

  // Segundo grupo de sonidos
const secondSoundsGroup = [
    {
      id:13,
      keyCode: 81,
      key: 'Q',
      description: 'Piedrazo a la ventana',
      url: '../otros/piedrazoalaventana.mp3'
    },
    {
      id:14,
      keyCode: 87,
      key: 'W',
      description: 'Cerrar puerta',
      url: '../otros/cerrarpuerta.mp3'
    },
    {
      id:15,
      keyCode: 69,
      key: 'E',
      description: 'Empujar puerta',
      url: '../otros/empujarpuerta.mp3'
    },
    {
      id:16,
      keyCode: 82,
      key: 'R',
      description: 'Haciendo pis',
      url: '../otros/haciendopis.mp3'
    },
    {
      id:17,
      keyCode: 65,
      key: 'A',
      description: 'Canarios',
      url: '../otros/canarios.mp3'
    },
    {
      id:18,
      keyCode: 83,
      key: 'S',
      description: 'Calandria',
      url: '../otros/calandria.mp3'
    },
    {
      id:19,
      keyCode: 68,
      key: 'D',
      description: 'Otra lluvia',
      url: '../otros/otralluvia.mp3'
    },
    {
      id:20,
      keyCode: 70,
      key: 'F',
      description: 'Chiflido de viento',
      url: '../otros/chiflidodeviento.mp3'
    },
    {
      id:21,
      keyCode: 90,
      key: 'Z',
      description: 'Grillos',
      url: '../otros/grillos.mp3'
    },
    {
      id:22,
      keyCode: 88,
      key: 'X',
      description: "Encender fogata",
      url: '../otros/encenderfogata.mp3'
    },
    {
      id:23,
      keyCode: 67,
      key: 'C',
      description: 'Aleteo Pájaros',
      url: '../otros/aleteopajaros.mp3'
    },
    {
      id:24,
      keyCode: 86,
      key: 'V',
      description: 'Mosca',
      url: '../otros/mosca.mp3'
    }
  ];

const soundsName = {
    firstKit: "Casa mutante", // Nombre del primer grupo de sonidos
    secondKit: "Otros"  // Nombre del segundo grupo de sonidos
  };

  const soundsGroup = {
    firstKit: firstSoundsGroup, // Define los sonidos del primer grupo aquí
    secondKit: secondSoundsGroup // Define los sonidos del segundo grupo aquí
  };


  let power = true;
  let volume = 1;
  let soundName = "";
  let soundType = "firstKit";
  let sounds = soundsGroup[soundType];
  let soundDescription = "";
  const audio = new Audio();

  // Función para reproducir el sonido
  function playSound(url) {
    audio.src = url;
    audio.volume = volume;
    audio.onloadedmetadata = () => {
      audio.play();
    };
  }
  

// Función para manejar el evento de clic en el botón

function handleClick(key, url, description) {
  if (power) {
    const button = event.target;
    const soundUrl = button.dataset.soundUrl; // Obtiene la URL del atributo personalizado
    if (url === soundUrl && audio.currentTime > 0 && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      playSound(soundUrl);
      setSoundName(key);
      setSoundDescription(description);
    }
  }
}

  // Función para cambiar entre grupos de sonidos
  function changeSoundGroup() {
    setSoundName("");
    soundType = soundType === "firstKit" ? "secondKit" : "firstKit";
    sounds = soundsGroup[soundType];
    renderKeyboard();
  }

  // Función para detener/activar la máquina de batería
  function togglePower() {
    power = !power;
    console.log(power);
    renderKeyboard();
  }

  // Función para manejar el cambio de volumen
  function handleVolumeChange(e) {
    volume = e.target.value / 100;
    setKeyVolume();
  }

  // Función para establecer el volumen de todas las teclas de sonido
  function setKeyVolume() {
    sounds.forEach(sound => {
      const audio = document.getElementById(sound.key);
      if (audio) {
        audio.volume = volume;
      }
    });
  }

  // Función para establecer el nombre del sonido
  function setSoundName(name) {
    soundName = name;
    renderKeyboard();
  }

    // Función para establecer la descripcion del sonido
    function setSoundDescription(description) {
      soundDescription = description;
      renderKeyboard();
    }

  function renderKeyboard() {
    const keyboardContainer = document.getElementById("drum-machine");
    keyboardContainer.innerHTML = "";

    sounds.forEach(sound => {
      const button = document.createElement("button");
      button.className = "drum-pad";
      button.textContent = sound.description;
      button.dataset.soundUrl = sound.url; // Añade el atributo personalizado
      button.addEventListener("click", () => handleClick(sound.key, sound.url, sound.description));

      if (soundType === "secondKit") {
        button.classList.add("second-kit-button");
      }

      const audio = document.createElement("audio");
      audio.className = "clip";
      audio.src = sound.url;
      audio.id = sound.key;

      button.appendChild(audio);
      keyboardContainer.appendChild(button);
    });

    const powerButton = document.createElement("button");
    powerButton.className = "power";
    powerButton.textContent = `Power: ${power ? 'ON' : 'OFF'}`;
    powerButton.addEventListener("click", togglePower);
    keyboardContainer.appendChild(powerButton);

    const volumeInput = document.createElement("input");
    volumeInput.className = "input";
    volumeInput.type = "range";
    volumeInput.min = 0;
    volumeInput.max = 100;
    volumeInput.step = 1;
    volumeInput.value = volume * 100;
    volumeInput.addEventListener("input", handleVolumeChange);
    keyboardContainer.appendChild(volumeInput);

    /*const display = document.createElement("h2");
    display.textContent = soundName || soundsName[soundType];
    keyboardContainer.appendChild(display);*/

    const displayDescription = document.createElement("p");
    displayDescription.textContent = soundDescription || [];
    keyboardContainer.appendChild(displayDescription);

    const changeGroupButton = document.createElement("button");
    changeGroupButton.className= "group";
    changeGroupButton.textContent = "Change Sounds Group";
    changeGroupButton.addEventListener("click", changeSoundGroup);
    keyboardContainer.appendChild(changeGroupButton);
  }

  renderKeyboard();
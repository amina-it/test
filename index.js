// Элементы страницы
const textElement = document.getElementById("story-text");
const optionsElement = document.getElementById("options");
const backgroundElement = document.getElementById("background");

// Текущая сцена
let currentScene = "start";

// Отображение сцены
function showScene(sceneKey) {
    const scene = scenes[sceneKey];
    currentScene = sceneKey;

    // Обновляем текст
    textElement.textContent = scene.text;

    // Очищаем старые кнопки
    optionsElement.innerHTML = "";

    // Добавляем кнопки выбора
    if (scene.options) {
        scene.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.text;
            button.onclick = () => showScene(option.nextScene);
            optionsElement.appendChild(button);
        });
    }
}

// Инициализация
showScene(currentScene);

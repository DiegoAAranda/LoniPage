let data = ["header h2", "#iAmText p", "header button", "#social h2", "#news h2", "footer h2", ".footInfo p"];
let textNew = ["Status: Open Commisions (ESP/ENG)", "My name is Loni, and i'm a Voice Actor with Kira Complex", "Modo Español", "My Social Media", "My Works", "Collaborators", "Pink is a Vtuber and a Voice Actress with whom I frequently collaborate on Fandubs"]


function changeLanguage() {
    for (let i = 0; i < data.length; i++) {
        let text = document.querySelector(data[i]);
        let textChange = text.innerText;
        text.innerText = textNew[i];
        textNew[i] = textChange;
    }
}

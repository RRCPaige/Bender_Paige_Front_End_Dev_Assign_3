document.addEventListener("DOMContentLoaded", () =>{
    const sceneTitle = document.getElementById("scene-title");
    const sceneText = document.getElementById("scene-text");
    const button1 = document.getElementById("choice-1");
    const button2 = document.getElementById("choice-2");
    const container = document.getElementById("scene-container");

    let currentState = "scene1";
    
    const renderQuestion = () => {
        button1.style.display = "none";
        button2.style.display = "none"; 
    
        container.className = "";
    }
});

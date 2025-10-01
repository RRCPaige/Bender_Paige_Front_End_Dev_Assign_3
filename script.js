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

        if (currentState ==="scene1") {
            container.classList.add("scene1");
            sceneTitle.textContent = "Here, have a marshmallow!";
            sceneText.textContent = "Would you like to roast your marshmallow?";
            button1.style.display = "inline-block";
            button1.textContent = "Fire is scary...";
            button1.onclick = () => {
                currentState = "scene2";
                renderQuestion();
            };
            button2.style.display = "inline-block";
            button2.textContent = "Bring on the fire!";
            button2.onclick = () => {
                currentState = "scene3";
                renderQuestion();
            };
    console.log(sceneTitle.textContent);
    console.log(sceneText.textContent);
    console.log(button1.style.display);
    console.log(button2.style.display);
    console.log(currentState);
        }
    };
    renderQuestion();
});

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
    // console.log(sceneTitle.textContent);
    // console.log(sceneText.textContent);
    // console.log(button1.style.display);
    // console.log(button2.style.display);
    // console.log(currentState);
        } else if (currentState === "scene2") {
            container.classList.add("scene2");
            sceneTitle.textContent = "Okay... Enjoy your cold marshmallow.";
            sceneText.textContent = "Delicious! Would you like another?";
            button1.style.display = "inline-block";
            button1.textContent = "More please";
            button1.onclick = () => {
                currentState = "scene1";
                renderQuestion();
            };
            button2.style.display = "inline-block";
            button2.textContent = "One was enough";
            button2.onclick = () => {
                currentState = "scene7";
                renderQuestion();
            };
    // console.log(sceneTitle.textContent);
    // console.log(sceneText.textContent);
    // console.log(button1.style.display);
    // console.log(button2.style.display);
    // console.log(currentState);
        } else if (currentState === "scene3") {
            container.classList.add("scene3");
            sceneTitle.textContent = "Wow! Thats one lightly toasted marshmallow!";
            sceneText.textContent = "Is this toasted enough to make a s'more?";
            button1.style.display = "inline-block";
            button1.textContent = "Make a s'more";
            button1.onclick = () => {
                currentState = "scene7";
                renderQuestion();
            };
            button2.style.display = "inline-block";
            button2.textContent = "Roast longer";
            button2.onclick = () => {
                currentState = "scene4";
                renderQuestion();
            };
    // console.log(sceneTitle.textContent);
    // console.log(sceneText.textContent);
    // console.log(button1.style.display);
    // console.log(button2.style.display);
    // console.log(currentState);
        } else if (currentState === "scene4") {
            container.classList.add("scene4");
            sceneTitle.textContent = "Oohhh! That marshmallow is golden brown now!";
            sceneText.textContent = "Is this toasted enough to make a s'more now?";
            button1.style.display = "inline-block";
            button1.textContent = "Make a s'more";
            button1.onclick = () => {
                currentState = "scene7";
                renderQuestion();
            };
            button2.style.display = "inline-block";
            button2.textContent = "Roast longer";
            button2.onclick = () => {
                currentState = "scene5";
                renderQuestion();
            };
    // console.log(sceneTitle.textContent);
    // console.log(sceneText.textContent);
    // console.log(button1.style.display);
    // console.log(button2.style.display);
    // console.log(currentState);
        } else if (currentState === "scene5") {
            container.classList.add("scene5");
            sceneTitle.textContent = "AH! Quick!! its on fire! blow it out!";
            sceneText.textContent = "Surely NOW its toasted enough to make a s'more?";
            button1.style.display = "inline-block";
            button1.textContent = "Make a s'more";
            button1.onclick = () => {
                currentState = "scene7";
                renderQuestion();
            };
            button2.style.display = "inline-block";
            button2.textContent = "Roast longer";
            button2.onclick = () => {
                currentState = "scene6";
                renderQuestion();
            };
    // console.log(sceneTitle.textContent);
    // console.log(sceneText.textContent);
    // console.log(button1.style.display);
    // console.log(button2.style.display);
    // console.log(currentState);
        }else if (currentState === "scene6") {
            container.classList.add("scene6");
            sceneTitle.textContent = "....";
            sceneText.textContent = "How about I get out a new marshmallow.";
            button1.style.display = "inline-block";
            button1.textContent = "Try again";
            button1.onclick = () => {
                currentState = "scene1";
                renderQuestion();
            };
            button2.style.display = "inline-block";
            button2.textContent = "Hang head in defeat";
            button2.onclick = () => {
                currentState = "scene7";
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

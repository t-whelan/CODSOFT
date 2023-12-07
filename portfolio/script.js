document.addEventListener("DOMContentLoaded", function() {
    // Delay the typing effect by 1 second (adjust as needed)
    setTimeout(function() {
        const aboutText = ` Hi, I'm Tionne Whelan, a passionate Web Developer with experience in creating
        modern and responsive websites. I enjoy turning ideas into reality using
        the latest technologies. I specialize in user-centric design and crafting
        smooth user experiences. Based in South Africa, I have attended various workshops
        and boot camps, fostering a thirst for learning and continuous development,
        always staying updated with design trends.`;

        // Get the element where the text will be written
        const aboutTextElement = document.getElementById('about-text');

        // Initialize the index
        let index = 0;

        // Function to add one letter at a time
        function addText() {
            aboutTextElement.textContent += aboutText[index];
            index++;

            // Check if there are still letters to add
            if (index < aboutText.length) {
                // Call the function again after a random time interval (adjust as needed)
                setTimeout(addText, Math.floor(Math.random() * 100) + 50);
            }
        }

        // Start the typing effect
        addText();
    }, 1000); // 1000 milliseconds = 1 second
});

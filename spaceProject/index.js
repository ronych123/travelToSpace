const imageElement = document.getElementById("image");
const planetNameElement = document.getElementById("planet-name");
const textElement = document.getElementById("text");
const distanceElement = document.getElementById("byKM");
const timeElement = document.getElementById("byTIME");
const changeButton1 = document.getElementById("changeButton-1");
const changeButton2 = document.getElementById("changeButton-2");
const changeButton3 = document.getElementById("changeButton-3");
const changeButton4 = document.getElementById("changeButton-4");


        const images = ["destination/image-moon.png", "destination/image-mars.png", "destination/image-europa.png", "destination/image-titan.png"];
        const planet = ["MOON", "MARS", "EUROPA", "TITAN"];
        const texts = ["See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!", "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."];
        const distance = ["384,400 km", "225 mil. km", "628 mil. km", "1.6 bil. km"];
        const time = ["3 days", "9 months", "3 years", "7 years"];
        // Function to update content
        function updateContent1() {
        imageElement.src = images[0];
        planetNameElement.textContent = planet[0];
        textElement.textContent = texts[0];
        distanceElement.textContent = distance[0];
        timeElement.textContent = time[0];
        }
        function updateContent2() {
        imageElement.src = images[1];
        planetNameElement.textContent = planet[1];
        textElement.textContent = texts[1];
        distanceElement.textContent = distance[1];
        timeElement.textContent = time[1];
        }
        function updateContent3() {
        imageElement.src = images[2];
        planetNameElement.textContent = planet[2];
        textElement.textContent = texts[2];
        distanceElement.textContent = distance[2];
        timeElement.textContent = time[2];
        }
        function updateContent4() {
        imageElement.src = images[3];
        planetNameElement.textContent = planet[3];
        textElement.textContent = texts[3];
        distanceElement.textContent = distance[3];
        timeElement.textContent = time[3];
        }

        // Attach click event to the button
        changeButton1.addEventListener("click", updateContent1);
        changeButton2.addEventListener("click", updateContent2);
        changeButton3.addEventListener("click", updateContent3);
        changeButton4.addEventListener("click", updateContent4);

        document.querySelector('.js-moon').classList.add('is-toggle');

        function isToggle(selector) {
            const buttonElement = document.querySelector(selector);
            if(!buttonElement.classList.contains('is-toggle')) {
        
                removePreviousButton();
        
                buttonElement.classList.add('is-toggle');
        
                
            } else {
                buttonElement.classList.remove('is-toggle');
            }
        }
        
        function removePreviousButton(){
                const previousButton = document.querySelector('.is-toggle');
            if (previousButton) {
                previousButton.classList.remove('is-toggle');
            }
        }

             

            function adding() {
                if(!document.querySelector('.nav').classList.contains('nav-toggle')) {
                    document.querySelector('.nav').classList.add('nav-toggle');
                    document.querySelector('.hamburger').classList.add('hamburger-toggle');
                    document.querySelector('.menu-x').classList.add('menu-x-toggle');
                    document.querySelector('.menu').classList.add('menu-toggle');

                } else {
                    document.querySelector('.nav').classList.remove('nav-toggle');
                    document.querySelector('.hamburger').classList.remove('hamburger-toggle');
                    document.querySelector('.menu-x').classList.remove('menu-x-toggle');
                    document.querySelector('.menu').classList.remove('menu-toggle');
                }
                    
            }
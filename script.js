document.addEventListener('DOMContentLoaded', () => {
    // DOM ელემენტების აღება
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
    );
    const images = document.querySelectorAll('.imgs');
    const currentYearSpan = document.getElementById("year");
    
    // **1. Toggle Button-ის ფუნქციონალი (მობილური მენიუ)**
    toggleButton.addEventListener("click", (e) => {
        e.preventDefault(); // ბმულის დეფოლტ ქცევის გაუქმება
        
        // **აქტიური კლასის მინიჭება/მოშორება მენიუსთვის (Slide)**
        navbarLinks.classList.toggle("active");
        
        // **აქტიური კლასის მინიჭება/მოშორება ღილაკისთვის (ფერის ცვლილება)**
        toggleButton.classList.toggle("active"); 
    });

    // **2. Dark/Light თემის ფუნქციონალი**
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }

    toggleSwitch.addEventListener("change", switchTheme);

    // თემის ჩატვირთვა
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }

    // **3. პროდუქტის სურათების ჰოვერ ანიმაცია**
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.2)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // **4. ფუტერი (წლის დაყენება)**
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
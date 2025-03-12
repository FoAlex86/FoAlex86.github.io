/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
// Liste des projets avec leurs médias (image ou vidéo)
const projects = [
    {
        title: "Raytracing",
        media: ["assets/img/project1-0.png", "assets/img/project1-1.png", "assets/img/project1-2.png", "assets/img/project1-3.png", "assets/img/project1-4.png"],  // Image
        type: "image-slider",
        description: " Développement d'un rendu raytracing d'une scène 3D. Implémentation de Phong, transparence, réfraction, ombres douces et profondeur de champ. Le tout en C++.",
        link: "https://github.com/FoAlex86/raytracingM1Imagine"
    },
    {
        title: "Facial Recognition",
        media: ["assets/img/project2-1.png"],  // Image
        type: "image",
        description: "Développement d'un programme de reconnaissance faciale, vidéo et photos. En python sur jupiter notebook",
        link: ""
    },
    {
        title: "Denoizingz",
        media: "assets/videos/denoizings.mp4",  // Vidéo
        type: "video",
        description: "Denoizingz est une application capable de débruiter des images bruitées par des bruits de Gauss ou de poisson avec la méthode Noise2Noise. Mais il est aussi possible de débruiter du bruits impulsionnel avec un filtre bilatéral a trou. Tout ceci dans une interface graphique.",
        link: "https://github.com/FoAlex86/M2ImageProject/tree/main"
    },
    {
        title: "Fluzzle",
        media: "https://youtu.be/MXMk2f8X0ns",  // Vidéo
        type: "video",
        description: "Jeu de \'Puzzle\' 3D. Manipulation d'éléments (feu, eau, ...) pour intéragir avec l'environnement et permettre d'avancer. Réalisé sur Unity. Le Git est privé mais je peut partager le jeu si demande.",
        link: ""
    },
    {
        title: "SmashLemons",
        media: "assets/videos/Présentation_SmashLemon.mp4",  // Vidéo
        type: "video",
        description: "Jeu de Combat \'Smash like\'. Menu multijoueur (en locale) permettant jusqu'a 4 joueurs de sélectionner leur personnages, possibilité de mettre des IA. J'ai réalisé le chat, ces animations, les déplacements et le menu.",
        link: "https://github.com/Camille-Bernadas/SmashLemons"
    },
    {
        title: "Snake 3D",
        media: ["assets/img/project6-0.png"],  // Image
        type: "image",
        description: "Recréation du jeu snake dans un environnement 3D. Fait en C++ avec OpenGL, le moteur de jeu à été créer pour faire snake.",
        link: "https://github.com/Skoll1470/Snake3D"
    },
    {
        title: "Fiesta Foraine",
        media: "assets/videos/Démonstration_FiestaForaine.mp4",  // Vidéo
        type: "video",
        description: "Projet de jeu VR, création d'un environnement de jeu de fête foraine avec plusieurs stand de jeu jouable. Lancer d'anneau, lancer de balle, jeu de tir, chambouletout. Réalisé sur Unity, utilisant casque VR. Le jeu est partageable mais réalisé avec la gestion de version d'Unity.",
        link: ""
    },
    {
        title: "Montpunk",
        media: ["assets/img/project8-0.png", "assets/img/project8-1.png", "assets/img/project8-2.png", "assets/img/project8-3.png"],  // Image
        type: "image-slider",
        description: "Projet de jeu réalisé sur Unreal Engine 5 pour la GameJam IMAGINE 2023-2024. Le thème de la gameJam était Remote Control. Dans ce jeu l'on contrôle un personnage qui peut récupérer des robots et leur donné des ordres simples pour affronter des adversaires. Dans un \'Montpellier\' appocalyptique. Git du projet : https://github.com/HouleAdrien/MontPunk",
        link: "https://biscuitvanille.itch.io/montpunk"
    },
    {
        title: "Quarto",
        media: ["assets/img/project9-0.png", "assets/img/project9-1.png", "assets/img/project9-2.png", "assets/img/project9-3.png", "assets/img/project9-4.png"],  // Image
        type: "image-slider",
        description: "Projet de Master en programmation orienté agent. L'objectif était de faire une IA qui calcule les coups à jouer, nous avons donc pris le jeu Quarto qui possède une dimension raisonnable mais avec quand même une grande quantité de choix possible en particulier au début du jeu. J'ai aussi réalisé les pions sur ce projet et leur texture.",
        link: ""
    },
    {
        title: "TopDownShooter",
        media: ["assets/img/project10-1.png", "assets/img/project10-0.png", "assets/img/project10-2.png", "assets/img/project10-3.png", "assets/img/project10-4.png"],  // Image
        type: "image-slider",
        description: "Projet de jeu réalisé sur Unity pour la GameJam IMAGINE 2022-2023. Seul développeur.",
        link: "https://foalex86.itch.io/topdownshooter"
    },
    {
        title: "Le Coin",
        media: "https://www.youtube.com/watch?v=vcHJ_hRH2ig",  // Vidéo
        type: "video",
        description: "Projet développement mobile pour ma première année de Master. Création d'une application marchande type leboncoin en java avec android studio. Utilisation d'une base de donnée NoSQL(Firebase)",
        link: ""
    }
];

let sliderIndex = 0;
let sliderInterval;

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });

      const savedLang = localStorage.getItem("language") || "fr";
      changeLanguage(savedLang);
});

// Fonction pour ouvrir la lightbox
function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const mediaContainer = document.getElementById("lightbox-media");
    const sliderContainer = document.getElementById("lightbox-slider");
    const slider = sliderContainer.querySelector(".slider");
    const linkButton = document.getElementById("lightbox-link");
    const project = projects[index];

    document.getElementById("lightbox-title").textContent = project.title;
    document.getElementById("lightbox-desc").textContent = project.description;

    // Nettoyer l'ancien contenu média
    mediaContainer.innerHTML = "";
    slider.innerHTML = ""; // Vide le slider

    // Vérifier si c'est un slider d'images
    if (project.type === "image-slider") {
        slider.style.width = `${project.media.length * 100}%`;

        project.media.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = project.title;
            img.style.width = `${100 / project.media.length}%`;
            slider.appendChild(img);
        });

        sliderContainer.style.display = "block";
        mediaContainer.style.display = "none";

        // Réinitialiser le slider
        sliderIndex = 0;
        updateSlider();

        // Démarrer l'animation automatique
        resetSliderTimer();
    } else if (project.type === "image") {
        const img = document.createElement("img");
        img.src = project.media[0];
        img.alt = project.title;
        mediaContainer.appendChild(img);

        mediaContainer.style.display = "block";
        sliderContainer.style.display = "none";
    } else if (project.type === "video") {
        if (project.media.includes("youtube.com") || project.media.includes("youtu.be")) {
            const videoId = project.media.split("v=")[1] || project.media.split("/").pop();
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.width = "100%";
            iframe.height = "400px";
            mediaContainer.appendChild(iframe);
        } else {
            const video = document.createElement("video");
            video.src = project.media;
            video.controls = true;
            video.autoplay = true;
            video.style.maxHeight = "500px";
            mediaContainer.appendChild(video);
        }

        mediaContainer.style.display = "block";
        sliderContainer.style.display = "none";
    }

    // Affichage du bouton "Voir plus"
    if (project.link && project.link.trim() !== "") {
        linkButton.href = project.link;
        linkButton.style.display = "block";
    } else {
        linkButton.style.display = "none";
    }

    // Afficher la lightbox
    lightbox.style.display = "flex";
}

function updateSlider() {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    
    if (images.length > 0) {
        const imageWidth = images[0].clientWidth; // Récupère la largeur exacte d'une image
        slider.style.transform = `translateX(-${sliderIndex * imageWidth}px)`;
    }
}

function resetSliderTimer() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        nextSlide();
    }, 4000);
}

// Fonction pour passer à l'image suivante
function nextSlide(event = null) {
    if (event) event.stopPropagation(); // Empêche la fermeture de la lightbox

    const slider = document.querySelector(".slider");
    const totalSlides = document.querySelectorAll(".slider img").length;

    sliderIndex = (sliderIndex + 1) % totalSlides;
    updateSlider();
    resetSliderTimer(); // Réinitialise le timer
}

// Fonction pour revenir à l'image précédente
function prevSlide(event = null) {
    if (event) event.stopPropagation();

    const slider = document.querySelector(".slider");
    const totalSlides = document.querySelectorAll(".slider img").length;

    sliderIndex = (sliderIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    resetSliderTimer(); // Réinitialise le timer
}


// Fonction pour fermer la lightbox
function closeLightbox(event) {
    const lightbox = document.getElementById("lightbox");

    if (!event || event.target === lightbox) {
        lightbox.style.display = "none";
        document.getElementById("lightbox-media").innerHTML = "";
        clearInterval(sliderInterval);
    }
}

async function changeLanguage(lang) {
    try {
        const response = await fetch("translations/translations.json");
        const translations = await response.json();

        if (translations[lang]) {
            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.getAttribute("data-i18n");
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            localStorage.setItem("language", lang); // Sauvegarde la langue choisie
            const frButton = document.getElementById("buttonFR");
            const engButton = document.getElementById("buttonENG");

            if(lang === "fr")
            {
                frButton.classList.replace("btn-secondary", "btn-primary");
                engButton.classList.replace("btn-primary", "btn-secondary");
            }
            else
            {
                frButton.classList.replace("btn-primary", "btn-secondary");
                engButton.classList.replace("btn-secondary", "btn-primary");
            }
        }
    } catch (error) {
        console.error("Erreur de chargement des traductions :", error);
    }
}
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
        titleFR: "Raytracing",
        titleEN: "Raytracing",
        media: ["assets/img/project1-0.png", "assets/img/project1-1.png", "assets/img/project1-2.png", "assets/img/project1-3.png", "assets/img/project1-4.png"],  // Image
        type: "image-slider",
        descriptionFR: "Développement d'un rendu raytracing d'une scène 3D. Implémentation de Phong, transparence, réfraction, ombres douces et profondeur de champ. Le tout en C++.",
        descriptionEN: "Development of a raytracing rendering for a 3D scene. Implementation of Phong shading, transparency, refraction, soft shadows, and depth of field. All in C++.",
        link: "https://github.com/FoAlex86/raytracingM1Imagine"
    },
    {
        titleFR: "Reconnaissance faciale",
        titleEN: "Facial Recognition",
        media: ["assets/img/project2-1.png"],  // Image
        type: "image",
        descriptionFR: "Développement d'un programme de reconnaissance faciale, vidéo et photos. En Python sur Jupyter Notebook.",
        descriptionEN: "Development of a facial recognition program for video and photos using Python on Jupyter Notebook.",
        link: ""
    },
    {
        titleFR: "Denoizingz",
        titleEN: "Denoizingz",
        media: "assets/videos/denoizings.mp4",  // Vidéo
        type: "video",
        descriptionFR: "Application capable de débruiter des images bruitées par des bruits de Gauss ou de Poisson avec la méthode Noise2Noise. Interface graphique incluse.",
        descriptionEN: "Application capable of denoising images corrupted by Gaussian or Poisson noise using the Noise2Noise method. Includes a graphical interface.",
        link: "https://github.com/FoAlex86/M2ImageProject/tree/main"
    },
    {
        titleFR: "Fluzzle",
        titleEN: "Fluzzle",
        media: "https://youtu.be/MXMk2f8X0ns",  // Vidéo
        type: "video",
        descriptionFR: "Jeu de 'Puzzle' 3D réalisé sur Unity. Manipulation d'éléments (feu, eau, ...) pour interagir avec l'environnement.",
        descriptionEN: "3D 'Puzzle' game developed on Unity. Manipulation of elements (fire, water, ...) to interact with the environment.",
        link: ""
    },
    {
        titleFR: "SmashLemons",
        titleEN: "SmashLemons",
        media: "assets/videos/Présentation_SmashLemon.mp4",
        type: "video",
        descriptionFR: "Jeu de combat 'Smash like'. Menu multijoueur en local, jusqu'à 4 joueurs avec IA possible.",
        descriptionEN: "Smash-like fighting game. Local multiplayer menu, up to 4 players with AI support.",
        link: "https://github.com/Camille-Bernadas/SmashLemons"
    },
    {
        titleFR: "Snake 3D",
        titleEN: "Snake 3D",
        media: ["assets/img/project6-0.png"],
        type: "image",
        descriptionFR: "Recréation du jeu Snake en 3D. Moteur de jeu développé en C++ avec OpenGL.",
        descriptionEN: "Recreation of the Snake game in a 3D environment. Game engine built with C++ and OpenGL.",
        link: "https://github.com/Skoll1470/Snake3D"
    },
    {
        titleFR: "Fiesta Foraine",
        titleEN: "Fiesta Foraine",
        media: "assets/videos/Démonstration_FiestaForaine.mp4",
        type: "video",
        descriptionFR: "Projet de jeu VR réalisé sur Unity, comprenant divers jeux de fête foraine (tir, lancer d'anneaux, etc.).",
        descriptionEN: "VR game project on Unity featuring various carnival-style games (shooting, ring toss, etc.).",
        link: ""
    },
    {
        titleFR: "Montpunk",
        titleEN: "Montpunk",
        media: ["assets/img/project8-0.png", "assets/img/project8-1.png", "assets/img/project8-2.png", "assets/img/project8-3.png"],
        type: "image-slider",
        descriptionFR: "Jeu réalisé sur Unreal Engine 5 pour la GameJam IMAGINE 2023-2024 sur le thème Remote Control.",
        descriptionEN: "Game developed on Unreal Engine 5 for the IMAGINE GameJam 2023-2024 themed Remote Control.",
        link: "https://biscuitvanille.itch.io/montpunk"
    },
    {
        titleFR: "Quarto",
        titleEN: "Quarto",
        media: ["assets/img/project9-0.png", "assets/img/project9-1.png", "assets/img/project9-2.png", "assets/img/project9-3.png", "assets/img/project9-4.png"],
        type: "image-slider",
        descriptionFR: "Projet de Master en programmation orientée agent. IA pour le jeu Quarto avec gestion des pions et textures.",
        descriptionEN: "Master's project in agent-oriented programming. AI for the Quarto game with piece and texture management.",
        link: ""
    },
    {
        titleFR: "TopDownShooter",
        titleEN: "TopDownShooter",
        media: ["assets/img/project10-1.png", "assets/img/project10-0.png", "assets/img/project10-2.png", "assets/img/project10-3.png", "assets/img/project10-4.png"],
        type: "image-slider",
        descriptionFR: "Projet de jeu développé seul sur Unity pour la GameJam IMAGINE 2022-2023.",
        descriptionEN: "Solo-developed Unity game for the IMAGINE GameJam 2022-2023.",
        link: "https://foalex86.itch.io/topdownshooter"
    },
    {
        titleFR: "Le Coin",
        titleEN: "Le Coin",
        media: "https://www.youtube.com/watch?v=vcHJ_hRH2ig",
        type: "video",
        descriptionFR: "Application mobile type 'Leboncoin' développée en Java avec Android Studio et Firebase.",
        descriptionEN: "Mobile app similar to 'Leboncoin' developed in Java with Android Studio and Firebase.",
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

    // Récupérer la langue actuelle
    const lang = localStorage.getItem("language") || "fr";

    // Afficher le titre et la description selon la langue
    const title = lang === "en" ? project.titleEN : project.titleFR;
    const description = lang === "en" ? project.descriptionEN : project.descriptionFR;

    document.getElementById("lightbox-title").textContent = title;
    document.getElementById("lightbox-desc").textContent = description;

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
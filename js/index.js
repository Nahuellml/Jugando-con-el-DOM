import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js"
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba-responsiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
  countdown(
    'countdown', 
    'May 20, 2024 10:40:00',
    'A cosechar!!');
    scrollTopButton('.scroll-top-btn');
    responsiveMedia('youtube', '(min-width: 1024px)', `<a href="https://youtu.be/V-1SlwUAmwY?si=AovQzgvxZ-nSPAGs" target="_blank" rel="noopener">Ver Video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/V-1SlwUAmwY?si=MuHlRm_meRX_wEL5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia('gmaps', '(min-width: 1024px)', `<a href="https://maps.app.goo.gl/ekB1VpqinA5tfQnZA" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.12484339357!2d-60.63304072356931!3d-32.947713173592845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses!2sar!4v1705336647299!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester('responsive-tester');
    userDeviceInfo('user-device');
    webCam('webcam');
    getGeolocation('geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '.player');
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
  });
  
  d.addEventListener('keydown', e => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
  });
  
  darkTheme('.dark-theme-btn', 'dark-mode');
  networkStatus();
  speechReader();
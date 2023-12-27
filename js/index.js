import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js"
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";

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
  });
  
  d.addEventListener('keydown', e => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
  });
  
  darkTheme('.dark-theme-btn', 'dark-mode');
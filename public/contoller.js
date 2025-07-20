import { app } from "./view.js";
import {
  navItems,
  unbox,
  solar_list,
  authomated_list,
  Smart_Looks,
  Top_games,
  Truck_games,
  access_control,
  power_control,
} from "./navlist.js";

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const card_unbox = document.getElementById("card_unbox");
  const solar_main = document.getElementById("solar_main");
  const authomated_main = document.getElementById("authomated_main");
  const smart_main = document.getElementById("smart_main");
  const top_games_main = document.getElementById("top_games_main");
  const Truckg_main = document.getElementById("4g_main");
  const access_control_main = document.getElementById("access_control");
  const power_main = document.getElementById("power_main");
  // console.log();
  console.log("Current Page:", window.location.pathname);
  app.renderMenu(navItems);
  //checks
  if (card_unbox) app.unbox(unbox, card_unbox);
  if (solar_main) app.solar(solar_list, solar_main);
  if (authomated_main) app.authomated_gate(authomated_list, authomated_main);
  if (smart_main) app.authomated_gate(Smart_Looks, smart_main);
  if (top_games_main) app.Top_games(Top_games, top_games_main);
  if (Truckg_main) app.Top_games(Truck_games, Truckg_main);

  if (access_control_main)
    app.accss_contol(access_control, access_control_main);

  if (power_main) app.power_bank(power_control, power_main);
  new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

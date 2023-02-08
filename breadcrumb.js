"use strict";

/**
 * A plugin which adds breadcrumbs to the presentation.
 *
 * @author sedrubal
 */
const RevealBreadcrumb =
  window.RevealBreadcrumb ||
  (function () {
      // var options = window.Reveal.getConfig().breadcrumb || {};

      // create breadcrumb bar
      const breadcrumb_bar = document.createElement("div");
      breadcrumb_bar.classList.add("breadcrumb");
      document.getElementsByClassName("reveal")[0].appendChild(breadcrumb_bar);

      // change breadcrumb text on slide change
      window.Reveal.addEventListener("slidechanged", function (event) {
          update_breadcrumb(event.currentSlide);
      });

      // update innerHTML of all .breadcrumb
      function update_breadcrumb(currentSlide) {
          const bs = document.getElementsByClassName("breadcrumb");
          for (var i = 0; i < bs.length; i++) {
              if (
                  currentSlide.dataset["nobreadcrumb"] === undefined &&
          currentSlide.parentElement.dataset["nobreadcrumb"] === undefined
              ) {
                  bs[i].innerHTML = currentSlide.id
                      .replace(/:/g, " &rsaquo; ")
                      .replace(/_/g, " ");
                  bs[i].style["opacity"] = 1;
              } else {
                  bs[i].style["opacity"] = 0;
              }
          }
      }

      update_breadcrumb(window.Reveal.getCurrentSlide());
  })();

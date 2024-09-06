document.addEventListener("DOMContentLoaded", () => {
  const totalBackers = document.getElementById("total_backers");
  let totalBackersValue = +totalBackers.innerHTML.replace(/,/g, "").trim();
  console.log(totalBackers);
  console.log(totalBackersValue);

  const backedElement = document.getElementById("backed");
  let backedValue = +backed.innerHTML.replace(/[$,]/g, "").trim();
  console.log(backedElement);
  console.log(backedValue);

  //   let backed = document.getElementById("backed");
  const body = document.getElementsByTagName("body")[0];
  body.addEventListener("click", (event) => {
    if (event.target.id === "icon") {
      document.getElementById("text").classList.toggle("hidden");
    } else if (event.target.id === "Bookmark") {
      event.target.classList.toggle("Bookmark");
    } else if (event.target.id === "back") {
      handleOverlay("hidden", "remove", "");
      document.getElementById("backk").classList.remove("hidden");
      //   console.log(document.getElementById("backk"));
      document.getElementById("backk").addEventListener("click", (event) => {
        if (event.target.id === "circle") {
          console.log(event.target);
          document.querySelectorAll(".circle").forEach(function (c) {
            c.style.backgroundColor = "transparent";
          });

          document.querySelectorAll("hr").forEach(function (e) {
            e.classList.add("hidden");
          });
          document.querySelectorAll(".uuuuu").forEach(function (e) {
            e.style.display = "none";
          });

          event.target.style.backgroundColor = "#147b74";
          event.target.classList.add("red");
          //
          if (event.target.classList.contains("one")) {
            console.log("circle one");
            document.getElementById("backk").style.zIndex = "0";
            document.querySelector(".finaly").classList.remove("hidden");
            document
              .querySelector(".finaly")
              .addEventListener("click", function (e) {
                if (e.target.id === "done") {
                  document.querySelector(".finaly").classList.add("hidden");
                  document.getElementById("backk").classList.add("hidden");
                  handleOverlay("", "", "relative");
                  // handleOverlay("hidden", "add", "");
                  document.querySelectorAll(".circle").forEach(function (c) {
                    c.style.backgroundColor = "transparent";
                  });
                  document.querySelectorAll("hr").forEach(function (e) {
                    e.classList.add("hidden");
                  });
                  document.querySelectorAll(".uuuuu").forEach(function (e) {
                    e.style.display = "none";
                  });
                }
              });
          } else {
            const nextSibling =
              event.target.parentElement?.parentElement?.nextElementSibling;
            //   console.log(nextSibling);
            if (nextSibling && nextSibling.tagName === "HR") {
              nextSibling.classList.remove("hidden");
            }

            const nextNextSibling =
              event.target.parentElement?.parentElement?.nextElementSibling
                ?.nextElementSibling;
            console.log(nextNextSibling);
            if (
              nextNextSibling &&
              nextNextSibling.classList.contains("uuuuu")
            ) {
              nextNextSibling.style.display = "flex";
            }

            console.log(nextNextSibling);
            // console.log(nextNextSibling.children[1]);
            // console.log(nextNextSibling.children[1].children[1]);

            nextNextSibling.children[1].addEventListener("click", function (e) {
              if (e.target.classList.contains("Continue")) {
                console.log(e.target.previousElementSibling.firstElementChild);
                if (
                  e.target.previousElementSibling.firstElementChild.value >=
                    25 ||
                  e.target.previousElementSibling.firstElementChild.value >= 75
                ) {
                  console.log(
                    e.target.previousElementSibling.firstElementChild.value
                  );
                  handleOverlay("", "", "absolute");
                  totalBackersValue += 1;
                  console.log(totalBackersValue);
                  const formattedTotalBackersValue = `${totalBackersValue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                  totalBackers.innerHTML = formattedTotalBackersValue;

                  backedValue +=
                    +e.target.previousElementSibling.firstElementChild.value;
                  const formattedBackedValue = `$${backedValue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                  backedElement.innerHTML = formattedBackedValue;
                  document.getElementById("backk").style.zIndex = "0";
                  document.querySelector(".finaly").classList.remove("hidden");
                  document
                    .querySelector(".finaly")
                    .addEventListener("click", function (e) {
                      if (e.target.id === "done") {
                        document
                          .querySelector(".finaly")
                          .classList.add("hidden");
                        document
                          .getElementById("backk")
                          .classList.add("hidden");
                        handleOverlay("", "", "relative");
                        document
                          .querySelectorAll(".circle")
                          .forEach(function (c) {
                            c.style.backgroundColor = "transparent";
                          });
                        document.querySelectorAll("hr").forEach(function (e) {
                          e.classList.add("hidden");
                        });
                        document
                          .querySelectorAll(".uuuuu")
                          .forEach(function (e) {
                            e.style.display = "none";
                          });
                      }
                    });
                  e.target.previousElementSibling.firstElementChild.value = "";
                  e.target.previousElementSibling.firstElementChild.style.borderColor =
                    "#147b74";
                } else {
                  e.target.previousElementSibling.firstElementChild.style.borderColor =
                    "red";
                }
              }
            });
          }
        }
      });
    } else if (event.target.id === "close") {
      handleOverlay("hidden", "add", "");
      document.getElementById("backk").classList.add("hidden");
    }
  });
});

function handleOverlay(classname, typeofclassname, style) {
  if (classname && typeofclassname === "remove") {
    document.getElementById("overlay").classList.remove(classname);
  } else if (classname && typeofclassname === "add") {
    document.getElementById("overlay").classList.add("hidden");
  } else if (style) {
    document.getElementById("overlay").style.position = "relative";
  }
}

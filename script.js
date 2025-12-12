

  const btn = document.querySelector("#actionBtn");
        const box = document.querySelector(".box");

        btn.addEventListener("click", function() {
            box.classList.toggle("move");
        });
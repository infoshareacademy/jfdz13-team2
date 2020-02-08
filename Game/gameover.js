const url = new URL(window.location.href);

const score = url.searchParams.get("score");



console.log(score)

function function1() {
    var ul = document.querySelector(".game-over__ranking");
    var li = document.createElement("li");
    li.classList.add('game-over__position')
    li.appendChild(document.createTextNode("Player: " + score));
    ul.appendChild(li);
    return;
  }

  function1()
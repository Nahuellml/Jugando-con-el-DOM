const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    console.log($players, random, winner);

    return `El ganador es: ${winner.textContent}`;
  } 

  d.addEventListener('click' , e => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  })
}


const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];

  return `El ganador es: ${winner.textContent}`;
} 


//pagina de musica para estudiar
// getWinnerComment('ytm-comment-thread-renderer.item ytm-comment-renderer button.comment-content div.comment-header span.comment-title span.yt-core-attributed-string');
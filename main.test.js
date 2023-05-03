const setPiece = (event) => {
  console.log(event);
  let columnSelected = event.target.className.charAt(1); //5
  console.log(columnSelected);

  for (row = 1; row <= 6; row++) {
    let currentRow = document.querySelector(`.c${columnSelected}${row}`); //c3

    if (
      currentRow.style.backgroundColor === "white" &&
      currentPlayer === player1
    ) {
      currentRow.style.backgroundColor = "red";

      p2VerticalCount[columnSelected - 1].consecutivePieces = 0;
      p1VerticalCount[columnSelected - 1].consecutivePieces++;

      document.querySelector(`.currentPlayer`).style.backgroundColor = "yellow";

      return (currentPlayer = player2);
    }

const cells = []
let color = 0
let counter = 1
let gameover = 0
const winnertext = document.getElementById("winner")
for (let row = 0; row < 18; row += 1) {
  const tr = document.createElement("tr")
  for (let col = 0; col < 18; col += 1) {
    const x = col
    const y = row
    const stonepos = (x + y * 18)
    const stonebutton = document.createElement("button")
    const resetbutton = document.getElementById("resetbutton")
    const td = document.createElement("td")
    stonebutton.className = "buttonclass"

    tr.append(td)
    td.append(stonebutton)
    cells.push(td)

    stonebutton.onclick = function() {
      if (gameover == 1) {
        return
      }

      if (color == 0) {
        if (td.className === "black" || td.className === "white") {
          return
        }
        else {
          td.className = "white"
          color = color + 1
        }
      }

      else if (color == 1) {
        if (td.className === "black" || td.className === "white") {
          return
        }
        else {
          td.className = "black"
          color = color - 1
        }
      }

      function getPlayer(x, y) {
        if (x < 0) return ""
        if (x >= 18) return ""
        if (y < 0) return ""
        if (y >= 18) return ""
        return cells[x + y * 18].className
      }

      function checker(color, dx, dy) {
        for (let z = 0; getPlayer(x + dx * z, y + dy * z) === color; z++) {
          if (z >= 4 && cells[stonepos].className === "white") {
            winner.innerHTML = "White Won!"
            gameover = 1
          }

          else if (z >= 4 && cells[stonepos].className === "black") {
            winner.innerHTML = "Black Won!"
            gameover = 1
          }
        }
      }
      checker("white", 1, 0)
      checker("white", -1, 0)
      checker("black", 1, 0)
      checker("black", -1, 0)
      checker("white", 0, -1)
      checker("white", 0, 1)
      checker("black", 0, -1)
      checker("black", 0, 1)
      checker("white", -1, -1)
      checker("white", 1, -1)
      checker("white", 1, 1)
      checker("white", -1, 1)
      checker("black", -1, -1)
      checker("black", 1, -1)
      checker("black", 1, 1)
      checker("black", -1, 1)
    }

    resetbutton.onclick = function() {
      winner.innerHTML = "Gomoku Game"
      gameover = 0
      for (let l = 0; l < cells.length; l++) {
        cells[l].className = ""
      }
    }

    tableRows.append(tr)
  }
}

for (let name of ["theme1", "theme2", "theme3", "theme4"]) {
  const radiobutton = document.getElementById(name)
  radiobutton.addEventListener("change", function() {
    if (radiobutton.checked) {
      const link = document.getElementById("themeCss")
      link.setAttribute("href", radiobutton.value)
    }
  })
}
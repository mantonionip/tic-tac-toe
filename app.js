const boxes = Array.from(document.getElementsByClassName("box"))
console.log(boxes)

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = ""
    if (index < 3) {
      styleString += `border-bottom: 3px solid var(--grey);`
    }
    if (index % 3 === 0) {
      styleString += `border-right: 3px solid var(--grey);`
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid var(--grey);`
    }
    if (index > 5) {
      styleString += `border-top: 3px solid var(--grey);`
    }
    box.style = styleString
  })
}

drawBoard()

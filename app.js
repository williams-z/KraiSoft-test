window.onload = () => {
  console.log('load');
  
  const parent = document.querySelector('.parent')
  const parentBox = parent.getBoundingClientRect()

  const draggable = document.getElementById('drag-box')
  const dragBox = draggable.getBoundingClientRect()

  let moving = false

  function mouseDown(e) {
    e.preventDefault()
    moving = true
    console.log('click');
  }

  function mouseUp(e) {
    e.preventDefault()
    moving = false
    console.log('click off');
  }

  function onDrag(e) {
    e.preventDefault()
    console.log('moving');


    if ( moving ) {
      if ((e.clientX >= parentBox.left &&(e.clientX + dragBox.width <= parentBox.right)) && 
        (e.clientY >= parentBox.top && (e.clientY+dragBox.height <= parentBox.bottom))
        ) { 
          draggable.style.left = `${e.clientX}px`
          draggable.style.top = `${e.clientY}px`
      } else {
        if (dragBox.left + dragBox.width >= parentBox.right) {
          draggable.style.left = `${parentBox.right - dragBox.width}px`
        }
        if (dragBox.top + dragBox.height >= parentBox.bottom) {
          draggable.style.top = `${parentBox.bottom - dragBox.height}px`
        }
      }  
    }
  }

  document.addEventListener('mousedown', mouseDown)
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', mouseUp)
}



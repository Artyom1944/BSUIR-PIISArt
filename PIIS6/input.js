document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.target'); 
    let draggedElement = null; 
    let isSticky = false; 
    let originalPosition = { left: 0, top: 0 }; 
  
    targets.forEach(target => {
        
        target.addEventListener('mousedown', (e) => {
            if (!isSticky) {
                startDrag(target, e.pageX, e.pageY); 
            }
        });
  
        
        target.addEventListener('dblclick', (e) => {
            toggleSticky(target, e.pageX, e.pageY); 
        });
  
        
        target.addEventListener('mouseup', () => {
            if (!isSticky) {
                draggedElement = null; 
            }
        });
  
      
        target.addEventListener('touchstart', (e) => {
            if (!isSticky) {
                const touch = e.touches[0];
                startDrag(target, touch.pageX, touch.pageY); 
            } else {
                const touch = e.touches[0];
                moveAt(touch.pageX, touch.pageY); 
            }
        });
  
        target.addEventListener('touchend', (e) => {
            if (!isSticky) {
                draggedElement = null; 
            }
        });
  
        target.addEventListener('touchmove', (e) => {
            if (draggedElement) {
                const touch = e.touches[0]; 
                moveAt(touch.pageX, touch.pageY); 
            }
        });
    });
  
    
    document.addEventListener('mousemove', (e) => {
        if (draggedElement) {
            moveAt(e.pageX, e.pageY);
        }
    });
  
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && draggedElement) {
            resetDrag(); 
        }
    });
  
    
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1 && draggedElement) {
            resetDrag(); 
        }
    });
  
    
    function startDrag(target, pageX, pageY) {
        draggedElement = target;
        originalPosition.left = target.offsetLeft;
        originalPosition.top = target.offsetTop;
        draggedElement.style.position = 'absolute';
        moveAt(pageX, pageY);
    }
  
    
    function toggleSticky(target, pageX, pageY) {
        if (!isSticky) {
            isSticky = true;
            draggedElement = target;
            draggedElement.style.position = 'absolute';
            draggedElement.style.backgroundColor = 'pink';
            moveAt(pageX, pageY);
        } else {
            isSticky = false;
            draggedElement.style.backgroundColor = '';
            draggedElement = null;
        }
    }
  
    
    function moveAt(pageX, pageY) {
        if (draggedElement) {
            draggedElement.style.left = pageX - draggedElement.offsetWidth / 2 + 'px';
            draggedElement.style.top = pageY - draggedElement.offsetHeight / 2 + 'px';
        }
    }
  
    
    function resetDrag() {
        draggedElement.style.left = originalPosition.left + 'px';
        draggedElement.style.top = originalPosition.top + 'px';
        draggedElement.style.backgroundColor = '';
        draggedElement = null;
        isSticky = false;
    }
  });
document.addEventListener('DOMContentLoaded', () => {
    
    const targets = document.querySelectorAll('.target');
    let draggedElement = null; 
    let isSticky = false; 
    let originalPosition = { left: 0, top: 0 };
  
  
    targets.forEach(target => {
        
        target.addEventListener('mousedown', (e) => {
            if (!isSticky) {
                draggedElement = target; 
                
                originalPosition.left = target.offsetLeft;
                originalPosition.top = target.offsetTop;
                
                
                draggedElement.style.position = 'absolute'; 
                moveAt(e.pageX, e.pageY); 
            }
        });
  
        
        target.addEventListener('dblclick', (e) => {
            if (!isSticky) { 
                isSticky = true; 
                draggedElement = target; 
                draggedElement.style.position = 'absolute'; 
                draggedElement.style.backgroundColor = 'pink'; 
                moveAt(e.pageX, e.pageY); 
            } else { 
                isSticky = false; 
                draggedElement.style.backgroundColor = ''; 
                draggedElement = null;
            }
        });

     target.addEventListener('mouseup', () => {
            if (!isSticky) { 
                draggedElement = null; 
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
           
            draggedElement.style.left = originalPosition.left + 'px';
            draggedElement.style.top = originalPosition.top + 'px';
  
            
            draggedElement.style.backgroundColor = ''; 
            draggedElement = null; 
            isSticky = false; 
        }
    });
  
    
    function moveAt(pageX, pageY) {
        if (draggedElement) { 
            draggedElement.style.left = pageX - draggedElement.offsetWidth / 2 + 'px'; 
            draggedElement.style.top = pageY - draggedElement.offsetHeight / 2 + 'px'; 
        }
    }
  });
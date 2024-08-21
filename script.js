function rearrangeContentForMobile() {
    const divImgs = document.querySelector('.divImgs');
    const dynamicBoxes = document.querySelectorAll('.dinamicBox');
    const mainContainer = document.querySelector('section');
    
    if (window.innerWidth <= 1124) {
        dynamicBoxes.forEach(box => {
            const targetId = box.id;
            const button = document.querySelector(`.toggleButton[data-target="${targetId}"]`);
            const parentDiv = button.parentNode;

            if (!parentDiv.contains(box)) {
                parentDiv.appendChild(box);
            }
        });
    } else {
        dynamicBoxes.forEach(box => {
            if (divImgs.contains(box)) {
                mainContainer.appendChild(box);
            }
            box.style.maxHeight = null; 
            box.classList.remove('expanded'); 
            box.style.display = "block"; 
        });
    }
}

document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var targetBox = document.getElementById(targetId);
        
        var isExpanded = targetBox.classList.contains('expanded');

        document.querySelectorAll('.dinamicBox').forEach(box => {
            box.classList.remove('expanded');
            box.style.maxHeight = null;
        });

        if (!isExpanded) {
            targetBox.classList.add('expanded');
            targetBox.style.maxHeight = targetBox.scrollHeight + "px"; 
        }

        document.querySelectorAll('.toggleButton').forEach(btn => {
            btn.blur(); 
        });

        this.focus();
    });
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dinamicBox').forEach(box => {
        box.classList.remove('expanded');
        box.style.maxHeight = null; 
        box.style.display = "none"; 
    });

    rearrangeContentForMobile();
});

window.addEventListener('resize', rearrangeContentForMobile);
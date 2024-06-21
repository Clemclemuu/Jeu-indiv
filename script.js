const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');


const image1 = new Image();
image1.src = 'graphics/bottle.png';
let x1 = 150, y1 = 950; // Example position for image1
let width1 = 70, height1 = 50; // Example dimensions for image1

const image2 = new Image();
image2.src = 'graphics/crow.png';
let x2 = 1850, y2 = 360; // Example position for image2
let width2 = 70, height2 = 70; // Example dimensions for image2

const image3 = new Image();
image3.src = 'graphics/camera.png';
let x3 = 1735, y3 = 195; // Example position for image2
let width3 = 70, height3 = 70; // Example dimensions for image2

const image4 = new Image();
image4.src = 'graphics/blood.png';
let x4 = 1050, y4 = 930; // Example position for image2
let width4 = 130, height4 = 110; // Example dimensions for image2

const image5 = new Image();
image5.src = 'graphics/crowbar.png';
let x5 = 890, y5 = 960; 
let width5 = 80, height5 = 40; 

const image6 = new Image();
image6.src = 'graphics/cat.png';
let x6 = 90, y6 = 310; 
let width6 = 70, height6 = 70; 

const image7 = new Image();
image7.src = 'graphics/trash.png';
let x7 = 1200, y7 = 920; 
let width7 = 50, height7 = 50; 

const image8 = new Image();
image8.src = 'graphics/wallet.png';
let x8 = 1850, y8 = 960; 
let width8 = 40, height8 = 40; 


// Ensure images are loaded before using them
image1.onload = function() {
    // Draw image1 on canvas when loaded if needed
};

image2.onload = function() {
    // Draw image2 on canvas when loaded if needed
};

image3.onload = function() {
    // Draw image3 on canvas when loaded if needed
};

image4.onload = function() {
    // Draw image4 on canvas when loaded if needed
};

image5.onload = function() {
    // Draw image4 on canvas when loaded if needed
};

image6.onload = function() {
    // Draw image4 on canvas when loaded if needed
};

image7.onload = function() {
    // Draw image4 on canvas when loaded if needed
};

image8.onload = function() {
    // Draw image4 on canvas when loaded if needed
};



// Rectangle properties
let rectX = 100;
let rectY = 100;
const rectWidth = 5;
const rectHeight = 5;
const rectSpeed = 20; // Speed of the rectangle

// Text properties for image1
const text1 = "Ewww, a dirty bottle. What are people drinking these days...";
const textX = canvas2.width / 2;
const textY = canvas2.height - 800;

// Text properties for image2
const text2 = "- Hey buddy, what's new";
const text2a = "- Croâââââ";
const text2b = "- ...";

// Text properties for image3
const text3 = "They wont leave people alone, even a freaking bug like me. Fuck big brother.";

// Text properties for image4
const text4 = "I hope it only ketchup. Do fireflies eat ketchup?";

// Text properties for image5
const text5 = "It's bloody. Don't wanna know what it was used for :)))";

// Text properties for image6
const text6 = "Hey Kitty-cat, dont play with me, OK?...";

// Text properties for image7
const text7 = "NO WAAAAAY that's a king feast! Hope there s not a head inside.";

// Text properties for image8
const text8 = "They did not even bother to take the money HAHAHAH. Sad that it's no use for me.";


function drawImages() {
    // Clear previous frame
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    // Draw image1 at position (x1, y1)
    ctx2.drawImage(image1, x1, y1, width1, height1);

    // Draw image2 at position (x2, y2)
    ctx2.drawImage(image2, x2, y2, width2, height2);

    // Draw image2 at position (x2, y2)
    ctx2.drawImage(image3, x3, y3, width3, height3);
    
    // Draw image2 at position (x2, y2)
    ctx2.drawImage(image4, x4, y4, width4, height4);
    
    // Draw image2 at position (x2, y2)
    ctx2.drawImage(image5, x5, y5, width5, height5);
    
    // Draw image2 at position (x2, y2)
    ctx2.drawImage(image6, x6, y6, width6, height6);
    
    // Draw image2 at position (x2, y2)
    ctx2.drawImage(image7, x7, y7, width7, height7);
    
    // Draw image2 at position (x2, y2)
    ctx2.drawImage(image8, x8, y8, width8, height8);

    // Draw the rectangle (firefly) on top
    drawRectangle();

}



// Draw the rectangle with glowing effect
function drawRectangle() {
    ctx2.save();

    ctx2.shadowColor = 'cyan';
    ctx2.shadowBlur = 15;
    ctx2.fillStyle = 'rgba(0, 255, 255, 0.9)'; // Neon blue color with transparency
    ctx2.fillRect(rectX, rectY, rectWidth, rectHeight); // Draw the rectangle

    ctx2.shadowColor = 'cyan';
    ctx2.shadowBlur = 10;
    ctx2.fillStyle = 'rgba(0, 255, 255, 0.5)';
    ctx2.fillRect(rectX + 5, rectY + 5, rectWidth, rectHeight);

    ctx2.restore();
}

// Function to check collision between firefly and image1
function checkCollision1() {
    // Check collision with image1
    if (rectX < x1 + width1 &&
        rectX + rectWidth > x1 &&
        rectY < y1 + height1 &&
        rectY + rectHeight > y1) {
        return true;
    }

    // No need to check collision with other images
    return false;
}

// Function to check collision between firefly and image2
function checkCollision2() {
    // Check collision with image2
    if (rectX < x2 + width2 &&
        rectX + rectWidth > x2 &&
        rectY < y2 + height2 &&
        rectY + rectHeight > y2) {
        return true;
    }

    return false;
}

// Function to check collision between firefly and image2
function checkCollision3() {
    
    if (rectX < x3 + width3 &&
        rectX + rectWidth > x3 &&
        rectY < y3 + height3 &&
        rectY + rectHeight > y3) {
        return true;
    }

    return false;
}

// Function to check collision between firefly and image2
function checkCollision4() {
    
    if (rectX < x4 + width4 &&
        rectX + rectWidth > x4 &&
        rectY < y4 + height4 &&
        rectY + rectHeight > y4) {
        return true;
    }

    return false;
}

// Function to check collision between firefly and image2
function checkCollision5() {
    
    if (rectX < x5 + width5 &&
        rectX + rectWidth > x5 &&
        rectY < y5 + height5 &&
        rectY + rectHeight > y5) {
        return true;
    }

    return false;
}

// Function to check collision between firefly and image6
function checkCollision6() {
    // Check collision with image1
    if (rectX < x6 + width6 &&
        rectX + rectWidth > x6 &&
        rectY < y6 + height6 &&
        rectY + rectHeight > y6) {
        return true;
    }

    return false;
}

// Function to check collision between firefly and image6
function checkCollision7() {
    // Check collision with image1
    if (rectX < x7 + width7 &&
        rectX + rectWidth > x7 &&
        rectY < y7 + height7 &&
        rectY + rectHeight > y7) {
        return true;
    }

    return false;
}

// Function to check collision between firefly and image6
function checkCollision8() {
    // Check collision with image1
    if (rectX < x8 + width8 &&
        rectX + rectWidth > x8 &&
        rectY < y8 + height8 &&
        rectY + rectHeight > y8) {
        return true;
    }

    return false;
}




// Function to display text based on collision status
function displayText() {
    ctx2.font = '35px Arial';
    ctx2.fillStyle = 'white';
    ctx2.textAlign = 'center';

    // Display text only if there's a collision with image1
    if (checkCollision1()) {
        ctx2.fillText(text1, textX, textY);
    }
    
    if (checkCollision2()) {
        ctx2.fillText(text2, textX, textY);
        ctx2.fillText(text2a, textX, textY + 35);
        ctx2.fillText(text2b, textX, textY + 70);

    }
    
    if (checkCollision3()) {
        ctx2.fillText(text3, textX, textY);
    }
    
    if (checkCollision4()) {
        ctx2.fillText(text4, textX, textY);
    }
    
    if (checkCollision5()) {
        ctx2.fillText(text5, textX, textY);
    }

    if (checkCollision6()) {
        ctx2.fillText(text6, textX, textY);
    }
   
    if (checkCollision7()) {
        ctx2.fillText(text7, textX, textY);
    }
   
    if (checkCollision8()) {
        ctx2.fillText(text8, textX, textY);
    }


}


// Update the rectangle's position based on key press
function moveRectangle(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (rectY - rectSpeed >= 0) {
                rectY -= rectSpeed;
            }
            break;
        case 'ArrowDown':
            if (rectY + rectHeight + rectSpeed <= canvas2.height) {
                rectY += rectSpeed;
            }
            break;
        case 'ArrowLeft':
            if (rectX - rectSpeed >= 0) {
                rectX -= rectSpeed;
            }
            break;
        case 'ArrowRight':
            if (rectX + rectWidth + rectSpeed <= canvas2.width) {
                rectX += rectSpeed;
            }
            break;
    }
    drawImages();
    displayText();
}


// Initial draw
image1.onload = function() {
    drawImages();  // Draw images and rectangle initially
};

image2.onload = function() {
    drawImages();  // Ensure both images are loaded before drawing
};




// Event listener for keydown
window.addEventListener('keydown', moveRectangle);

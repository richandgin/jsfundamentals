let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementByID('width').value);
    
    let area = length * width;
}

document.getElementById('result').innertext = 'The area of the rectangle is : ${area}';

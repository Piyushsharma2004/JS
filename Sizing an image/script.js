let imageElement = document.getElementById('image');
let imageWidrhElement = document.getElementById('imageWidth');
let waringMessageElement = document.getElementById('warningMessage');

let imageMaxWidth = 300;
let imageMinWidth = 100;
let originalImageWidth = 200;
let maxWidrhWaringMessage = 'Too big. Decrease the size of the Image.';
let minWidrhWaringMessage = 'Too small. Increase the size of the Image.';

imageElement.style.width = originalImageWidth + 'px';
imageWidrhElement.textContent = originalImageWidth + 'px';

function onIncrement(){
    if(originalImageWidth >= imageMaxWidth){
        waringMessageElement.textContent = maxWidrhWaringMessage;
        

    }
    else{
        originalImageWidth = originalImageWidth + 5;
        let updateImagewidth = originalImageWidth + 'px';

        waringMessageElement.textContent = '';
        imageElement.style.width = updateImagewidth;
        imageWidrhElement.textContent = updateImagewidth;
    }
}
function onDecrement(){
    if(originalImageWidth <= imageMinWidth){
        waringMessageElement.textContent = minWidrhWaringMessage;
    }
    else{
        originalImageWidth = originalImageWidth - 5;
        let updateImagewidth = originalImageWidth + 'px';

        waringMessageElement.textContent = '';
        imageElement.style.width = updateImagewidth;
        imageWidrhElement.textContent = updateImagewidth;
    }

}
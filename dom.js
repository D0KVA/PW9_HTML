let images = [];

function addImage() {
    const imageInput = document.getElementById('image');
    const imageUrl = imageInput.value.trim();

    if (!imageUrl) {
        alert('Пожалуйста, введите URL изображения.');
        return;
    }

    images.push(imageUrl);
    updateImageList();
    imageInput.value = '';
}

function updateImageList() {
    const imageList = document.getElementById('image-list');
    imageList.innerHTML = '';

    images.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('image-item');
        imageList.appendChild(img);
    });
}

function editImage(index) {
    const imageList = document.getElementById('image-list');
    const lastImage = imageList.lastElementChild;

    if (lastImage) {
        const imageInput = document.getElementById('image');
        const imageUrl = imageInput.value.trim();

        if (!imageUrl) {
            alert('Пожалуйста, введите URL изображения.');
            return;
        }

        lastImage.src = imageUrl;
        imageInput.value = '';
    } else {
        addImage();
    }
}

function deleteImage() {
    const imageList = document.getElementById('image-list');
    const lastImage = imageList.lastElementChild;

    if (lastImage) {
        // Найти и удалить URL изображения из массива images
        const imageUrl = lastImage.src;
        const index = images.indexOf(imageUrl);
        if (index > -1) {
            images.splice(index, 1);
        }

        // Удалить изображение из DOM
        imageList.removeChild(lastImage);
    } else {
        alert('Список изображений пуст.');
    }
}
const fileInput = document.querySelector('input[type="file"]');
fileInput?.addEventListener('change', (e) => {
    const previewArea = document.querySelector('.preview');
    if (!previewArea) return;

    previewArea.innerHTML = '';
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            const img = document.createElement('img');
            img.src = evt.target.result;
            img.style.maxHeight = '200px';
            img.style.marginTop = '10px';
            img.style.borderRadius = '10px';
            img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            previewArea.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});

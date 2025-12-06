// Dateiname: fileHandler.js
// Erstellt: 05.12.2025, 16:45 Uhr (Berlin)

'use strict';

if (typeof FileHandler === 'undefined') {
    window.FileHandler = {
        init() {
            this.setupFileInput();
        },
        
        setupFileInput() {
            const fileInput = document.getElementById('file-input');
            fileInput.addEventListener('change', (e) => {
                const files = Array.from(e.target.files);
                this.handleFiles(files);
                fileInput.value = '';
            });
        },
        
        handleFiles(files) {
            const validFiles = files.filter(file => 
                file.type.startsWith('image/')
            );
            
            validFiles.forEach(file => {
                this.readFile(file);
            });
        },
        
        readFile(file) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const id = AppState.addImage(file, e.target.result);
                this.renderImageItem(id);
                App.checkFormValidity();
            };
            
            reader.readAsDataURL(file);
        },
        
        renderImageItem(id) {
            const image = AppState.images.find(img => img.id === id);
            if (!image) return;
            
            const imageList = document.getElementById('image-list');
            const item = document.createElement('div');
            item.className = 'image-item';
            item.dataset.id = id;
            
            item.innerHTML = `
                <img src="${image.dataUrl}" alt="Preview" class="image-preview">
                <div class="image-info">
                    <input 
                        type="text" 
                        class="image-name-input" 
                        placeholder="Name (optional)" 
                        value="${image.name}"
                        data-id="${id}"
                    >
                </div>
                <button class="btn-remove" data-id="${id}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            `;
            
            imageList.appendChild(item);
            
            const nameInput = item.querySelector('.image-name-input');
            nameInput.addEventListener('input', (e) => {
                AppState.updateImageName(id, e.target.value);
            });
            
            const removeBtn = item.querySelector('.btn-remove');
            removeBtn.addEventListener('click', () => {
                this.removeImage(id);
            });
        },
        
        removeImage(id) {
            AppState.removeImage(id);
            const item = document.querySelector(`.image-item[data-id="${id}"]`);
            if (item) {
                item.remove();
            }
            App.checkFormValidity();
        }
    };
}

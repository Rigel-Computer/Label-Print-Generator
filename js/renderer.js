// Dateiname: renderer.js
// Erstellt: 05.12.2025, 17:00 Uhr (Berlin)

'use strict';

if (typeof Renderer === 'undefined') {
    window.Renderer = {
        generatePreview() {
            const printArea = document.getElementById('print-area');
            printArea.innerHTML = '';
            
            const margins = AppState.calculateMargins();
            const pageEl = this.createPage(0, margins);
            printArea.appendChild(pageEl);
        },
        
        createPage(pageNum, margins) {
            const page = document.createElement('div');
            page.className = 'a4-page';
            
            const grid = document.createElement('div');
            grid.className = 'label-grid';
            grid.style.cssText = `
                display: grid;
                grid-template-columns: repeat(${AppState.settings.columns}, ${AppState.settings.labelWidth}mm);
                grid-template-rows: repeat(${AppState.settings.rows}, ${AppState.settings.labelHeight}mm);
                padding: ${margins.top}mm ${margins.right}mm ${margins.bottom}mm ${margins.left}mm;
                height: 100%;
                box-sizing: border-box;
            `;
            
            const labelsPerPage = AppState.getLabelsPerPage();
            
            // Create all labels
            for (let i = 0; i < labelsPerPage; i++) {
                const label = this.createLabel();
                grid.appendChild(label);
            }
            
            page.appendChild(grid);
            return page;
        },
        
        createLabel() {
            const label = document.createElement('div');
            label.className = 'label';
            
            const imagesCount = AppState.settings.imagesPerLabel;
            const imagePadding = 5; // 5mm padding between images
            
            label.style.cssText = `
                width: ${AppState.settings.labelWidth}mm;
                height: ${AppState.settings.labelHeight}mm;
                display: flex;
                flex-direction: row;
                gap: ${imagePadding}mm;
                padding: 0.5mm;
                box-sizing: border-box;
                overflow: hidden;
                border: 0.5px solid #d1d5db;
            `;
            
            // Add each image
            for (let slot = 1; slot <= imagesCount; slot++) {
                const imageData = AppState.getImageBySlot(slot);
                if (imageData && imageData.dataUrl) {
                    const container = this.createImageContainer(imageData);
                    label.appendChild(container);
                }
            }
            
            return label;
        },
        
        createImageContainer(imageData) {
            const container = document.createElement('div');
            container.className = 'image-container';
            container.style.cssText = `
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 0;
                height: 100%;
            `;
            
            const img = document.createElement('img');
            img.src = imageData.dataUrl;
            img.style.cssText = `
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            `;
            container.appendChild(img);
            
            return container;
        },
        
        fitText(textEl) {
            // Not needed anymore - keeping for compatibility
        }
    };
}

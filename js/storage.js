// Dateiname: storage.js
// Erstellt: 05.12.2025, 16:45 Uhr (Berlin)

'use strict';

if (typeof AppState === 'undefined') {
    window.AppState = {
        images: [], // Array of image objects: [{slot: 1, dataUrl: '...', textTop: '', textBottom: ''}]
        settings: {
            labelWidth: null,
            labelHeight: null,
            columns: null,
            rows: null,
            imagesPerLabel: 1
        },
        
        setImage(slot, file, dataUrl) {
            // Find existing image in slot or create new
            const existingIndex = this.images.findIndex(img => img.slot === slot);
            
            if (existingIndex >= 0) {
                this.images[existingIndex] = {
                    slot: slot,
                    file: file,
                    dataUrl: dataUrl
                };
            } else {
                this.images.push({
                    slot: slot,
                    file: file,
                    dataUrl: dataUrl
                });
            }
        },
        
        clearImages() {
            this.images = [];
        },
        
        getImageBySlot(slot) {
            return this.images.find(img => img.slot === slot);
        },
        
        updateSettings(settings) {
            this.settings = { ...this.settings, ...settings };
        },
        
        isValid() {
            const requiredImages = this.settings.imagesPerLabel;
            
            // Check if all REQUIRED slots (1 to requiredImages) have images
            let allRequiredSlotsFilled = true;
            for (let slot = 1; slot <= requiredImages; slot++) {
                const image = this.getImageBySlot(slot);
                if (!image || !image.dataUrl) {
                    allRequiredSlotsFilled = false;
                    break;
                }
            }
            
            return (
                allRequiredSlotsFilled &&
                this.settings.labelWidth > 0 &&
                this.settings.labelHeight > 0 &&
                this.settings.columns > 0 &&
                this.settings.rows > 0
            );
        },
        
        calculateMargins() {
            const a4Width = 210;
            const a4Height = 297;
            
            const totalLabelsWidth = this.settings.columns * this.settings.labelWidth;
            const totalLabelsHeight = this.settings.rows * this.settings.labelHeight;
            
            const marginLR = (a4Width - totalLabelsWidth) / 2;
            const marginTB = (a4Height - totalLabelsHeight) / 2;
            
            return {
                left: marginLR,
                right: marginLR,
                top: marginTB,
                bottom: marginTB
            };
        },
        
        getLabelsPerPage() {
            return this.settings.columns * this.settings.rows;
        }
    };
}

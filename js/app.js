// Dateiname: app.js
// Erstellt: 05.12.2025, 16:45 Uhr (Berlin)

"use strict";

if (typeof App === "undefined") {
   window.App = {
      init() {
         // Initialize AppState with debug values from HTML
         const labelWidth = parseFloat(
            document.getElementById("label-width").value
         );
         const labelHeight = parseFloat(
            document.getElementById("label-height").value
         );
         const columns = parseInt(document.getElementById("columns").value);
         const rows = parseInt(document.getElementById("rows").value);

         AppState.updateSettings({
            labelWidth,
            labelHeight,
            columns,
            rows,
         });

         this.setupEventListeners();
         this.generateUploadFields(1); // Start with 1 image
         this.checkFormValidity(); // Trigger validation with debug values
      },

      setupEventListeners() {
         const labelWidthInput = document.getElementById("label-width");
         const labelHeightInput = document.getElementById("label-height");
         const columnsInput = document.getElementById("columns");
         const rowsInput = document.getElementById("rows");
         const imagesPerLabelInputs = document.querySelectorAll(
            'input[name="images-per-label"]'
         );
         const previewBtn = document.getElementById("preview-btn");
         const backBtn = document.getElementById("back-btn");
         const printBtn = document.getElementById("print-btn");

         labelWidthInput.addEventListener("input", (e) => {
            AppState.updateSettings({ labelWidth: parseFloat(e.target.value) });
            this.checkFormValidity();
         });

         labelHeightInput.addEventListener("input", (e) => {
            AppState.updateSettings({
               labelHeight: parseFloat(e.target.value),
            });
            this.checkFormValidity();
         });

         columnsInput.addEventListener("input", (e) => {
            AppState.updateSettings({ columns: parseInt(e.target.value) });
            this.checkFormValidity();
         });

         rowsInput.addEventListener("input", (e) => {
            AppState.updateSettings({ rows: parseInt(e.target.value) });
            this.checkFormValidity();
         });

         imagesPerLabelInputs.forEach((input) => {
            input.addEventListener("change", (e) => {
               const count = parseInt(e.target.value);
               AppState.updateSettings({ imagesPerLabel: count });
               this.generateUploadFields(count);
               this.checkFormValidity();
            });
         });

         previewBtn.addEventListener("click", () => {
            this.showPreview();
         });

         backBtn.addEventListener("click", () => {
            this.showSetup();
         });

         printBtn.addEventListener("click", () => {
            window.print();
         });
      },

      generateUploadFields(count) {
         const container = document.getElementById("upload-fields-container");
         container.innerHTML = "";
         // DON'T clear images - keep them!
         // AppState.clearImages(); // REMOVED

         // Set grid columns based on count
         container.style.gridTemplateColumns = `repeat(${count}, 1fr)`;

         for (let i = 1; i <= count; i++) {
            const field = this.createUploadField(i);
            container.appendChild(field);

            // Restore existing image if available
            const existingImage = AppState.getImageBySlot(i);
            if (existingImage && existingImage.dataUrl) {
               this.showPreviewImage(i, existingImage.dataUrl);
            }
         }

         this.checkFormValidity();
      },

      createUploadField(slot) {
         const field = document.createElement("div");
         field.className = "upload-field";
         field.dataset.slot = slot;

         field.innerHTML = `
                <div class="upload-area-single" onclick="document.getElementById('file-input-${slot}').click()">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <p>Upload Image ${slot}</p>
                </div>
                <input type="file" id="file-input-${slot}" accept="image/*" style="display: none;">
                
                <div class="text-input-group">
                    <input type="text" 
                           id="text-bottom-${slot}" 
                           placeholder="Caption (optional)"
                           data-slot="${slot}">
                </div>
                
                <div class="preview-image-container" id="preview-${slot}">
                    <img src="" alt="Preview ${slot}">
                </div>
            `;

         // Setup file input listener
         const fileInput = field.querySelector(`#file-input-${slot}`);
         fileInput.addEventListener("change", (e) => {
            this.handleFileUpload(e, slot);
         });

         // Setup text input listener
         const textBottomInput = field.querySelector(`#text-bottom-${slot}`);
         textBottomInput.addEventListener("input", (e) => {
            this.handleTextInput(slot, e.target.value);
         });

         return field;
      },

      handleFileUpload(event, slot) {
         const file = event.target.files[0];
         if (!file || !file.type.startsWith("image/")) return;

         const reader = new FileReader();
         reader.onload = (e) => {
            AppState.setImage(slot, file, e.target.result);
            this.showPreviewImage(slot, e.target.result);
            this.checkFormValidity();
         };
         reader.readAsDataURL(file);
      },

      showPreviewImage(slot, dataUrl) {
         const previewContainer = document.getElementById(`preview-${slot}`);
         const img = previewContainer.querySelector("img");
         img.src = dataUrl;
         previewContainer.classList.add("active");
      },

      handleTextInput(slot, text) {
         AppState.updateImageText(slot, text);
      },

      checkFormValidity() {
         const previewBtn = document.getElementById("preview-btn");
         previewBtn.disabled = !AppState.isValid();
      },

      showPreview() {
         // Update document title for PDF filename
         const now = new Date();
         const dd = String(now.getDate()).padStart(2, "0");
         const mm = String(now.getMonth() + 1).padStart(2, "0");
         const yy = String(now.getFullYear()).slice(-2);
         const hh = String(now.getHours()).padStart(2, "0");
         const min = String(now.getMinutes()).padStart(2, "0");

         document.title = `Label_Generator_${dd}${mm}${yy}-${hh}${min}`;

         Renderer.generatePreview();
         this.switchScreen("preview-screen");
      },

      showSetup() {
         document.title = "Label Print Generator";
         this.switchScreen("setup-screen");
      },

      switchScreen(screenId) {
         document.querySelectorAll(".screen").forEach((screen) => {
            screen.classList.remove("active");
         });
         document.getElementById(screenId).classList.add("active");
      },
   };
}

document.addEventListener("DOMContentLoaded", () => {
   App.init();
});

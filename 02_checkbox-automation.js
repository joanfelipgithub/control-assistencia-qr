// Checkbox Automation from TXT Files
// Drag & Drop or Upload TXT files to auto-check checkboxes

(function() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'file-drop-overlay';
    overlay.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            width: 350px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 999999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Checkbox Automation</h3>
                <button id="close-overlay" style="
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 16px;
                    line-height: 1;
                ">×</button>
            </div>
            
            <div id="drop-zone" style="
                border: 2px dashed rgba(255,255,255,0.5);
                border-radius: 8px;
                padding: 30px;
                text-align: center;
                background: rgba(255,255,255,0.1);
                cursor: pointer;
                transition: all 0.3s;
            ">
                <div style="font-size: 40px; margin-bottom: 10px;">📁</div>
                <div style="font-size: 14px; margin-bottom: 5px;">Drag TXT files here</div>
                <div style="font-size: 12px; opacity: 0.8;">or click to browse</div>
                <input type="file" id="file-input" multiple accept=".txt" style="display: none;">
            </div>
            
            <div id="status" style="
                margin-top: 15px;
                font-size: 13px;
                padding: 10px;
                background: rgba(0,0,0,0.2);
                border-radius: 6px;
                min-height: 20px;
                max-height: 150px;
                overflow-y: auto;
            "></div>
            
            <div id="stats" style="
                margin-top: 10px;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                opacity: 0.9;
            ">
                <span>Found: <strong id="found-count">0</strong></span>
                <span>Checked: <strong id="checked-count">0</strong></span>
                <span>Failed: <strong id="failed-count">0</strong></span>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Get elements
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const statusDiv = document.getElementById('status');
    const closeBtn = document.getElementById('close-overlay');
    
    let foundCount = 0;
    let checkedCount = 0;
    let failedCount = 0;
    
    // Update stats
    function updateStats() {
        document.getElementById('found-count').textContent = foundCount;
        document.getElementById('checked-count').textContent = checkedCount;
        document.getElementById('failed-count').textContent = failedCount;
    }
    
    // Add status message
    function addStatus(message, type = 'info') {
        const colors = {
            info: '#ffffff',
            success: '#4ade80',
            error: '#f87171',
            warning: '#fbbf24'
        };
        
        const msg = document.createElement('div');
        msg.style.color = colors[type];
        msg.style.marginBottom = '5px';
        msg.textContent = message;
        statusDiv.appendChild(msg);
        statusDiv.scrollTop = statusDiv.scrollHeight;
    }
    
    // Extract IDs from text content
    function extractIDs(text) {
        const ids = [];
        // Match pattern: timestamp - ID - name
        // Example: 20:27:19 - 4815 - Laia Font i Soler
        const regex = /\d{2}:\d{2}:\d{2}\s*-\s*(\d+)\s*-\s*.+/g;
        let match;
        
        while ((match = regex.exec(text)) !== null) {
            ids.push(match[1]);
        }
        
        return ids;
    }
    
    // Check checkbox for given ID
    function checkCheckbox(id) {
        try {
            // Find the checkbox div (pattern: clickedu_checkbox_img_XXXX)
            const div = document.getElementById(`clickedu_checkbox_img_${id}`);
            
            if (!div) {
                addStatus(`❌ ID ${id}: Checkbox not found`, 'error');
                failedCount++;
                return false;
            }
            
            // Remove unchecked, add checked
            div.classList.remove('unchecked');
            div.classList.add('checked');
            
            // Find and update the actual input (pattern: ind_XXXX_m_1)
            const input = document.querySelector(`input[name="ind_${id}_m_1"]`);
            
            if (input) {
                input.checked = true;
                input.dispatchEvent(new Event('change', { bubbles: true }));
                addStatus(`✓ ID ${id}: Checked successfully`, 'success');
                checkedCount++;
                return true;
            } else {
                addStatus(`⚠ ID ${id}: Input not found`, 'warning');
                failedCount++;
                return false;
            }
            
        } catch (error) {
            addStatus(`❌ ID ${id}: Error - ${error.message}`, 'error');
            failedCount++;
            return false;
        }
    }
    
    // Process file
    async function processFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const text = e.target.result;
                const ids = extractIDs(text);
                
                if (ids.length === 0) {
                    addStatus(`⚠ ${file.name}: No IDs found`, 'warning');
                } else {
                    addStatus(`📄 ${file.name}: Found ${ids.length} IDs`, 'info');
                    foundCount += ids.length;
                    
                    // Check each checkbox with a small delay
                    ids.forEach((id, index) => {
                        setTimeout(() => {
                            checkCheckbox(id);
                            if (index === ids.length - 1) {
                                updateStats();
                            }
                        }, index * 100); // 100ms delay between each
                    });
                }
                
                resolve();
            };
            
            reader.onerror = () => {
                addStatus(`❌ ${file.name}: Failed to read`, 'error');
                reject();
            };
            
            reader.readAsText(file);
        });
    }
    
    // Handle files
    async function handleFiles(files) {
        // Reset counters
        foundCount = 0;
        checkedCount = 0;
        failedCount = 0;
        statusDiv.innerHTML = '';
        
        addStatus(`🚀 Processing ${files.length} file(s)...`, 'info');
        
        for (const file of files) {
            if (file.name.endsWith('.txt')) {
                await processFile(file);
            } else {
                addStatus(`⚠ ${file.name}: Not a TXT file`, 'warning');
            }
        }
        
        updateStats();
        addStatus(`✅ Processing complete!`, 'success');
    }
    
    // Drag and drop events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(255,255,255,0.2)';
        dropZone.style.borderColor = 'rgba(255,255,255,0.8)';
    });
    
    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(255,255,255,0.1)';
        dropZone.style.borderColor = 'rgba(255,255,255,0.5)';
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(255,255,255,0.1)';
        dropZone.style.borderColor = 'rgba(255,255,255,0.5)';
        
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    });
    
    // Click to browse
    dropZone.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        handleFiles(files);
        fileInput.value = ''; // Reset input
    });
    
    // Close button
    closeBtn.addEventListener('click', () => {
        overlay.remove();
    });
    
    addStatus('👋 Ready! Drop TXT files or click to upload', 'info');
    
    console.log('✅ Checkbox Automation overlay loaded!');
    console.log('📝 Drop TXT files with format: HH:MM:SS - ID - Name');
})();

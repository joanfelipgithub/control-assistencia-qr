// Check if we're on the correct URL
if (window.location.href === 'https://insscf.clickedu.eu/gestio/transport_passar_llista.php') {
    
    // Get current date
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear());
    
    console.log(`Using current date: ${day}/${month}/${year}`);
    
    // Fill in the date fields
    const fillDateFields = () => {
        // Start date fields
        const diaIniciInput = document.querySelector('input[name="dia_inici"]');
        const mesIniciInput = document.querySelector('input[name="mes_inici"]');
        const anyIniciInput = document.querySelector('input[name="any_inici"]');
        
        // End date fields
        const diaFinalInput = document.querySelector('input[name="dia_final"]');
        const mesFinalInput = document.querySelector('input[name="mes_final"]');
        const anyFinalInput = document.querySelector('input[name="any_final"]');
        
        // Fill start date with current date
        if (diaIniciInput) {
            diaIniciInput.value = day;
            diaIniciInput.dispatchEvent(new Event('input', { bubbles: true }));
            diaIniciInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (mesIniciInput) {
            mesIniciInput.value = month;
            mesIniciInput.dispatchEvent(new Event('input', { bubbles: true }));
            mesIniciInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (anyIniciInput) {
            anyIniciInput.value = year;
            anyIniciInput.dispatchEvent(new Event('input', { bubbles: true }));
            anyIniciInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        
        // Fill end date with current date
        if (diaFinalInput) {
            diaFinalInput.value = day;
            diaFinalInput.dispatchEvent(new Event('input', { bubbles: true }));
            diaFinalInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (mesFinalInput) {
            mesFinalInput.value = month;
            mesFinalInput.dispatchEvent(new Event('input', { bubbles: true }));
            mesFinalInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (anyFinalInput) {
            anyFinalInput.value = year;
            anyFinalInput.dispatchEvent(new Event('input', { bubbles: true }));
            anyFinalInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        
        console.log(`Date fields filled: ${day}/${month}/${year}`);
    };
    
    // Function to click custom checkbox div
    const clickCustomCheckbox = (checkboxName) => {
        // Find the input element
        const input = document.querySelector(`input[name="${checkboxName}"]`);
        if (!input) {
            console.warn(`Input ${checkboxName} not found`);
            return false;
        }
        
        // Find the parent container and then the clickedu_checkbox_img div
        const container = input.closest('div');
        if (!container) {
            console.warn(`Container for ${checkboxName} not found`);
            return false;
        }
        
        // Find the div with class containing 'clickedu_checkbox_img'
        const checkboxDiv = container.querySelector('div.clickedu_checkbox_img');
        if (!checkboxDiv) {
            console.warn(`Checkbox div for ${checkboxName} not found`);
            return false;
        }
        
        // Check if it's already checked
        if (checkboxDiv.classList.contains('checked')) {
            console.log(`${checkboxName} is already checked`);
            return true;
        }
        
        // Simulate mouse click on the div
        const mousedownEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0
        });
        
        const mouseupEvent = new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0
        });
        
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0
        });
        
        checkboxDiv.dispatchEvent(mousedownEvent);
        checkboxDiv.dispatchEvent(mouseupEvent);
        checkboxDiv.dispatchEvent(clickEvent);
        
        // Manually update classes and input if the click handler doesn't work
        setTimeout(() => {
            if (!checkboxDiv.classList.contains('checked')) {
                checkboxDiv.classList.remove('unchecked');
                checkboxDiv.classList.add('checked');
                input.checked = true;
                input.setAttribute('checked', 'checked');
                input.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }, 50);
        
        return true;
    };
    
    // Function to click submit button
    // Inside your clickSubmitButton function, add these two lines:
    const clickSubmitButton = () => {
        const submitButton = document.querySelector('button[type="submit"]');
        if (!submitButton) return false;

        // Force the form to stay in the current window
        const form = submitButton.closest('form');
        if (form) form.target = '_self'; 

        // Trigger the click
        submitButton.click(); 
        return true;
    };
    
    // Fill dates first
    fillDateFields();
    
    // Wait a bit before selecting options
    setTimeout(() => {
        // Get the select element
        const selectElement = document.evaluate(
            '/html/body/div[3]/div/div/form/table[1]/tbody/tr[1]/td[2]/select',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        
        if (selectElement) {
            // Enable multiple selection if needed
            selectElement.setAttribute('multiple', 'multiple');
            
            // Click each option with a small delay
            const options = Array.from(selectElement.options);
            let index = 0;
            
            const clickNext = () => {
                if (index < options.length) {
                    const option = options[index];
                    
                    // Simulate mouse events
                    const mousedownEvent = new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        button: 0
                    });
                    
                    const mouseupEvent = new MouseEvent('mouseup', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        button: 0
                    });
                    
                    const clickEvent = new MouseEvent('click', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        button: 0
                    });
                    
                    // Dispatch events in order
                    option.dispatchEvent(mousedownEvent);
                    option.dispatchEvent(mouseupEvent);
                    option.dispatchEvent(clickEvent);
                    
                    // Select the option
                    option.selected = true;
                    
                    console.log(`Clicked option ${index + 1}/${options.length}: ${option.textContent}`);
                    
                    index++;
                    setTimeout(clickNext, 50);
                } else {
                    // Trigger change event after all clicks
                    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                    console.log('All options selected!');
                    
                    // Now click all the custom checkboxes
                    setTimeout(() => {
                        // Check mati
                        if (clickCustomCheckbox('mati')) {
                            console.log('Clicked: mati checkbox');
                        }
                        
                        setTimeout(() => {
                            // Check tarda
                            if (clickCustomCheckbox('tarda')) {
                                console.log('Clicked: tarda checkbox');
                            }
                            
                            setTimeout(() => {
                                // Check avisos_consergeria
                                if (clickCustomCheckbox('avisos_consergeria')) {
                                    console.log('Clicked: avisos_consergeria checkbox');
                                }
                                
                                setTimeout(() => {
                                    // Check info_ruta_parada
                                    if (clickCustomCheckbox('info_ruta_parada')) {
                                        console.log('Clicked: info_ruta_parada checkbox');
                                    }
                                    
                                    // Finally, click the submit button
                                    setTimeout(() => {
                                        clickSubmitButton();
                                        console.log('Script completed! Form submitted.');
                                    }, 200);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 300);
                }
            };
            
            clickNext();
        } else {
            console.error('Select element not found at the specified XPath');
        }
    }, 500);
    
} else {
    console.warn('This script should only run on the specified URL');
}
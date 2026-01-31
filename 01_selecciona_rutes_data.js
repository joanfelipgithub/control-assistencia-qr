// Check if we're on the correct URL
if (window.location.href === 'https://insscf.clickedu.eu/gestio/transport_passar_llista.php') {
    
    // --- MODIFIED SECTION: Today + 2 Days ---
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); 
    
    const day = String(targetDate.getDate()).padStart(2, '0');
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const year = String(targetDate.getFullYear());
    // ---------------------------------------
    
    console.log(`Using target date: ${day}/${month}/${year}`);
    
    // Fill in the date fields
    const fillDateFields = () => {
        const diaIniciInput = document.querySelector('input[name="dia_inici"]');
        const mesIniciInput = document.querySelector('input[name="mes_inici"]');
        const anyIniciInput = document.querySelector('input[name="any_inici"]');
        
        const diaFinalInput = document.querySelector('input[name="dia_final"]');
        const mesFinalInput = document.querySelector('input[name="mes_final"]');
        const anyFinalInput = document.querySelector('input[name="any_final"]');
        
        if (diaIniciInput) {
            diaIniciInput.value = day;
            diaIniciInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (mesIniciInput) {
            mesIniciInput.value = month;
            mesIniciInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (anyIniciInput) {
            anyIniciInput.value = year;
            anyIniciInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        
        if (diaFinalInput) {
            diaFinalInput.value = day;
            diaFinalInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (mesFinalInput) {
            mesFinalInput.value = month;
            mesFinalInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (anyFinalInput) {
            anyFinalInput.value = year;
            anyFinalInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        
        console.log(`Date fields filled with +2 days: ${day}/${month}/${year}`);
    };

    const clickCustomCheckbox = (checkboxName) => {
        const input = document.querySelector(`input[name="${checkboxName}"]`);
        if (!input) return false;
        const container = input.closest('div');
        const checkboxDiv = container ? container.querySelector('div.clickedu_checkbox_img') : null;
        
        if (checkboxDiv && !checkboxDiv.classList.contains('checked')) {
            checkboxDiv.click();
        }
        return true;
    };

    const clickSubmitButton = () => {
        const submitButton = document.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.click();
            console.log('Submit button clicked!');
            return true;
        }
        return false;
    };

    fillDateFields();

    setTimeout(() => {
        const selectElement = document.evaluate(
            '/html/body/div[3]/div/div/form/table[1]/tbody/tr[1]/td[2]/select',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        ).singleNodeValue;

        if (selectElement) {
            selectElement.setAttribute('multiple', 'multiple');
            const options = Array.from(selectElement.options);
            options.forEach(opt => opt.selected = true);
            selectElement.dispatchEvent(new Event('change', { bubbles: true }));

            setTimeout(() => {
                clickCustomCheckbox('mati');
                setTimeout(() => {
                    clickCustomCheckbox('tarda');
                    setTimeout(() => {
                        clickCustomCheckbox('avisos_consergeria');
                        setTimeout(() => {
                            clickCustomCheckbox('info_ruta_parada');
                            setTimeout(() => {
                                clickSubmitButton();
                            }, 200);
                        }, 100);
                    }, 100);
                }, 100);
            }, 300);
        }
    }, 500);

    
} else {
    console.warn('This script should only run on the specified URL');
}
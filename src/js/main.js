document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');
    const cardNumberDisplay = document.querySelector('.card-number-display');

    let previousLength = 0;
    const TOTAL_LENGTH = 16;

    cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let currentLength = value.length;
        
        // Format input field with spaces
        let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
        e.target.value = formattedValue;

        // Create display value
        let displayValue = '';
        
        if (value.length === 0) {
            cardNumberDisplay.textContent = '';
            return;
        }

        for (let i = 0; i < TOTAL_LENGTH; i += 4) {
            if (i > 0) displayValue += ' ';
            
            let group = '';
            for (let j = 0; j < 4; j++) {
                const digitIndex = i + j;
                if (digitIndex < value.length) {
                    if (digitIndex < 12) {
                        // First 12 digits: show number then convert to star
                        if (digitIndex === currentLength - 1) {
                            group += value[digitIndex];
                        } else {
                            group += '•';
                        }
                    } else {
                        // Last 4 digits: always show numbers
                        group += value[digitIndex];
                    }
                }
            }
            displayValue += group;
        }

        // Animate the transition from number to star for first 12 digits
        if (currentLength > previousLength && currentLength <= 12) {
            setTimeout(() => {
                cardNumberInput.dispatchEvent(new Event('input'));
            }, 500);
        }

        previousLength = currentLength;
        cardNumberDisplay.textContent = displayValue;
    });

    // Prevent non-numeric input
    cardNumberInput.addEventListener('keypress', (e) => {
        if (!/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    });

    const cardHolderInput = document.getElementById('card-holder');
    const expiryInput = document.getElementById('expiry-date');
    
    const cardHolderDisplay = document.querySelector('.holder-name');
    const expiryDisplay = document.querySelector('.expiry');

    // Update cardholder name
    cardHolderInput.addEventListener('input', (e) => {
        let value = e.target.value.toUpperCase();
        cardHolderDisplay.textContent = value || 'FULL NAME';
    });

    // Format and update expiry date
    expiryInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
        expiryDisplay.textContent = value || 'MM/YY';
    });

    expiryInput.addEventListener('keypress', (e) => {
        if (!/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    });
});
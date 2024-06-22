const priceElements = {
    basic: document.getElementById("basic"),
    professional: document.getElementById("professional"),
    premium: document.getElementById("premium")
};

const currencySelector = document.getElementById("currency-selector");

// in EUR
const basePrices = {
    basic: 0,
    professional: 25,
    premium: 60
};

const urlApi = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

async function updateCurrency() {
    try {
        const response = await fetch(urlApi);
        const rates = await response.json();

        const currencyMap = {
            EUR: rates.eur.eur,
            USD: rates.eur.usd,
            GBP: rates.eur.gbp
        };

        const selectedCurrency = currencySelector.value;
        const rate = currencyMap[selectedCurrency];

        // Actualizar precios
        for (const key in priceElements) {
            const price = basePrices[key] * rate;
            priceElements[key].textContent = formatCurrency(price, selectedCurrency);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Formatear precio basado en la moneda
function formatCurrency(amount, currency) {
    const symbols = {
        EUR: '€',
        USD: '$',
        GBP: '£'
    };
    return `${symbols[currency]}${Math.round(amount)}`;
}
currencySelector.addEventListener('change', updateCurrency);

updateCurrency();

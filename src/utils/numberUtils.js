export const sanitizeNumberInput = (value) => {
    var res = value.replace(/[^\d]/g, '');
    return res / 100;
};

// Convert string to number safely
export const parseNumber = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
};

// Format number with commas
export const formatNumberWithCommas = (value) => {
    if (typeof value !== 'number') return '';
    return value.toLocaleString();
};

export const formatUSD = (amount) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);

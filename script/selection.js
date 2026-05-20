const colorPairs = [
    { bg: 'oklch(0.68 0.14 86.78)', text: 'oklch(0.95 0.056 86.387)' },
    { bg: 'oklch(0.55 0.14 186.74)', text: 'oklch(0.98 0.02 186.74)' },
    { bg: 'oklch(0.55 0.16 349.76)', text: 'oklch(0.95 0.03 349.76)' },
    { bg: 'oklch(0.52 0.14 294.83)', text: 'oklch(0.92 0.04 294.83)' },
    { bg: 'oklch(0.60 0.14 121.21)', text: 'oklch(0.95 0.156 121.211)' },
    { bg: 'oklch(0.52 0.12 254.58)', text: 'oklch(0.95 0.02 254.58)' },
    { bg: 'oklch(0.55 0.16 27.88)', text: 'oklch(0.96 0.03 27.88)' },
    { bg: 'oklch(0.62 0.14 47.37)', text: 'oklch(0.95 0.023 47.766)' }
];

let lastIndex = -1;

document.addEventListener('mousedown', () => {
    let index;
    do {
        index = Math.floor(Math.random() * colorPairs.length);
    } while (index === lastIndex);
    
    lastIndex = index;
    const root = document.documentElement;
    root.style.setProperty('--selection-bg', colorPairs[index].bg);
    root.style.setProperty('--selection-color', colorPairs[index].text);
});
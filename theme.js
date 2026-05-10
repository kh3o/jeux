const themeRegistry = {
    matrix: {
        '--bg': '#000000',
        '--surface': '#050505',
        '--text': '#00FF41',
        '--accent': '#00FF41',
        '--accent-soft': 'rgba(0, 255, 65, 0.15)',
        '--border': '#00FF41',
        '--secondary': '#003300',
        '--hole-bg': '#003300',
        '--mole-bg': '#00FF41',
        '--canvas-bg': '#050505',
        '--button-bg': 'rgba(0, 255, 65, 0.08)',
        '--button-hover': 'rgba(0, 255, 65, 0.18)'
    },
    twilight: {
        '--bg': '#000b18',
        '--surface': '#05112b',
        '--text': '#4fd4ff',
        '--accent': '#4fd4ff',
        '--accent-soft': 'rgba(79, 212, 255, 0.15)',
        '--border': '#4fd4ff',
        '--secondary': '#07203c',
        '--hole-bg': '#07203c',
        '--mole-bg': '#4fd4ff',
        '--canvas-bg': '#041127',
        '--button-bg': 'rgba(79, 212, 255, 0.08)',
        '--button-hover': 'rgba(79, 212, 255, 0.18)'
    }
};

function applyTheme(themeName) {
    const theme = themeRegistry[themeName] || themeRegistry.matrix;
    for (const key in theme) {
        document.documentElement.style.setProperty(key, theme[key]);
    }
}

function randomTheme() {
    const names = Object.keys(themeRegistry);
    const current = getCurrentTheme();
    let randomName = names[Math.floor(Math.random() * names.length)];
    if (names.length > 1 && randomName === current) {
        const currentIndex = names.indexOf(current);
        randomName = names[(currentIndex + 1) % names.length];
    }
    applyTheme(randomName);
    localStorage.setItem('theme', randomName);
    return randomName;
}

function nextTheme() {
    const names = Object.keys(themeRegistry);
    const current = getCurrentTheme();
    const index = names.indexOf(current);
    const nextName = names[(index + 1) % names.length];
    applyTheme(nextName);
    localStorage.setItem('theme', nextName);
    return nextName;
}

function setTheme(themeName) {
    if (themeRegistry[themeName]) {
        localStorage.setItem('theme', themeName);
        applyTheme(themeName);
    }
}

function getCurrentTheme() {
    return localStorage.getItem('theme') || 'matrix';
}

window.gameTheme = {
    applyTheme,
    randomTheme,
    nextTheme,
    setTheme,
    getCurrentTheme,
    themes: themeRegistry
};

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getCurrentTheme());
});

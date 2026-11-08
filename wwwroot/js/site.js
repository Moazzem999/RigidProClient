/**
 * Rigid Pro Limited - Global Application Controller (site.js)
 * -------------------------------------------------------------------
 * Global application interactions, theme switcher, and persistence.
 */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Dark Mode / Light Mode Theme Controller & Persistence
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            try {
                localStorage.setItem('zamzam_theme', newTheme);
            } catch (e) {
                console.warn('Unable to persist theme to localStorage', e);
            }
        });
    }

    // Initialize saved theme if available
    try {
        const savedTheme = localStorage.getItem('zamzam_theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-bs-theme', savedTheme);
        }
    } catch (e) {
        // LocalStorage access restricted or unavailable
    }
});

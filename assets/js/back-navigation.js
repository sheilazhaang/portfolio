document.addEventListener('DOMContentLoaded', function () {
    var pageName = window.location.pathname.split('/').pop();

    document.querySelectorAll('.navbar a[href="#work"]').forEach(function (link) {
        link.setAttribute('href', 'index.html#work');
    });

    var currentSection = pageName === 'about.html' ? 'About Me' : 'Projects';
    document.querySelectorAll('.navbar a').forEach(function (link) {
        if (link.textContent.trim() === currentSection) {
            link.setAttribute('aria-current', 'page');
        }
    });

    if (!pageName || pageName === 'index.html') return;

    var backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.className = 'site-back-button';
    backButton.setAttribute('aria-label', 'Go back to the previous page');
    backButton.innerHTML = '<span aria-hidden="true">←</span>';

    backButton.addEventListener('click', function () {
        var cameFromThisSite = document.referrer && new URL(document.referrer).origin === window.location.origin;
        if (cameFromThisSite && window.history.length > 1) window.history.back();
        else window.location.href = 'index.html';
    });

    document.body.appendChild(backButton);
});

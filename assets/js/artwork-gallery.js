document.addEventListener('DOMContentLoaded', function () {
    var dialog = document.querySelector('.artwork-lightbox');
    if (!dialog || typeof dialog.showModal !== 'function') return;

    var expandedImage = dialog.querySelector('img');
    var closeButton = dialog.querySelector('.artwork-lightbox-close');

    document.querySelectorAll('[data-artwork-src]').forEach(function (artwork) {
        artwork.addEventListener('click', function () {
            var thumbnail = artwork.querySelector('img');
            expandedImage.src = artwork.dataset.artworkSrc;
            expandedImage.alt = thumbnail ? thumbnail.alt : 'Expanded artwork';
            dialog.showModal();
        });
    });

    closeButton.addEventListener('click', function () {
        dialog.close();
    });

    dialog.addEventListener('click', function (event) {
        if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', function () {
        expandedImage.src = '';
        expandedImage.alt = '';
    });
});

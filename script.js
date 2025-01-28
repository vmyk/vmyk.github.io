let ellipsesShown = false;

function toggleSmallerEllipses() {
    const ellipses = ['ellipse1', 'ellipse2', 'ellipse3', 'ellipse4', 'ellipse5', 'ellipse6'];
    const distance = 300;
    ellipses.forEach((id, index) => {
        const ellipse = document.getElementById(id);
        if (ellipsesShown) {
            ellipse.style.left = '50%';
            ellipse.style.top = '50%';
        } else {
            if (index === 0) {
                ellipse.style.left = `calc(50% + ${distance}px)`;
            } else if (index === 1) {
                ellipse.style.left = `calc(50% + ${2 * distance}px)`;
            } else if (index === 2) {
                ellipse.style.left = `calc(50% - ${distance}px)`;
            } else if (index === 3) {
                ellipse.style.left = `calc(50% - ${2 * distance}px)`;
            } else if (index === 4) {
                ellipse.style.top = `calc(50% - ${distance}px)`;
            } else if (index === 5) {
                ellipse.style.top = `calc(50% + ${distance}px)`;
            }
        }
        ellipse.style.opacity = '1';
    });
    ellipsesShown = !ellipsesShown;
}

document.addEventListener('DOMContentLoaded', () => {
    const ellipses = ['ellipse1', 'ellipse2', 'ellipse3', 'ellipse4', 'ellipse5', 'ellipse6'];
    ellipses.forEach(id => {
        const ellipse = document.getElementById(id);
        ellipse.style.left = '50%';
        ellipse.style.top = '50%';
        ellipse.style.opacity = '0';
        ellipse.style.display = 'block';
        setTimeout(() => {
            ellipse.style.transition = 'opacity 0.5s ease, left 0.5s ease, top 0.5s ease';
        }, 10);
    });
});
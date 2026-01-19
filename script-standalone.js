function redirectToCheckout() {
    window.location.href = 'https://pay.cakto.com.br/8n6d3dd_731498';
}

function calculateDaysToCarnaval() {
    const carnavalDate = new Date('2026-02-17');
    const today = new Date();
    const diffTime = carnavalDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

document.addEventListener('DOMContentLoaded', function() {
    const daysElement = document.getElementById('days-countdown');
    if (daysElement) {
        const days = calculateDaysToCarnaval();
        daysElement.textContent = days;
    }
});

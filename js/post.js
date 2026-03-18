function openModal() {
    const modal = document.getElementById('modal-backdrop');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal-backdrop');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
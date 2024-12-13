function openGift() {
    const gift = document.querySelector('.presente');
    const texto = document.querySelector('.texto');
    gift.classList.add('opened');
    texto.style.opacity = '0';
    texto.style.visibilty = 'hidden'

    // Após o presente crescer, muda o fundo para vermelho
    setTimeout(() => {
        document.body.classList.add('red-background');
        gift.style.display = 'none';

        const content = document.querySelector('.blog');
        content.classList.remove('hidden');
        content.classList.add('active');
        content.classList.add('relative');
    }, 1500); // Espera o presente "crescer"
}

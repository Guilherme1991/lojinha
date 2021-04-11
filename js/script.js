let carrinho = document.querySelector('.fas')
let sub = document.querySelector('ul.sub')

carrinho.classList.add('fa-angle-down')
carrinho.addEventListener('mouseover', function(){
    this.classList.add('fa-angle-up')
    sub.classList.add('active')
})
carrinho.addEventListener('mouseout', function(){
    this.classList.remove('fa-angle-up')
    sub.classList.remove('active')
})
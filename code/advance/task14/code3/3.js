var products = [
	{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}
];



$('.cards').on('mouseenter', '.cover', function(event) {
    $(event.target).addClass('hover');
});

$('.cards').on('mouseleave', '.cover', function(event) {
    $(event.target).removeClass('hover');
});

$('.wraper > a').on('click', function(event) {
    event.preventDefault();
    let cardsRow = $('<div class="cards-row"></div>');
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let card = $('<div class="card"></div>');
        let cover = $('<div class="cover"><a class="btn" href="">立即抢购</a></div>');
        let a = $("<a href='#'></a>");
        let img= $("<img src=" + product.img + ">");
        let prodName = $('<div class="prod-name">' + product.name + '</div>');
        let prodPrice = $('<div class="prod-price">' + product.price + '</div>')
        a.append(img);
        a.append(prodName);
        a.append(prodPrice);
        card.append(cover);
        card.append(a);
        cardsRow.append(card);
    }
    $('.cards').append(cardsRow);
    // console.log($('cards')[0]);
});

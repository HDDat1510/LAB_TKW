// JS XỬ LÝ ĐÓNG MỞ GIỎ HÀNG
const openCartBtn = document.getElementById('openCartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');

// Hàm mở giỏ hàng
openCartBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Ngăn chặn load lại trang khi bấm thẻ a
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
});

// Hàm đóng giỏ hàng
function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

// Đóng khi bấm nút X
closeCartBtn.addEventListener('click', closeCart);

// Đóng khi bấm ra ngoài lớp phủ (Overlay)
cartOverlay.addEventListener('click', closeCart);
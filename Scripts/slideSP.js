const track = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Chiều rộng mỗi lần cuộn = chiều rộng item (280) + gap (20)
const scrollAmount = 300; 
let autoScroll;

// Hàm cuộn tự động
function startAutoScroll() {
  autoScroll = setInterval(() => {
    // Nếu đã cuộn đến cuối, quay về đầu
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
        track.scrollLeft = 0;
    } else {
        track.scrollLeft += scrollAmount;
    }
  }, 3000); // 3 giây cuộn 1 lần
}

// Hàm reset khi người dùng bấm nút
function resetTimer() {
  clearInterval(autoScroll);
  startAutoScroll();
}

nextBtn.onclick = () => {
  track.scrollLeft += scrollAmount;
  
  // Kiểm tra nếu đang ở cuối thì quay về đầu (tạo cảm giác lặp)
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
     setTimeout(() => { track.scrollLeft = 0; }, 500);
  }
  
  resetTimer();
};

prevBtn.onclick = () => {
  track.scrollLeft -= scrollAmount;
  
  // Kiểm tra nếu đang ở đầu thì quay về cuối
  if (track.scrollLeft <= 0) {
     setTimeout(() => { track.scrollLeft = track.scrollWidth; }, 500);
  }
  
  resetTimer();
};

// Bắt đầu chạy ngay khi tải trang
startAutoScroll();
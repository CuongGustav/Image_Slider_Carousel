// Lấy phần tử div chứa icon navbar và phần tử header
const menuIcon = document.querySelector('.header__icon--mobile');
const header = document.querySelector('header');

// Lắng nghe sự kiện click vào icon
menuIcon.addEventListener('click', () => {
    // Thêm hoặc xóa class .nav-active để hiển thị hoặc ẩn các liên kết
    header.classList.toggle('nav-active');
});
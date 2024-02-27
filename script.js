// jquery 增加轮播图效果
$(document).ready(function() {
    const imagePaths = [
        'pic1.jpeg',
        'pic2.png',
        'pic3.png',
        'pic4.png'
    ];

    const $container = $('.scroll-container');
    const $carouselDots = $('.carousel-dots');

    // Dynamically load images into the carousel
    imagePaths.forEach((imagePath, index) => {
        const $imageDiv = $('<div>').addClass('carousel-image').css({
            // width: index === 0 ? '100%' : '100%',
            width:'100%',
            height: '538px'
        });

        const $img = $('<img>').attr('src', imagePath).attr('alt', `Image ${index + 1}`).css({
            width: '100%', // Ensure the image fits its container
            height: '100%'
        });

        $imageDiv.append($img);
        $container.append($imageDiv);

        const $dot = $('<span>').addClass('dot').attr('data-index', index);
        $carouselDots.append($dot);
    });

    // Implementing carousel functionality
    let currentIndex = 0;

    function updateCarousel(index) {
        currentIndex = index !== undefined ? index : currentIndex;
        $('.carousel-image').hide().eq(currentIndex).show(); // Show the current image
        $('.dot').removeClass('active').eq(currentIndex).addClass('active'); // Highlight the current dot
    }

    $('.dot').click(function() {
        const index = $(this).data('index');
        updateCarousel(index);
    });

    // setInterval(updateCarousel, 3000);
     // Automatically advance the carousel every 3 seconds
     setInterval(() => {
        const nextIndex = (currentIndex + 1) % imagePaths.length;
        updateCarousel(nextIndex);
    }, 3000);

    updateCarousel(0); // Initialize carousel

    // Optional: Implement next and prev button functionality
  

    // Initially update the carousel to display the first image
    // updateCarousel();
});


// $(document).ready(function() {
//     const imagePaths = [
//         'pic1.jpeg',
//         'pic2.png',
//         'pic3.png',
//         'pic4.png'
//     ];

//     const $container = $('.scroll-container');
//     const $carouselDots = $('.carousel-dots');

//     let carouselWidth = $container.width(); // Dynamically calculate container width
//     let angle = 0;
//     const depth = 300; // Depth of the 3D effect
//     let theta = 360 / imagePaths.length; // Divide the circle equally for each image

//     // Dynamically load images into the carousel
//     imagePaths.forEach((imagePath, index) => {
//         const $imageDiv = $('<div>').addClass('carousel-image').css({
//             transform: `rotateY(${index * theta}deg) translateZ(${depth}px)`, // Position each image in 3D space
//         });

//         const $img = $('<img>').attr('src', imagePath).attr('alt', `Image ${index + 1}`).css({
//             width: '100%', // Ensure the image fits its container
//             height: 'auto'
//         });

//         $imageDiv.append($img);
//         $container.append($imageDiv);

//         const $dot = $('<span>').addClass('dot').attr('data-index', index);
//         $carouselDots.append($dot);
//     });

//     // Adjust the carousel container to enable 3D perspective
//     $container.css({
//         perspective: '1000px',
//         transformStyle: 'preserve-3d'
//     });

//     function updateCarousel() {
//         angle = (angle + theta) % 360;
//         $container.css('transform', `rotateY(${angle}deg)`);
//     }

//     // Rotate carousel every 3 seconds
//     setInterval(updateCarousel, 3000);

//     $('.dot').click(function() {
//         const index = $(this).data('index');
//         angle = -index * theta;
//         $container.css('transform', `rotateY(${angle}deg)`);
//     });

//     // Initialize carousel
//     updateCarousel();
// });



// 添加按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    // const container = document.querySelector('.scroll-container');
    // const imagePaths = [
    //     'pic1.jpeg',
    //     'pic2.png',
    //     'pic3.png',
    //     'pic4.png'
    // ];

    // // Loop through image paths and create image elements
    // imagePaths.forEach((imagePath, index) => {
    //     const imageDiv = document.createElement('div');
    //     imageDiv.classList.add('black-image');
    //     imageDiv.style.width = index === 0 ? '1273px' : '307px';
    //     imageDiv.style.height = '538px';

    //     const img = document.createElement('img');
    //     img.src = imagePath; // Set the image source
    //     img.alt = `Image ${index + 1}`; // Set alt text
    //     img.style.width = '100%'; // Make the image fit the div
    //     img.style.height = '100%';

    //     // Append the image to the div
    //     imageDiv.appendChild(img);

    //     // Append the div to the container
    //     container.appendChild(imageDiv);
    // });

    const button = document.querySelector('.button-icon a');

    // Add an event listener for the 'click' event
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor action
        alert('Button clicked!');
        // Add your logic for what should happen when the button is clicked
    });

    const chatHistoryList = document.querySelector('.chat-history');

    for (let i = 1; i <= 50; i++) {
        const listItem = document.createElement('li');

        // Create an anchor tag
        const anchor = document.createElement('a');
        anchor.href = "javascript:void(0);"; // Use a JavaScript void(0) to prevent page reload
        anchor.textContent = `Chat history item test full ${i}`;
        
        // Optional: Add a click event listener to the anchor
        anchor.addEventListener('click', function() {
            console.log(`Item ${i} clicked`);
            alert('Items clicked!');
            // Add your click handling logic here
        });

        // Append the anchor to the list item
        listItem.appendChild(anchor);

        // Append the list item to the chat history list
        chatHistoryList.appendChild(listItem);
    }
});



// 输入框点击事件
document.addEventListener('DOMContentLoaded', function() {
    const inputBarImages = document.querySelectorAll('.input-bar-image');

    // Assuming the first three images are the buttons
    if (inputBarImages.length >= 3) {
        inputBarImages[0].addEventListener('click', function() {
            alert('First image button clicked');
        });

        inputBarImages[1].addEventListener('click', function() {
            alert('Second image button clicked');
        });

        inputBarImages[2].addEventListener('click', function() {
            alert('Third image button clicked');
        });
    }
});

// 点击左上角图标跳转到主页
document.addEventListener('DOMContentLoaded', function() {

    // Select the image by its ID
    var haloIcon = document.getElementById('haloIcon');
            
    // Add a click event listener to the image
    haloIcon.addEventListener('click', function() {
        // Redirect the user to www.baidu.com when the image is clicked
        window.location.href = 'https://www.baidu.com';
    });
});



// 动态调整black-sider右侧元素的相对位置
document.addEventListener("DOMContentLoaded", function() {

    // 根据相对位置确定元素位置，依次距离10px的间隔
    function updateInputBarPosition() {
        var carouselRect = document.querySelector('.image-carousel').getBoundingClientRect();
        var inputBar = document.querySelector('.input-bar');
      
        var topPosition = carouselRect.bottom + window.scrollY + 30; // 10px below the carousel, adjusted for scrolling
        inputBar.style.top = topPosition + 'px';

        var purpleButton = document.querySelector('.button-container');
        var purplePosition = topPosition + inputBar.offsetHeight + 10; // Add the height of inputBar to its top position to find the bottom, then add 10px
        purpleButton.style.top = purplePosition + 'px';
        // purpleButton.style.position = 'absolute';

        var yelloRect = document.querySelector('.yellow-rectangle');
        var yellowPosition = purplePosition + purpleButton.offsetHeight + 15;
        yelloRect.style.top = yellowPosition + 'px';
    }

    updateInputBarPosition();
    window.addEventListener('resize',updateInputBarPosition);
    window.addEventListener('scroll', updateInputBarPosition);

    // 当input-bar中输入换行时动态调整input-bar的大小
    const textarea = document.querySelector('.message-input');
    textarea.addEventListener('input', autoResize, false);
    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        // 确保不会由于input-bar大小变换发生遮挡
        updateInputBarPosition();
    }
});


//添加轮播图
// $(document).ready(function(){
//     var currentIndex = 0;
//     var images = $('.carousel-images img'); // 确保这里的选择器匹配你的HTML结构
//     var imageWidth = 600; // 根据实际图片宽度设置
//     var totalImages = images.length; // 自动根据图片数量设置

//     function switchImage(newIndex) {
//       var newLeft = -newIndex * imageWidth; // 计算新位置
//       $('.carousel-images').animate({left: newLeft}, 500); // 这里不需要修改，直接在.js文件中如此使用
//       currentIndex = newIndex;
//     }

//     $('.next').click(function(){
//       if (currentIndex < totalImages - 1) {
//         switchImage(currentIndex + 1);
//       } else {
//         switchImage(0); // 无缝切换回第一张
//       }
//     });

//     $('.prev').click(function(){
//       if (currentIndex > 0) {
//         switchImage(currentIndex - 1);
//       } else {
//         switchImage(totalImages - 1); // 无缝切换到最后一张
//       }
//     });

//     setInterval(function() { // 自动轮播
//       $('.next').click();
//     }, 3000);
// });

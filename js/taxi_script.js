// page data
const data = {

    img: {
        profile_pic: "img/profilePic/1.png",
        header_bg: "img/background/pexels-daniel-absi-952670.jpg",
        payment_icon: "img/icon/payment_icon.png",
        vcard: "img/vcard.png",
    },
    payment: [
        {
            text: "",
            icon: "img/payment/vietcom.png",
        },
        {
            text: "",
            icon: "img/payment/techcom.png",
        },
        {
            text: "",
            icon: "img/payment/momo.png",
        },
       
    ],
    social: [
        {
            text: "Liên hệ Zalo",
            link: "https://zalo.me/leanh153",
            icon: "img/icon/z.png",
            style: "color: rgb(50,114,224);",
        },
        {
            text: "Liên hệ Messenger",
            link: "https://www.messenger.com/t/100003818532953/",
            icon: "img/icon/m.png",
            style: "color: rgb(50,114,224);",

        },
        {
            text: "Follow trên Tiktok",
            link: "https://www.tiktok.com/@leanh1503",
            icon: "img/icon/t.png",
            style: "color: rgb(255,255,255);",

        },
        {
            text: "Đăng ký Youtube",
            link: "",
            icon: "img/icon/y.png",
            style: "color: rgb(234,51,35);",

        },
        
        {
            text: "Đăng ký Youtube",
            link: "",
            icon: "img/icon/f.png",
            style: "color: rgb(234,51,35);",

        },
    
    ]

}

// Thêm dữ liệu hình ảnh cho trang
$('.profile-pic').attr('src', data.img.profile_pic);
$('.jumbotron').attr('style', 'background-image: url(' + data.img.header_bg + ')');


// Thay đổi giá trị trong html có class là payment
for (let i = 0; i < data.payment.length; i++) {
    $('#payment-content').append('<div class="col-12">'
        + '<div class="card">'
        + '<div class="card-body ">'
        + '<img src="' + data.payment[i].icon + '" class="card-img-top rounded" alt="">'
    )
};
// Thêm thành phần nút mạng xã hội trong html
for (let i = 0; i < data.social.length; i++) {
    $('#social-buttons').append('<span class=" fa-stack social-bg fa-2x" >'
    +'<a class=" stretched-link" target="_blank" href="'+data.social[i].link +'"></a>'
    +'<img class="icon-img" src="'+data.social[i].icon+'" alt="" srcset=""></span>'
    )
};
// Payment
$('#payment-content').toggle();
$('#payment-box').on('click', function () {
    $('#payment-content').toggle();
});
$('.payment-button').on('click', function () {
    $('#payment-content').toggle();
});

// Navibar custom
$('.nav-item').on('click', function(){
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
})
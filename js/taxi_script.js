// page data
const data = {

    img: {
        profile_pic: "img/profilePic/1.png",
        header_bg: "img/background/pexels-daniel-absi-952670.jpg",
        page_bg: "img/background/pexels-fwstudio-12973.jpg",
        payment_icon: "img/icon/payment_icon.png",
    },
    payment: [
        {
            text: "",
            icon: "img/payment/momo.png",
        },
        {
            text: "",
            icon: "img/payment/vietcom.png",
        },
        {
            text: "",
            icon: "img/payment/techcom.png",
        },
       
    ],
    contact: [
        {
            text: "Liên hệ Zalo",
            link: "https://zalo.me/leanh153",
            icon: "img/icon/z.png"

        },
        {
            text: "Liên hệ Messenger",
            link: "https://www.messenger.com/t/100003818532953/",
            icon: "img/icon/m.png"

        },
        {
            text: "Follow trên Tiktok",
            link: "https://www.tiktok.com/@leanh1503",
            icon: "img/icon/t.png"

        },
        {
            text: "Đăng ký Youtube",
            link: "",
            icon: "img/icon/y.png"

        },
        {
            text: "Quét mã để lưu danh bạ",
            link: "",
            icon: "img/vcard.png"

        },
    ]

}

// Thêm dữ liệu hình ảnh cho trang
$('.jumbotron').attr('style', 'background-image: url(' + data.img.header_bg + ')');
$('body').attr('style', 'background-image: url(' + data.img.page_bg + ')');
$('#payment-button').attr('style', 'background-image: url('+ data.img.payment_icon +')');
$('.profile-pic').attr('src', data.img.profile_pic);


// Thay đổi giá trị trong html có class là contact
for (let i = 0; i < data.contact.length; i++) {
    $('.contact').append('<div class="col-md-4 col-sm-6 col-6">'
        + '<div class="card pulse-on-hover">'
        + '<div class="card-body ">'
        + '<a href="' + data.contact[i].link + '" class="link-info" target="_blank">'
        + '<img src="' + data.contact[i].icon + '" class="card-img-top rounded" alt="">'
        + '<h5 class="card-title">' + data.contact[i].text + '</h5> </a> </div></div></div>'
    )
};

// Thay đổi giá trị trong html có class là payment
for (let i = 0; i < data.payment.length; i++) {
    $('#payment-content').append('<div class="col-12">'
        + '<div class="card">'
        + '<div class="card-body ">'
        + '<img src="' + data.payment[i].icon + '" class="card-img-top rounded" alt="">'
    )
};
// Payment
$('#payment-content').toggle();
$('#payment-box').on('click', function () {
    $('#payment-content').toggle();
});


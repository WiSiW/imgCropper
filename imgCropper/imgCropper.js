cropper();
function cropper(){
    $('.img-left > img').cropper({
        aspectRatio: 1 / 1,
        preview: '.img-preview',
        crop: function(data) {
            // Output the result data for cropping image.
        }
    });
}
function chooseImg () {
    $(".img-slide-upload").css("display","block")
}
function closeModal () {
    $(".img-slide-upload").css("display","none")
}

function submitImg () {
    if (!$('#image_file').val()) {
        alert("«Î—°‘ÒÕº∆¨", 2);
        return;
    }
    var result = $('#cropper_image').cropper('getCroppedCanvas').toDataURL();
    result = result.split(",")[1];
    var base64 = result.length;
    Util.ajax({
        method: "POST",
        data: {
            attachment: result,
            type: that.type
        },
        url: Util.getApiUrl("")
    }, function (data) {
        closeModal();
    });
}
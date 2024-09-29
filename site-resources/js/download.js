/**
 * 使用ID选择器获取 <select> 元素，并绑定change事件
 */
$('#DownloadType').change(function () {
    updateDownloadLink()
});

/**
 * 更改下载链接
 */
function updateDownloadLink() {
    // 使用.val()获取选中的<option>的value值
    let selectedValue = $('#DownloadType').val();
    // 使用选中的值
    $('#DownloadButton').attr('onclick', `window.open('${selectedValue}')`);
}

updateDownloadLink()
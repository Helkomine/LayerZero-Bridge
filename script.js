document.getElementById('input').addEventListener('input', function() {
    const inputAmount = parseFloat(this.value);

    if (!isNaN(inputAmount) && inputAmount > 0) {
        // Giả sử tỷ lệ chuyển đổi giữa input và output là 1:2
        const outputAmount = inputAmount * 10; // Tỉ lệ 2x (có thể thay đổi theo yêu cầu thực tế)

        // Cập nhật giá trị output
        document.getElementById('output').value = outputAmount.toFixed(2);
    } else {
        document.getElementById('output').value = '';
    }
});

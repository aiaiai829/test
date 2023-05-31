// 获取所有答案的div元素
const answers = document.querySelectorAll('.answer');

// 为每个答案添加点击事件监听器
answers.forEach((answer, index) => {
	answer.addEventListener('click', () => {
		// 获取所有提示的div元素
		const explanations = document.querySelectorAll('.explanation');

		// 隐藏所有提示
		explanations.forEach(explanation => {
			explanation.style.display = 'none';
		});

		// 显示被点击答案下方的提示
		const explanation = document.querySelectorAll('.explanation')[index];
		explanation.style.display = 'block';

		// 取消之前选中的答案的高亮效果
		const selected = document.querySelector('.selected');
		if (selected) {
			selected.classList.remove('selected');
		}

		// 高亮选中的答案
		answer.classList.add('selected');
	});
});
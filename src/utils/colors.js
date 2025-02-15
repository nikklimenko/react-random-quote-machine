export const colors = [
	'#2F3C7E',
	'#101820',
	'#F96167',
	'#990011',
	'#8AAAE5',
	'#2C5F2D',
	'#97BC62',
	'#1E2761',
	'#408EC6',
	'#7A2048',
]

export function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}

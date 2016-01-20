var gradient = tinygradient('red', 'green', 'blue');

$(document).ready(function () {
	$('body').scrollspy({
		target: '#spyNavBar',
		offset: 70
	});

	//make .blocks elements equal heights
	equalheight = function (container) {

		var currentTallest = 0,
			currentRowStart = 0,
			rowDivs = new Array(),
			$el,
			topPosition = 0;
		$(container).each(function () {

			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}

	$(window).load(function () {
		equalheight('.duties-item');
	});


	$(window).resize(function () {
		equalheight('.duties-item');
	});

	var skillSet = [
		{
			text: 'Java',
			weight: '70'
		},
		{
			text: 'JavaScript',
			weight: '65'
		},
		{
			text: 'Node.JS',
			weight: '75'
		},
		{
			text: 'Spreadsheets',
			weight: '70'
		},
		{
			text: 'MySQL',
			weight: '55'
		},
		{
			text: 'HTML/CSS',
			weight: '85'
		},
		{
			text: 'Twitter Bootstrap',
			weight: '50'
		},
		{
			text: 'Bash',
			weight: '60'
		},
		{
			text: 'JQuery',
			weight: '65'
		},
		{
			text: 'Circuit Analysis',
			weight: '63'
		}, {
			text: 'Arabic',
			weight: '75'
		}, {
			text: 'Angular JS',
			weight: '40'
		},
		{
			text: '',
			weight: '0'
		},
		{
			text: '',
			weight: '100'
		}
	];

	var toolSet = [
		{
			text: 'Matlab',
			weight: '4'
		}, {
			text: 'Microsoft Office',
			weight: '8'
		}, {
			text: 'AWS',
			weight: '2'
		}, {
			text: 'PSPICE',
			weight: '3'
		}, {
			text: 'MySQL Workbench',
			weight: '6'
		}, {
			text: 'Wolfram Alpha',
			weight: '7'
		}, {
			text: 'Google',
			weight: '9'
		}, {
			text: 'Sublime Text 3',
			weight: '7'
		}, {
			text: 'Brackets',
			weight: '5'
		}, {
			text: 'Linux',
			weight: '6'
		},
		{
			text: '',
			weight: '0'
		},
		{
			text: '',
			weight: '10'
		}
	];

	$('#skillCloud').jQCloud(skillSet, {
		shape: 'elliptic',
		autoResize: true,
		center: {
			x: 0.5,
			y: 0.5
		},
		colors: gradient.css('radial', 'farthest-corner circle at bottom right')
	});

	$('#toolCloud').jQCloud(toolSet, {
		shape: 'elliptic',
		autoResize: true,
		center: {
			x: 0.5,
			y: 0.5
		},
		color: gradient.hsv(100, 'long')
	});
});

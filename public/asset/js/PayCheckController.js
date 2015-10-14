var PayCheckController = {
	
	init: function() {
		PayCheckController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			PayCheckController.calculateBMI(form);
			event.preventDefault();
		});
	},
	
	calculateBMI: function(form) {
		var 
			salary = parseFloat($('#salary').val()),
			result = [0,0,0]
		
		var callback = function(result) {
			PayCheckController.showResult(result);			
		};
		
		PayCheckService.getSalary(salary, callback);
	},
	
	showResult: function(result) {
		var INSSResult = document.querySelector('.INSS');
		INSSResult.innerHTML = result[0];
		var IRPFResult = document.querySelector('.IRPF');
		IRPFResult.innerHTML = result[1];
		var liquidResult = document.querySelector('.liquid');
		liquidResult.innerHTML = result[2];
	}
};

//initialization
PayCheckController.init();
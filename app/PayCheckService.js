
var PayCheckService = {

	getSalary: function(salary) {
		var INSS = 0;
		var IRPF = 0;
		var result = [0,0,0]

		if(typeof(salary) === 'number') {

			// CALCULATE INSS
			if(salary <= 1399.12) {
				INSS = salary * 0.08;
			}
			else if (salary <= 2331.88) {
				INSS = salary * 0.09;
			}
			else if(salary <= 4663.75) {
				INSS = salary * 0.11;
			}
			else {
				INSS = salary - 513,02;
			}

			salary -= INSS;

			//CALCULATE IRPF
			if(salary > 1903.98 && salary <= 2.826,65) {
				IRPF = salary * 0.075;
				IRPF -=142.80;
			}
			else if (salary <= 3751.05) {
				IRPF = salary * 0.15;
				IRPF -=354.80;
			}
			else if(salary <= 4664.68) {
				IRPF = salary * 0.225;
				IRPF -=636.13;
			}
			else {
				IRPF = salary * 0.255;
				IRPF -=869.36;
			}

			salary -= IRPF;

			result[0]=INSS;
			result[1]=IRPF;
			result[2]=salary;

			return result;
		}

		return null;
}
	
};

module.exports = PayCheckService;
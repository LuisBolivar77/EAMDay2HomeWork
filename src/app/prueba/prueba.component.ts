import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pruebatag',
	templateUrl: './prueba.component.html',
	styleUrls: [ './prueba.component.css' ]
})
export class PruebaComponent implements OnInit {
	variable = 'hola';

	constructor() {
		// this.variable = variable;
	}

	// setVariable(variable) {
	// 	this.variable = variable;
	// }

	ngOnInit() {}
}

"use strict"

	let matrix =[
		[5000,10000,20000], /* 0 строка*/
		[1,		2,		3], /* 1 строка*/
	];

	let matrixTwo =[
			[2000,3000,5000],
			[2,3,1],
	];

	let matrixThree =[
			[5000,10000,20000],
			[1,3,4],
	];
	let sait;
	let verstka;
	let style

class User {

	

  constructor(name) {
    this.name = name;
  }

  AskSait() {
   	sait = prompt('Какой тип сайта вы хотите? 0-Визитка 1-Комерческий 2-Интернет-магазин');
  	if (sait > 2) {
  		alert( 'Вы выбрали не существующий вариант!' );
  		this.AskSait();
  	}
  }

  AskVerstka(){
	verstka = prompt('Какой вид верстки сайта вы хотите? 0-Обычная 1-Адаптивная 2-На Bootstrap');
	if (verstka > 2) {
  		alert( 'Вы выбрали не существующий вариант!' );
  		this.AskVerstka();
  	}
  }

  AskStyle(){
  	style = prompt('Какой стиль сайта вы хотите? 0-Шаблонный 1-Уникальный 2-С паралакс-эффектом');
  	if (style > 2) {
  		alert( 'Вы выбрали не существующий вариант!' );
  		this.AskStyle();
  	}
  }

  	Enter(){
		console.log(matrix[0][sait], matrixTwo[0][verstka], matrixThree[0][style]);
		console.log('Стоимость сайта:' + (matrix[0][sait] + matrixTwo[0][verstka] + matrixThree[0][style]) + 'руб');

		console.log(matrix[1][sait], matrixTwo[1][verstka], matrixThree[1][style]);
		console.log('Срок сдачи:' + (matrix[1][sait] + matrixTwo[1][verstka] + matrixThree[1][style]) + 'д');
		alert('Стоимость сайта:' + (matrix[0][sait] + matrixTwo[0][verstka] + matrixThree[0][style]) + 'руб\n' + 'Срок сдачи:' + (matrix[1][sait] + matrixTwo[1][verstka] + matrixThree[1][style]) + 'д')
	}


}
var user = new User("");
user.AskSait();
user.AskVerstka();
user.AskStyle();
user.Enter();















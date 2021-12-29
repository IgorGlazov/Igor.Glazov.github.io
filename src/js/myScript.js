"use strict"

	let matrix =[
		[5000,10000,20000],  
		[1,		2,		3],  
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



$('#js-button-result').click(function(){
	var sait = $('#select-type').val();
	var verstka = $('#select-desigen').val();
	var style = $('#select-adaptive').val();
	
	$('#js2-result').html('Стоимость: '+ (matrix[0][sait] + matrixTwo[0][verstka] + matrixThree[0][style]) + 'руб');
	$('#js1-result').html('Сроки: ' + (matrix[1][sait] + matrixTwo[1][verstka] + matrixThree[1][style]) + 'д');

});






$('a[href^="#"').click(function(){
	let valHref = $(this).attr("href");
	$('html,body').animate({scrollTop: $(valHref).offset().top - 20 + "px"});
});



	let options = {threshold: [0.5]};
	  let observer = new IntersectionObserver (onEntry, options);
	  let elements = $('.element-animation');
	  elements.each((i,el) => {
	  	observer.observe(el);
	  }); 

function onEntry (entry){
	entry.forEach(change =>{
		if (change.isIntersecting){
			change.target.classlist.add('show-animation')
		}
	});
}

$(document).ready(function() {
	$('.image-link').magnificPopup({type:'image'});
});


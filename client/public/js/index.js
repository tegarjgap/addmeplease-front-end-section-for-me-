$(document).ready(function(){
	$('#SIGNUP').click(function(){
		let Email = $('#email').val();
		let Nama = $('#nama').val();
		let Pass = $('#password-field').val();

		var datauser = ('email = ' + Email + ' nama = ' + Nama + ' pass = ' + Pass);
		var cek = false;

		if(Email && Nama && Pass){
			insertData(datauser);
		}else{
			alert('you must fill')
		}

		// if(cek){
		// 	redirect(datauser)
		// }

		function insertData(datauser){
			$.ajax({
				type: 'POST',
				url: 'http://localhost:2121/masukinuser',
				data: datauser,
				success: function(data){
					alert(data);
					console.log(datauser);
				},
				error: function(){
					alert('gagal')
				}
			});
			console.log(datauser);
			// return cek = true;
		}

		// function redirect(datauser){
		// 	$.ajax({
		// 		type: 'POST',
		// 		url: 'http://localhost:12345/profile',
		// 		data: datauser,
		// 		success: function(newData){
		// 			console.log(datauser);
		// 		},
		// 		error: function(){
		// 			alert('gagal coi')
		// 		}
		// 	});
		// 	window.location.replace("http://localhost:12345/profile")
		// }

	})
});
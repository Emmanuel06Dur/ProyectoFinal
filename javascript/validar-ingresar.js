$('#IntentarIngresar').submit(function(e)
{
	e.preventDefault();
	var usuario=$.trim($("#usuario-ini").val());
	var password=$.trim($("#contraseña-ini").val());

	if(usuario.length=="" || password=="")
	{
		Swal.fire({
			type:'warning',
			title:'Debe ingresar un usuario y/o contraseña',
		});
		return false;
	}
	else
	{
		$.ajax({
			url:"bd/login.php",
			type:"POST",
			datatype: "json",
			data: {usuario:usuario, password:password},
			success:function(data) 
			{
				if(data=="null")
				{
					Swal.fire({
						type:'error',
						title:'Usuario y/o contraseña incorrecto',
					});
				}
				else
				{
					Swal.fire({
						allowOutsideClick: false,
						type:'success',
						title:'¡Ingreso exitoso!',
						confirmButtonColor:'#3085D6',
						confirmButtonText:'OK'
					}).then((result)=>{
						if(result.value)
						{
							window.location.href="panelprincipal/dist.php";
						}
					})
				}
			}
		});
	}
});
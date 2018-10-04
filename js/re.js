//傻逼代码就别看了 尴尬
//傻逼代码后期不可能维护了，可维护性为0
$(document).ready(function () {
	$("#password1").click(function () {
		if ($("#user").val()) {
			var username = $("#user").val();
			$.post("ifuser.php", {
				name: username,
			},
			function (data) {
				if (data == 1) {
					$("#zhuce").show();
				}
				else {
					$("#zhuce").hide();
				}
			});
		} else {
			$("#zhuce").hide();
		}
	});
	$("#user").click(function () {
		if ($("#user").val()) {
			var username = $("#user").val();
			$.post("ifuser.php", {
				name: username,
			},
			function (data) {
				if (data == 1) {
					$("#zhuce").show();
				}
				else {
					$("#zhuce").hide();
				}
			});
		} else {
			$("#zhuce").hide();
		}
	});
	$("#password2").click(function () {
		if ($("#user").val()) {
			var username = $("#user").val();
			$.post("ifuser.php", {
				name: username,
			},
			function (data) {
				if (data == 1) {
					$("#zhuce").show();
				}
				else {
					$("#zhuce").hide();
				}
			});
		} else {
			$("#zhuce").hide();
		}
	});
	$("#email").click(function () {
		if ($("#user").val()) {
			var username = $("#user").val();
			$.post("ifuser.php", {
				name: username,
			},
			function (data) {
				if (data == 1) {
					$("#zhuce").show();
				}
				else {
					$("#zhuce").hide();
				}
			});
		} else {
			$("#zhuce").hide();
		}
	});
	$("#fuxuan").click(function () {
		if ($("#user").val()) {
			var username = $("#user").val();
			$.post("ifuser.php", {
				name: username,
			},
			function (data) {
				if (data == 1) {
					$("#zhuce").show();
				}
				else {
					$("#zhuce").hide();
				}
			});
		} else {
			$("#zhuce").hide();
		}
	});
	$("#zong").click(function () {
		if ($("#user").val()) {
			var username = $("#user").val();
			$.post("ifuser.php", {
				name: username,
			},
			function (data) {
				if (data == 1) {
					$("#zhuce").show();
				}
				else {
					$("#zhuce").hide();
				}
			});
		} else {
			$("#zhuce").hide();
		}
	});
	$("#user").click(function () {
		var key1 = $("#password1").val();
		var key2 = $("#password2").val();
		if (key1 == key2) {
			$("#second").hide();
		} else {
			$("#second").show();
		}
	});
	$("#password1").click(function () {
		var key1 = $("#password1").val();
		var key2 = $("#password2").val();
		if (key1 == key2) {
			$("#second").hide();
		} else {
			$("#second").show();
		}
	});
	$("#password2").click(function () {
		var key1 = $("#password1").val();
		var key2 = $("#password2").val();
		if (key1 == key2) {
			$("#second").hide();
		} else {
			$("#second").show();
		}

	});
	$("#email").click(function () {
		var key1 = $("#password1").val();
		var key2 = $("#password2").val();
		if (key1 == key2) {
			$("#second").hide();
		} else {
			$("#second").show();
		}

	});
	$("#fuxuan").click(function () {
		var key1 = $("#password1").val();
		var key2 = $("#password2").val();
		if (key1 == key2) {
			$("#second").hide();
		} else {
			$("#second").show();
		}
	});
	$("#zong").click(function () {
		var key1 = $("#password1").val();
		var key2 = $("#password2").val();
		if (key1 == key2) {
			$("#second").hide();
		} else {
			$("#second").show();
		}
	});
	$("#user").click(function () {
		var email=$("#email").val();
		if (email=="") {} else {
			if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
			{
				$("#reemail").show();
			}
			else
			{
				$("#reemail").hide();
			}
		}
	});
	$("#password1").click(function () {
		var email=$("#email").val();
		if (email=="") {} else {
			if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
			{
				$("#reemail").show();
			}
			else
			{
				$("#reemail").hide();
			}
		}
	});
	$("#password2").click(function () {
		var email=$("#email").val();
		if (email=="") {} else {
			if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
			{
				$("#reemail").show();
			}
			else
			{
				$("#reemail").hide();
			}
		}
	});
	$("#email").click(function () {
		var email=$("#email").val();
		if (email=="") {} else {
			if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
			{
				$("#reemail").show();
			}
			else
			{
				$("#reemail").hide();
			}
		}
	});
	$("#fuxuan").click(function () {
		var email=$("#email").val();
		if (email=="") {} else {
			if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
			{
				$("#reemail").show();
			}
			else
			{
				$("#reemail").hide();
			}
		}
	});
	$("#zong").click(function () {
		var email=$("#email").val();
		if (email=="") {} else {
			if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
			{
				$("#reemail").show();
			}
			else
			{
				$("#reemail").hide();
			}
		}
	});
	//代码分水岭---------------------------------------------------------------------------------------------------------------------
	$("#button").click(function () {
		var user = $("#user").val();
		var email = $("#email").val();
		var password1 = $("#password1").val();
		var password2 = $("#password2").val();
		var checkbox = $('#filled-in-box').is(':checked')
		if (checkbox) {
			//alert("选中");
			$("#xuanze").hide();
			if (email=="") {
				$("#mei").show();
			} else {
				$("#mei").hide();
				if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
				{
					$("#reemail").show();
				}
				else
				{
					$("#reemail").hide();
					if (user == "") {
						$("#zhucezhang").show();
					} else {
						$("#zhucezhang").hide();
						if ($("#user").val()) {
							var username = $("#user").val();
							$.post("ifuser.php", {
								name: username,
							},
							function (data) {
								if (data == 1) {
									$("#zhuce").show();
								}
								else {
									$("#zhuce").hide();
									if (password1 == "") {

										$("#meiyou").show();
									} else {
										$("#meiyou").hide();
										if (password2 == "") {
											$("#meiyou").show();
										} else {
											$("#meiyou").hide();
											if (password1 == password2) {
												$("#second").hide();
												document.getElementById("come").submit();

											} else {
												$("#second").show();
											}
											
										}
									}
									
								}
							});
						} else {
							$("#zhuce").hide();
						}

					}

				}
			}
		}
		else{
			$("#xuanze").show();
		}
	});
	//------------------------------------------------------------------------------------------------------------------------
	//以下为代码最傻逼部分之一
	$("#user").click(function () {
		var email = $("#email").val();
		if (email == "") {
		} else {
			$("#mei").hide();
		}
	});
	$("#password1").click(function () {
		var email = $("#email").val();
		if (email == "") {
		} else {
			$("#mei").hide();
		}
	});
	$("#password2").click(function () {
		var email = $("#email").val();
		if (email == "") {
		} else {
			$("#mei").hide();
		}
	});
	$("#email").click(function () {
		var email = $("#email").val();
		if (email == "") {
		} else {
			$("#mei").hide();
		}
	});
	$("#zong").click(function () {
		var email = $("#email").val();
		if (email == "") {
		} else {
			$("#mei").hide();
		}
	});
	$("#filled-in-box").click(function () {
		var email = $("#email").val();
		if (email == "") {
		} else {
			$("#mei").hide();
		}
	});
	$("#zong").click(function () {
		var user = $("#user").val();
		if (user == "") {
		} else {
			$("#zhucezhang").hide();
		}
	});
	$("#email").click(function () {
		var user = $("#user").val();
		if (user == "") {
		} else {
			$("#zhucezhang").hide();
		}
	});
	$("#password1").click(function () {
		var user = $("#user").val();
		if (user == "") {
		} else {
			$("#zhucezhang").hide();
		}
	});
	$("#password2").click(function () {
		var user = $("#user").val();
		if (user == "") {
		} else {
			$("#zhucezhang").hide();
		}
	});
	$("#user").click(function () {
		var user = $("#user").val();
		if (user == "") {
		} else {
			$("#zhucezhang").hide();
		}
	});
	$("#filled-in-box").click(function () {
		var user = $("#user").val();
		if (user == "") {
		} else {
			$("#zhucezhang").hide();
		}
	});
});

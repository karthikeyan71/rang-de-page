// JavaScript Document

$(document).ready(function()
				 {
	
	platform = [];
	games = [];
	homee = [];
	genre = [];
	whole_data="";
	//console.log($.inArray("cool1", platform));
	
	$('.searcher1').click(function()
						 {
		$(this).css("opacity","0");
		$('.input_text').addClass("input_styler");
	});
	
	$('#form_submit1').submit(function(e)
							 {
		e.preventDefault();
		$('.input_text').removeClass("input_styler");
		$('.enter_message').css("display","none");
		setTimeout(function()
				   {
		$('.searcher1').css("opacity","1");
		},420);
	});
	
	$('#form_submit2').submit(function(e)
							 {
		e.preventDefault();
		//alert("cool");
		inter=$('.inputer1').val();
		console.log(inter);
		$('.game_list').hide();
		$('.game_list:contains("'+inter+'")').show();
		
		//$('.games_zone').html("");
		/*for(i=1;i<whole_data.length;i++)
				{
					console.log(i);
					if(whole_data[i].title==inter)
						{
							console.log("came");
						}
		//$('.games_zone').append("<div class='col-md-3 col-sm-6 col-xs-6 game_list data-store='' number='"+i+"'>"+whole_data[i].title+"</div>");
				}*/	
		//$('.input_text').val("");
	});
	
	$('.input_text').focus(function()
						  {
		$('.enter_message').css("display","block");
	});
	$('.inputer1').focus(function()
						  {
		$('.enter_message2').css("display","block");
	});
	
	$('.input_text').blur(function()
						  {
		$('.enter_message').css("display","none");
	});
	$('.inputer1').blur(function()
						  {
		$('.enter_message2').css("display","none");
	});
	
	$('.load_data').click(function()
						 {
	$.ajax({
		url:"http://starlord.hackerearth.com/gamesarena",
		dataType:"json",
		success: function(data)
		{
			whole_data=data;
			
			$('.load_data').css("display","none");
			
			$('.game_holder').html("");
			for(i=1;i<data.length;i++)
				{
					
					/*key=data[i]['platform'].replace(" ","_");
					value=data[i]['platform'];
					console.log($.inArray(value, platform));
					if($.inArray(value, platform) == -1) {
						//console.log(data[i].platform);
						platform.push(data[i].platform);
    					//$("#url_key").val(key);
						$('.game_holder').append("<div class='col-md-3 child'><h2> "+data[i].platform+" </h2><hr><div class='cat_"+key+" cat'></div>");
						
					}
					$('.cat_'+key).append("<li>"+data[i].title+"</li>");*/
					
					
					key=data[i]['platform'].replace(" ","_");
					value=data[i]['platform'];
					value2=data[i]['genre'];
					//console.log($.inArray(value, platform));
					if($.inArray(value, platform) == -1) {
						//console.log(data[i].platform);
						platform.push(data[i].platform);
						
						$('#selection1').append($('<option>', {
							text: data[i].platform
						}));
						
    					//$("#url_key").val(key);
						//$('.game_holder').append("<div class='col-md-3 child'><h2> "+data[i].platform+" </h2><hr><div class='cat_"+key+" cat'></div>");
						
					}
					//key1=data[i]['genre'].replace(",","");
					valuer=data[i].title;
					
					
					if($.inArray(valuer, homee) == -1) {
						
						homee.push(data[i].title);
						$('#games').append($('<option>', {
							value: data[i].title
						}));
					}
					
					res = value2.split(",");
					console.log(res[0]);
					if($.inArray(res[0], genre) == -1)
					{
						genre.push(res[0]);
						if(res[0]!="")
						{
							$('#selection2').append($('<option>', {
								text: res[0]
							}));
						}
					}
					//$('.game_zone').append("<li>"+data[i].title+"</li>");
					$('.games_zone').append("<div class='col-md-3 col-sm-6 col-xs-6 game_list "+key+" "+res[0]+"' data-store='' number='"+i+"' score='"+data[i].score+"'>"+data[i].title+"</div>");
					
				}
			console.log(platform);
		},
		error:function()
		{
			alert("No Internet Connection");
		}
	});
	});
	
	glob_val="";
	glob_val1="";
	
	$('#selection1').change(function()
						  {
		if($(this).val()!="Select")
			{
				key=$(this).val().replace(" ","_");
				glob_val=key;
				
				$('.game_list').hide(400);
				//if(glob_val1=="")
				//$('.'+key).show(400);
				//else
				//$('.'+key).hasClass(glob_val1).show(400);
				if(glob_val1=="")
				$('.'+key).show(400);
				else
					{
				$('.game_list').hide();
				$('.'+key).show(400);
				$('.'+key).not("."+glob_val1).hide(400);	
					}
			}
		else
			{
				
				glob_val="";
				if(glob_val1=="")
				$('.game_list').show(400);
				else
					{
					$('.game_list').hide();
					$('.'+glob_val1).show(400);	
					}
				//$('.game_list').hasClass(glob_val1).show(400);
			}
	});
	
	$('#selection2').change(function()
						  {
		if($(this).val()!="Select")
			{
				
				key=$(this).val();
				glob_val1=key;
				//$('.game_list').hide(400);
				/*if(glob_val=="")
				$('.'+key).show(400);
				else
				$('.'+key).hasClass(glob_val).show(400);*/
				if(glob_val=="")
				$('.game_list').not("."+key).hide(400);
				else
				{
				$('.game_list').hide();
				$('.'+glob_val).show();
				$('.'+glob_val).not("."+key).hide(400);
				}
			}
		else
			{
				
				glob_val1="";
				if(glob_val=="")
				$('.game_list').show(400);
				else
					{
				$('.game_list').hide();
				$('.'+glob_val).show(400);
					}
			}
	});
	
	
	$('#selection3').change(function(){
		/*divs=$(".game_list");
		var numericallyOrderedDivs = divs.sort(function(a,b){
			return $(a).attr("score") > $(b).attr("score");
		});
		$(".games_zone").html(numericallyOrderedDivs);*/
		 
		if($(this).val()=="Ascending")
		{
			div=$('.game_list').sort(function (a, b) {
				var contentA =parseFloat( $(a).attr('score'));
				var contentB =parseFloat( $(b).attr('score'));
				return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
			});
			
		$(".games_zone").html(div);
		}
		else if($(this).val()=="Descending")
		{
			div=$('.game_list').sort(function (a, b) {
			  var contentA =parseFloat( $(a).attr('score'));
			  var contentB =parseFloat( $(b).attr('score'));
			  return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
		   });
			
		$(".games_zone").html(div);
		}
	});
	
	$(document).on("click",'.game_list',function()
						 {
		//alert("cool");
		$('#name').text(whole_data[$(this).attr("number")].title);
		$('#platform').text(whole_data[$(this).attr("number")].platform);
		$('#score').text(whole_data[$(this).attr("number")].score);
		$('#genre').text(whole_data[$(this).attr("number")].genre);
		
		if(whole_data[$(this).attr("number")].editors_choice=="N")
			{
				$('.imger').css("background-image","url(img/grumpy_thumbs_down.png)");
			}
		else
			{
				$('.imger').css("background-image","url(img/Clipart-thumbs-up.png)");
			}
		
		$('.display_detail').css("display","block");
		
		$('.last_text').text(whole_data[$(this).attr("number")].title+", "+whole_data[$(this).attr("number")].platform+", "+whole_data[$(this).attr("number")].score+", "+whole_data[$(this).attr("number")].genre+", "+whole_data[$(this).attr("number")].editors_choice);
	});
	
	$('.close_button').click(function()
							{
		$('.display_detail').css("display","none");
	});
	
});

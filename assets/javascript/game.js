$(document).ready(function() {
	//body

	var characters = {
		'darth':{
			name: "Darth Vader",
			healthPoints: 170,
			attackPower: 30,
			counterAttackPower: 35,
			image:"../images/Darth.jpg"
		},

		'yoda':{
			name: "Yoda",
			healthPoints: 160,
			attackPower: 40,
			counterAttackPower: 40,
			image:"../images/Yoda.jpg"
		},

		'luke' : {
			name: "Luke Skywalker",
			healthPoints: 140,
			attackPower: 30,
			counterAttackPower: 25,
			image:"../images/Luke.jpg"
		},

		'sidious' : {
			name: "Darth Sidious",
			healthPoints: 170,
			attackPower: 30,
			counterAttackPower: 40,
			image:"../images/Sidious.jpg"
		},
	}

$('#darth').find('#hp').html(characters['darth'].healthPoints);
$('#yoda').find('#hp').html(characters['yoda'].healthPoints);
$('#luke').find('#hp').html(characters['luke'].healthPoints);
$('#sidious').find('#hp').html(characters['sidious'].healthPoints);

function startGame () {

	$(this).remove().effect('blind');
	$("#player").html($(this).show('slow'));
	$("#player").children().addClass("player-character");
	$("#enemy").append($("#characters").html()).show('slow');
	$("#enemy").children().addClass("enemies");
	$("#characters").remove();
	$(".character").unbind();

	console.log($("#enemy").html());

	

	$(".enemies").on('click',startFight);

	function startFight(){

		$(this).remove().effect('blind');
		$("#defender").html($(this).show('slow'));
		console.log($("#defender").children().attr('id'));

		$("#attack").on('click',function () {

			Fight($(".player-character").attr('id'),$('#defender').children().attr('id'));
			function Fight(playerCharacter, enemyCharacter) {
				
				var battleMultiplier = characters[playerCharacter].attackPower;
				console.log("battleMultiplier=" + battleMultiplier);
				characters[enemyCharacter].healthPoints-=characters[playerCharacter].attackPower;
				console.log("enemyCharacter: " + characters[enemyCharacter].healthPoints);

				console.log($("#defender").html());

				characters[playerCharacter].healthPoints-=characters[enemyCharacter].attackPower;
				console.log("playerCharacter: " + characters[playerCharacter].healthPoints);

				console.log($("#player").html());
				characters[playerCharacter].attackPower+=battleMultiplier;

				if (characters[enemyCharacter].healthPoints <= 0) {
					alert("Enemy Defeated");
					//remove enemy and prompt for new enemy

					$('#defender').empty().effect('explode');
				}

				else if (characters[playerCharacter].healthPoints<=0){
					alert("You Lost");
					$('#player').empty().effet('explode');
				}
				
				};
			});
		}// closes start fight
	} // closes start game

$(".character").click(startGame);

});






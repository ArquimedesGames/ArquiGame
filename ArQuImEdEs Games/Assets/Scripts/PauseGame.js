#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;
var perSkin : GUISkin;

var paused : boolean;

function Start () {
	altura = 50;
	largura =150;
	
	posiX = Screen.width/2 - largura/2;
	posiY = Screen.height/2 - altura/2 + 120;

	paused = true;

}


function Update () {
if(Input.GetKeyDown(KeyCode.Escape))
{
	if(paused)
	{
		Time.timeScale = 0;
		paused = false;
	}
	else
	{
		Time.timeScale = 1;
		paused = true;
	}
  }
}
function OnGUI()
{
	GUI.skin = perSkin;
	if(!paused)
	{
		GUI.Box(Rect(0,0,Screen.width,Screen.height)," ");
		
		if(GUI.Button(Rect(posiX,posiY,largura,altura),"Continuar"))
			{
				Time.timeScale = 1;
				paused = true;
			}
		if(GUI.Button(Rect(posiX,posiY+ altura+20,largura,altura),"Volta ao Menu"))
			{
				Application.LoadLevel("Menu");
			}
	}

}
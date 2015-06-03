#pragma strict
var TexturaFade: Texture;
var Tempo: float;
var TempoFade: float;

function Start () {
}

function Update () {
	Tempo += Time.deltaTime;

}
function OnGUI(){
	GUI.color.a = Tempo/TempoFade;
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height),TexturaFade);

}

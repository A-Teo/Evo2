#pragma strict

function Start () {

}
var speed = 3;
function Update () {
	var moveH = Input.GetAxis("Horizontal")*speed*(-1);
	var moveV = Input.GetAxis("Vertical")*speed;	
	var izq = Input.GetKey('z');
	var der = Input.GetKey('x');
	//transform.position(move,0,0);
	if(izq){
		transform.Rotate(0,0,3);	
	}
	if(der){
		transform.Rotate(0,0,-3);	
	}
	//transform.Translate(moveV,moveH,0);
	//rigidbody2D.AddForce(moveV,moveH);
	//var vector = new Vector2(moveV,moveH);
	//rigidbody2D.AddForce(Vector2(moveV,moveH));
	//rigidbody2D.AddForceAtPosition(Vector2(moveV,moveH),Vector2(0,0));
	rigidbody.AddRelativeForce(moveV,moveH,0);
}
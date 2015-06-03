using UnityEngine;
using System.Collections;

public class ColetarItens : MonoBehaviour {
	public 

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnTriggerEnter2D(Collider2D other) 
	{
		if (other.gameObject.CompareTag ("Coletaveis")) 
		{

			other.gameObject.SetActive(false);
			//Destroy(other.gameObject);
			Debug.Log("Objeto colidiu");
		}
	}
}

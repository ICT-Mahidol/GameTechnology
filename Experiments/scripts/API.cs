﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class API : MonoBehaviour
{
    private const string URL = "www.google.ca";
    public Text responseText;

    public void Request()
    {
        WWW request = new WWW(URL);
        StartCoroutine(OnReponse(request)); 

    }
    private IEnumerator OnReponse(WWW req)
    {
        yield return req;
        responseText.text = req.text;
   
    }
}

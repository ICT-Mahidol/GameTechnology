using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;

public class Convert : MonoBehaviour
{
    string path = "D:/TestCode/map1_2x2.json";
    string textString;

    void Start()
    {
        textString = File.ReadAllText(path);
        Debug.Log(textString);
        MapData mapData = JsonUtility.FromJson<MapData>(textString);
        string mData = JsonUtility.ToJson(mapData, true);
        Debug.Log(mData);
    }
}

[System.Serializable]
public class MapData
{
    public string id;
    public int[] position;
    public string properties;
    public int[] parameters;
}

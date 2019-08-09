﻿using UnityEngine;
using UnityEngine.AI;
using UnityStandardAssets.Characters.ThirdPerson;

public class PlayerController : MonoBehaviour
{
    public Camera cam;

    public NavMeshAgent agent;

    public ThirdPersonCharacter character;

    void Start()
    {
        agent.updateRotation = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            //main camera
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            //custom camera
            //Ray ray = cam.ScreenPointToRay(Input.mousePosition);

            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                agent.SetDestination(hit.point);
            }
        }

        if(agent.remainingDistance > agent.stoppingDistance)
        {
            character.Move(agent.desiredVelocity, false, false);
        }
        else
        {
            character.Move(Vector3.zero, false, false);
        }
        
    }
}
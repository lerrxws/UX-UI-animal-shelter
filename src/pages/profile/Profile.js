import React from 'react'
import { useParams } from 'react-router-dom'
import { pets } from "../../constants/index";

const Profile = () => {
  const {id} = useParams();
  console.log(id);
  const pet = pets.find((pet) => pet.id === id);



  return (
    <div><p>Profile: {pet.name}</p>

    </div>
  )
}

export default Profile
import React from "react";
function MoodDisplay({mood}){
    const moods = {
        happy : "Thambi siri😁 katha Karma is Boomarang", depress:"?😎therika vitan vantualae😶‍🌫️ adi adi😎?",hungry:"Thunu Thungu🍖",Angry:"BackShot iruku di😑"

    };
    return(
    <div>
        {mood?<p>{moods[mood]}</p>:<p><b>Select your mood by clicking the button</b></p>}
    </div>
    )
}
export default MoodDisplay;
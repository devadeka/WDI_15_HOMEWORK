import React from 'react'
import './PasswordInput.scss'

export default function StrengthBar({strength=0, maxStrength=5}){

  const calcPercntageValue = (value, maxValue) => {
    if (value<0){
      return "0%";
    }

    var percentage = parseInt(value*100/maxValue);
    
    percentage = Math.min(
                    Math.max(
                          percentage,
                        0),
                      100);
    return percentage
  }

  const getPercentageString = () => {
    return `${calcPercntageValue(strength,maxStrength)}%`
  }

  const getBarColor = () => {
    var percentage = calcPercntageValue(strength,maxStrength);
    console.log(percentage);
    if(percentage<=20){
      return "weak"
    }
    else if(percentage>60){
      return "good"
    }
    else{
      return "ok"
    }
  }

  return (<div className = "bar-container">
            <div 
              className = {`bar ${getBarColor()}`} 
              style={{
                      width:getPercentageString(),
                    }}>
                      </div>
          </div> )

}

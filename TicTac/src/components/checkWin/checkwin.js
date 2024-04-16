const checkWin = () => {
    if (data[0] === data[1] && data[1]===data[2] && data[2]!=="")
    {
    won(data[2])
    }
    else if (data[3] === data[4] && data[4]=== data[5] && data[5]!=="") 
    {
        won(data[5])
    }
    else if (data[6] === data[7] && data[7]=== data[8] && data[8]!=="") 
    {
        won(data[8])
    }
    else if (data[0] === data[3] && data[3]=== data[6] && data[6]!=="") 
    {
        won(data[6])
    }
    else if (data[1] === data[4] && data[4]=== data[7] && data[7]!=="") 
    {
        won(data[7])
    }     
    else if (data[2] === data[5] && data[5]=== data[8] && data[8]!=="") 
    {
        won(data[8])
    } 
    else if (data[0] === data[4] && data[4]=== data[8] && data[8]!=="") 
    {
        won(data[8])
    }                
    else if (data[0] === data[1] && data[1]=== data[2] && data[2]!=="") 
    {
        won(data[2])
    }                
    else if (data[2] === data[4] && data[4]=== data[6] && data[6]!=="") 
    {
        won(data[6])
    }           
}

const won = (winner) => {
    setLock(true)
    if (winner === "x")
    {titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> wins `}
    else {
        titleRef.current.innerHTML =  `Congratulations: <img src=${circle_icon}> wins `
    }   
}

export default checkWin
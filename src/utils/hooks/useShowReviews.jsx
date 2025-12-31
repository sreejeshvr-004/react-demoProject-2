import { useState } from "react";

const useShowReviews = (showReviews)=>{
    
const [showReviews,setShowReviews]=useState(false)

const handleClick =()=>{
    setShowReviews(!showReviews)
}
return handleClick
}

export default useShowReviews
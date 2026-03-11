"use client";

import { useEffect,useState } from "react";

export default function NotificationBell(){

const [alerts,setAlerts] = useState<any[]>([]);

useEffect(()=>{

fetch("/api/reviewer/notifications")
.then(res=>res.json())
.then(setAlerts);

},[]);

return(

<div style={{position:"relative"}}>

🔔

{alerts.length > 0 && (

<span style={{
position:"absolute",
top:-5,
right:-5,
background:"red",
color:"#fff",
borderRadius:"50%",
padding:"2px 6px",
fontSize:12
}}>
{alerts.length}
</span>

)}

</div>

);

}
"use client";

import CaseAgingChart from "./CaseAgingChart";

export default function MinistryDashboard(){

return(

<div style={{
marginTop:50,
padding:30,
background:"#fff",
borderRadius:10
}}>

<h2>Justice System Analytics</h2>

<p>Case Processing Trends</p>

<CaseAgingChart/>

</div>

);

}
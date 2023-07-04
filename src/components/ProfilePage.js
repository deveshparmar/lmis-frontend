// import React, { useEffect, useState } from "react";
// import ResponsiveAppBar from './ResponsiveAppBar';

// export function ProfilePage(){

//     const [labData, setLabData] = useState({labId: "", labName: "", name: "",email: "",});
//     const host = "https://lmis-backend.onrender.com";
//     const email = localStorage.getItem("email");
//     console.log(email)

//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(host + "/getUser/"+email,{
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//         },
//       });
//         const data = await response.json();
//         if (data.success) {
//           setLabData(data.user);
//         } else {
//           console.log(data.message);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     useEffect(() => {
//         fetchUserData();
//       }, []);
    
//     return(
//         <>
//         <ResponsiveAppBar/>
//         <center><h1>Profile</h1></center>
//         <center>
//         <Card variant="outlined" sx={{ width: 300 }}>
//         <CardOverflow>
//           <AspectRatio ratio="1">
//             <img
//               src="https://img.uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/laboratory-test-icon.svg"
//               srcSet="https://img.uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/laboratory-test-icon.svg"
//               loading="lazy"
//               alt=""
//             />
//           </AspectRatio>
//         </CardOverflow>
//         <CardContent>
//           <Typography level="h2" fontSize="md">
//             {labData.name}
//           </Typography>
//           <Typography level="body2" sx={{ mt: 0.5 }}>
//             {labData.email}
//           </Typography>
//         </CardContent>
//         <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
//           <Divider inset="context" />
//           <CardContent orientation="horizontal">
//             <Typography level="body3" fontWeight="md" textColor="text.secondary">
//               Lab Id : {labData.labId}
//             </Typography>
//             <Divider orientation="vertical" />
//             <Typography level="body3" fontWeight="md" textColor="text.secondary" >
//               Lab Name : {labData.labName}
//             </Typography>
//           </CardContent>
//         </CardOverflow>
//       </Card>
//       </center>
//       </>
//     )
// }
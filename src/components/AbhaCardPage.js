import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import SvgExtractor from "./SvgExtractor";


export function AbhaCardPage() {
  const host = "https://lmis-backend.onrender.com";
  const navigate = useNavigate();
  const [image, setImage] = React.useState(null);


  const handleSubmit = async () => {
    await fetch(host + "/get-abha-card", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        const image_data = data.image_data;
        // console.log(data);

        const byteCharacters = atob(image_data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        let imageBlob = new Blob([byteArray], { type: 'image/svg' });
        setImage(URL.createObjectURL(imageBlob));
        // alert("Abha get successful");
      } else {
        console.log(res);
        alert("Error: " + res.statusText);
      }
    });
  };



  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "abha-card.svg";
    link.click();
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    await fetch(host + "/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      if (res.status === 200) {
        // setImage(null);
        alert("Logout successful");
        navigate('/home');
      } else {
        console.log(res);
        alert("Error: " + res.statusText);
      }
    });
  };
  React.useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <center>
        <h1>ABHA Card</h1>
      </center>
      <center>
       
           
              <SvgExtractor id="abha-card-svg" fileBlob={image} />
           
         
        {image && (
          <Button
            type="button"
            small="true"
            variant="contained"
            sx={{ mt: 3, mb: 2,ml:2,mr:2 }}
            onClick={handleDownload}
          >
            Print
          </Button>
        )}
        <Button type="submit"
            small="true"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogout}>Logout</Button>
      </center>
    </>
  );
}

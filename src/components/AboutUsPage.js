import ResponsiveAppBar from "./ResponsiveAppBar";
import { Typography, List, ListItem, ListItemText } from "@mui/material";



export function AboutUs() {
  
  return (
    <>
      <ResponsiveAppBar />
      <center>
        <h1>About Us</h1>

        <div>
          <Typography variant="body1" gutterBottom>
            Welcome to our LIMS Software!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our software is a comprehensive Laboratory Information Management
            System designed to streamline and automate various laboratory
            processes. We take pride in providing a user-friendly interface and
            powerful features to enhance the efficiency of your lab operations.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Key Features
          </Typography>

          <List>
            <ListItem>
              <ListItemText primary="Sample Management: Efficiently manage samples from collection to analysis." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Result Tracking: Keep track of test results and generate comprehensive reports." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Inventory Management: Monitor and manage laboratory supplies and reagents." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instrument Integration: Seamlessly integrate with laboratory instruments for automated data capture." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quality Control: Implement quality control measures and track performance." />
            </ListItem>
          </List>

          <Typography variant="h5" gutterBottom>
            Integration with ABDM
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our LIMS Software is fully integrated with ABDM, the government's
            initiative for Making Patient Medical Records Digital. This
            integration allows seamless sharing of patient data between
            healthcare providers, ensuring accurate and up-to-date information
            is accessible when needed. By leveraging ABDM, our software ensures
            compliance with government regulations and facilitates better
            coordination among healthcare stakeholders.
          </Typography>
          <Typography variant="body1" gutterBottom>
            With our LIMS Software's integration with ABDM, you can easily
            access patient medical records, share test results, and collaborate
            with healthcare professionals to deliver superior patient care.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Experience the benefits of our LIMS Software and its ABDM
            integration today! Contact us to learn more or schedule a demo.
          </Typography>
        </div>
      </center>
    </>
  );
}

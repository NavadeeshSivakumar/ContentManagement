// import React from "react";
// import { Layout, Space } from "antd";
// import Header from "./LandingPage/Header";
// import Sidepanel from "./LandingPage/Sidepanel";
// import Home from "./Home";
// const { Footer, Sider, Content } = Layout;
// const headerStyle = {
//   textAlign: "center",
//   color: "#fff",
//   height: 100,
//   paddingInline: 50,
//   lineHeight: "64px",
//   backgroundColor: "#7dbcea",
//   width: "100%",
//   position: "fixed",
// };
// const contentStyle = {
//   marginTop: "81px",
//   textAlign: "center",
//   minHeight: 120,
//   lineHeight: "120px",
//   color: "#fff",
//   height: "600px",
// //   backgroundColor: "#108ee9",
//   overFlowY: "scroll",
//   display: "flex",
// };
// const siderStyle = {
//   marginTop: "100px",
//   textAlign: "center",
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#3ba0e9",
// };
// const footerStyle = {
//   textAlign: "center",
//   color: "#fff",
//   backgroundColor: "#7dbcea",
//   height: "90px",
// };
// const Home2 = () => (
//   <div>
//     <Layout style={{ height: "100%", width: "100%" }}>
//       <Header style={headerStyle} />
//       <Layout hasSider>
//         <Sider style={siderStyle}>
//           <Sidepanel />
//         </Sider>
//         <Content style={contentStyle}>
//           <Home />
//         </Content>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>
//   </div>
// );
// export default Home2;

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// import AdminHome from "./AdminHome";
// import UncontrolledExample from "../Carousel";
// import MediaCard from "../CardBox";
import Header from "./Header";
import Home from "./Home";

const drawerWidth = 240;

export default function Home2() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: "0%" }}
        >
          <Header />
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["Home", "My Posts"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["Settings", "Help & FAQ", "About Us", "Contact Us"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Box>
      <div
        style={{
          marginLeft: "17%",
          marginTop: "2%",
          position: "static",
          display: "flex",
          marginBottom: "5px",
        }}
      >
        <Home />
      </div>
    </div>
  );
}

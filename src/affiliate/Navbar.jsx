import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";

export default function HorizontalList() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/affiliate"; // redirect to homepage or login
  };

  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/">
            <Home />
          </ListItemButton>
        </ListItem>

        <ListDivider />

        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/affiliate">
            Products
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/request-product">
            Request Product
          </ListItemButton>
        </ListItem>

        {isAdmin && (
          <>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component="a" href="/admin">
                Add Product
              </ListItemButton>
            </ListItem>

            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="/delete-products"
              >
                Delete Products
              </ListItemButton>
            </ListItem>

            <ListItem role="none">
              <ListItemButton role="menuitem" onClick={handleLogout}>
                Logout
              </ListItemButton>
            </ListItem>
          </>
        )}

        {!isAdmin && (
          <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
            <ListItemButton role="menuitem" component="a" href="/login">
              <Person />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );
}

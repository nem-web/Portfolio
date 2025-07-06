import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function DeleteProductCard({ product, onDelete }) {
  const { id, image, name, price, category, platform } = product;

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "products", id));
      if (onDelete) onDelete(id);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={image}
            srcSet={image}
            loading="lazy"
            alt={name || "Product Image"}
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Typography level="body-xs" sx={{ mb: 1 }}>
          {category} | {platform}
        </Typography>

        <Typography level="title-md" sx={{ fontWeight: "md" }}>
          {name}
        </Typography>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              ₹{price}
            </Chip>
          }
        />
      </CardContent>

      <CardOverflow>
        <Button variant="solid" color="danger" size="lg" onClick={handleDelete}>
          Delete
        </Button>
      </CardOverflow>
    </Card>
  );
}

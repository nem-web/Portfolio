import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function ProductCard({ product }) {
  const { image, name, price, category, platform, url } = product;

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

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: "md" }}
        >
          {name}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          ₹ {price}
        </Typography>
      </CardContent>

      <CardOverflow>
        <Button
          variant="solid"
          color="danger"
          size="lg"
          onClick={() => window.open(url, "_blank")}
        >
          Buy Now
        </Button>
      </CardOverflow>
    </Card>
  );
}

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import {
  boxCss,
  cardContentCss,
  cardCss,
  cardMediaCss,
} from "../css/contactcard";

function ContactCard() {
  return (
    <Card sx={cardCss}>
      <Box sx={boxCss}>
        <CardContent sx={cardContentCss}>
          <Box flexGrow={1} />
          <Typography component="div" variant="h4">
            Cornelius Oswald Fudge,
          </Typography>
          <Typography component="div" variant="h5">
            Ministry of Magic Headquarters,
          </Typography>
          <Typography variant="subtitle1" component="div">
            Underground of Whitehall and the HM Treasury building,
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>London,</strong>
            <br />
            <strong>Great Britain</strong>
          </Typography>
          <Box flexGrow={1} />
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={cardMediaCss}
        image="cornelius.png"
        alt="Image of Cornelius Oswald Fudge"
      />
    </Card>
  );
}

export default ContactCard;

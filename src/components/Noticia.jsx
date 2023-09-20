import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`imagen de noticia sobre ${title}`}
            image={urlToImage}
            height={"258"}
          />
        )}
      </Card>

      <CardContent>
        <Typography variant="body1" color="error">
          {source.name}
        </Typography>

        <Typography variant="h5" component='div'>
          {title}
        </Typography>

        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
                <Link
                href={url}
                target='_blank'
                variant="button"
                color='error'
                width='100%'
                textAlign='center'
                >Leer Noticia</Link>

      </CardActions>
    </Grid>
  );
};

export default Noticia;

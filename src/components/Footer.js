import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "7%",
    width: "80%",
    paddingBottom: "5px",
    flexGrow: 1
  },
  paper0: {
    display: "flex",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1789&q=80" +
      ")",
    backgroundSize: "cover",
    width: "350px",
    height: "180px",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "5px 5px 0 0",
    boxShadow: "5px 5px 15px rgba(102, 102, 102, 0.3)"
  },
  paper1: {
    display: "flex",
    backgroundImage:
      "url(" +
      "https://s3-alpha-sig.figma.com/img/dc92/47b2/65a8af8c3de01c8d4c4e067c6b145460?Expires=1613952000&Signature=LL0zRh9A4ANyBIty6ylc2BMYqYtUVg7ahEHnhaixcnj-PXDyycm1sXWicTlCf1flCrWoYyysZAZmXHscXdaruDhcuUT9EF94zh4nkOkJPRMPngKLxpFbIU1D1L6ni7DrhAH~SXgyCw7mMkolE0fXzNEAWAixml-AJ19MoYFn6wFPGdxGX247n4zZ5MtXsQNUu~Cq4f3Pr55lbNwMoBfaE0MtQVwosXnyWG6Gg-izf~mUa3uuB2230PFC0uE~XdwbnPpYKOya3h93RAEjo9NlZcTR15iGF6rlR9LAENyOgkfAXM~kLOeUKYLyRHsHjOcVuDSdXBFD4uNuecRC0QTDRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
      ")",
    backgroundSize: "cover",
    width: "350px",
    height: "180px",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "5px 5px 0 0",
    boxShadow: "5px 5px 15px rgba(102, 102, 102, 0.3)"
  },
  paper2: {
    display: "flex",
    backgroundImage:
      "url(" +
      "https://s3-alpha-sig.figma.com/img/0a54/6b47/de8132a1d875e1147c7551cf5b5bf9c5?Expires=1613952000&Signature=UGiwBe2SN95OtqWj4nnl1LWlifR6xX3~jQbbD9N3RWnv~t8iCgSDjlBi6rjwX9NkiHudn0Hb11Sgy5Xhf4shwbIz04vFvO4O~ZnK94yzm3q-sSs79dWZSK390mCQ78Qm4OmZ5Bsm9wLewl8-EaEoQz0vD1pGyB4T4Y5a88f75VjsbUypxKHQKO-37kotoFmmHMQq4Y6ogLF6fV5iqU2uydz6bWXu98cnT5MmqscMRe2tLdcS3GGkpM~2gYbtaWKBDqgUb0qrMKLUZvExJHxIs8LRF~A9jy8G2JZAlKaJWRc-O2ieX5qUlbx-6s2qqcwOi-ycWVaaCiT4~dRqcUkm3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
      ")",
    backgroundSize: "cover",
    width: "350px",
    height: "180px",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "5px 5px 0 0",
    boxShadow: "5px 5px 15px rgba(102, 102, 102, 0.3)"
  },
  paper3: {
    display: "flex",
    backgroundImage:
      "url(" +
      "https://s3-alpha-sig.figma.com/img/5967/cc10/e6c31933d46a98fcd1726f6a0beba9de?Expires=1613952000&Signature=evQLMU6wMM75lbwZpGMxxfvKSWmkv5uTUf9IDBEHvW1DR58T3YlxElxzaZYawbNR0UqELzAd82eiuKKnjXXf1LQbz6~6l7F4nEJ1QhrBzAec10b2v~9kY6G8~liYaIwwDII8iCnKKcojCcJKDGgv8IARWOs7vMJqexnj3RDekQnGyz9TcbamAF-TYZrGWjaEVaifk4NqcVbU0OgPHMex5VXvDKKztC2~0Yx2mS1nu3EL6RaG-CCQXEDMeu3C6IWjUXqVmhzSUakXh1DOMlgPvScAU18HeFu~Ksw4g7e0wRQV4P4gH22eNsDSwZpe0KJOLfOMiYkJFaxa-OBHT-NHug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
      ")",
    backgroundSize: "cover",
    width: "350px",
    height: "180px",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "5px 5px 0 0",
    boxShadow: "5px 5px 15px rgba(102, 102, 102, 0.3)"
  }
}));

const bottomBarStyle = {
  position: "relative",
  background: "#E6ECEF",
  boxShadow: "5px 5px 15px rgba(102, 102, 102, 0.3)",
  textAlign: "center",
  width: "350px",
  height: "50px",

  border: "3px",
  borderRadius: "0 0 5px 5px"
};

const textStyle = {
  fontFamily: "Nunito",
  color: "#333333",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "18px",
  lineHeight: "250%",
  float: "left",
  marginLeft: "5%"
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={5}>
          <Grid item>
            <Paper className={classes.paper0} />
            <div style={bottomBarStyle}>
              <text style={textStyle}>My information</text>
            </div>
          </Grid>
          <Grid item>
            <Paper className={classes.paper1} />
            <div style={bottomBarStyle}>
              <text style={textStyle}>New Project</text>
            </div>
          </Grid>
          <Grid item>
            <Paper className={classes.paper2} />
            <div style={bottomBarStyle}>
              <text style={textStyle}>Past Projects</text>
            </div>
          </Grid>
          <Grid item>
            <Paper className={classes.paper3} />
            <div style={bottomBarStyle}>
              <text style={textStyle}>Projects In Progress</text>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

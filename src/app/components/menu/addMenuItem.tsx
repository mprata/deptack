import React from "react";
import { style } from "./style";
import imgPlaceholder from "../../../assets/img_placeholder.svg";
import createMenuImg from "../../../assets/createMenu.png";
import TextField from "@material-ui/core/TextField";
import { Grid, Image, Checkbox, Button } from "semantic-ui-react";
const AddMenuItem = () => {
  return (
    <div>
      <p style={style.header}>MENU</p>
      <p style={style.orderOnline}>Get orders online</p>
      <Grid style={style.addMenuDiv}>
        <Grid>
          <Grid.Row>
            <h3
              style={{
                marginLeft: "30px",
                marginTop: "20px",
                marginBottom: "0px",
              }}
            >
              Enter Category Name
            </h3>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Image
                src={imgPlaceholder}
                style={{ marginLeft: "10px", marginTop: "20px" }}
                circular
              />
            </Grid.Column>
            <Grid.Column>
              <div style={{ float: "left", marginTop: "10px" }}>
                <form>
                  <TextField
                    id="standard-basic"
                    label="Enter Item Name"
                    style={{ width: "150px" }}
                    color="secondary"
                  />

                  <Checkbox
                    label="Add a side item"
                    style={style.checkBoxStyle}
                  />
                </form>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={{ float: "right", marginTop: "10px" }}>
                <TextField
                  id="standard-basic"
                  label="Price(Kr.)"
                  style={{ width: "80px", marginLeft: "45%" }}
                  color="secondary"
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{ marginLeft: "30px", float: "left", marginTop: "30px" }}
              >
                <p style={{ color: "#2BC5B4" }}>+</p>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <Button style={style.publishButton}>Publish</Button>
          </Grid.Row>
        </Grid>
      </Grid>
    </div>
  );
};
export default AddMenuItem;

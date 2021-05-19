const express = require("express");
const app = express();
const es6Renderer = require("express-es6-template-engine");
const cookieParser = require("cookie-parser");
app.engine("html", es6Renderer);

app.set("views", "client");
app.set("view engine", "html");

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://usnlskfmstjjjuvfyemf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTE5NTg4NywiZXhwIjoxOTM2NzcxODg3fQ.KBdr052zu0Xzywsb1PmVuHJNLK6D_CycTx3IDrkN5-o"
);
app.use(
  session({
    secret: "abcdefg123456",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(express.static(path.join(__dirname, "/client")));

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/tours", (req, res) => {
  res.render("tours");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    locals: { feedback: "" },
  });
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const { data, error } = await supabase
    .from("Comments")
    .insert([{ name: name, email: email, message: message }]);
  res.render("contact", {
    locals: { feedback: "Your message has been sent!" },
  });
});

app.get("/cart", async (req, res) => {
  const deviceID = req.cookies.device;
  const { data, error } = await supabase
    .from("Cart")
    .select("id, tourName, quantity, unitPrice, total")
    .match({ deviceID: deviceID })
    .order("tourName", { ascending: true });
  console.log(data);
  res.render("cart", { locals: { tours: data } });
});

app.post("/tours", async (req, res) => {
  const { name, quantity, price } = req.body;
  const totalPrice = Number(req.body.quantity) * Number(req.body.price);
  const deviceID = req.cookies.device;
  const { data, error } = await supabase.from("Cart").insert([
    {
      tourName: name,
      quantity: quantity,
      deviceID: deviceID,
      unitPrice: price,
      total: totalPrice,
    },
  ]);
  res.render("tours");
});

app.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("Cart")
    .delete()
    .match({ id: id });
  res.redirect("/cart");
});

app.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  const newQuantity = req.body.quantity;
  console.log(newQuantity);
  console.log(id);
  const { data, error } = await supabase
    .from("Cart")
    .update({ quantity: newQuantity })
    .match({ id: id });
  res.redirect("/cart");
});

app.get("/trip-total", async (req, res) => {
  priceObj = { priceString: "" };
  const deviceID = req.cookies.device;
  const { data, error } = await supabase
    .from("Cart")
    .select(`total`)
    .match({ deviceID: deviceID });
  if (data) {
    for (object of data) {
      priceObj.priceString += `${object.total} `;
    }
    res.send(priceObj);
  } else {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});

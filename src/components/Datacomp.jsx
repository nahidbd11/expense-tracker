import { useEffect, useState } from "react";
import "../css/table.css";
import Typography from "@mui/material/Typography";
import { Button, InputBase, TextField } from "@mui/material";
const Datacomp = () => {
  const [data, setData] = useState([]);
  let [total, setTotal] = useState(0);
  const [showInput, setShowinput] = useState(false);
  const [showAddbtn, setShowAddbtn] = useState(true);
  const [budget, setBudget] = useState(0);
  const postBudget = (budget) => {
    (async function () {
      let res = await fetch("http://localhost:3001/total/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ budget }),
      });

      console.log(res);
    })();
  };
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3001/data");
        const res2 = await fetch("http://localhost:3001/total/1");
        let res2data = await res2.json();

        setBudget(+res2data.budget);

        const resData = await res.json();
        // console.log(resData);
        setData(resData);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return (
    <div style={{ marginTop: "5em" }}>
      {showAddbtn && (
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            setShowinput(true);
            setShowAddbtn(false);
          }}
        >
          Add your budget
        </Button>
      )}

      {showInput && (
        <div>
          <TextField type="text" onChange={(e) => setBudget(e.target.value)} />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setShowAddbtn(true);
              setShowinput(false);
              postBudget(budget);
            }}
            sx={{ ml: 2, mr: 1 }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setShowAddbtn(true);
              setShowinput(false);
            }}
          >
            cancel
          </Button>
        </div>
      )}
      <h3>total budget:{budget}</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            const { date, item, price, quantity, id } = d;
            total += +price;

            return (
              <tr key={id}>
                <td>{date}</td>
                <td>{item}</td>
                <td>{price}</td>
                <td>{quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>total expense:{total}$</h3>
      <Typography variant="subtitle1" color="error">
        total remaing balance :{budget - total} TK
      </Typography>
    </div>
  );
};

export default Datacomp;

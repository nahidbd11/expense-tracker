import { Button, Container, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Additem = () => {
	const [item, setItem] = useState("");
	const [qt, setQt] = useState("");
	const [price, setPrice] = useState(0);
	const [date, setDate] = useState("");
	const [pdata, setPdata] = useState();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		console.log(JSON.stringify(pdata));
		e.preventDefault();
		fetch("http://localhost:3001/data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ item, date, price, quantity: qt }),
		}).then((res) => {
			console.log(res);
			navigate("/");
		});
	};
	return (
		<div style={{ marginTop: "5em" }}>
			<Typography variant="h5" color="initial">
				<form
					style={{
						marginLeft: "2em",
						display: "flex",
					}}
					autoComplete="off"
					onSubmit={handleSubmit}
				>
					<Container
						sx={(theme) => ({
							width: "50%",
							[theme.breakpoints.down("sm")]: {
								width: "90%",
							},
						})}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									fullWidth
									variant="outlined"
									type="date"
									onChange={(e) =>
										setDate(
											e.target.value
										)
									}
									value={date}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="item name"
									variant="outlined"
									onChange={(e) =>
										setItem(
											e.target.value
										)
									}
									value={item}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="quantity"
									variant="outlined"
									onChange={(e) =>
										setQt(
											e.target.value
										)
									}
									value={qt}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									fullWidth
									label="price"
									variant="outlined"
									type="number"
									onChange={(e) =>
										setPrice(
											e.target.value
										)
									}
									value={price}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									variant="contained"
									fullWidth
									color="secondary"
									type="submit"
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Container>
				</form>
			</Typography>
		</div>
	);
};

export default Additem;

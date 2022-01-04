import {
	AppBar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	createTheme,
	ThemeProvider,
	Button,
	Slide,
	useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navlink.css";

const activeStyle = {
	backgroundColor: "black",
};

const linkStyle = {
	marginLeft: "2em",
	textDecoration: "none",
	color: "white",
	padding: "0.5em",
};
const pages = [
	{ name: "Home", path: "" },
	{ name: "Add item", path: "additem" },
	{ name: "About", path: "about" },
];
// const theme = createTheme({});
// const customTheme = createTheme(theme, {
// 	components: {
// 		MuiList: {
// 			styleOverrides: {
// 				root: {
// 					[theme.breakpoints.down("sm")]: {
// 						width: "800px",
// 						overflow: "visible",
// 					},
// 				},
// 			},
// 		},
// 	},
// });
const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const handleOpenNavMenu = (e) => {
		setOpenMenu(true);
		console.log(e.currentTarget);
		setAnchorelnav(e.currentTarget);
	};

	const handleMenuclose = () => setOpenMenu(false);
	const trigger = useScrollTrigger({
		target: undefined,
	});
	const [anchorelnav, setAnchorelnav] = React.useState(null);
	return (
		<Slide direction="down" in={!trigger}>
			<AppBar postition="static" color="secondary">
				<Container>
					<Toolbar
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						{/* TODO:for small screen menu */}
						<Box
							sx={{
								flexGrow: 1,
								display: {
									xs: "flex",
									sm: "none",
								},
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								open={openMenu}
								anchorEl={anchorelnav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								sx={{
									display: {
										sm: "none",
										xs: "block",
									},
								}}
								onClose={handleMenuclose}
							>
								{pages.map((page) => (
									<MenuItem key={page.name}>
										<Link
											to={`/${page.path}`}
										>
											{page.name}
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>
						{/* TODO:logo */}
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{
								mr: 2,
							}}
						>
							ExpenseTracker
						</Typography>
						{/* TODO:Big screen menu */}
						<Box
							sx={{
								flexGrow: 1,
								display: {
									xs: "none",
									sm: "flex",
								},
								justifyContent: "flex-end",
							}}
						>
							{pages.map((page) => (
								<NavLink
									key={page.name}
									to={`/${page.path}`}
									style={({
										isActive,
									}) => ({
										...linkStyle,
										...(isActive
											? activeStyle
											: null),
									})}
									className="hover"
								>
									{page.name}
								</NavLink>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Slide>
	);
};

export default Navbar;

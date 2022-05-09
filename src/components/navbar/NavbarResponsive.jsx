import { NavLink } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const NavbarResponsive = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100">
                {/* <!-- Sidebar content here --> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Transformando con pazión
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItem button component={NavLink} to="/" >
                        <ListItemText primary="INICIO" />
                    </ListItem>
                    <ListItem button onClick={handleClick}>
                        <ListItemText primary="NOSOTROS" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={NavLink} to="nosotros/organizacion/" className={classes.nested}>
                                <ListItemText primary="Nuestra Organizacion" />
                            </ListItem>
                            <ListItem button component={NavLink} to="nosotros/equipo/" className={classes.nested}>
                                <ListItemText primary="Nuestro Equipo" />
                            </ListItem>
                            <ListItem button component={NavLink} to="nosotros/voluntario-y-donaciones/" className={classes.nested}>
                                <ListItemText primary="Voluntario y donacion" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClick1}>
                        <ListItemText primary="PROCESOS" />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={NavLink} to="procesos/todos/" className={classes.nested}>
                                <ListItemText primary="Nuestros Procesos" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/medellin-barrista/'" className={classes.nested}>
                                <ListItemText primary="Medellin Barrista" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/club-deportivo-tcp/" className={classes.nested}>
                                <ListItemText primary="Club deportivo TCP" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/es&su/" className={classes.nested}>
                                <ListItemText primary="ES&SU" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/jovemp/" className={classes.nested}>
                                <ListItemText primary="Jovemp" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/liga-guayabal/" className={classes.nested}>
                                <ListItemText primary="Liga Guayabal" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/torneo-barrial/" className={classes.nested}>
                                <ListItemText primary="Torneo Barrial" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/a.g.a/" className={classes.nested}>
                                <ListItemText primary="A.G.A" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/nataural-woman/" className={classes.nested}>
                                <ListItemText primary="Natural Woman" />
                            </ListItem>
                            <ListItem button component={NavLink} to="procesos/cronicas-y-pasion-deportiva/" className={classes.nested}>
                                <ListItemText primary="Cronicas y pasion deportiva" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button component={NavLink} to="contacto/">
                        <ListItemText primary="CONTACTO" />
                    </ListItem>
                </List>
            </ul>
        </div>
    )
}

export default NavbarResponsive
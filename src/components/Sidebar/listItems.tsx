import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  Warning,
  Dashboard,
  Book,
  Check,
  Favorite,
  ThumbUp,
  Notes,
  List,
  Receipt,
  Toc,
  Translate,
  Forward,
  VerticalAlignBottom,
  AttachFile,
} from "@material-ui/icons";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Capa" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Book />
      </ListItemIcon>
      <ListItemText primary="Folha de Rosto" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Warning />
      </ListItemIcon>
      <ListItemText primary="Errata" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Check />
      </ListItemIcon>
      <ListItemText primary="Folha de Aprovação" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Favorite />
      </ListItemIcon>
      <ListItemText primary="Dedicatória" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ThumbUp />
      </ListItemIcon>
      <ListItemText primary="Agradecimentos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Translate />
      </ListItemIcon>
      <ListItemText primary="Epigrafe" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Notes />
      </ListItemIcon>
      <ListItemText primary="Resumo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Notes />
      </ListItemIcon>
      <ListItemText primary="Abstract" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <List />
      </ListItemIcon>
      <ListItemText primary="Listas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Toc />
      </ListItemIcon>
      <ListItemText primary="Sumário" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Receipt />
      </ListItemIcon>
      <ListItemText primary="Corpo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Forward />
      </ListItemIcon>
      <ListItemText primary="Referências" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VerticalAlignBottom />
      </ListItemIcon>
      <ListItemText primary="Apêndices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachFile />
      </ListItemIcon>
      <ListItemText primary="Anexos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);

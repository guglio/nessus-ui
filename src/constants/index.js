export const THEME = {
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ae52d4',
      main: '#7b1fa2',
      dark: '#4a0072',
      contrastText: '#fff',
    }
  }
}


export const ORDER = {
  ASC: 'asc',
  DESC: 'desc'
};

export const TABLE_HEADER = [
  {
    'name': 'Node Name',
    'numeric': false,
    'value': 'name'
  },
  {
    'name': 'Hostname',
    'numeric': false,
    'value': 'hostname'
  },
  {
    'name': 'Username',
    'numeric': false,
    'value': 'username'
  },
  {
    'name': 'Port',
    'numeric': true,
    'value': 'port'
  }
];

export const NESSUS_NODES = {
  ERROR: "ERROR",
  LOADING: "LOADING",
  READY: "READY"
}

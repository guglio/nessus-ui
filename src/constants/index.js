export const THEME = {
  palette: {
    primary: {
      main: '#293845',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7b1fa2',
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
    'name': 'Name',
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

export const NESSUS_HOSTS = {
  ERROR: "ERROR",
  LOADING: "LOADING",
  READY: "READY"
}

export const ERROR = {
  404: 'The URL you were trying to reach could not be found on the server.',
  503: 'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.',
  DEFAULT: 'Unable to preceed with your request.'
}

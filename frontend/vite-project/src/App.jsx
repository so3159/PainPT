import './App.css'
import FormMain from './form-pages/FormMain.jsx';
import { Box } from '@mui/material';


function App() {
  return ( //simply render page - this will render the form currently but any perminant features will be rendered here
    <Box>
      <FormMain/>
    </Box>
  );
}

export default App

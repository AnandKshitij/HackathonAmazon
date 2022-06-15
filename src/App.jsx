import React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import Demo from './Demo.tsx';
import TrialFile from './TrialFile.jsx'

const App = () => {
    return (
        <div>
            <TrialFile />
            <Demo />
        </div>
    );
}

export default App;
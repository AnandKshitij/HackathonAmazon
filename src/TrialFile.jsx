import React, { Component } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="CustomerId"
            name="radio-buttons-group"
            id="radio-button-id"
            onChange={this.onChangeValue}
          >
            <Stack spacing={2} direction="row">
              <FormControlLabel value="CustomerId" control={<Radio />} label="CustomerId" />
              <FormControlLabel value="Email" control={<Radio />} label="Email" />
            </Stack>
          </RadioGroup>
          <TextField id="standard-basic" label="CustomerId/Email" variant="standard" />
          <Button type="submit" variant="outlined" startIcon={<SearchIcon />}>
              Search
          </Button>
        </FormControl>
      </div>
    );
  }
}

export default Demo1;
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';

type inputProps = {
  placeholder?: string;
  defaultValue?: string;
  changeFn?: (value: string) => void;
  type?: string;
};

const InputComponent: React.FC<inputProps> = ({
  placeholder,
  defaultValue,
  changeFn,
  type,
}) => {
  return (
    <>
      {type == undefined ? (
        <TextField
          style={{ width: '85%' }}
          multiline
          maxRows={4}
          placeholder={placeholder ?? placeholder}
          value={defaultValue ?? defaultValue}
          onChange={(event) => changeFn?.(event.target.value)}
          sx={{ div: { backgroundColor: 'white', autocomplete: 'off' } }}
          focused={false}
        />
      ) : (
        <TextField
          style={{ width: '100%' }}
          type={type}
          placeholder={placeholder ?? placeholder}
          value={defaultValue ?? defaultValue}
          onChange={(event) => changeFn?.(event.target.value)}
        />
      )}
    </>
  );
};

export default InputComponent;

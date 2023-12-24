import { YEARS } from '../../Utils/constants';
import Select from '../Select/Select';
import Option from '../Option/Option';

const Years = function ({ onSelect, classes }) {
  return (
    <>
      <label>Año</label>
      <Select
        id='year'
        onSelect={onSelect}
        tooltip='Seleccioná un año'
        classes={classes}
      >
        {YEARS.map(year => {
          return (
            <Option key={year} value={year}>
              {year}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

export default Years;

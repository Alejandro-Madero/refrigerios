import { MONTHS } from '../../Utils/constants';
import Select from '../Select/Select';
import Option from '../Option/Option';

const Months = function ({ onSelect, classes }) {
  return (
    <>
      <label>Mes</label>
      <Select
        id='months'
        onSelect={onSelect}
        tooltip='Seleccioná un mes'
        classes={classes}
      >
        {MONTHS.map(month => {
          return (
            <Option key={month} value={month}>
              {month}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

export default Months;

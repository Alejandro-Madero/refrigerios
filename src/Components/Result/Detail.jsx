import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { formatNumber } from '../../Utils/formatNumber';
import styles from './Detail.module.css';

const concepts = new Map([
  ['shifts', 'Refrigerio simple'],
  ['movility', 'Movilidad'],
  ['nights', 'Nocturnidad'],
  ['holiday', 'Feriados'],
  ['sundays', 'Domingos'],
]);

const Detail = ({ total, units, type, refrigerio, movility, emoji }) => {
  const { theme } = useContext(ThemeContext);
  const concept = concepts.get(type);
  const [formattedTotal] = formatNumber(total);

  return (
    <li className={styles['detail-title']}>
      <div>
        <span className={styles['title-emoji']}>{emoji}</span> {concept}:{' '}
        {formattedTotal}
      </div>
      <span className={styles['detail-description']}>
        {theme === 'dark' ? (
          <span className={styles['description-emoji']}>✅</span>
        ) : (
          <span className={styles['description-emoji']}>✅</span>
        )}{' '}
        ( {units} {units > 1 ? 'unidades ' : 'unidad'} x{' '}
        {concept === 'Movilidad' ? movility : refrigerio}
        {units > 1 ? ' c/u ' : ''} )
      </span>
    </li>
  );
};

export default Detail;

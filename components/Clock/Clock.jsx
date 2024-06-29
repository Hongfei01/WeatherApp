import { useEffect, useState } from 'react';
import { Txt } from '../Txt/Txt';

import { nowTime } from '../../utils/dateFormate';
import { styles } from './styles';

export function Clock() {
  const [time, setTime] = useState(nowTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowTime());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <Txt style={styles.txt}>{time}</Txt>;
}

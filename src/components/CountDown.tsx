import React, { useEffect, useState } from 'react';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import { RefetchValue } from '@/lib/constants';

import Spinner from './spinner';

const CountDown = () => {
  const [countDown, setCountdown] = useState(RefetchValue / 1000);

  const symbol = useSelector((state: RootState) => state.symbol.data);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          return RefetchValue / 1000
        }

        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCountdown(RefetchValue / 1000);
  }, [symbol]);

  return (
    <div className='flex gap-4 items-center text-xs'>
      <Spinner size="default" />
      <p className='text-center'>
        Refetching in {countDown}
      </p>
    </div>
  )
}

export default CountDown
import React from 'react';
import { useState } from 'react';
import { RxLapTimer } from 'react-icons/rx';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { FcTodoList } from 'react-icons/fc';

const Template = ({ children, todoLength }) => {
  const [timer, setTimer] = useState('00:00:00');

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    setTimer(`${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return (
    <div className='Template'>
      <div className='title'>
        <RiCalendarTodoFill className='title-i' /> 오늘 할일
        <span className='title-lingth'>({todoLength})</span>
      </div>

      <div className='time'>
        {' '}
        <RxLapTimer className='time-i'></RxLapTimer>
        {timer}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Template;

import style from './Clock.module.css'
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('Europe/Moscow');

  const timeZones = [
    'UTC',
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'America/Denver',
    'America/Phoenix',
    'America/Toronto',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Europe/Moscow',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Kolkata',
    'Australia/Sydney',
    'Australia/Melbourne',
    'Pacific/Auckland',
    'Africa/Cairo',
    'Africa/Johannesburg',
    'America/Sao_Paulo',
    'America/Argentina/Buenos_Aires'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTimeZoneChange = (event) => {
    setTimeZone(event.target.value);
  };

  const getTimeInTimeZone = (date, timeZone) => {
    const timeOptions = { 
        timeZone, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    }
    return date.toLocaleString('en-US', timeOptions);
  };

  return (
    <div className={style.wrapper}>
      <p>{getTimeInTimeZone(time, timeZone)}</p>
      {/* <p>{timeZone}</p> */}
    </div>
  );
};

export default Clock;
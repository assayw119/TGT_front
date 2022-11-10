import Calendar from 'react-calendar';
import '../static/css/calendar.css';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';
function Calendar_part(props) {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        onChange={onChange}
        locale="en"
        value={value}
        format={(locale, date) => date.toLocaleString('en')}
        formatMonthYear={(locale, date) =>
          date.toLocaleString('kr', {
            month: 'numeric',
            year: 'numeric',
          })
        }
        formatDay={(locale, date) =>
          date.toLocaleString('en', {
            day: 'numeric',
          })
        }
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
      />
      {/* ;{console.log(moment(value).format('YYYY년 MM월 DD일'))} */}
      {/* <div className="text-gray-500 mt-4">
{moment(value).format('YYYY년 MM월 DD일')}
</div> */}
    </div>
  );
}

export default Calendar_part;

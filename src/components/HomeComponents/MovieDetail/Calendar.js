import moment from 'moment';
import React from 'react'

export default function Calendar() {
    const getCurrentTimes = () => {
        const weekdays = [];
        let now = moment();
        let currentDay = now.startOf("isoWeek");
        for (let index = 0; index <= 6; index++) {
            weekdays.push(moment(currentDay).add(index, 'days').locale("vi").format("DD/MM")) // thêm thứ ngày tháng năm của tuần hiện tại , iso 8601
        }
        return weekdays.map((day, index) => {

            return <li className="mr-2 border-2 rounded-md p-2 hover:bg-white hover:text-black"><a href="#acb">
                <span>{index === 6 ? "Chủ nhật" : `Thứ ${index + 2}`}</span>
                <br />
                <span>
                    {day}
                </span>
            </a>

            </li>

        }

        )
    }

    return (
        <div>
            <h2 className="text-center">Lịch</h2>
            <ul className="flex text-center justify-center items-center">
                {getCurrentTimes()}

            </ul>
        </div>
    )
}

import React, { useState } from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker, DayOfWeek} from '@fluentui/react'; 
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { PrimaryButton } from 'office-ui-fabric-react';
import {v1 as uuid} from 'uuid';
import {useSelector} from 'react-redux';
  const DayPickerStrings = { 
    months: [ 
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ], 
  
    shortMonths: [ 
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ], 
  
    days: [ 
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ], 
  
    shortDays: [ 
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S'
    ], 
  
    goToToday: 'Go to today', 
    prevMonthAriaLabel: 'Go to previous month', 
    nextMonthAriaLabel: 'Go to next month', 
    prevYearAriaLabel: 'Go to previous year', 
    nextYearAriaLabel: 'Go to next year', 
  
    isRequiredErrorMessage: 'Start date is required.', 
    invalidInputErrorMessage: 'Invalid date format.',
    closeButtonAriaLabel: 'Close date picker',
    monthPickerHeaderAriaLabel: '{0}, select to change the year',
    yearPickerHeaderAriaLabel: '{0}, select to change the month',
  }; 
  
//   export interface IDatePickerBasicExampleState { 
//     firstDayOfWeek?: DayOfWeek; 
//     value?: Date; 
//   } 

const statusOptions = [
    {key:'ToDo', text:'ToDo'},
    {key:'Ongoing', text :'Ongoing'},
    {key:'Stalled', text :'Stalled'},
    {key:'Done', text :'Done'}
  ];

const AddTodo = ({history}) => {
    
    const [date, setDate]                     = useState(""),
          [firstDayOfWeek, setFirstDayOfWeek] = useState(DayOfWeek.Sunday),
          [status, setStatus]                 = useState(""),
          [title, setTitle]                   = useState(""),
          [desc, setDesc]                     = useState("");

    const handleClick = () =>{
        const todo = {
            id:uuid(),
            title,
            desc,
            dueDate:JSON.stringify(date).slice(1,11),
            status
        }
        window.localStorage.setItem("TodoInfo",JSON.stringify(todo))
        history.push("/confirm")
    }
    const {theme} = useSelector(state => ({...state}))
    return (
        <div className = {theme.mode?"container container-light":"container container-dark"}>
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12">
                        <TextField 
                        label = "Title" 
                        required  
                        className = "mx-c"
                        value = {title}
                        onChange = {(e) => {setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="ms-Grid-col ms-sm12">
                        <TextField 
                        label="Description" 
                        className = "mx-c" 
                        value = {desc}
                        onChange = {(e) => setDesc(e.target.value)}
                        multiline 
                        autoAdjustHeight 
                        required
                        />
                    </div>
                    <div className="ms-Grid-col ms-sm12">
                    <DatePicker
                            className="mx-c"
                            label = "Due Date"
                            firstDayOfWeek={firstDayOfWeek}
                            strings={DayPickerStrings}
                            placeholder="Select a date..."
                            ariaLabel="Select a date"
                            value = {date}
                            onSelectDate = {(d) => setDate(d)}
                        />
                    </div>
                    <div className="ms-Grid-col ms-sm12">
                    <Dropdown
                        label="Status"
                        selectedKey={status ? status.key : undefined}
                        onChange={(e,item) =>{setStatus(item)}}
                        placeholder="Select a Status"
                        options={statusOptions}
                        className = "mx-c"
                        value = {status}
                    />
                    </div>
                    <div className="ms-Grid-col ms-sm-12 btn-cont">
                        <PrimaryButton 
                        text = "Save" 
                        onClick = {handleClick} 
                        disabled = {title.length < 1 || desc.length <1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo

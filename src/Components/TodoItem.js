import React , { useState }from 'react'
import { Card } from  '@uifabric/react-cards';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Text, initializeIcons } from '@fluentui/react';
import { PrimaryButton } from 'office-ui-fabric-react';
import {useDispatch} from 'react-redux';
import { deleteTodo, updateTodo , addTodo} from '../redux/actions';
import { useHistory } from "react-router-dom"
const statusOptions = [
    {key:'ToDo', text:'ToDo'},
    {key:'Ongoing', text :'Ongoing'},
    {key:'Stalled', text :'Stalled'},
    {key:'Done', text :'Done'}
  ];

  const cardTokens = { childrenMargin: 12 };
const TodoItem = (props) => {
    const {id ,title , desc , due, stat, confirm} = props;
    const dispatch = useDispatch();
    const [status, setStatus] = useState(stat),
          [edit, setEdit] = useState(false);
    const history = useHistory();
    return (
        <Card aria-label="Clickable horizontal card " horizontal tokens={cardTokens}>
            <Card.Section>
                <Text >
                {title} . {due != `"`?due:"No due date specified"}
                </Text>
                <Text >{desc}</Text>
                {stat?<Dropdown
                        label="Status"
                        selectedKey={status ? status.key : undefined}
                        onChange={(e,item) =>{
                            setEdit(true);
                            setStatus(item)
                        }}
                        placeholder={status}
                        options={statusOptions}
                        value = {status}
                    />:<Text> Status Not specified</Text>}
                {confirm?<div>
                    <PrimaryButton 
                text = "Back"
                onClick = {() => {
                    history.push("/add");
                }}
                />
                <PrimaryButton 
                text = "Save"
                onClick = {() => {
                    dispatch(addTodo({id,name:title,desc,dueDate:due,status:stat}))
                    window.localStorage.removeItem("TodoInfo")
                    history.push("/");
                }}
                />
                </div>:<div><PrimaryButton 
                text = "Save"
                disabled = {!edit}
                onClick = {() => {
                    if(status.key === "Done"){
                        window.confirm("Mark as done? The card will be Deleted.")
                        dispatch(deleteTodo(id))
                    } else {
                        dispatch(updateTodo({id,status}))
                        setEdit(false)
                    }
                }}
                />
                <PrimaryButton 
                text = "Delete"
                className = "danger-btn"
                onClick = {() => dispatch(deleteTodo(id))}
                /></div>}
            </Card.Section>
            </Card>
    )
}

export default TodoItem

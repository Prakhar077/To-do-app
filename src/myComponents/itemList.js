/* import React from 'react'
import { Item } from './item';
import springboot from "../res/assets/springboot.png";
import django from "../res/assets/django.png";
export const ItemList = () => {
    return (
        <>
        <div>
            <Item img={springboot} todo="Learn Java" desc="Learn Spring Boot"/>
            <Item img={django} todo="Learn Python" desc="Learn Django"/>
        </div>
        </>
    );
} */
import {React, useState} from 'react'
import { Item } from './item';
import springboot from "../res/assets/springboot.png";
import django from "../res/assets/django.png";
export const ItemList = () => {
    const [todos, setTodos] = useState([
    {
        index: 0,
        img: springboot,
        todo: "Learn Java",
        desc: "Learn Spring Boot",
    },
    {
        index: 1,
        img: django,
        todo: "Learn Python",
        desc: "Learn Django",
    },
    {
        index: 2,
        img: django,
        todo: "Learn Python",
        desc: "Learn Django",
    },]);
    const onDelete = (index) => {
        console.log(index); // 0
       
        setTodos(todos.filter((t) => {
            return t.index!=index;
        }));
    }
   
    return (
        <>
        <div className="container">
            {todos.map((todo) => {
                return <Item todo={todo} onDelete={() => onDelete(todo.index)}/>
            })}
        </div>
        </>
    );
}
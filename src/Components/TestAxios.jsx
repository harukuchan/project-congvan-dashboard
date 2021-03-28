import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `/form.php`
})
export default class TestAxios extends React.Component
{
    constructor(props)
    {
        super(props);
        api.get("http://127.0.0.1:8000/api/abc").then(res =>console.log(res.data))
    }
    render()
    {
        return "Hello";
        
    }
}
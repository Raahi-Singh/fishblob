"use client"
import { Varta } from 'next/font/google';
import React, { useState, useEffect } from 'react';


export default function Spider(){
    const [days, setDays] = useState(null)
    useEffect(() => {
        var date: any = new Date();
        date = date.getDate();
        console.log(date);
        setDays(date);
    });

    return (
        <>
        There are {days} until BTSV
        </>
    )
}
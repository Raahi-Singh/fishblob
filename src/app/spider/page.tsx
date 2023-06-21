"use client"
import { Varta } from 'next/font/google';
import React, { useState, useEffect } from 'react';


export default function Spider() {
    const [days, setDays] = useState(null)
    useEffect(() => {
        let today = new Date();
        var btsv = new Date(today.getFullYear(), 3, 29);
        if (today.getMonth() == 11 && today.getDate() > 25) {
            btsv.setFullYear(cmas.getFullYear() + 1);
        }
        var one_day = 1000 * 60 * 60 * 24;
        let days = Math.ceil((cmas.getTime() - today.getTime()) / (one_day))
    });

    return (
        <>
            There are {days} until BTSV
        </>
    )
}
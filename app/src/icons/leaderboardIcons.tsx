'use client'

import React from "react";

export type PropsType = React.SVGProps<SVGSVGElement>;

export function BronzeClass(props: PropsType) {
    return (
        <svg width="177" height="339" viewBox="0 0 177 339" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="19" y="151" width="138" height="166" fill="#C87030" stroke="black" stroke-width="2" />
            <path d="M7.69565 318H169.304L177 323.727V339H0V323.727L7.69565 318Z" fill="#C87030" />
            <path d="M64.6102 279H118L115.458 289L112.407 299H58L61.0508 289L64.6102 279Z" fill="#D9D9D9" />
            <circle cx="89" cy="75" r="75" fill="#D9D9D9" />
        </svg>

    )
}

export function SilverClass(props: PropsType) {
    return (
        <svg width="177" height="390" viewBox="0 0 177 390" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="20" y="151" width="138" height="211" fill="#A0AAB5" stroke="black" stroke-width="2" />
            <path d="M7.69565 363H169.304L177 370.364V390H0V370.364L7.69565 363Z" fill="#A0AAB5" />
            <path d="M65.6102 330H119L116.458 340L113.407 350H59L62.0508 340L65.6102 330Z" fill="#D9D9D9" />
            <circle cx="89" cy="75" r="75" fill="#D9D9D9" />
        </svg>


    )
}

export function GoldClass(props: PropsType) {
    return (
        <svg width="176" height="440" viewBox="0 0 176 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="19" y="151" width="138" height="255" fill="#DC9722" stroke="black" stroke-width="2" />
            <path d="M7.65217 407H168.348L176 416V440H0V416L7.65217 407Z" fill="#DC9722" />
            <path d="M64.6102 370H118L115.458 380L112.407 390H58L61.0508 380L64.6102 370Z" fill="#D9D9D9" />
            <circle cx="88" cy="75" r="75" fill="#D9D9D9" />
        </svg>


    )
}
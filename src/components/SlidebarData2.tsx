import React from "react";
import pref from './../assets/icons/sliders-h 1.png';
import feepric from './../assets/icons/badge-percent 1.png';
import audit from './../assets/icons/clipboard-list 1.png'

export const SidebarData2 = [
  {
    id: 19,
    title: "Preferences",
    path: "/Preferences",
    icon: <img src={pref} alt='Preferences' />,
    cName: "nav-text"
  },
  {
    id: 20,
    title: "Fees and Pricing",
    path: "/Fees and Pricing",
    icon: <img src={feepric} alt='Fees and Pricing' />,
    cName: "nav-text"
  },
  {
    id: 21,
    title: "Audit Logs",
    path: "/Audit Logs",
    icon: <img src={audit} alt='Audit Logs' />,
    cName: "nav-text"
  },
];

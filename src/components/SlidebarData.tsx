import React from "react";
import user from './../assets/icons/user-friends 1.png';
import guarantors from './../assets/icons/users 1.png'
import loans from './../assets/icons/sack 1.png';
import dm from './../assets/icons/handshake-regular 1.png';
import savings from './../assets/icons/piggy-bank 1.png'
import loanreq from './../assets/icons/Group 104.png';
import whitelist from './../assets/icons/user-check 1.png';
import karma from './../assets/icons/user-times 1.png';

export const SidebarData = [
  {
    id: 1,
    title: "Users",
    path: "/Home",
    icon: <img src={user} alt='Users' />,
    cName: "nav-text"
  },
  {
    id: 2,
    title: "Guarantors",
    path: "/Guarantors",
    icon: <img src={guarantors} alt='Guarantors' />,
    cName: "nav-text"
  },
  {
    id: 3,
    title: "Loans",
    path: "/Loans",
    icon: <img src={loans} alt='Loans' />,
    cName: "nav-text"
  },
  {
    id: 4,
    title: "Decision Models",
    path: "/Decision Models",
    icon:<img src={dm} alt='Decision Models' />,
    cName: "nav-text"
  },
  {
    id: 5,
    title: "Savings",
    path: "/Savings",
    icon: <img src={savings} alt='Savings' />,
    cName: "nav-text"
  },
  {
    id: 6,
    title: "Loan Requests",
    path: "/Loan Requests",
    icon: <img src={loanreq} alt='Loan Requests' />,
    cName: "nav-text"
  },
  {
    id: 7,
    title: "Whitelist",
    path: "/Whitelist",
    icon: <img src={whitelist} alt='Whitelist' />,
    cName: "nav-text"
  },
  {
    id: 8,
    title: "Karma",
    path: "/Karma",
    icon: <img src={karma} alt='Karma' />,
    cName: "nav-text"
  }
];

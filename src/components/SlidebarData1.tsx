import React from "react";
import breif from './../assets/briefcase.png';
import loanreq from './../assets/icons/Group 104.png';
import savprod from './../assets/icons/np_bank_148501_000000 1.png';
import feecharg from './../assets/icons/coins-solid 1.png';
import trans from './../assets/icons/icon.png';
import service from './../assets/icons/galaxy 1.png';
import servacct from './../assets/icons/user-cog 1.png';
import settle from './../assets/icons/scroll 1.png';
import report from './../assets/icons/chart-bar 2.png'

export const SidebarData1 = [
  {
    id: 10,
    title: "Organisation",
    path: "/Organisation",
    icon: <img src={breif} alt='Organisation' />,
    cName: "nav-text"
  },
  {
    id: 11,
    title: "Loan Products",
    path: "/Loan Products",
    icon: <img src={loanreq} alt='Loan Products' />,
    cName: "nav-text"
  },
  {
    id: 12,
    title: "Savings Products",
    path: "/Savings Products",
    icon: <img src={savprod} alt='Savings Products' />,
    cName: "nav-text"
  },
  {
    id: 13,
    title: "Fees and Charges",
    path: "/Fees and Charges",
    icon:<img src={feecharg} alt='Fees and Charges' />,
    cName: "nav-text"
  },
  {
    id: 14,
    title: "Transactions",
    path: "/Transactions",
    icon: <img src={trans} alt='Transactions' />,
    cName: "nav-text"
  },
  {
    id: 15,
    title: "Services",
    path: "/Services",
    icon: <img src={service} alt='Services' />,
    cName: "nav-text"
  },
  {
    id: 16,
    title: "Service Account",
    path: "/Service Account",
    icon: <img src={servacct} alt='Service Account' />,
    cName: "nav-text"
  },
  {
    id: 17,
    title: "Settlements",
    path: "/Settlements",
    icon: <img src={settle} alt='Settlements' />,
    cName: "nav-text"
  },
  {
    id: 18,
    title: "Reports",
    path: "/Reports",
    icon: <img src={report} alt='Reports' />,
    cName: "nav-text"
  }
];

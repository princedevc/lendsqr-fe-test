import React, { useState, useEffect } from "react";
import iconuser from './../assets/icon.png';
import iconactive from './../assets/icon (1).png';
import iconloan from './../assets/icon (3).png';
import iconsavings from './../assets/icon (2).png';
import dot from './../assets/ic-more-vert-18px.png';
import dot1 from './../assets/png.png';
import filter from './../assets/filter-results-button.png';
import filter1 from './../assets/filter-results-button - Copy.png';
import view from './../assets/np_view_1214519_000000 1.png';
import blacklist from './../assets/np_delete-friend_3248001_000000 1.png';
import activate from './../assets/np_user_2995993_000000 1.png';
import starfull from './../assets/star (2).png';
import star from './../assets/star (1).png';
import avatar from './../assets/avatar.png';
import back from './../assets/backarror.png';
// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users
// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id 

console.log(fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
.then((res) => res.json())
.then((data) => console.log(data)))

// const datium = async function loadIntoTable(url:string, table:any) {
//   const tableHead = table.querySelector("thead");
//   const tableBody = table.querySelector("tbody");
//   const response = await fetch(url);
//   const {orgName, userName , email, phoneNumber, createdAt, lastActiveDate } = await response.json();

//   tableHead.innerHTML = "<tr></tr>";
//   tableBody.innerHTML = "<td></td>";

//   for (const headerText of ) {
    
    
//   }

//   loadIntoTable("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", document.querySelector("table"))
// }



const Home : React.FC = () => {
 const [ tables, setTables ] = useState([]);
 const [userdetail, setUserdetails] = useState<any>(null);
  // eslint-disable-next-line
 const [loading, setLoading] = useState(false)
 // eslint-disable-next-line
 const [ errors, setErrors ] = useState({});
 const [currentPage, setCurrentPage] = useState(1);
 // eslint-disable-next-line
 const [itemsPerPage, setItemsPerPage] = useState(9);
 const [totalUsers, setTotalUsers] = useState(0);
 // eslint-disable-next-line
 const [totalActiveUsers, setTotalActiveUsers] = useState(0);
 const [totalLoanAmount,setTotalLoanAmount] = useState(0)
 const statuses = ["Active", "Inactive", "Blacklisted", "Pending"];
 const [color, setColor] = useState([]);
 const [opacity, setOpacity] = useState([]);
 const [filteredData, setFilteredData] = useState([]);

 useEffect(() => {
  // Assign colors based on statuses
  const colors:any = filteredData.map((tablex: Tabler) => {
    if (tablex.status === "Active") {
      return "#00ff000b";
    } else if (tablex.status === "Inactive") {
      return "#545f7d1a";
    } else if (tablex.status === "Blacklisted") {
      return "#e4033b19";
    }
    else if (tablex.status === "Pending") {
      return "#e9b3001a";
    }
     else {
      return "#000000";
    }
  });

  setColor(colors);
}, [filteredData]);

useEffect(() => {
  const opacit:any = filteredData.map((tablex: Tabler) => {
    if (tablex.status === "Active") {
      return "#39CD62";
    } else if (tablex.status === "Inactive") {
      return "#545F7D";
    } else if (tablex.status === "Blacklisted") {
      return "#E4033B";
    }
    else if (tablex.status === "Pending") {
      return "#E9B200";
    }
     else {
      return "#E9B200";
    }
  });

  setOpacity(opacit);
}, [filteredData]);
const [viewPage, setViewPage] = useState<string | null>(null);

const [filterValues, setFilterValues] = useState({
  organization: '',
  username: '',
  email: '',
  phoneNumber: '',
  dateJoined: '',
  status: '',
});
const [isFilterMenuVisible, setFilterMenuVisible] = useState(false);


useEffect(() => {
  const fetchata = async () => {

    try {
      const response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
      const data = await response.json();

      let totalLoanAmount = 0;

      const updatedTables = data.slice(0, 100).map((user:any) => {
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        if (user.accountBalance > 0) {
          totalLoanAmount++; // Add the account balance to the total loan amount
          return { ...user, category: 'user with loan', status: randomStatus  };
        } else {
          return { ...user, category: 'user',status: randomStatus  };
        }
      });

      setTables(updatedTables);      
      setFilteredData(updatedTables);
      setTotalUsers(data.length);
      setTotalLoanAmount(totalLoanAmount);
      // Calculate the total number of active users
      const activeUsers = data.filter((user:any) => user.isActive);
      setTotalActiveUsers(activeUsers.length);
      console.log(filteredData);
      console.log(tables)
    } catch (err:any) {
      setErrors(err);
    }
  };
// eslint-disable-next-line
  fetchata();
  // eslint-disable-next-line
}, [])


const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      if (currentPage === 1) {
        
      } else {
        setCurrentPage(currentPage - 1);
      }
    }
  };

interface Tabler {
  orgName: string| null;
  userName: string| null;
  email: string| null; 
  phoneNumber: string| null; 
  createdAt: string| null;
  lastActiveDate: string| null;
  id: number| null;
  status: any | null;
  buttonRef: any | null;
  menuRef: any | null;
  idstring: any | null;
  firstName: any | null;
  lastName: any | null;
}
const handleFilterInputChange = (event:any, field:any) => {
  const value = event.target.value;
  setFilterValues((prevFilterValues) => ({
    ...prevFilterValues,
    [field]: value,
  }));
};

const handleFilterButtonClick = () => {
  const filteredResults = tables.filter((tablex:Tabler) => {
    const organizationFilter = filterValues.organization.toLowerCase();
    const usernameFilter = filterValues.username.toLowerCase();
    const emailFilter = filterValues.email.toLowerCase();
    const phoneNumberFilter = filterValues.phoneNumber.toLowerCase();
    const dateJoinedFilter = filterValues.dateJoined.toLowerCase();
    const statusFilter = filterValues.status.toLowerCase();

    return (
      tablex.orgName?.toLowerCase().includes(organizationFilter) &&
      tablex.userName?.toLowerCase().includes(usernameFilter) &&
      tablex.email?.toLowerCase().includes(emailFilter) &&
      tablex.phoneNumber?.toLowerCase().includes(phoneNumberFilter) &&
      tablex.createdAt?.toLowerCase().includes(dateJoinedFilter) &&
      tablex.status.toLowerCase().includes(statusFilter)
    );
  });

  setFilteredData(filteredResults);
};

const handleFilterReset = () => {
  setFilterValues({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: "",
  });

  setFilteredData(tables);
};
 // eslint-disable-next-line
const handleFilterMenuToggle = () => {
  setFilterMenuVisible(!isFilterMenuVisible);
};
 // eslint-disable-next-line
const [isVisibile, setIsVisibile] = useState({
  id: "see"
})

const [isFree, setIsFree] = useState<string | null>(null);;

const unhide = (id:any) => {
  setIsFree((prevId) => (prevId === id ? 1 : id));

  const tablex:any = tables.find((table:any) => table.id === id);
  if (tablex) {
    const rect = tablex.buttonRef.getBoundingClientRect();
    const menu = tablex.menuRef;

    
    menu.style.top = `${rect.top + 20}px`;
    menu.style.left = `${rect.left - 130}px`;
  }
};


 // eslint-disable-next-line
const [isVisibile1, setIsVisibile1] = useState({
  id: "see"
})

let [isFree1, setIsFree1] = useState(false)

  const unhide1 = () => {
      setIsFree1(!isFree1);
  };

let [isFree2, setIsFree2] = useState(false)

const unhide2 = () => {
    setIsFree2(!isFree2);
};


useEffect(() => {
  // console.log(isFree)
}, [isVisibile, isVisibile1, isFree, isFree1, isFree2]);

// const tempo:any = "";

// let idstring:any = isFree



useEffect(() => {
  if (isFree === undefined || isFree === null) {
    return; // Skip the API request if isFree is undefined or null
  }

  try {
        setLoading(true)
        // const response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'+idstring)
         fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'+isFree)
        .then(response => response.json())
        .then(data => setUserdetails(data))
  
        .finally(() => {
          setLoading(false)
        })
       
      } catch (err:any) {
        setErrors(err);
      }
    }, [isFree]);
// href={`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${+ idstring}`} 



// const handleViewUserClick = (id) => {
//   // Perform the view user action here
// };

//end

const renderTableRows = () => {
  return currentItems.map((tablex: Tabler, index: number) => (
    <tr key={tablex.id}>
      <td>{tablex.orgName}</td>
      <td>{tablex.userName}</td>
      <td>{tablex.email}</td>
      <td>{tablex.phoneNumber}</td>
      <td>{tablex.createdAt}</td>
      <td style={{textAlign: "center" }} >
        <span style={{ backgroundColor: color[index], borderRadius:50, color: opacity[index]}}>{tablex.status}</span>
      </td>
      <td>
            <img
              src={dot}
              alt="select"
              className={`dot ${isFree === tablex.id ? "" : ""}`}
              onClick={() => unhide(tablex.id)}
              ref={(ref) => (tablex.buttonRef = ref)}
            />
            <span
              className="menu"
              ref={(ref) => (tablex.menuRef = ref)}
              style={{ display: isFree === tablex.id ? "flex" : "none", top: "-9999px", left: "-9999px" }}
            >
              <p onClick={unhide1} >
                <img src={view} alt="option" />
                View User
              </p>
              <p>
                <img src={blacklist} alt="option" />
                Blacklist User
              </p>
              <p>
                <img src={activate} alt="option" />
                Activate User
              </p>
            </span>
          </td>
    </tr>
  ));
};

useEffect(()=>{
  setViewPage("general")
},[])

function cl() {
  setViewPage('general');
}

function cl1() {
  setViewPage('loan');
}
function cl2() {
  setViewPage('Bank');
}
function cl3() {
  setViewPage('savings');
}
function cl4() {
  setViewPage('app');
}
function cl5() {
  setViewPage('document');
}


// function getRandomArbitrary(min:any, max:any) {
//   return Math.random() * (10 - 1) + 1;
// }

let status = "single"

let children = "None"
  

const General : React.FC = () => {
  return (
    <div className="generalhold">
    {userdetail? (
          <>
          <div>
          <div className="title">
            Personal Information
          </div>
          <div className="personalinfo">
            <div className="hold">
            <span>
              <p className="subject">full name</p>
              <p>{userdetail.profile.firstName} {userdetail.profile.lastName}</p>
            </span>
            <span>
              <p className="subject">marital status</p>
              <p>{status}</p>
            </span>
            </div>
           <div className="hold">
           <span>
              <p className="subject">Phone number</p>
              <p>{userdetail.profile.phoneNumber}</p>
            </span>
            <span>
              <p className="subject">Children</p>
              <p>{children}</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject">email address</p>
              <p>{userdetail.email}</p>
            </span>
            <span>
              <p className="subject">Address</p>
              <p>{userdetail.profile.address}</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject">bvn</p>
              <p>{userdetail.profile.bvn}</p>
            </span>
            <span>
              <p className="subject">Gender</p>
              <p>{userdetail.profile.gender}</p>
            </span>
          </div>
          </div>

          <div className="title">
            Education and Employment
          </div>
          <div className="personalinfo">
            <div className="hold">
            <span>
              <p className="subject">Level of education</p>
              <p>{userdetail.education.level}</p>
            </span>
            <span>
              <p className="subject">official email</p>
              <p>{userdetail.education.officeEmail}</p>
            </span>
            </div>
           <div className="hold">
           <span>
              <p className="subject">Enployment status</p>
              <p>{userdetail.education.employmentStatus}</p>
            </span>
            <span>
              <p className="subject">monthly income</p>
              <p><span>&#8358;</span>{userdetail.education.monthlyIncome[1] * 1000} - <span>&#8358;</span>{userdetail.education.monthlyIncome[0] * 1000}</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject">sector of emploment</p>
              <p>{userdetail.education.sector}</p>
            </span>
            <span>
              <p className="subject">loan repayment</p>
              <p>{parseInt(userdetail.education.loanRepayment) * 100}</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject">Duration of employment</p>
              <p>{userdetail.education.duration}</p>
            </span>
            <span>
              <p className="subject"></p>
              <p></p>
            </span>
          </div>
          </div>

          <div className="title">
            Socials
          </div>
          <div className="personalinfo">
            <div className="hold">
            <span>
              <p className="subject">twitter</p>
              <p>{userdetail.socials.twitter} {userdetail.profile.lastName}</p>
            </span>            
            </div>
           <div className="hold">
           <span>
              <p className="subject">facebook</p>
              <p>{userdetail.socials.facebook}</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject">instagram</p>
              <p>{userdetail.socials.instagram}</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject"></p>
              <p></p>
            </span>
            <span>
              <p className="subject"></p>
              <p></p>
            </span>
          </div>
          </div>

          <div className="title">
            Guarantor
          </div>
          <div className="personalinfo1">
            <div className="hold">
            <span>
              <p className="subject">Full name</p>
              <p>{userdetail.guarantor.firstName} {userdetail.guarantor.lastName}</p>
            </span>            
            </div>
           <div className="hold">
           <span>
              <p className="subject">phone number</p>
              <p>{userdetail.guarantor.phoneNumber}</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject">email address</p>
              <p>nan</p>
            </span>
           </div>
           <div className="hold">
           <span>
              <p className="subject">relationship</p>
              <p>nan</p>
            </span>
          </div>
          </div>

          </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}
const Document : React.FC = () => {
  return (
    <div>Document</div>
  )
}
const BankDetails : React.FC = () => {
  return (
    <div>Bank Details</div>
  )
}

const Loans : React.FC = () => {
  return (
    <div>Comming soon!!</div>
  )
}

const Savings : React.FC = () => {
  return (
    <div>Asavings</div>
  )
}

const Appandsettings : React.FC = () => {
  return (
    <div>Appandsettings</div>
  )
}


let inner;
  if (viewPage === 'general') {
    inner = <General/>;
  } else if (viewPage === 'loan') {
    inner = <Loans />;
  } 
  else if (viewPage === 'savings') {
    inner = <Savings />;
  } 
  else if (viewPage === 'Bank') {
    inner = <BankDetails />;
  } 
  else if (viewPage === 'app') {
    inner = <Appandsettings />;
  } 
  else if (viewPage === 'document') {
    inner = <Document />;
  } 
  else {
    inner = <General/>;
  }


  return (
    <div className="container">
      <h2 className="title">Users</h2>

      <div className="boxholder">
       <div className="responsivehold">
       <div className="box">
          <img src={iconuser} alt="imagine" className="boxicon"/>
          <p>USERS</p>
          <span className="total">{totalUsers}</span>
        </div>
        <div className="box">
        <img src={iconactive} alt="imagine" className="boxicon"/>
        <p>ACTIVE USERS</p>
          <span className="total">{totalUsers}</span>
        </div>
       </div>
       <div className="responsivehold">
        <div className="box">
        <img src={iconloan} alt="imagine" className="boxicon"/>
        <p>USERS WITH LOANS</p>
          <span className="total">{totalLoanAmount}</span>
        </div>
        <div className="box">
        <img src={iconsavings} alt="imagine" className="boxicon"/>
        <p>USERS WITH SAVINGS</p>        
        <span className="total">102,453</span>
        </div>
        </div>
      </div>

      <div className="tableback">
      <table className="table table-responsive" id="myTable">
        <thead>
          <tr>
          <th >
          <div className="filter-container">
            <td>Organization</td>
            <td><img src={isFree2 ? filter1 : filter} alt="filter" style={{ marginLeft: 10 }} onClick={unhide2} /></td>
            {isFree2 && (
              <span className="filter-menu">
                <span className="holder">
                <p>organization</p>
                <input
                  type="text"
                  value={filterValues.organization}
                  onChange={(e) => handleFilterInputChange(e, 'organization')}
                />
                <p>username</p>
                <input
                  type="text"
                  value={filterValues.username}
                  onChange={(e) => handleFilterInputChange(e, 'username')}
                />
                <p>email</p>
                <input
                  type="text"
                  value={filterValues.email}
                  onChange={(e) => handleFilterInputChange(e, 'email')}
                />

                <p>date</p>
                <input
                  type="text"
                  value={filterValues.dateJoined}
                  onChange={(e) => handleFilterInputChange(e, 'dateJoined')}
                />
                
                <p>phone Number</p>
                <input
                  type="text"
                  value={filterValues.phoneNumber}
                  onChange={(e) => handleFilterInputChange(e, 'phoneNumber')}
                />

                <p>status</p>
                <input 
                  type="text"
                  value={filterValues.status}
                  id="myInput"
                  onChange={(e) => handleFilterInputChange(e, 'status')}
                />
                </span>
                <span className="buttons">                  
                <button onClick={handleFilterReset} className="buttons1">Reset</button>
                <button onClick={handleFilterButtonClick} className="buttons2">Filter</button>
                </span>
              </span>
            )}
          </div>
          </th>
           <th><td>Username</td>            
           <td><img src={isFree2 ? filter1 : filter} alt="filter" style={{marginLeft: 10}} onClick={unhide2}/></td>
            </th>
           <th><td>Email</td>
            <td><img src={isFree2 ? filter1 : filter} alt="filter" style={{marginLeft: 10}} onClick={unhide2}/></td>
            </th>
           <th><td>Phone number</td>
            <td><img src={isFree2 ? filter1 : filter} alt="filter" style={{marginLeft: 10}} onClick={unhide2}/></td>
            </th>
           <th><td>Date Joined</td>
            <td><img src={isFree2 ? filter1 : filter} alt="filter" style={{marginLeft: 10}} onClick={unhide2}/></td>
            </th>
           <th><td>status</td>
            <td><img src={isFree2 ? filter1 : filter} alt="filter" style={{marginLeft: 10}} onClick={unhide2}/></td>
            </th>
          </tr>
        </thead>
        
        <tbody className="tbod">{renderTableRows()}</tbody>
        {/* <tbody>
          {currentItems.map((tablex: Tabler, index: number) => 
          <tr key={tablex.id}>
            <td>{tablex.orgName}</td>
            <td>{tablex.userName}</td>
            <td>{tablex.email}</td>
            <td>{tablex.phoneNumber}</td>
            <td>{tablex.createdAt}</td>  
            <td>
              <img
                src={dot}
                alt="select"
                className={`dot ${isFree === tablex.id ? "" : ""}`}
                onClick={() => unhide(tablex.id)}
                ref={(ref) => (tablex.buttonRef = ref)}
              />
              <span
                className="menu"
                ref={(ref) => (tablex.menuRef = ref)}
                style={{ display: isFree === tablex.id ? "flex" : "none", top: "-9999px", left: "-9999px" }}
              >
                <p onClick={unhide1} >
                  <img src={view} alt="option" />
                  View User
                </p>
                <p>
                  <img src={blacklist} alt="option" />
                  Blacklist User
                </p>
                <p>
                  <img src={activate} alt="option" />
                  Activate User
                </p>
              </span>
            </td>
          </tr> 
          ) } 
             
        </tbody> */}
      </table>
      </div>
      <div className="UserDetailView"
      style={{ display: isFree1 ? "" : "none",}}>
      <div className="scrollable-content">
      <div onClick={unhide1} className="backarrorhold"><img src={back} alt="hgg" className="backarror"/>Back to Users</div>
      <div className="titletray">        
      <h2 className="title">Users Details</h2>
      <div className="buttontray">
        <span className="black">blacklist user</span>
        <span className="active">activate user</span>
      </div>
      </div>
      <div>
        {userdetail? (
          <>
          <div className="firstpart">
            <div className="name">
              <div className="image">
                  <img src={avatar} alt="userimage" className="imagepic"/>
              </div>
              <div className="full">
                  <span className="fullname">{userdetail.profile.firstName} {userdetail.profile.lastName}</span>
                  <p>{userdetail.accountNumber}</p>
              </div>
              <div className="starT">
                <p>User’s Tier</p>
                <div className="starhold">
                <img src={starfull} className="star" alt="userimage"/>
                <img  src={star} className="star" alt="userimage"/>
                <img  src={star} className="star" alt="userimage"/>
                </div>
              </div>
              <div className="acct">
                <div className="bal"><span>&#8358;</span>{userdetail.accountBalance}</div>
                <div className="bvn">{userdetail.profile.bvn}/Providus Bank</div>
              </div>
            </div>
            <div className="bottomlink">
                <div className="bottomlink1" onClick={cl}
                style={{borderBottomColor: viewPage === "general" ? "#39CDCC" : "white", 
                color: viewPage === "general" ? "#39CDCC" : "", }}>General Details</div>
                <div className="bottomlink1" onClick={cl5}
                style={{borderBottomColor: viewPage === "document" ? "#39CDCC" : "white",
                color: viewPage === "document" ? "#39CDCC" : "" }}>Documents</div>
                <div className="bottomlink1" onClick={cl2}
                style={{borderBottomColor: viewPage === "Bank" ? "#39CDCC" : "white" ,
                color: viewPage === "Bank" ? "#39CDCC" : "" }}>Bank Details</div>
                <div className="bottomlink1" onClick={cl1}
                style={{borderBottomColor: viewPage === "loan" ? "#39CDCC" : "white" ,
                color: viewPage === "loan" ? "#39CDCC" : "" }}>Loans</div>
                <div className="bottomlink1" onClick={cl3}
                style={{borderBottomColor: viewPage === "savings" ? "#39CDCC" : "white" ,
                color: viewPage === "savings" ? "#39CDCC" : "" }}>Savings</div>
                <div className="bottomlink1" onClick={cl4}
                style={{borderBottomColor: viewPage === "app" ? "#39CDCC" : "white" ,
                color: viewPage === "app" ? "#39CDCC" : "" }}>App and System</div>
              </div>
            {/* <p></p>
            <p>{userdetail.phoneNumber}</p>
            <p>{userdetail.userName}</p>  */}
          </div>
          <div className="secondpart">     
              {inner}
          </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </div>
      </div>
      <div className="bottomdetail">        
          <div className="show">
          <p>Showing</p>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select><p>out of {totalUsers}</p>
          </div>      
          <div className="pagination">
            <svg
              className="btn btn--prev"
              height="35"
              viewBox="0 0 24 24"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
              onClick={prevPage}
            >
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
              <path d="M0-.5h24v24H0z" fill="none"></path>
            </svg>
            {Array.from({ length: Math.ceil(tables.length / itemsPerPage) }).map(
              (_, index) => {
                if (index > 3 && index < 10) {
                  if (index === 4) {
                    return (
                      <img
                        key="imagine"
                        src={dot1}
                        alt="imagine"
                        className="pagination__image"
                      />
                    );
                  }
                  return null;
                }
                return (
                  <button
                    key={index + 1}
                    className={`pagination__item ${
                      currentPage === index + 1 ? 'active' : ''
                    }`}
                    style={{
                      backgroundColor: currentPage === index + 1 ? '#e8e8e811' : 'transparent',
                      color: currentPage === index + 1 ? '#213F7D' : '#545F7D',
                      opacity: currentPage === index + 1 ? 1 : 0.3,
                    }}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                );
              }
            )}
            <svg
              className="btn btn--next"
              height="35"
              viewBox="0 0 24 24"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
              onClick={nextPage}
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              <path d="M0-.25h24v24H0z" fill="none" />
            </svg>
          </div>
      </div>
    </div>
  )
}

export default Home

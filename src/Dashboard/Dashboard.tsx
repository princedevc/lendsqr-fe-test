import React, {useState, useEffect} from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import logo from './../assets/Union.png';
import notify from './../assets/Vector.png';
import vector from './../assets/Vector (2).png';
import companyname from './../assets/lendsqr.png';
import user from './../assets/image 4.png';
import breifcase from './../assets/briefcase.png';
import down from './../assets/down.png';
import dash from './../assets/icons/home 1.png';
import {SidebarData} from './../components/SlidebarData';
import {SidebarData1} from './../components/SlidebarData1';
import {SidebarData2} from './../components/SlidebarData2';
import Home from './home';
import Unavailable from '../pages/Unavailable';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const Dashboard : React.FC = ()=> {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [selectedItem1, setSelectedItem1] = useState<number | null>(null);
  
    const handleSidebarItemClick = (item: string) => {
      setSelectedItem(item);
    };
    const handleSidebarItemClick1 = (item: number) => {
      setSelectedItem1(item);
    };

    const dashh = () => {
      setSelectedItem(null)
    }

    const inner = () => {
        if (selectedItem === "/Home" ) {
            return <Home/>
        }
        else  if (selectedItem === "/Guarantors" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Loans" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Decision Models" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Savings" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Loan Requests" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Whitelist" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Karma" ) {
          return <Unavailable/>
        }
        else if (selectedItem === "/Settlements" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Reports" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Service Account" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Services" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Transactions" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Fees and Charges" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Savings Products" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Loan Products" ) {
          return <Unavailable/>
        }        
        else  if (selectedItem === "/Organisation" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Preferences" ) {
          return <Unavailable/>
        }       
        else  if (selectedItem === "/Fees and Pricing" ) {
          return <Unavailable/>
        }
        else  if (selectedItem === "/Audit Logs" ) {
          return <Unavailable/>
        }
        else {
            return <Home/>
        }
    }

  return ( 
    <div className='container1'>
    <div className='holder' style={{position: 'relative'}}>
    <Navbar expand="lg" className='navigation' >
        <Navbar.Brand href="/" className='comp1'>
          <div className='comp'>
                <img src={logo} alt='logo' className='logo'/>
                <img src={companyname} alt='lendsqr' className='companyname'/>
          </div>
        </Navbar.Brand>
        <Navbar aria-controls="basic-navbar-nav"/>
        <Form className="form-center">
            <FormControl type="text" placeholder="Search for anything" className="search" />            
            <span className='button'><i className="fa fa-search"></i></span>
        </Form>
        <Navbar id="basic-navbar-nav" className='comp2'>
            <Nav className="tab">
            <Nav.Item><Nav.Link href="/" className='docs'>Docs</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/" className='bell1'><img src={notify} alt='notification' className='bell'/></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/" className='userboard'> 
            <span className='user'><img src={user} alt='user' className='userimg'/></span>
            <p>Adedeji</p>
            <span className='vectorhold'><img src={vector} alt='user' className='vector'/></span>
            </Nav.Link></Nav.Item>
        </Nav>
      </Navbar>
    </Navbar>
    </div>
    <div className="sidebar1">        
    <div className="sidebar">
    <div className="scrollable-content">     
        <Sidebar selectedItem={selectedItem} onItemClick={handleSidebarItemClick} selectedItem1={selectedItem1} onidClick={handleSidebarItemClick1} dashh={dashh}/>
        </div>
      </div>
      <div className="content"> 
      <div className="scrollable-content">        
        {inner()}
        </div>
      </div>
    </div>
    </div>    
  )
}

export default Dashboard


const Dashboardscreen: React.FC = () => {
  return (
    <div>
      Dashboard!!!
    </div>
  )
}


interface SidebarProps {
    selectedItem: string | null;
    selectedItem1: number | null;
    onItemClick: (item: string) => void;
    onidClick: (item: number) => void;
    dashh: any;
  }



const Sidebar: React.FC<SidebarProps> = ({ selectedItem,selectedItem1, onItemClick, onidClick, dashh}) => {
// eslint-disable-next-line 
  const [isVisibile, setIsVisibile] = useState({
    id: "see"
  })

  let [isFree, setIsFree] = useState(false)

    const unhide = () => {
        setIsFree(!isFree);
    };
   

  useEffect(() => {
    // console.log(isFree)
  }, [isVisibile, isFree]);

        return (
       <>  
              <div className='StyledSideNav'>
                <div className={`drawerhold ${isFree ? 'active' : 'inactive'}`}
                style={{ height: isFree ? '150px' : '30px'}} onClick={unhide}>
                  <div className={`drawerholder1 ${isFree ? 'active' : 'inactive'}`}
                  style={{ padding: isFree ? '0px' : '0px' }} 
                  >
                   <img src={breifcase} alt='imagine' className={`drawericon ${isFree ? 'active' : 'inactive'}`}                                 
                    style={{ color: isFree ? '#213F7D' : '' }}                                 
                    />
                    <span className={`drawer ${isFree ? 'active' : 'inactive'}`}                                 
                    style={{ color: isFree ? '#213F7D' : '#213F7D'}}
                    >Switch Organisation</span>
                    <img src={down} alt='' className={`drawericon ${isFree ? 'active' : 'inactive'}`}                                 
                    style={{ color: isFree ? '#213F7D' : '', marginLeft: isFree ? '5px' : '5px', marginTop: isFree ? '3px' : '3px' }}                                 
                    /></div>
                  <p className={`drawerIcon ${isFree ? 'active' : 'inactive'}`}
                style={{ display: isFree ? '' : 'none'}}>Empty</p>
                  </div>

                 
                          <div className='drawerholder1' style={{height: 50, backgroundColor: selectedItem === null ? "#39cdcd0f" : "",  
                          borderColor: selectedItem === null ? '#39CDCC': ''}} onClick={dashh}>
                              <img src={dash} alt='dash' className='drawericon'/>
                              <span className='drawer'>Dashboard</span>
                         </div>
                  
                  <div className='drawerholder2' style={{cursor:'default', color:'#545F7D', fontSize:'14px', fontWeight:500, marginTop:8}}>CUSTOMERS</div>
                  {SidebarData.map((item, index) => {


                      
                      const isSelected = selectedItem === item.path;
                      
                      return (
                      <>
                      <div className={`StyledSideNav ${isSelected ? 'active' : 'inactive'}`} key={item.id}>
                          <li className={item.cName} onClick={ () => onItemClick(item.path)}>
                          <div className={`drawerholder ${isSelected ? 'active' : 'inactive'}`}                                 
                              style={{ backgroundColor: isSelected ? '#39cdcd0f' : '' ,
                              borderColor: isSelected ? '#39CDCC': ''}} key={item.id}>
                              <span className={`drawericon ${isSelected ? 'active' : 'inactive'}`}                                 
                              style={{ opacity: isSelected ? 1 : '' }} key={item.id}                                    
                              >{item.icon}</span>
                              <span className={`drawer ${isSelected ? 'active' : 'inactive'}`}                                 
                              style={{ color: isSelected ? '#213F7D' : '' }} key={item.id}  
                              >{item.title}</span>
                          </div>
                          </li>
                      </div>
                      </>
                      );
                  })}

                <div className='drawerholder2' style={{cursor:'default', color:'#545F7D', fontSize:'14px',fontWeight:500,marginTop:10}}>BUSINESSES</div>
                  {SidebarData1.map((item, index) => {
                      
                      const isSelected = selectedItem === item.path;
                      
                      return (
                      <>
                      <div className={`StyledSideNav ${isSelected ? 'active' : 'inactive'}`} key={item.id}>
                          <li className={item.cName} onClick={ () => onItemClick(item.path)}>
                          <div className={`drawerholder ${isSelected ? 'active' : 'inactive'}`}                                 
                              style={{ backgroundColor: isSelected ? '#39cdcd0f' : '' ,
                              borderColor: isSelected ? '#39CDCC': ''}} key={item.id}>
                              <span className={`drawericon ${isSelected ? 'active' : 'inactive'}`}                                 
                              style={{ opacity: isSelected ? 1 : '' }} key={item.id}                                    
                              >{item.icon}</span>
                              <span className={`drawer ${isSelected ? 'active' : 'inactive'}`}                                 
                              style={{ color: isSelected ? '#213F7D' : '' }} key={item.id}  
                              >{item.title}</span>
                          </div>
                          </li>
                      </div>
                      </>
                      );
                  })}
                  <div className='drawerholder2' style={{cursor:'default', color:'#545F7D', fontSize:'14px',fontWeight:500,marginTop:10}}>SETTINGS</div>
                   {SidebarData2.map((item, index) => {


                                        
                  const isSelected = selectedItem === item.path;

                  return (
                  <>
                  <div className={`StyledSideNav ${isSelected ? 'active' : 'inactive'}`} key={item.id}>
                      <li className={item.cName} onClick={ () => onItemClick(item.path)}>
                      <div className={`drawerholder ${isSelected ? 'active' : 'inactive'}`}                                 
                          style={{ backgroundColor: isSelected ? '#39cdcd0f' : '' ,
                          borderColor: isSelected ? '#39CDCC': ''}} key={item.id}>
                          <span className={`drawericon ${isSelected ? 'active' : 'inactive'}`}                                 
                          style={{ opacity: isSelected ? 1 : '' }} key={item.id}                                    
                          >{item.icon}</span>
                          <span className={`drawer ${isSelected ? 'active' : 'inactive'}`}                                 
                          style={{ color: isSelected ? '#213F7D' : '' }} key={item.id}  
                          >{item.title}</span>
                      </div>
                      </li>
                  </div>
                  </>
                  );
                  })}
                  </div>
       </>
      );
    }
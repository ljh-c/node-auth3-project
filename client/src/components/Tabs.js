import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import UserForm from './UserForm';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('login');

  // const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });

  /* "handleSubmit" validates inputs before invoking "onSubmit" */
  return (
    <div className="nav-wrapper">
      <Nav tabs>
        <NavItem>
          <NavLink 
            className={activeTab === 'login' ? "active" : null}
            onClick={() => setActiveTab('login')}
          >
            Log In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'signup' ? "active" : null}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="login">
          <UserForm />
        </TabPane>
        <TabPane tabId="signup">
          Sign Up
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
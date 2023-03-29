
import Logo  from './../../images/Logo.svg';
import React from 'react';

const Header = () => {
    console.log(3)
    return (
        <div className='bg-slate-900 grid md:grid-cols-3 justify-between px-10 py-5'>

            <div className=""><img className='mx-auto'  src={Logo} alt="" /></div>

            <div></div>

            <div className="text-white grid grid-flow-col items-center">
                <a className='' href="/abc">Order</a>
                <a className='' href="/abc">Order Review</a>
                <a className='' href="/abc">Manage Inventory</a>
                <a className='' href="/abc">Login</a>
            </div>
        </div>
    );
};

export default Header;
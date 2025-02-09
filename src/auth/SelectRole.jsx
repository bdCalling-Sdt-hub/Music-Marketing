import React from 'react';

const SelectRole = () => {
    return (
        <form className='h-screen  items-center grid-cols-2 grid gap-5'>
            <div className='p-20 w-full'>
                <img className='w-20' src="/Common/musicBlackLogo.png" alt="" />
                <h2 className='text-5xl font-semibold my-5'>Signup As</h2>
                <label className='flex justify-between p-5 border border-[#eee] rounded-xl my-5' htmlFor="radio1">
                    <span>Influencer</span>
                    <input type="radio" name="radio" id="radio1" />
                </label>
                <label className='flex justify-between p-5 border border-[#eee] rounded-xl my-5' htmlFor="radio2">
                    <span>Brand</span>
                    <input type="radio" name="radio" id="radio2" />
                </label>
                <button className='bg-black text-white p-5 w-full rounded-xl'>Proceed</button>
            </div>
            <div className=''>
                <img className='w-full' src="/Auth/verify.png" alt="" />
            </div>
        </form>
    );
}

export default SelectRole;

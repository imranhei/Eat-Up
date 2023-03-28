import React from 'react';
import order from '../../Images/DeliveryProcess/order2.png'
import delivery from '../../Images/DeliveryProcess/delivery.jpg'
import location from '../../Images/DeliveryProcess/location.jpg'
import payment from '../../Images/DeliveryProcess/payment.jpg'

const DeliveryProcess = () => {
    const data = [
        {
            'img_id': order,
            'title': 'Make an Online Order',
            'des': 'Sit back at home and order your favorite fast food on our site.We will take care the rest'
        },
        {
            'img_id': payment,
            'title': 'Pay For The Food',
            'des': 'The whole process will take you only 20 minutes or less. Just wait and enjoy the meal'
        },
        {
            'img_id': location,
            'title': 'Enter Your Address',
            'des': 'Make Sure you enter your address correctly so our shipper can find you easily'
        },
        {
            'img_id': delivery,
            'title': 'Fast Delivery',
            'des': 'After receiving your order,the food will be served as fast as possible'
        }
    ]
    return (
        
        <div className='md:w-9/12 w-full m-auto p-8'>
            
            <h4 className='text-center text-sm sm:text-xl'>Our Process</h4>
            <h2 className='text-center text-xl sm:text-3xl text-bolder mb-6'>Friendly & Intuitive System</h2>
            <div className="flex gap-5 justify-center flex-wrap">
            {
                data.map((d, index) => (
                    <div className='text-center sm:w-60 sm:h-120 w-52 h-80'>
                        {index ? <div className='h-1/2 p-1'><img src={d.img_id} alt='' className='h-full w-full object-cover'></img></div> :
                        <div className='h-1/2 p-1'><img src={d.img_id} alt='' className='sm:h-72 sm:w-72 -mt-4 object-cover'></img></div>}
                        
                        <h5 className='text-sm uppercase sm:mt-8'>Step 0{index+1}</h5>
                        <h3 className='text-lg font-semibold sm:mt-1'>{d.title}</h3>
                        <p className='text-sm text-center sm:mt-8'>{d.des}</p>
                    </div>
                ))
            }
            </div>
        </div>

    );
};

export default DeliveryProcess;
import { Link } from "react-router-dom";


const Research = () => {
    return (

        <div>
            <h1 className='text-4xl mb-12 text-center'>Recommended Research Paper</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center md:px-40 px-20">
                <Link className="p-2 underline" target="_blank" to="https://www.hilarispublisher.com/open-access/nanotechnology-and-its-applications-in-medicine-2161-0444-1000247.pdf" >Social media</Link>
                <Link className="p-2 underline" target="_blank" to="https://www.hilarispublisher.com/open-access/nanotechnology-and-its-applications-in-medicine-2161-0444-1000247.pdf" >Climate change impacts</Link>
                <Link className="p-2 underline" target="_blank" to="https://www.hilarispublisher.com/open-access/nanotechnology-and-its-applications-in-medicine-2161-0444-1000247.pdf" >Mental health</Link>
                <Link className="p-2 underline" target="_blank" to="https://www.hilarispublisher.com/open-access/nanotechnology-and-its-applications-in-medicine-2161-0444-1000247.pdf" >Medicinal chemistry</Link>
                <Link className="p-2 underline" target="_blank" to="https://www.hilarispublisher.com/open-access/nanotechnology-and-its-applications-in-medicine-2161-0444-1000247.pdf" >Renewable energy sources</Link>
                <Link className="p-2 underline" target="_blank" to="https://www.hilarispublisher.com/open-access/nanotechnology-and-its-applications-in-medicine-2161-0444-1000247.pdf" >Psychology research paper topics</Link>
            </div> 
        </div>
    );
};

export default Research;
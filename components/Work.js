import { AiOutlineExport } from "react-icons/ai";
export function Work() {
  return (<div>
            <div className="text-center mt-10">
              <button className="bg-gray-200 text-black py-2 px-4 rounded-full mt-7">
                Work
              </button>
              <p className="text-gray-600 mt-3">
                Some of the noteworthy projects I have built:
              </p>
            </div>
            

            <div className='lg:flex shadow-md lg:w-[800px] lg:h-[300px] m-auto mt-5 bg-white rounded'>
                <div className='bg-gray-50 w-[400px]'>
                  <img src="Work.png" className="h-[250px] ml-9 mt-5 p-4"/>
                </div>
                
                <div className='order-1 relative w-[400px] p-5'>
                    <h1 className='font-bold'>Sr.Frontend Developer</h1>
                    <ul className='list-disc ml-5 text-gray-600 mt-2'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
            </div>
          </div>
  );
}

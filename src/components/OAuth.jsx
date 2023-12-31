import { FcGoogle } from 'react-icons/fc';
export default function OAuth() {
  return (
    <button className='flex justify-center items-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 rounded'>
      <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
       Continue with Google
    </button>
  );
}
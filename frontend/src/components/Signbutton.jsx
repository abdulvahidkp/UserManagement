import { FaSpinner } from 'react-icons/fa';

function Signbutton({text, loading}) {
  return (
    <button className="w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800 disabled:hover:bg-emerald-700" disabled={loading} type="submit">
      {loading ? <FaSpinner className="animate-spin mx-auto" /> : text}
    </button>
  );
}

export default Signbutton;

import { FcEmptyTrash } from 'react-icons/fc';
import { SiPinboard } from 'react-icons/si';

const Todo = () => {
  return (
    <>
      <div class="p-4 md:w-full">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6">
          <h1 className="text-center font-semibold text-2xl capitalize border-b pb-5">To do apps</h1>
          <div className="top">
            <div class="my-6 flex justify-between gap-5">
              <input
                type="text"
                name="text"
                placeholder="Add a new task"
                class="w-full rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
              />
              <button class="text-white bg-cyan-500 border-0 py-2 px-6  hover:bg-cyan-600 rounded text-lg">
                Add
              </button>
            </div>
          </div>
          <div class="">
            <h2 class="tracking-widest text-xs uppercase title-font font-medium text-gray-400 mb-1">completed</h2>
            <div className="task-list">
              <ul class="bg-white rounded-lg border border-gray-200 text-gray-900">
                <li class="px-6 py-2 w-full rounded-t-lg flex justify-between items-center">
                  <div className="inner-left">
                    <SiPinboard className="inline-block mr-2" />
                    <span className="text-xl">Task go here</span>
                  </div>
                  <button>
                    <FcEmptyTrash />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

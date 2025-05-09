import React from 'react'

const page = () => {
  return (
    <div className='lg:h-[500px]'>
      <div className="overflow-x-auto w-full h-full">
  <table className="min-w-full table-auto h-full overflow-y-auto border border-gray-300 rounded-lg divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Name</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Email Address</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Role</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Status</th>
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Action</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {/* <!-- Sample Rows --> */}
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-900">John Doe</td>
        <td className="px-4 py-3 text-sm text-gray-500">john@example.com</td>
        <td className="px-4 py-3 text-sm text-gray-500">Admin</td>
        <td className="px-4 py-3 text-sm text-green-600">Active</td>
        <td className="px-4">
            <div className="flex space-x-2 text-gray-600">
              {/* <!-- View Icon --> */}
              <button title="View">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              {/* <!-- Edit Icon --> */}
              <button title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </button>
              {/* <!-- Delete Icon --> */}
              <button title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-900">Jane Smith</td>
        <td className="px-4 py-3 text-sm text-gray-500">jane@example.com</td>
        <td className="px-4 py-3 text-sm text-gray-500">Editor</td>
        <td className="px-4 py-3 text-sm text-yellow-600">Pending</td>
        <td className="px-4">
            <div className="flex space-x-2 text-gray-600">
              {/* <!-- View Icon --> */}
              <button title="View">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              {/* <!-- Edit Icon --> */}
              <button title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </button>
              {/* <!-- Delete Icon --> */}
              <button title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-900">Mike Ross</td>
        <td className="px-4 py-3 text-sm text-gray-500">mike@example.com</td>
        <td className="px-4 py-3 text-sm text-gray-500">Viewer</td>
        <td className="px-4 py-3 text-sm text-red-600">Inactive</td>
        <td className="px-4">
            <div className="flex space-x-2 text-gray-600">
              {/* <!-- View Icon --> */}
              <button title="View">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              {/* <!-- Edit Icon --> */}
              <button title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </button>
              {/* <!-- Delete Icon --> */}
              <button title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-900">Sara Lee</td>
        <td className="px-4 py-3 text-sm text-gray-500">sara@example.com</td>
        <td className="px-4 py-3 text-sm text-gray-500">Admin</td>
        <td className="px-4 py-3 text-sm text-green-600">Active</td>
        <td className="px-4">
            <div className="flex space-x-2 text-gray-600">
              {/* <!-- View Icon --> */}
              <button title="View">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              {/* <!-- Edit Icon --> */}
              <button title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </button>
              {/* <!-- Delete Icon --> */}
              <button title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-900">Chris Evans</td>
        <td className="px-4 py-3 text-sm text-gray-500">chris@example.com</td>
        <td className="px-4 py-3 text-sm text-gray-500">Editor</td>
        <td className="px-4 py-3 text-sm text-green-600">Active</td>
        <td className="px-4">
            <div className="flex space-x-2 text-gray-600">
              {/* <!-- View Icon --> */}
              <button title="View">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              {/* <!-- Edit Icon --> */}
              <button title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </button>
              {/* <!-- Delete Icon --> */}
              <button title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-900">Emma Brown</td>
        <td className="px-4 py-3 text-sm text-gray-500">emma@example.com</td>
        <td className="px-4 py-3 text-sm text-gray-500">Viewer</td>
        <td className="px-4 py-3 text-sm text-red-600">Inactive</td>
        <td className="px-4">
            <div className="flex space-x-2 text-gray-600">
              {/* <!-- View Icon --> */}
              <button title="View">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              {/* <!-- Edit Icon --> */}
              <button title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </button>
              {/* <!-- Delete Icon --> */}
              <button title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-900">Luke Wilson</td>
        <td className="px-4 py-3 text-sm text-gray-500">luke@example.com</td>
        <td className="px-4 py-3 text-sm text-gray-500">Admin</td>
        <td className="px-4 py-3 text-sm text-green-600">Active</td>
        <td className="px-4">
            <div className="flex space-x-2 text-gray-600">
             
              <button title="View">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <button title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </button>
              <button title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </td>
      </tr>
    </tbody>
    <tfoot className="bg-gray-50">
      <tr>
        <td colSpan={5} className="px-4 py-3 text-center text-sm text-gray-500">
          Showing 1 to 7 of 7 entries
        </td>
      </tr>
    </tfoot>
  </table>
</div>

    </div>
  )
}

export default page

import { useReducer, useRef } from "react";

// Init state
const initState = {
  staff: {
    name: "",
    address: "",
    age: "",
  },
  staffs: [],
};

// Action
const SET_NAME = "set_name";
const SET_ADDR = "set_addr";
const SET_AGE = "set_add";
const ADD_STAFF = "add_staff";
const DEL_STAFF = "del_staff";

const setName = (payload: any) => {
  console.log(payload);
  return {
    type: SET_NAME,
    payload,
  };
};
const setAddr = (payload: any) => {
  return {
    type: SET_ADDR,
    payload,
  };
};
const setAge = (payload: any) => {
  return {
    type: SET_AGE,
    payload,
  };
};
const addStaff = (payload: any) => {
  return {
    type: ADD_STAFF,
    payload,
  };
};
const delStaff = (payload: any) => {
  return {
    type: DEL_STAFF,
    payload,
  };
};

// Reducer
const reducer = (state: any, action: any) => {
  // console.log(state);
  // console.log(action);
  let newState;
  switch (action.tpye) {
    case SET_NAME:
      newState = {
        ...state,
        staff: {
          ...state.staff,
          name: action.payload,
        },
      };
      break;
    // default:
    //   throw new Error("Invalid action");
  }
  console.log(newState);
  return newState;
};

function Staff() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { staff, staffs }: any = state;

  return (
    <div className="max-w-[1440px] grid grid-cols-12 gap-8">
      {/* Thêm mới nhân viên */}
      <div className="col-span-4 border  h-fit pb-6 mt-6 rounded-lg bg-gray-50 flex flex-col gap-4 shadow-xl">
        <h1 className="w-full text-2xl text-gray-600 h-20 flex items-center justify-center border-b border-gray-300">
          Quản lý nhân viên
        </h1>
        <div className="w-full h-full flex flex-col gap-4 px-4">
          <div className="w-full flex flex-col gap-2 border border-gray-300 rounded-lg pb-4">
            <div className="w-full h-14 border-b border-gray-300 flex items-center justify-center bg-gray-100">
              Thêm nhân viên
            </div>
            <div className="w-full flex flex-col px-4 gap-6">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="name">Tên nhân viên</label>
                <input
                  value={staff.name}
                  type="text"
                  id="name"
                  className="w-full border border-gray-400 h-10 rounded-lg px-4"
                  placeholder="Nhập họ và tên..."
                  onChange={(e) => dispatch(setName(e.target.value))}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  value={staff.address}
                  type="text"
                  id="address"
                  className="w-full border border-gray-400 h-10 rounded-lg px-4"
                  placeholder="Nhập địa chỉ..."
                  onChange={(e) => dispatch(setAddr(e.target.value))}
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="address">Năm sinh</label>
                <input
                  value={staff.age}
                  type="text"
                  id="address"
                  className="w-full border border-gray-400 h-10 rounded-lg px-4"
                  placeholder="Nhập năm sinh..."
                  onChange={(e) => dispatch(setAge(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-16 flex items-center justify-center">
          <button className="px-4 py-2 border border-blue-400 rounded-lg bg-blue-400 text-white hover:bg-blue-500">
            Thêm
          </button>
        </div>
      </div>

      {/* Danh sách nhân viên */}
      <div className="col-span-8 h-[500px] pb-6 mt-6 flex flex-col gap-4">
        <table className="w-full ">
          <thead className="w-full h-14 bg-gray-300">
            <tr>
              <th>Họ và tên</th>
              <th>Năm sinh</th>
              <th>Địa chỉ</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody className="w-full  bg-slate-50 text-center">
            <tr className="w-full h-14">
              <td>Nguyễn Minh Nhí</td>
              <td>1995</td>
              <td>Long an</td>
              <td>Xoá</td>
            </tr>
            <tr className="w-full h-14">
              <td>Nguyễn Minh Nhí</td>
              <td>1995</td>
              <td>Long an</td>
              <td>Xoá</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Staff;

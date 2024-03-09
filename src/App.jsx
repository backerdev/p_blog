import { useState } from "react";

function App() {
  const isLogged = false;
  const [isModal, setIsModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col divide-y-2">
      <nav className=" flex justify-center items-center h-10 px-4 py-6 shadow-md  ">
        <div className="max-w-[1140px] flex justify-end  w-full">
          {isLogged ? "Sign out" : "Sign in"}
        </div>
      </nav>
      <div className="w-full h-full flex flex-col justify-center px-4 py-6 relative z-0">
        {isLogged && (
          <span
            onClick={() => setIsModal((prev) => !prev)}
            className="cursor-pointer hover:rotate-180 transition-all mb-4 flex w-20 h-20 rounded-full bg-blue-600 shadow-lg items-center justify-center font-extrabold text-4xl text-blue-100"
          >
            +
          </span>
        )}

        {isModal && (
          <div className="w-full h-full   shadow-md px-2 py-6 absolute  z-10 inset-0 ">
            <div className="w-full max-h-svh z-20 backdrop-blur-sm  flex justify-center items-center ">
              <form className="z-30">
                <div className="flex flex-col px-2  gap-2 ">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="px-2 py-4 rounded-lg w-max outline-none "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col px-2  gap-2">
                  <label>Content</label>
                  <textarea
                    rows={6}
                    type="text"
                    placeholder="Content"
                    value={content}
                    className=" rounded-lg  shadow-2xl px-2 py-4 w-[550px] outline-none"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div
                  onClick={() => setIsModal((prev) => !prev)}
                  className="mt-5 cursor-pointer hover:rotate-180 transition-all mb-4 flex w-20 h-max rounded-full bg-red-600 shadow-lg items-center justify-center font-extrabold text-4xl text-blue-100"
                >
                  X
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4  justify-center items-center gap-4 max-w-[1140px] mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="shadow-lg rounded-lg max-w-[350px] h-max px-2 py-2 flex flex-col gap-2  items-end justify-between "
            >
              <span className="font-semibold text-2xl text-center w-full tracking-widest">
                Title
              </span>
              <span className="font-semibold underline flex justify-between items-end ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus voluptates saepe dolorum dolores cum incidunt!{" "}
              </span>
              <span className="cursor-pointer  ">...</span>
            </div>
          ))}
          {/* Post start */}
          <div className="shadow-lg rounded-lg max-w-[350px] h-[150px] px-2 py-2 flex flex-col gap-2  items-end justify-between ">
            <span className="font-semibold text-2xl text-center w-full tracking-widest">
              Title
            </span>
            <span className="font-semibold underline flex justify-between items-end ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus voluptates saepe dolorum dolores cum incidunt!{" "}
            </span>
            <span className="cursor-pointer  ">...</span>
          </div>
          {/* Post end  */}
        </div>
      </div>
    </div>
  );
}

export default App;

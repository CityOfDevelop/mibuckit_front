import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function Test() {
  const [values, setValues] = useState({
    testNm: "",
    testId: "",
    testPw: "",
  });

  const [id, setId] = useState();

  const [name, setName] = useState();

  const handleOnClick1 = () => {
    const url = "http://localhost:8080/test/get";
    axios
      .get(url, {
        params: {
          testId: id,
        },
      })
      .then((response) => {
        setName(response.data.testNm);
        console.log(response.data);
        console.log("");
      })
      .catch((error) => {
        console.log("실패");
      });
  };

  const handleOnClick2 = () => {
    const url = "http://localhost:8080/test/post";
    axios
      .post(url, JSON.stringify(values, null), {
        headers: { "Content-Type": `application/json` },
      })
      .then((response) => {
        console.log(response.data);
        console.log("");
      })
      .catch((error) => {
        console.log("실패");
      });
  };

  const handleOnClick3 = () => {
    const url = "http://localhost:8080/test/put";
    axios
      .put(url, JSON.stringify(values, null), {
        headers: { "Content-Type": `application/json` },
      })
      .then((response) => {
        console.log(response.data);
        console.log("");
      })
      .catch((error) => {
        console.log("실패");
      });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <h1>test page입니다</h1>
      <Link href={"/"}>돌아가기</Link>;
      <div>
        <input
          name="id"
          value={id}
          onChange={handleChange2}
          className="block w-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></input>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleOnClick1}
        >
          retrieveTest
        </button>
        <label id="handle1">{name}</label>
      </div>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleOnClick2}
        >
          insertTest
        </button>
        <label id="handle2">asdasd</label>
      </div>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleOnClick3}
        >
          updateTest
        </button>
        <label id="handle3">asdasd</label>
      </div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                ID
              </label>
              <div className="mt-2">
                <input
                  name="testId"
                  type="text"
                  value={values.testId}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  PW
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="testPw"
                  type="password"
                  value={values.testPw}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  name="testNm"
                  type="text"
                  value={values.testNm}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleOnClick2}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
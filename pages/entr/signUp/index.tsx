import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Test() {
  const [values, setValues] = useState({
    testNm: "",
    testId: "",
    testPw: "",
  });

  const [id, setId] = useState();

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
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
        <Link
          href="/"
          className="text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          MiBuckit
        </Link>
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
              회원가입 하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Test() {
  const [values, setValues] = useState({
    testId: "",
    testPw: "",
  });

  const [id, setId] = useState();

  const router = useRouter();

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

  // 테스트 로그인 아이디
  const findIdPwd = () => {
    alert("id: sjlee01 \npw: sjlee01");
  };

  // 테스트 로그인
  const testLogin = () => {
    console.log(values);
    if (values.testId == "ehoh01" && values.testPw === "ehoh01") {
      localStorage.clear();
      localStorage.setItem("ACCESS_TOKEN", "TEST_TOKEN");
      localStorage.setItem("NAME", "오나박이");
      router.push("/");
    } else if (values.testId == "sjlee01" && values.testPw === "sjlee01") {
      localStorage.clear();
      localStorage.setItem("ACCESS_TOKEN", "TEST_TOKEN");
      localStorage.setItem("NAME", "이나박김");
      router.push("/");
    } else if (values.testId == "admin" && values.testPw === "admin123") {
      localStorage.clear();
      localStorage.setItem("ACCESS_TOKEN", "TEST_TOKEN");
      localStorage.setItem("NAME", "관리자ID");
      router.push("/");
    } else {
      alert("틀렸습니다...? forgot버튼을 눌러보시길");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
        <Link
          href="/"
          className=" text-2xl font-bold leading-9 tracking-tight text-gray-900"
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
              <div className="text-sm">
                <button
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  onClick={findIdPwd}
                >
                  Forgot password?
                </button>
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
        </form>
        {/* 로그인 버튼 */}
        <div className="mt-5">
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={testLogin}
          >
            로그인 하기
          </button>
        </div>
        {/* </form> 테스트 끝나면 이거 해제해서 사용 */}
      </div>
    </div>
  );
}

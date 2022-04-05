import { renderHook, act } from "@testing-library/react-hooks";
import "jest-localstorage-mock";

import { AuthProvider, useAuthContext } from ".";

describe("useAuthContext", () => {
  let wrapper;
  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  });

  test("it retrieves the token from local storage", async () => {
    renderHook(() => useAuthContext(), { wrapper });
    expect(localStorage.getItem).toHaveBeenCalledWith("token");
  });

  test("that logout should clear localStorage", async () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    act(() => result.current.logout());
    expect(localStorage.clear).toHaveBeenCalled();
  });

  // describe("register", () => {
  //   test("if no error recieved from axios then login is called", async () => {
  //     let authContext;
  //     const testUser = {
  //       username: "tester",
  //       password: "testword"
  //     };
  //     const { result } = renderHook(() => useAuthContext(), {
  //       wrapper
  //     });
  //     jest.spyOn(axios, "post").mockResolvedValue({ data: {} });
  //     jest.spyOn(result.current, "login");
  //     act(async () => await result.current.register(testUser));
  //     expect(result.current.login).toHaveBeenCalled();
  //   });

  //   test("it should catch an error thrown by axios", async () => {
  //     let authContext;
  //     const testUser = {
  //       username: "tester",
  //       password: "testword"
  //     };
  //     const { result } = renderHook(() => (authContext = useAuthContext()), {
  //       wrapper
  //     });
  //     jest.spyOn(axios, "post").mockImplementation(() => {
  //       throw new Error("test error");
  //     });
  //     act(async () => await result.current.register(testUser));
  //     expect(authContext.register).toThrow("test error");
  //   });
  // });

  // describe("login", () => {
  //   test("if login successful it should set localStorage and setCurrentUser", async () => {});

  //   test("it should catch an error if token generation is unsuccessful", async () => {
  //     let authContext;
  //     const testUser = {
  //       username: "tester",
  //       password: "testword"
  //     };
  //     const { result } = renderHook(() => (authContext = useAuthContext()), {
  //       wrapper
  //     });
  //     act(() => result.current.login(testUser));
  //     expect(authContext.login).toThrow(/not authorised/i);
  //   });
  // });
});

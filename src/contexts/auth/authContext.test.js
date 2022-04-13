import { renderHook, act } from "@testing-library/react-hooks";
import "jest-localstorage-mock";

import axios from 'axios'

import { AuthProvider, useAuthContext } from ".";

describe("useAuthContext", () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  });

  afterAll(() => {
    jest.resetAllMocks()
  })

  test("it retrieves the token from local storage", async () => {
    renderHook(() => useAuthContext(), { wrapper });
    expect(localStorage.getItem).toHaveBeenCalledWith("token");
  });

  test("that logout should clear localStorage", async () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    act(() => result.current.logout());
    expect(localStorage.clear).toHaveBeenCalled();
  });

  describe("register", () => {
    test("if no error recieved from axios then login is called", async () => {
      let AuthContext;
      const { result } = renderHook(() => (AuthContext = useAuthContext()), { wrapper });
      jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.resolve({
        data: {
          err: false
        }
      }));
      jest.spyOn(AuthContext, "login").mockImplementationOnce(() => {})
      let response;
      await act(async () => {
        response = await result.current.register({username: "tester", password: "testword"})
      })
      expect(response).toBe("Registration successful")
    }, 7000);

    test("it catches error sent from unsuccessful registration", async () => {
      const { result } = renderHook(() => useAuthContext(), { wrapper });
      jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.resolve({
        data: {
          err: "Unsuccessful registration"
        }
      }));
      let response;
      await act(async () => {
        response = await result.current.register({username: "tester", password: "testword"})
      })
      expect(response).toBe("Unsuccessful registration")
    })

    test("it should catch an error thrown by axios", async () => {
      const { result } = renderHook(() => useAuthContext(), { wrapper });
      jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.reject(
        new Error("Unsuccessful registration")
      ));
      let response;
      await act(async () => {
        response = await result.current.register({username: "tester", email: "test@email.com", password: "testword"})
      })
      expect(response).toBe("Unsuccessful registration")
    });
  });

  describe("login", () => {
    test("if login is successful loginUser is called", async () => {
      const { result } = renderHook(() =>  useAuthContext(), { wrapper });
      jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.resolve({
        data: {
          success: true,
          token: "Bearer testtoken"
        }
      }));
      let response;
      await act(async () => {
        response = await result.current.login({username: "tester", password: "testword"})
      })
      expect(response).toBe("Login successful")
      expect(localStorage.setItem).toHaveBeenCalledWith("token", "Bearer testtoken")
    })

    test("it should catch an error if token generation is unsuccessful", async () => {
      const { result } = renderHook(() => useAuthContext(), { wrapper });
      jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.resolve({
        data: {
          success: false
        }
      }));
      let response;
      await act(async () => {
        response = await result.current.login({username: "tester", password: "testword"})
      })
      expect(response).toBe("Login not authorised")
    });

    test("it should catch an error thrown by axios", async () => {
      const { result } = renderHook(() => useAuthContext(), { wrapper });
      jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.reject(
        new Error("Login not authorised")
      ));
      let response;
      await act(async () => {
        response = await result.current.login({username: "tester", password: "testword"})
      })
      expect(response).toBe("Login not authorised")
    });

  });

  describe("getCurrentUser", () => {
    test("if there is a user logged in it returns the sub", async () => {
      const { result } = renderHook(() => useAuthContext(), { wrapper });
      jest.spyOn(localStorage, "getItem").mockReturnValueOnce("Bearer testtoken")
      let response;
      await act(async () => {
        response = result.current.getCurrentUser()
      })
      expect(response).toBe("test")
    })
  })
});

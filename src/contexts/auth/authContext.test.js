import { renderHook, act } from "@testing-library/react-hooks";
import "jest-localstorage-mock";

import axios from 'axios'
jest.mock('axios')

import { AuthProvider, useAuthContext } from ".";

describe("useAuthContext", () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  });

  afterEach(() => {
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
    xtest("if no error recieved from axios then login is called", async () => {
      const testUser = {
        username: "tester",
        password: "testword"
      };
      const { result } = renderHook(() => useAuthContext(), {
        wrapper
      });
      jest.spyOn(axios, "post").mockResolvedValue({ data: {} });
      jest.spyOn(result.current, "login");
      act(async () => {
        await axios.post.mockImplementationOnce(() => Promise.resolve({data: {}}))
        await result.current.register(testUser)
      });
      expect(result.current.login).toHaveBeenCalled();
    });

    xtest("it should catch an error thrown by axios", async () => {
      let authContext;
      const testUser = {
        username: "tester",
        password: "testword"
      };
      const { result } = renderHook(() => (authContext = useAuthContext()), {
        wrapper
      });
      jest.spyOn(axios, "post").mockImplementation(() => {
        throw new Error("test error");
      });
      await act(async () => await result.current.register(testUser));
      expect(authContext.register).toThrow("test error");
    });
  });

  describe("login", () => {
    test("if login is successful loginUser is called", async () => {
      let AuthContext;
      renderHook(() => (AuthContext = useAuthContext()), { wrapper });
      await act(async () => {
        await axios.post.mockImplementationOnce(() => Promise.resolve({
          data: {
            success: true,
            token: "Bearer testtoken"
          }
        }));
      })
      const response = await AuthContext.login({username: "tester", password: "testword"})
      expect(response).toBe("Login successful")
      expect(localStorage.setItem).toHaveBeenCalledWith("token", "Bearer testtoken")
    })

    xtest("it should catch an error if token generation is unsuccessful", async () => {
      let AuthContext;
      renderHook(() => (AuthContext = useAuthContext()), { wrapper });
      jest.spyOn(axios, "post").mockImplementation(() => Promise.resolve({
        data: {
          success: false
        }
      }));
      const response = await AuthContext.login({username: "tester", password: "testword"})
      expect(response).toBe("Login not authorised")
    });

    xtest("it should catch an error if token generation is unsuccessful", async () => {
      let AuthContext;
      renderHook(() => (AuthContext = useAuthContext()), { wrapper });
      jest.spyOn(axios, "post").mockImplementation(() => Promise.reject(
        new Error("Unauthorised")
      ));
      const response = await AuthContext.login({username: "tester", password: "testword"})
      expect(response).toBe("Unauthorised")
    });
  });
});

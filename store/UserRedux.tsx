import React, { createContext, useReducer, useContext, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Role = "user" | "customerService" | "dispatch" | "admin";

type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  token: string;
};

type State = {
  user: User | null;
  bvn: string | null;
  nin: string | null;
  documents: {
    idCard?: string;
    proofOfAddress?: string;
  };
};

type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "SET_BVN"; payload: string }
  | { type: "SET_NIN"; payload: string }
  | { type: "SET_DOCUMENTS"; payload: Partial<State["documents"]> }
  | { type: "RESET_COMPLIANCE" };

const initialState: State = {
  user: null,
  bvn: null,
  nin: null,
  documents: {},
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { user: null, bvn: null, nin: null, documents: {} };
    case "SET_BVN":
      return { ...state, bvn: action.payload };
    case "SET_NIN":
      return { ...state, nin: action.payload };
    case "SET_DOCUMENTS":
      return { ...state, documents: { ...state.documents, ...action.payload } };
    case "RESET_COMPLIANCE":
      return { ...state, bvn: null, nin: null, documents: {} };
    default:
      return state;
  }
}

const UserContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export const useUserStore = () => useContext(UserContext);

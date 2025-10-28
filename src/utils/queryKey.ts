import { composeRequestKey } from "./composeRequestKey";

export const getCarsQueryKey = () => composeRequestKey({ name: "cars" });

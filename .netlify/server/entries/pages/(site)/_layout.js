import { e as error } from "../../../chunks/index.js";
const load = async ({ url }) => {
  try {
    return {
      path: url.pathname
    };
  } catch (err) {
    throw error(500, err);
  }
};
export {
  load
};

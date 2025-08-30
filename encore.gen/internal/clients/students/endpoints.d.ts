import { CallOpts } from "encore.dev/api";

type Parameters<T> = T extends (...args: infer P) => unknown ? P : never;
type WithCallOpts<T extends (...args: any) => any> = (
  ...args: [...Parameters<T>, opts?: CallOpts]
) => ReturnType<T>;

import { getAnalytics as getAnalytics_handler } from "../../../../students\\analytics.js";
declare const getAnalytics: WithCallOpts<typeof getAnalytics_handler>;
export { getAnalytics };

import { getStudent as getStudent_handler } from "../../../../students\\get.js";
declare const getStudent: WithCallOpts<typeof getStudent_handler>;
export { getStudent };

import { listStudents as listStudents_handler } from "../../../../students\\list.js";
declare const listStudents: WithCallOpts<typeof listStudents_handler>;
export { listStudents };

import { seedSeventhSemData as seedSeventhSemData_handler } from "../../../../students\\seed.js";
declare const seedSeventhSemData: WithCallOpts<typeof seedSeventhSemData_handler>;
export { seedSeventhSemData };

import { seedFifthSemData as seedFifthSemData_handler } from "../../../../students\\seed.js";
declare const seedFifthSemData: WithCallOpts<typeof seedFifthSemData_handler>;
export { seedFifthSemData };



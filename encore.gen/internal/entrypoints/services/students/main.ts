import { registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";
import { Worker, isMainThread } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { availableParallelism } from "node:os";

import { getAnalytics as getAnalyticsImpl0 } from "../../../../../students\\analytics";
import { getStudent as getStudentImpl1 } from "../../../../../students\\get";
import { listStudents as listStudentsImpl2 } from "../../../../../students\\list";
import { seedSeventhSemData as seedSeventhSemDataImpl3 } from "../../../../../students\\seed";
import { seedFifthSemData as seedFifthSemDataImpl4 } from "../../../../../students\\seed";
import * as students_service from "../../../../../students\\encore.service";

const handlers: Handler[] = [
    {
        apiRoute: {
            service:           "students",
            name:              "getAnalytics",
            handler:           getAnalyticsImpl0,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
        middlewares: students_service.default.cfg.middlewares || [],
    },
    {
        apiRoute: {
            service:           "students",
            name:              "getStudent",
            handler:           getStudentImpl1,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
        middlewares: students_service.default.cfg.middlewares || [],
    },
    {
        apiRoute: {
            service:           "students",
            name:              "listStudents",
            handler:           listStudentsImpl2,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
        middlewares: students_service.default.cfg.middlewares || [],
    },
    {
        apiRoute: {
            service:           "students",
            name:              "seedSeventhSemData",
            handler:           seedSeventhSemDataImpl3,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
        middlewares: students_service.default.cfg.middlewares || [],
    },
    {
        apiRoute: {
            service:           "students",
            name:              "seedFifthSemData",
            handler:           seedFifthSemDataImpl4,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
        middlewares: students_service.default.cfg.middlewares || [],
    },
];

registerHandlers(handlers);

await run(import.meta.url);

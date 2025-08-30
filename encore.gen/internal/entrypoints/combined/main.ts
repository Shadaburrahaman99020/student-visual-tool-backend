import { registerGateways, registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";

import { getAnalytics as students_getAnalyticsImpl0 } from "../../../../students\\analytics";
import { getStudent as students_getStudentImpl1 } from "../../../../students\\get";
import { listStudents as students_listStudentsImpl2 } from "../../../../students\\list";
import { seedSeventhSemData as students_seedSeventhSemDataImpl3 } from "../../../../students\\seed";
import { seedFifthSemData as students_seedFifthSemDataImpl4 } from "../../../../students\\seed";
import * as students_service from "../../../../students\\encore.service";
import * as frontend_service from "../../../../frontend\\encore.service";

const gateways: any[] = [
];

const handlers: Handler[] = [
    {
        apiRoute: {
            service:           "students",
            name:              "getAnalytics",
            handler:           students_getAnalyticsImpl0,
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
            handler:           students_getStudentImpl1,
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
            handler:           students_listStudentsImpl2,
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
            handler:           students_seedSeventhSemDataImpl3,
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
            handler:           students_seedFifthSemDataImpl4,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
        middlewares: students_service.default.cfg.middlewares || [],
    },
];

registerGateways(gateways);
registerHandlers(handlers);

await run(import.meta.url);

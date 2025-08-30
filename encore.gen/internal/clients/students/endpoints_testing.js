import { apiCall, streamIn, streamOut, streamInOut } from "encore.dev/internal/codegen/api";
import { registerTestHandler } from "encore.dev/internal/codegen/appinit";

import * as students_service from "../../../../students\\encore.service";

export async function getAnalytics(params, opts) {
    const handler = (await import("../../../../students\\analytics")).getAnalytics;
    registerTestHandler({
        apiRoute: { service: "students", name: "getAnalytics", raw: false, handler, streamingRequest: false, streamingResponse: false },
        middlewares: students_service.default.cfg.middlewares || [],
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
    });

    return apiCall("students", "getAnalytics", params, opts);
}

export async function getStudent(params, opts) {
    const handler = (await import("../../../../students\\get")).getStudent;
    registerTestHandler({
        apiRoute: { service: "students", name: "getStudent", raw: false, handler, streamingRequest: false, streamingResponse: false },
        middlewares: students_service.default.cfg.middlewares || [],
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
    });

    return apiCall("students", "getStudent", params, opts);
}

export async function listStudents(params, opts) {
    const handler = (await import("../../../../students\\list")).listStudents;
    registerTestHandler({
        apiRoute: { service: "students", name: "listStudents", raw: false, handler, streamingRequest: false, streamingResponse: false },
        middlewares: students_service.default.cfg.middlewares || [],
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
    });

    return apiCall("students", "listStudents", params, opts);
}

export async function seedSeventhSemData(params, opts) {
    const handler = (await import("../../../../students\\seed")).seedSeventhSemData;
    registerTestHandler({
        apiRoute: { service: "students", name: "seedSeventhSemData", raw: false, handler, streamingRequest: false, streamingResponse: false },
        middlewares: students_service.default.cfg.middlewares || [],
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
    });

    return apiCall("students", "seedSeventhSemData", params, opts);
}

export async function seedFifthSemData(params, opts) {
    const handler = (await import("../../../../students\\seed")).seedFifthSemData;
    registerTestHandler({
        apiRoute: { service: "students", name: "seedFifthSemData", raw: false, handler, streamingRequest: false, streamingResponse: false },
        middlewares: students_service.default.cfg.middlewares || [],
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false,"tags":[]},
    });

    return apiCall("students", "seedFifthSemData", params, opts);
}


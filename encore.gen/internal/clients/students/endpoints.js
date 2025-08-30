import { apiCall, streamIn, streamOut, streamInOut } from "encore.dev/internal/codegen/api";

const TEST_ENDPOINTS = typeof ENCORE_DROP_TESTS === "undefined" && process.env.NODE_ENV === "test"
    ? await import("./endpoints_testing.js")
    : null;

export async function getAnalytics(params, opts) {
    if (typeof ENCORE_DROP_TESTS === "undefined" && process.env.NODE_ENV === "test") {
        return TEST_ENDPOINTS.getAnalytics(params, opts);
    }

    return apiCall("students", "getAnalytics", params, opts);
}
export async function getStudent(params, opts) {
    if (typeof ENCORE_DROP_TESTS === "undefined" && process.env.NODE_ENV === "test") {
        return TEST_ENDPOINTS.getStudent(params, opts);
    }

    return apiCall("students", "getStudent", params, opts);
}
export async function listStudents(params, opts) {
    if (typeof ENCORE_DROP_TESTS === "undefined" && process.env.NODE_ENV === "test") {
        return TEST_ENDPOINTS.listStudents(params, opts);
    }

    return apiCall("students", "listStudents", params, opts);
}
export async function seedSeventhSemData(opts) {
    const params = undefined;
    if (typeof ENCORE_DROP_TESTS === "undefined" && process.env.NODE_ENV === "test") {
        return TEST_ENDPOINTS.seedSeventhSemData(params, opts);
    }

    return apiCall("students", "seedSeventhSemData", params, opts);
}
export async function seedFifthSemData(opts) {
    const params = undefined;
    if (typeof ENCORE_DROP_TESTS === "undefined" && process.env.NODE_ENV === "test") {
        return TEST_ENDPOINTS.seedFifthSemData(params, opts);
    }

    return apiCall("students", "seedFifthSemData", params, opts);
}

export const getKey = (val?: string | null | undefined): string | null | undefined => {
    return val === null || val === undefined ? val : val.trim().replace(/ /g, "_").toLowerCase();
}
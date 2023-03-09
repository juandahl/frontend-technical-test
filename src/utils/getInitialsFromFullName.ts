/**
 * Get all the first letter of each word all together from the param
 * @param fullName example: Foo Bar
 * @returns example: FB
 */
export const getInitialsFromFullName = (fullName: string) => fullName.split(" ").map((n)=>n[0]).join("");

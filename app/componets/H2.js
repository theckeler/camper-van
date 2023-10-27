"use client";
import { unCamelCase } from "./unCamelCase";

export function H2({ title }) {
	return <h2 className="text-md font-semibold p-3">{unCamelCase(title)}:</h2>;
}

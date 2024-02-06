import React from "react";

export type IStep = 'INFO' | 'PLAN' | 'ADDONS' | 'SUMMARY';
export type IStepContent = { element: React.ReactNode }
export type IStepRecord = Record<IStep, IStepContent>